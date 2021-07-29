import { HousePhoto } from './house-photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HousePhotoService {
  constructor(public http:HttpClient ,private fb: FormBuilder) { }

  baseurl="http://localhost:42138/api"



  GetAllHousesPhoto(){
    return this.http.get<HousePhoto[]>(this.baseurl+"/HousePhotoes")
  }


  addHousesPhoto(){

    var body:HousePhoto={

    }

    return this.http.post(this.baseurl+"/HousePhotoes",body)
  }

  getHousesByid(i:number){
    return this.http.get<HousePhoto>(this.baseurl+"/HousePhotoes/"+i)
  }

  // editHousePhoto(edit:HousePhoto){

  //   return this.http.put(this.baseurl+"/HousePhotoes/"+edit.HouseId,edit)
  // }


  deleteHousePhoto(i:number){

    return this.http.delete(this.baseurl+"/HousePhotoes/"+i)
  }
}
