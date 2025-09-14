import { GraduationCap, Mail, Phone, MapPin, FileText, Users, BookOpen, Calendar, TrendingUp, MessageSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Logic Lift</h3>
                <p className="text-sm text-muted-foreground">National Curriculum Statement</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Comprehensive learning management system implementing the South African National Curriculum Statement Grades R-12 regulations and requirements.
            </p>
          </div>

          {/* Academic Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Academic Programs</h4>
            <nav className="space-y-2">
              <Link to="/foundation-phase" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Foundation Phase (R-3)
              </Link>
              <Link to="/intermediate-phase" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Intermediate Phase (4-6)
              </Link>
              <Link to="/senior-phase" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Senior Phase (7-9)
              </Link>
              <Link to="/further-education" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Further Education & Training (10-12)
              </Link>
              <Link to="/national-senior-certificate" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                National Senior Certificate
              </Link>
            </nav>
          </div>

          {/* Platform Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platform Features</h4>
            <nav className="space-y-2">
              <Link to="/courses" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <BookOpen className="w-4 h-4" />
                Course Management
              </Link>
              <Link to="/assessments" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <FileText className="w-4 h-4" />
                Assessment & Grading
              </Link>
              <Link to="/calendar" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Calendar className="w-4 h-4" />
                Academic Calendar
              </Link>
              <Link to="/analytics" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <TrendingUp className="w-4 h-4" />
                Performance Analytics
              </Link>
              <Link to="/communication" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
                Communication Tools
              </Link>
            </nav>
          </div>

          {/* Support & Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support & Resources</h4>
            <nav className="space-y-2">
              <Link to="/curriculum-statements" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Curriculum Policy Statements
              </Link>
              <Link to="/assessment-guidelines" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Assessment Guidelines
              </Link>
              <Link to="/help" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Training Resources
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Support
              </Link>
            </nav>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +27 11 717-1000
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                support@logiclift.edu.za
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Johannesburg, South Africa
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Logic Lift. Compliant with South African Schools Act, 1996 (Act No. 84 of 1996) & National Curriculum Statement Grades R-12.
            </div>
            <nav className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
              <Link to="/compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Regulatory Compliance
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}