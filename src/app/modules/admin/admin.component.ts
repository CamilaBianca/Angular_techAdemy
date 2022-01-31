import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { AdminSend } from 'src/app/models/adminSend.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isDisables = false;
  urlRoute:any;
  idAdmin:any;
  @Input() adminform: Admin;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private adminService: AdminService
  ) { }

  ngOnInit() {

    this.activatedRoute.url.subscribe((url: UrlSegment[]) => 
      this.urlRoute = url[1].path
  );

  this.activatedRoute.params.subscribe((params: Params) => 
    this.idAdmin = params['id']
  );

  if(this.urlRoute === 'view'){
    this.isDisables = true;
    this.getAdminById(this.idAdmin);
  }else if(this.urlRoute === 'update'){
    this.isDisables = false;
    this.getAdminById(this.idAdmin); 
  }else if(this.urlRoute === 'add'){
    this.isDisables = false;
    this.adminform = {
      admin_id: null,
      name: '',
      email: '',
      password: '',
    }
  }
}

senform(): void {
   
  let adminSend : AdminSend ={
     name: this.adminform.name,
     email: this.adminform.email,
     password: this.adminform.password,
  } 

 if(this.urlRoute === 'update'){
   this.adminService.updateAdmin(this.adminform.admin_id,adminSend).subscribe();
   window.location.reload();
 }else if(this.urlRoute === 'add'){
   this.adminService.addAdmin(adminSend);
   window.location.reload();
 }
}

getAdminById(id: any): void {
 this.adminService.getAdminById(id).subscribe((admin) => (this.adminform = admin));
}

}


