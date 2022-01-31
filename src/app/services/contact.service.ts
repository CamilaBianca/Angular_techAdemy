import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { ContactSend } from '../models/contactSend.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'http://localhost:8080/contact';

  constructor(private httpClient: HttpClient) {
  }

  getAllContact() {
    return this.httpClient.get<Contact[]>(this.url);    
  }

  getContactById(id: number) {
    return this.httpClient.get<Contact>(this.url.concat('/'+id.toString()));    
  }

  updateContact(id: number, contact: ContactSend) {
    return this.httpClient.put<Contact>(this.url.concat('/'+id), contact);
  }

  deleteContact(id: number) {
     this.httpClient.delete(this.url+'/'+id).subscribe(); 
  }

  addContact(contact: ContactSend) {
    console.log('addContact');
    console.log(contact);
    return this.httpClient.post<Contact>(this.url, contact).subscribe();    
  }
}
