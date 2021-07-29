import { BookingService } from './../../service/Booking/booking.service';
import { HouseService } from 'src/app/service/Houses/house.service';
import { House } from './../../service/Houses/house';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/service/Booking/booking';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/User/Shared/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public servic:HouseService ,public ar:ActivatedRoute,private fb: FormBuilder,public servicbooking:BookingService , public serviceUser:UserService ) { }
  Houses:any
  ids:any
  ngOnInit(): void {
    this.servic.getHousesById(this.ar.snapshot.params["id"]).subscribe(e=>{this.Houses=e;console.log(e)})
    this.serviceUser.getUserProfile().subscribe(e=>{this.ids=e;console.log(e)},er=>console.log(er));

  }

  booking:Booking=new Booking()
  ahmed:any
  st:any
  ed:any
  myDate = new Date();
  Save(){

  const formData = new FormData();

  this.booking={
    PersonId:this.ids.personId,
    HouseId:this.ar.snapshot.params["id"],
    StartBookingDate:this.st,
    EndBookingDate:this.ed,
    CreatingBookingDate:this.myDate

  }
  console.log(this.booking)
  this.servicbooking.addBooking(this.booking).subscribe(e=>console.log(e))






}


}
