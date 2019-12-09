  export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
  }
  export interface LoginData {
    login: string;
    password: string;
  }
  export class User implements UserModel {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
    ) {}
  }
