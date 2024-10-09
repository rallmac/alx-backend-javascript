/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

namespace Subjects {
  export const cpp = new Cpp();

  export const java = new Java();

  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: 'Charles',
    lastName: 'Smith',
    experienceTeachingC: 10
  };
}

console.log("C++");
Subjects.cpp.setTeacher(Subjects.cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

console.log("Java");
Subjects.java.setTeacher(Subjects.cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

console.log("React");
Subjects.react.setTeacher(Subjects.cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
