import { UserService } from 'src/app/User/Shared/user.service';
import { HouseService } from './../../../service/Houses/house.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit {

  constructor(public service :HouseService , private router: Router,public serviceUser:UserService) { }


  id:any
  ngOnInit(): void {

   this.serviceUser.getUserProfile().subscribe(e=>{this.id=e;console.log(e)},er=>console.log(er));
  }



  Save(){

  this.service.addHouses(this.id.personId).subscribe(e=>{alert("Added ")},er=>console.log(er))
  this.service.formModeule.reset();
  this.router.navigateByUrl("/home")

  }

}
