import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackSend } from 'src/app/models/feedbackSend.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isDisables = false;
  urlRoute:any;
  idUser:any;
  @Input() feedbackform: Feedback;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService
    ) { }

  ngOnInit() {
    
    this.activatedRoute.url.subscribe((url: UrlSegment[]) => 
      this.urlRoute = url[1].path
    );

    this.activatedRoute.params.subscribe((params: Params) => 
      this.idUser = params['id']
    );

    if(this.urlRoute === 'view'){
      this.isDisables = true;
      this.getUserById(this.idUser);
    }else if(this.urlRoute === 'update'){
      this.isDisables = false;
      this.getUserById(this.idUser); 
    }else if(this.urlRoute === 'add'){
      this.isDisables = false;
      this.feedbackform = {
        f_id: null,
        user: {      
          user_id: null,
          name: '',
          phoneNo: '',
          email: '',
          address: '',
          reg_date: '',
          password: '',
          uploadPhoto: '',
        },
        name: '',
        email: '',
        feedback: '',
      }
    }
  }
  
  senform(): void {
   
     let feedbackSend : FeedbackSend ={
        user: this.feedbackform.user,
        name: this.feedbackform.name,
        email: this.feedbackform.email,
        feedback: this.feedbackform.feedback,
     } 

    if(this.urlRoute === 'update'){
      this.feedbackService.updateFeedback(this.feedbackform.f_id,feedbackSend).subscribe();
      window.location.reload();
    }else if(this.urlRoute === 'add'){
      this.feedbackService.addFeedback(feedbackSend);
      window.location.reload();
    }
  }

  getUserById(id: any): void {
    this.feedbackService.getFeedbackById(id).subscribe((feedback) => (this.feedbackform = feedback));
  }
}
