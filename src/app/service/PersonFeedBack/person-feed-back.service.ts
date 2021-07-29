import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonFeedBack } from './person-feed-back';

@Injectable({
  providedIn: 'root'
})
export class PersonFeedBackService {

  constructor(public http:HttpClient ,private fb: FormBuilder) { }

  baseurl="http://localhost:42138/api"



  GetAllPersonFeedBack(){
    return this.http.get<PersonFeedBack[]>(this.baseurl+"/HouseFeedbacks")
  }




  //To Get All FeedBack To This House
  getPersonFeedBackByid(i:number){
    return this.http.get<PersonFeedBack[]>(this.baseurl+"/PersonFeedbacks/Host/"+i)
  }

  //To Get All FeedBack To This House
  getPersonFeedBackscustomerByid(i:number){
    return this.http.get<PersonFeedBack[]>(this.baseurl+"/PersonFeedbacks/Customer/"+i)
  }
  //To Get FeedBack To This House
  getPersonFeedBacksByid(i:number){
    return this.http.get<PersonFeedBack>(this.baseurl+"/HouseFeedbacks/"+i)
  }

  addPersonFeedBack(){

    var body:PersonFeedBack={

    }

    return this.http.post(this.baseurl+"/HouseFeedbacks",body)
  }



  deletePersonFeedBack(i:number){

    return this.http.delete(this.baseurl+"/HouseFeedbacks/"+i)
  }
}
