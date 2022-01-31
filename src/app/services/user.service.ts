import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { UserSend } from '../models/userSend.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.url);    
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(this.url.concat('/'+id.toString()));    
  }

  updateUser(id: number, user: UserSend) {
    console.log(user);
    return this.httpClient.put<User>(this.url.concat('/'+id), user);
  }

  deleteUser(id: number) {
     this.httpClient.delete(this.url+'/'+id).subscribe(); 
  }

  addUser(user: UserSend) {
    console.log('addUser');
    console.log(user);
    return this.httpClient.post<User>(this.url, user).subscribe();
  }
}
