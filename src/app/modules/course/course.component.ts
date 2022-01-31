import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseSend } from 'src/app/models/courseSend.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  isDisables = false;
  urlRoute:any;
  idCourse:any;
  @Input() courseform: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private courseService: CourseService
  ) { }

  ngOnInit() {

    this.activatedRoute.url.subscribe((url: UrlSegment[]) => 
      this.urlRoute = url[1].path
  );

  this.activatedRoute.params.subscribe((params: Params) => 
    this.idCourse = params['id']
  );

  if(this.urlRoute === 'view'){
    this.isDisables = true;
    this.getCourseById(this.idCourse);
  }else if(this.urlRoute === 'update'){
    this.isDisables = false;
    this.getCourseById(this.idCourse); 
  }else if(this.urlRoute === 'add'){
    this.isDisables = false;
    this.courseform = {
      course_id: null,
      cName: '',
      cDesp: '',
      cFees: '',
      cResource: '',
    }
  }
}

senform(): void {
   
  let courseSend : CourseSend ={
     cName: this.courseform.cName,
     cDesp: this.courseform.cDesp,
     cFees: this.courseform.cFees,
     cResource: this.courseform.cResource,
  } 

 if(this.urlRoute === 'update'){
   this.courseService.updateCourse(this.courseform.course_id,courseSend).subscribe();
   window.location.reload();
 }else if(this.urlRoute === 'add'){
   this.courseService.addCourse(courseSend);
   window.location.reload();
 }
}

getCourseById(id: any): void {
 this.courseService.getCourseById(id).subscribe((admin) => (this.courseform = admin));
}

onFileSelected(event) {
  if(event.target.files.length > 0) 
   {
     
     this.courseform.cResource = event.target.files[0].name
   }
 }

}
