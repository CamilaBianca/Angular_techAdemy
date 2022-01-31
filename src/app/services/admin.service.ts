import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin.model';
import { AdminSend } from '../models/adminSend.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'http://localhost:8080/admin';

  constructor(private httpClient: HttpClient) {
  }

  getAllAdmin() {
    return this.httpClient.get<Admin[]>(this.url);    
  }

  getAdminById(id: number) {
    return this.httpClient.get<Admin>(this.url.concat('/'+id.toString()));    
  }

  updateAdmin(id: number, admin: AdminSend) {
    return this.httpClient.put<Admin>(this.url.concat('/'+id), admin);
  }

  deleteAdmin(id: number) {
     this.httpClient.delete(this.url+'/'+id).subscribe(); 
  }

  addAdmin(admin: AdminSend) {
    console.log('addAdmin');
    console.log(admin);
    return this.httpClient.post<Admin>(this.url, admin).subscribe();    
  }

}
