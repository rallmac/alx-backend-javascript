namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    private teacher: Teacher | null = null; // Teacher can be null initially

    // Setter method to set the teacher
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
