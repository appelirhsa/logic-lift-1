import { useEffect, useState } from "react";
import { FileText, MessageSquare, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface Activity {
  id: string;
  activity_type: string;
  title: string;
  description: string;
  created_at: string;
  course?: {
    title: string;
  };
}

export function RecentActivityDB() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchActivities();
    }
  }, [user]);

  const fetchActivities = async () => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', user?.id)
        .single();

      if (!profile) return;

      const { data, error } = await supabase
        .from('activities')
        .select(`
          *,
          courses(title)
        `)
        .eq('user_id', profile.id)
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) {
        console.error('Error fetching activities:', error);
        return;
      }

      setActivities(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'assignment_submitted':
        return FileText;
      case 'grade_released':
        return TrendingUp;
      case 'announcement':
        return MessageSquare;
      case 'deadline_reminder':
        return Clock;
      default:
        return FileText;
    }
  };

  const getActivityStatus = (type: string) => {
    switch (type) {
      case 'assignment_submitted':
        return 'success';
      case 'grade_released':
        return 'info';
      case 'announcement':
        return 'default';
      case 'deadline_reminder':
        return 'warning';
      default:
        return 'default';
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest academic activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg animate-pulse">
              <div className="w-10 h-10 bg-muted rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-muted rounded w-3/4"></div>
                <div className="h-2 bg-muted rounded w-1/2"></div>
              </div>
              <div className="w-16 h-6 bg-muted rounded"></div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest academic activities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            <p>No recent activities</p>
            <p className="text-xs">Start by enrolling in courses to see your activity feed</p>
          </div>
        ) : (
          activities.map((activity) => {
            const Icon = getActivityIcon(activity.activity_type);
            const status = getActivityStatus(activity.activity_type);
            
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.course?.title || 'General'}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge 
                    variant={
                      status === "success" ? "default" :
                      status === "info" ? "secondary" :
                      status === "warning" ? "destructive" : "outline"
                    }
                    className="text-xs"
                  >
                    {activity.activity_type.replace('_', ' ')}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    {formatTimeAgo(activity.created_at)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}