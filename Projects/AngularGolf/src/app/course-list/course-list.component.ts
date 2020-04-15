import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  url: string = 'https://golf-courses-api.herokuapp.com/courses';
  // model: Array<Courses> = []
  model = {};
  constructor(private http: HttpClient ) {

  }

  ngOnInit(): void {
  this.http.get(this.url).toPromise().then(data => {
    this.model = data["courses"];
  })


  }

}
