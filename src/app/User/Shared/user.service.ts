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

  formModesl:any = this.fb.group({
    PersonFirstName: ['', Validators.required],
    PersonLastName: ['', Validators.required],
    PersonEmailName: ['',[Validators.required,Validators.email]],
    PersonPhone: ['',Validators.required],
    ProfilePicture: [''],
    Passwords: this.fb.group({
      PersonPassword: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  formModel = new FormGroup({
    PersonFirstName: new FormControl('', [Validators.required,]),
    PersonLastName: new FormControl('', [Validators.required,]),
    PersonEmailName: new FormControl('', [Validators.required,]),
    PersonPhone: new FormControl('', [Validators.required,]),
    ProfilePicture: new FormControl('', [Validators.required,]),
    Passwords: this.fb.group({
      PersonPassword: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });




  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl?.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('PersonPassword')?.value != confirmPswrdCtrl?.value)
        confirmPswrdCtrl?.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl?.setErrors(null);
    }
  }

  files?:File
  register(formModel: any  ) {



    // const formData = new FormData();
    // formData.append('PersonFirstName', this.formModel.controls.PersonFirstName.value);
    // formData.append('PersonLastName',this.formModel.controls.PersonLastName.value);
    // formData.append('PersonEmailName',this.formModel.controls.PersonEmailName.value);
    // formData.append('PersonPhone', this.formModel.controls.PersonPhone.value);
    // formData.append('ProfilePicture', this.formModel.controls.ProfilePicture.value);
    // formData.append('PersonPassword', this.formModel.controls.PersonPassword.value);

    // console.log(formData)
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
