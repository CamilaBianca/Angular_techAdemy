import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { CourseSend } from '../models/courseSend.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'http://localhost:8080/course';

  constructor(private httpClient: HttpClient) {
  }

  getAllCourse() {
    return this.httpClient.get<Course[]>(this.url);    
  }

  getCourseById(id: number) {
    return this.httpClient.get<Course>(this.url.concat('/'+id.toString()));    
  }

  updateCourse(id: number, user: CourseSend) {
    return this.httpClient.put<Course>(this.url.concat('/'+id), user);
  }

  deleteCourse(id: number) {
     this.httpClient.delete(this.url+'/'+id).subscribe(); 
  }

  addCourse(course: CourseSend) {
    console.log('addCourse');
    console.log(course);
    return this.httpClient.post<Course>(this.url, course).subscribe();    
  }

}
