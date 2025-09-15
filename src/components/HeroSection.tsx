import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Calendar, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold">Logic Lift</h1>
                  <p className="text-lg text-white/90">National Curriculum Statement</p>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
                Comprehensive Learning Management System for South African Education
              </h2>
              
              <p className="text-lg text-white/90 max-w-2xl">
                Implementing the South African National Curriculum Statement Grades R-12 regulations and requirements. 
                Empowering educators and learners with modern tools for academic excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/curriculum">View Curriculum</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">R-12</div>
                <div className="text-sm text-white/80">Grade Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-white/80">Learning Phases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">NCS Compliant</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Course Management</h3>
                  <p className="text-sm text-white/80">Structured curriculum delivery aligned with NCS requirements</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Collaborative Learning</h3>
                  <p className="text-sm text-white/80">Connect educators, learners, and parents in one platform</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Academic Calendar</h3>
                  <p className="text-sm text-white/80">Track terms, assessments, and key educational milestones</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Assessment & Grading</h3>
                  <p className="text-sm text-white/80">Comprehensive assessment tools following NCS guidelines</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-success/20 border-success/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Performance Analytics</h3>
                <p className="text-sm text-white/80">Data-driven insights to support academic achievement and progress tracking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}