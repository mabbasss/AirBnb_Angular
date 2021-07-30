import { FileUpload } from 'primeng/fileupload';
import { User } from 'src/app/User/Shared/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:42138/api"

  constructor(public http:HttpClient ,private fb: FormBuilder) { }


  getalluser(){
    return this.http.get<User[]>(this.baseUrl+"/People/People")
  }
  register(formModel: any  ) {
    return this.http.post<any>(this.baseUrl + "/People" ,formModel,{withCredentials:true});
  }


  login(Logins: NgForm) {
    return this.http.post<any>('http://localhost:42138/api/People/login', Logins);
  }
  getUserProfile() {
    const token = localStorage.getItem("token");
    const header = new HttpHeaders  ({ 'Authorization': `Bearer ${token}` });
    const options = {
       headers: header,
    };
    return this.http.get(this.baseUrl + '/DataUser/profile', options );
  }
}
