import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  @Input() listAdmin: any[];

  constructor(
    private adminService: AdminService,
    ) {}

  ngOnInit() {
   this.getAllAdmin();   
  }

  deleteAdmin(id:any){
    console.log(id)
    this.adminService.deleteAdmin(id);
    window.location.reload();
    
  }

  getAllAdmin(){
    this.adminService.getAllAdmin().subscribe((x) => (this.listAdmin = x));
  }
}
