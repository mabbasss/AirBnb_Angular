import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public http:HttpClient ,private fb: FormBuilder) { }

  baseurl="http://localhost:42138/api"



  GetAllBooking(){
    return this.http.get<Booking[]>(this.baseurl+"/Bookings")
  }


  addBooking(body:any){

    return this.http.post<Booking>(this.baseurl+"/Bookings",body)
  }

  getBookingById(i:number){

    return this.http.get<Booking>(this.baseurl+"/Bookings/"+i)
  }

  editBooking(edit:Booking){

    return this.http.put(this.baseurl+"/Bookings/"+edit.BookingId,edit)
  }


  deleteBooking(i:number){
    return this.http.delete(this.baseurl+"/Bookings/"+i)
  }


}
