import { useEffect, useState } from "react";
import { BookOpen, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  title: string;
  code: string;
  description: string;
  subject: string;
  grade_level: string;
  term: string;
  status: string;
  progress?: number;
}

export function CourseGridDB() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          enrollments!left(progress)
        `)
        .eq('status', 'active')
        .limit(6);

      if (error) {
        console.error('Error fetching courses:', error);
        toast({
          title: "Error loading courses",
          description: "Please try again later.",
          variant: "destructive",
        });
        return;
      }

      setCourses(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollInCourse = async (courseId: string) => {
    if (!user) return;

    try {
      // First get the user's profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!profile) {
        toast({
          title: "Profile not found",
          description: "Please complete your profile setup.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('enrollments')
        .insert({
          student_id: profile.id,
          course_id: courseId,
          progress: 0
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already enrolled",
            description: "You are already enrolled in this course.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Enrolled successfully",
        description: "You have been enrolled in the course.",
      });

      fetchCourses(); // Refresh the courses
    } catch (error) {
      console.error('Error enrolling:', error);
      toast({
        title: "Enrollment failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Available Courses</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-8 bg-muted rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Courses</h2>
        <Button variant="outline">View All Courses</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="font-medium">{course.code}</CardDescription>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  course.subject === 'Mathematics' ? 'bg-blue-500' :
                  course.subject === 'Physical Sciences' ? 'bg-green-500' :
                  course.subject === 'Life Sciences' ? 'bg-purple-500' :
                  course.subject === 'English' ? 'bg-orange-500' :
                  course.subject === 'History' ? 'bg-pink-500' :
                  'bg-indigo-500'
                }`} />
              </div>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{course.grade_level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.term}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="default">
                  {course.subject}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary"
                  onClick={() => handleEnrollInCourse(course.id)}
                >
                  <Users className="h-4 w-4 mr-1" />
                  Enroll
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}