import { Observable } from 'rxjs';


import { House } from './house';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(public http:HttpClient ,private fb: FormBuilder) { }

  baseurl="http://localhost:42138/api"

  formData = new FormData();
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

  GetAllHouses()
  {
    return this.http.get<House[]>("http://localhost:42138/api/Houses")
  }

  onFileChange(files: any){
    if (files.length === 0) {
      return;
    }
    let filesToUpload : File[] = files;
    Array.from(filesToUpload).map((file, index) => {
      return this.formData.append('HousePhotoFiles'+index, file, file.name);
    });




    // this.formData.append('HousePhotoFiles', files[0]);
  }


  addHouses(personid:any){

    var num:number=personid
    this.formData.append('HouseCity', this.formModeule.controls.City.value);
    this.formData.append('HouseStreet',this.formModeule.controls.Street.value);
    this.formData.append('HouseNumber',this.formModeule.controls.number.value);
    this.formData.append('HouseCountry', this.formModeule.controls.Country.value);
    this.formData.append('HousePrice', this.formModeule.controls.Price.value);
    this.formData.append('Title', this.formModeule.controls.Title.value);
    this.formData.append('PersonId', personid );
console.log(this.formData)
    var body={
    HouseCity: this.formData.append('HouseCity', this.formModeule.controls.City.value),
    HouseStreet:this.formData.append('HouseStreet',this.formModeule.controls.Street.value),
    HouseNumber:this.formData.append('HouseNumber',this.formModeule.controls.number.value),
    HouseCountry:  this.formData.append('HouseCountry', this.formModeule.controls.Country.value),
    HousePrice:this.formData.append('HousePrice', this.formModeule.controls.Price.value),
    Title:this.formData.append('Title', this.formModeule.controls.Title.value),
    HousePhotoFiles:this.formData.append('HousePhotoFiles', this.formModeule.controls.HousePhotoFiles.value),
    PersonId:personid,
    }

    return this.http.post("http://localhost:42138/api/Houses",this.formData , {reportProgress: true, observe: 'events'})
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
