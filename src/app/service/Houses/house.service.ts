import { Observable } from 'rxjs';


import { House } from './house';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(public http:HttpClient ,private fb: FormBuilder) { }

  baseurl="http://localhost:42138/api"
  GetAllHouses()
  {
    return this.http.get<House[]>("http://localhost:42138/api/Houses")
  }



  addHouses(form:any){
    return this.http.post("http://localhost:42138/api/Houses",form,{withCredentials:true} )
  }





  getHousesByCity(city:string){
    return this.http.get<House>(this.baseurl+"/Houses/city/"+city)
  }

  getHousesById(id:number){
    return this.http.get<any>(this.baseurl+`/Houses/${id}`)
  }


  editHouse(edit:House){

    return this.http.put(this.baseurl+"/Houses/"+edit.HouseId,edit)
  }


  deleteHouse(i:number){

    return this.http.delete(this.baseurl+"/Houses/"+i)
  }




}
