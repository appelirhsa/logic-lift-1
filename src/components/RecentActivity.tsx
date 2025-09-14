import { FileText, MessageSquare, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "assignment",
    title: "Assignment 3 submitted",
    course: "Web Development",
    time: "2 hours ago",
    icon: FileText,
    status: "success",
  },
  {
    id: 2,
    type: "grade",
    title: "Grade released for Assignment 2",
    course: "Database Systems",
    time: "1 day ago",
    icon: TrendingUp,
    status: "info",
  },
  {
    id: 3,
    type: "announcement",
    title: "New announcement posted",
    course: "Computer Networks",
    time: "2 days ago",
    icon: MessageSquare,
    status: "default",
  },
  {
    id: 4,
    type: "deadline",
    title: "Assignment deadline reminder",
    course: "Software Engineering",
    time: "3 days ago",
    icon: Clock,
    status: "warning",
  },
];

export function RecentActivity() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest academic activities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <activity.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.course}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge 
                variant={
                  activity.status === "success" ? "default" :
                  activity.status === "info" ? "secondary" :
                  activity.status === "warning" ? "destructive" : "outline"
                }
                className="text-xs"
              >
                {activity.type}
              </Badge>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}