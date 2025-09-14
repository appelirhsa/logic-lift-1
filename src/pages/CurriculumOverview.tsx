import { LMSLayout } from "@/components/LMSLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Users, Clock, GraduationCap, Award } from "lucide-react";

export default function CurriculumOverview() {
  const phases = [
    {
      title: "Foundation Phase",
      grades: "Grades R-3",
      duration: "4 years",
      description: "Building fundamental skills in literacy, numeracy, and life skills",
      subjects: [
        "Home Language",
        "First Additional Language",
        "Mathematics",
        "Life Skills (Beginning Knowledge, Creative Arts, Physical Education, Personal & Social Wellbeing)"
      ],
      icon: BookOpen,
      color: "bg-success"
    },
    {
      title: "Intermediate Phase",
      grades: "Grades 4-6",
      duration: "3 years",
      description: "Expanding knowledge and introducing specialized subjects",
      subjects: [
        "Home Language",
        "First Additional Language",
        "Mathematics",
        "Natural Sciences & Technology",
        "Social Sciences",
        "Life Skills",
        "Arts & Culture"
      ],
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "Senior Phase",
      grades: "Grades 7-9",
      duration: "3 years",
      description: "Preparing for Further Education and Training Phase",
      subjects: [
        "Home Language",
        "First Additional Language",
        "Mathematics",
        "Natural Sciences",
        "Social Sciences",
        "Technology",
        "Economic & Management Sciences",
        "Life Orientation",
        "Arts & Culture"
      ],
      icon: FileText,
      color: "bg-warning"
    },
    {
      title: "Further Education & Training",
      grades: "Grades 10-12",
      duration: "3 years",
      description: "Specialized subjects leading to National Senior Certificate",
      subjects: [
        "Home Language",
        "First Additional Language",
        "Mathematics/Mathematical Literacy",
        "Life Orientation",
        "Four additional subjects from various fields"
      ],
      icon: GraduationCap,
      color: "bg-accent"
    }
  ];

  const requirements = [
    {
      title: "Admission Requirements",
      description: "Grade 10 entrance requires official Grade 9 report or equivalent qualification",
      icon: FileText
    },
    {
      title: "Programme Duration",
      description: "Minimum 10 years for General Education (R-9), 3 years for FET Phase (10-12)",
      icon: Clock
    },
    {
      title: "Assessment Standards",
      description: "Formal and informal assessment tasks, school-based assessment, and external examinations",
      icon: Award
    },
    {
      title: "Promotion Requirements",
      description: "Learners must meet minimum achievement levels and comply with promotion requirements",
      icon: Users
    }
  ];

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">National Curriculum Statement</h1>
          <p className="text-muted-foreground">
            Comprehensive overview of the South African National Curriculum Statement Grades R-12, 
            as regulated by the Department of Basic Education under the South African Schools Act, 1996.
          </p>
        </div>

        {/* Key Requirements Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((requirement, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <requirement.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{requirement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{requirement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Phases */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Educational Phases</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center`}>
                          <phase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                          <CardDescription className="text-base font-medium">{phase.grades}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        <Clock className="w-3 h-3 mr-1" />
                        {phase.duration}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium">Required Subjects:</h4>
                    <div className="space-y-1">
                      {phase.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regulatory Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Regulatory Framework
            </CardTitle>
            <CardDescription>
              Legal foundation and compliance requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Legal Framework</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• South African Schools Act, 1996 (Act No. 84 of 1996)</li>
                  <li>• General and Further Education and Training Quality Assurance Act, 2001</li>
                  <li>• National Qualifications Framework Act, 2008 (Act No. 67 of 2008)</li>
                  <li>• Government Notice R. 1114, 28 December 2012</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Key Authorities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Department of Basic Education</li>
                  <li>• Provincial Education Departments</li>
                  <li>• Umalusi (Quality Assurance Council)</li>
                  <li>• South African Qualifications Authority (SAQA)</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                These regulations apply to all public schools and independent schools offering the 
                National Curriculum Statement Grades R-12, ensuring standardized education quality 
                and assessment across South Africa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </LMSLayout>
  );
}