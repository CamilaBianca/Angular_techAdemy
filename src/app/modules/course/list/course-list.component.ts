import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() listCourse: any[];

  constructor(
    private courseService: CourseService,
    ) {}

  ngOnInit() {
   this.getAllCourse();   
  }

  deleteCourse(id:any){
    console.log(id)
    this.courseService.deleteCourse(id);
    window.location.reload();
    
  }

  getAllCourse(){
    this.courseService.getAllCourse().subscribe((x) => (this.listCourse= x));
  }
}
