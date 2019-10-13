export interface Course {
    id: number,
    title: string,
    creation_date: string,
    duration: number,
    description: string
  }
  
 export interface User {
    id: number,
    first_name: string,
    last_name: string
  }

  class TestCourse implements Course {
    id: 1;
    title: "Course 1";
    duration: 32;
    description: 'test course'
    creation_date: '11 Sep 2016' 
  }
  
  class TestUser implements User {
    id: 1;
    first_name: 'Alan';
    last_name: 'Paul';
  }