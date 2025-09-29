import { LMSLayout } from "@/components/LMSLayout";
import { CourseGridDB } from "@/components/CourseGridDB";

const Courses = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-muted-foreground">
            Manage and access all your enrolled courses.
          </p>
        </div>
        <CourseGridDB />
      </div>
    </LMSLayout>
  );
};

export default Courses;