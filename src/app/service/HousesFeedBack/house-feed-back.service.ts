import { HouseFeedBack } from './house-feed-back';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HouseFeedBackService {

  constructor(public http:HttpClient ,private fb: FormBuilder) { }

  baseurl="http://localhost:42138/api"



  GetAllHousesFeedBack(){
    return this.http.get<HouseFeedBack[]>(this.baseurl+"/HouseFeedbacks")
  }




  //To Get All FeedBack To This House
  getHousesFeedBackByid(i:number){
    return this.http.get<HouseFeedBack[]>(this.baseurl+"/HouseFeedbacks/"+i)
  }

  //To Get FeedBack To This House
  getHousesFeedBacksByid(i:number){
    return this.http.get<HouseFeedBack>(this.baseurl+"/HouseFeedbacks/"+i)
  }

  addHousesFeedBack(){

    var body:HouseFeedBack={

    }

    return this.http.post(this.baseurl+"/HouseFeedbacks",body)
  }



  deleteHouseFeedBack(i:number){

    return this.http.delete(this.baseurl+"/HouseFeedbacks/"+i)
  }
}
