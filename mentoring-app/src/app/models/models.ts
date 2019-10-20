  export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
  }

  export interface User {
    id: number;
    firstName: string;
    lastName: string;
  }

  export class CourseClass implements Course {
    constructor(
      public id: number,
      public title: string,
      public duration: number,
      public description: string,
      public creationDate: Date
    ) {}
  }

  export class UserClass implements User {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
    ) {}
  }
