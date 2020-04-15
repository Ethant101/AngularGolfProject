import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursePageComponent } from './course-page/course-page.component';


const routes: Routes = [
  { path: "courseList", component: CourseListComponent},
  { path: "course/:id", component: CoursePageComponent},
  { path: "**", redirectTo: "/courseList" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
