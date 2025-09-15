import { LMSLayout } from "@/components/LMSLayout";
import { HeroSection } from "@/components/HeroSection";
import { DashboardStats } from "@/components/DashboardStats";
import { CourseGrid } from "@/components/CourseGrid";
import { RecentActivity } from "@/components/RecentActivity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Index = () => {
  return (
    <LMSLayout>
      <div className="space-y-0">
        {/* Hero Section */}
        <div className="-m-6 mb-8">
          <HeroSection />
        </div>

        <div className="space-y-8 px-6">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Monitor your academic progress and upcoming activities.
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
                  <CardDescription>Important academic dates and submissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <div>
                      <p className="font-medium text-sm">Mathematics Portfolio</p>
                      <p className="text-xs text-muted-foreground">Grade 10 - Term 4</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Tomorrow</p>
                      <p className="text-xs text-muted-foreground">11:59 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                    <div>
                      <p className="font-medium text-sm">English Essay</p>
                      <p className="text-xs text-muted-foreground">Grade 11 - Literature</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Friday</p>
                      <p className="text-xs text-muted-foreground">3:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div>
                      <p className="font-medium text-sm">Physical Sciences Exam</p>
                      <p className="text-xs text-muted-foreground">Grade 12 - NSC</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Next Week</p>
                      <p className="text-xs text-muted-foreground">Mon 9:00 AM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default Index;
