import { Component, Input, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  @Input() listfeedbacks: any[];
  
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.getAllFeedbacks();
   }
 
   deleteUser(id:any){
     this.feedbackService.deleteFeedback(id);
     window.location.reload();
   }
 
   getAllFeedbacks(){
     this.feedbackService.getAllFeedbacks().subscribe((x) => (this.listfeedbacks = x));
   }
 }
