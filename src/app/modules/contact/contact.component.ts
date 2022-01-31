import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactSend } from 'src/app/models/contactSend.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isDisables = false;
  urlRoute:any;
  idContact:any;
  @Input() contactform: Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private contactService: ContactService
    ) { }

    ngOnInit() {   
      this.activatedRoute.url.subscribe((url: UrlSegment[]) => 
        this.urlRoute = url[1].path
      );
  
      this.activatedRoute.params.subscribe((params: Params) => 
        this.idContact = params['id']
      );
  
      if(this.urlRoute === 'view'){
        this.isDisables = true;
        this.getContactById(this.idContact);
        console.log(this.contactform);
      }else if(this.urlRoute === 'update'){
        this.isDisables = false;
        this.getContactById(this.idContact); 
        console.log(this.contactform);
      }else if(this.urlRoute === 'add'){
        this.isDisables = false;
        this.contactform = {
          contact_id: null,
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
          phoneNo: '',
          email: '',
          messege: '',
        }
      }
    }
    
    senform(): void {
       let contactSend : ContactSend ={
          user: this.contactform.user,
          name: this.contactform.name,
          phoneNo: this.contactform.phoneNo,
          email: this.contactform.email,
          messege: this.contactform.messege,
       } 
  
      console.log(this.contactform.user);
      console.log(contactSend);

      if(this.urlRoute === 'update'){
        this.contactService.updateContact(this.contactform.contact_id,contactSend).subscribe();
        window.location.reload();
      }else if(this.urlRoute === 'add'){
        this.contactService.addContact(contactSend);
        window.location.reload();
      }
    }
  
    getContactById(id: any): void {
      this.contactService.getContactById(id).subscribe((contact) => (this.contactform = contact));
    }

}
