import { BookingService } from './../../service/Booking/booking.service';
import { HouseService } from 'src/app/service/Houses/house.service';
import { House } from './../../service/Houses/house';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/service/Booking/booking';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/User/Shared/user.service';
import { HousePhotoService } from 'src/app/service/HousesPhoto/house-photo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( public servic:HouseService ,public ar:ActivatedRoute,private fb: FormBuilder,public servicbooking:BookingService , public serviceUser:UserService,public serviceimg:HousePhotoService ) { }
  Houses:any
  ids:any
  itemshouse:any=[] ||undefined

  ngOnInit(): void {
    this.servic.getHousesById(this.ar.snapshot.params["id"]).subscribe(e=>{this.Houses=e;console.log(e)})
    this.serviceUser.getUserProfile().subscribe(e=>{this.ids=e;console.log(e)},er=>console.log(er));
    this.serviceimg.getHousesByid(this.ar.snapshot.params["id"]).subscribe(e=>{this.itemshouse=e;console.log(e)})
  }

  booking:Booking=new Booking()

  st?:Date
  ed?:Date
  myDate =new Date();
  Save(){

  const formData = new FormData();
  this.booking={
    PersonId:this.ids.personId,
    HouseId:this.ar.snapshot.params["id"],
    StartBookingDate:this.st,
    EndBookingDate:this.ed,
    CreatingBookingDate:this.myDate
  }
this.servicbooking.addBooking(this.booking).subscribe(e=>console.log(e))







}


}
