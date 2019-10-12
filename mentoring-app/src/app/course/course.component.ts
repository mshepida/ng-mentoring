import { Component, OnInit } from '@angular/core';
import { Course, User } from '../models/models'

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

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
