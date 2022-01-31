import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() listContact: any[];

  constructor(
    private contatcService: ContactService,
    ) {}

  ngOnInit() {
   this.getAllContact();   
  }

  deleteContact(id:any){
    console.log(id)
    this.contatcService.deleteContact(id);
    window.location.reload();
  }

  getAllContact(){
    this.contatcService.getAllContact().subscribe((x) => (this.listContact = x));
  }
}
