import { NavbarComponent } from './../../Shared/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/User/Shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.router.navigateByUrl('/home');
    }
  }
  type="password"
  password_show_hide(){
    if(this.type=="password"){
      this.type="text"

    }else{
      this.type="password"
    }
  }




  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)

          alert(this.toastr.error('Incorrect username or password.', 'Authentication failed.').message)
        else
          console.log(err);
      }
    );
  }





}
