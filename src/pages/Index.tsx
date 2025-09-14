import { LMSLayout } from "@/components/LMSLayout";
import { DashboardStats } from "@/components/DashboardStats";
import { CourseGrid } from "@/components/CourseGrid";
import { RecentActivity } from "@/components/RecentActivity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Index = () => {
  return (
    <LMSLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your courses today.
          </p>
        </div>

        {/* Stats Overview */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <CourseGrid />
          </div>
          
          <div className="space-y-6">
            <RecentActivity />
            
            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
                <CardDescription>Don't miss these important dates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <div>
                    <p className="font-medium text-sm">Database Project</p>
                    <p className="text-xs text-muted-foreground">CSC3003S</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Tomorrow</p>
                    <p className="text-xs text-muted-foreground">11:59 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                  <div>
                    <p className="font-medium text-sm">ML Assignment 3</p>
                    <p className="text-xs text-muted-foreground">CSC4000W</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Friday</p>
                    <p className="text-xs text-muted-foreground">5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div>
                    <p className="font-medium text-sm">Midterm Exam</p>
                    <p className="text-xs text-muted-foreground">CSC3022F</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Next Week</p>
                    <p className="text-xs text-muted-foreground">Mon 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default Index;
