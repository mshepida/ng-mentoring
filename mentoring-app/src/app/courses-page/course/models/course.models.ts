export interface CourseModel {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: Author[];
    isTopRated?: boolean;
  }

export interface Author {
    id: number;
    name: string;
    lastName: string;
}

export class CourseClass implements CourseModel {
    constructor(
        public id: number,
        public name: string,
        public length: number,
        public description: string,
        public date: string,
        public authors: Author[],
        public isTopRated?: boolean
    ) {}
  }
