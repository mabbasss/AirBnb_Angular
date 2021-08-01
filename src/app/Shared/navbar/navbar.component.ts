import { User } from './../../User/Shared/user';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/User/Shared/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  formData = new FormData();
  formModel = new FormGroup({
    PersonFirstName: new FormControl('', [Validators.required,]),
    PersonLastName: new  FormControl('', [Validators.required,]),
    PersonEmailName: new FormControl('', [Validators.required,]),
    PersonPhone: new FormControl('', [Validators.required,]),
    ProfilePicture: new  FormControl('', [Validators.required,]),
    PersonPassword: new  FormControl ('', [Validators.required, Validators.minLength(4)]),
  });
  get f(): { [key: string]: AbstractControl } {
    return this.formModel.controls;
  }


  constructor(private router: Router, public serves: UserService, private toastr: ToastrService  ,private fb: FormBuilder) { }
  formModels = {
    Email: '',
    Password: ''
  }
  login = true
  LogOut = false

  ngOnInit(): void {


    if (localStorage.getItem('token') != null){
      this.router.navigateByUrl('/home');
    }
    this.router.resetConfig
    this.check()
  }





  check(){
    var ahmed = localStorage.getItem('token');
    if (ahmed != null) {
      this.login = false
      this.LogOut = true
    } else {
      this.login = true
      this.LogOut = false

    }
  }


  //
  onFileChange(files: any){
    this.formData.append('ProfilePicture', files[0]);
  }



  //Register
  Save(){
    this.formData.append('PersonFirstName', this.formModel.controls.PersonFirstName.value);
    this.formData.append('PersonLastName',this.formModel.controls.PersonLastName.value);
    this.formData.append('PersonEmailName',this.formModel.controls.PersonEmailName.value);
    this.formData.append('PersonPhone', this.formModel.controls.PersonPhone.value);
    this.formData.append('PersonPassword', this.formModel.controls.PersonPassword.value);

    this.serves.register(this.formData).subscribe((res: any) => {
      this.toastr.success("welcome")

      localStorage.setItem('id', res.ad);

      localStorage.setItem('token', res.token);
      window.location.reload();
    },er=>{console.error(er)});
    this.formModel.reset();
  }




  //Login
  onSubmit(form: NgForm) {
    this.serves.login(form.value).subscribe(
      (res: any) => {
        this.toastr.success("welcome")

        window.location.reload();
        
        localStorage.setItem('token', res.token);
      },
      err => {
        if (err.status == 400)
        this.toastr.error('Incorrect username or password.', 'Authentication failed.')
        else
          console.log(err);
      }
    );
  }


  //LogOut
  logout() {
    localStorage.removeItem('token');
    window.location.reload();
    this.check()
  }



//Change NavBar When Scroll Down
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.header_navbar') as HTMLElement;
    let searchInput = document.querySelector('.searchInput') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element?.classList.add('sticky');
      searchInput?.classList.remove('hidden');

    } else {
      element?.classList.remove('sticky');
      searchInput?.classList.add('hidden');

    }
  }



  // Show Password
  type="password"
  password_show_hide(){
    if(this.type=="password"){
      this.type="text"

    }else{
      this.type="password"
    }
  }


}
