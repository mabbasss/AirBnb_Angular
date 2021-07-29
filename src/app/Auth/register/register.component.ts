import { Router } from '@angular/router';
import { UserService } from './../../User/Shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User/Shared/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public serves:UserService , public router : Router) { }

  ngOnInit(): void {
  }

  // Save(){
  //   this.serves.register().subscribe(e=>{alert("Welcome")},er=>{console.error(er)});
  //   this.serves.formModel.reset();
  //   this.router.navigateByUrl("/home")
  // }


}
