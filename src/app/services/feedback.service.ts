import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { FeedbackSend } from '../models/feedbackSend.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private url = 'http://localhost:8080/feedback';

  constructor(private httpClient: HttpClient) {
  }

  getAllFeedbacks() {
    return this.httpClient.get<Feedback[]>(this.url);    
  }

  getFeedbackById(id: number) {
    return this.httpClient.get<Feedback>(this.url.concat('/'+id.toString()));      
  }

  updateFeedback(id: number, user: FeedbackSend) {
    console.log('updateUser');
    return this.httpClient.put<Feedback>(this.url.concat('/'+id), user);   
  }

  deleteFeedback(id: number) {
    console.log('deleteUser');
    this.httpClient.delete(this.url+'/'+id).subscribe(); 
  }

  addFeedback(user: FeedbackSend) {
    console.log('addUser');
    return this.httpClient.post<Feedback>(this.url, user).subscribe();;    
  }
}
