import { BookOpen, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    code: "CSC3002W",
    instructor: "Dr. Sarah Johnson",
    progress: 75,
    nextClass: "Today, 2:00 PM",
    students: 42,
    status: "In Progress",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Database Systems",
    code: "CSC3003S",
    instructor: "Prof. Michael Chen",
    progress: 60,
    nextClass: "Tomorrow, 10:00 AM",
    students: 38,
    status: "Active",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Computer Networks",
    code: "CSC3022F",
    instructor: "Dr. Emily Roberts",
    progress: 40,
    nextClass: "Wed, 9:00 AM",
    students: 35,
    status: "Active",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Software Engineering",
    code: "CSC3004Z",
    instructor: "Prof. David Wilson",
    progress: 85,
    nextClass: "Thu, 1:00 PM",
    students: 40,
    status: "Near Complete",
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Machine Learning",
    code: "CSC4000W",
    instructor: "Dr. Lisa Anderson",
    progress: 25,
    nextClass: "Fri, 11:00 AM",
    students: 28,
    status: "Starting",
    color: "bg-pink-500",
  },
  {
    id: 6,
    title: "Mobile App Development",
    code: "CSC3006S",
    instructor: "Prof. James Taylor",
    progress: 90,
    nextClass: "Next Mon, 3:00 PM",
    students: 32,
    status: "Almost Done",
    color: "bg-indigo-500",
  },
];

export function CourseGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Courses</h2>
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
                <div className={`w-3 h-3 rounded-full ${course.color}`} />
              </div>
              <p className="text-sm text-muted-foreground">{course.instructor}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.nextClass}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{course.students}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant={course.status === "Active" ? "default" : "secondary"}>
                  {course.status}
                </Badge>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Enter Course
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}