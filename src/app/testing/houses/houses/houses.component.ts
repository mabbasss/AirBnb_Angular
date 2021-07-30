import { UserService } from 'src/app/User/Shared/user.service';
import { HouseService } from './../../../service/Houses/house.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit {

  formModeule:any=this.fb.group({
    City:[''],
    Street:[''],
    Country:[''],
    number:[''],
    Price:[''],
    Title:[''],
    HousePhotoFiles:[''],
    PersonId:['']
  })

  constructor(public service :HouseService , private router: Router,public serviceUser:UserService,private fb: FormBuilder) { }

  formData = new FormData();

  id:any
  ngOnInit(): void {

   this.serviceUser.getUserProfile().subscribe(e=>{this.id=e;console.log(e)},er=>console.log(er));
  }


  myFiles:string [] = [];
  onFileChange(event: any){

    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
  }
  
  }


  Save(){

    for (var i = 0; i < this.myFiles.length; i++) {
      this.formData.append("HousePhotoFiles", this.myFiles[i]);
    }

    this.formData.append('HouseCity', this.formModeule.controls.City.value);
    this.formData.append('HouseStreet',this.formModeule.controls.Street.value);
    this.formData.append('HouseNumber',this.formModeule.controls.number.value);
    this.formData.append('HouseCountry', this.formModeule.controls.Country.value);
    this.formData.append('HousePrice', this.formModeule.controls.Price.value);
    this.formData.append('Title', this.formModeule.controls.Title.value);
    this.formData.append('PersonId', this.id.personId );



  this.service.addHouses(this.formData).subscribe(e=>{alert("Added ")},er=>console.log(er))
  this.formModeule.reset();
  this.router.navigateByUrl("/home")

  }

}
