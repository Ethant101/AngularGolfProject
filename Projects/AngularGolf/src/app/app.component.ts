import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularGolf';

  url: string = 'https://golf-courses-api.herokuapp.com/courses';
  // model: Array<Courses> = []
  model = {};

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      this.model = data;
    })
  }
}
