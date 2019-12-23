export interface User {
  id: number;
  token: string;
  name: UserName;
  login: string;
  password: string;
}

export interface UserName {
  first: string;
  last: string;
}
export interface LoginData {
    login: string;
    password: string;
}
export class UserClass implements User {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public token: string,
      public login: string,
      public password: string,
      public name: UserName
    ) {}
  }
