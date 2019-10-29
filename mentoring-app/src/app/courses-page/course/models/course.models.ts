export interface CourseModel {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
  }

export class CourseClass implements CourseModel {
    constructor(
        public id: number,
        public title: string,
        public duration: number,
        public description: string,
        public creationDate: Date
    ) {}
  }
