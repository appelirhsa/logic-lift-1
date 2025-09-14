import { BookOpen, Calendar, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Enrolled Courses",
    value: "6",
    description: "Active this semester",
    icon: BookOpen,
    trend: "+2 from last semester",
  },
  {
    title: "Assignments Due",
    value: "4",
    description: "Next 7 days",
    icon: FileText,
    trend: "2 due this week",
  },
  {
    title: "Overall GPA",
    value: "3.7",
    description: "Current semester",
    icon: TrendingUp,
    trend: "+0.2 from last semester",
  },
  {
    title: "Upcoming Events",
    value: "3",
    description: "This week",
    icon: Calendar,
    trend: "2 exams, 1 project",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="shadow-card hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <p className="text-xs text-accent font-medium mt-1">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}