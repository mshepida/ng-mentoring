  export interface User {
    id: number;
    firstName: string;
    lastName: string;
  }

  export class UserClass implements User {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
    ) {}
  }
