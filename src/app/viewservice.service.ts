import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {

  constructor(private http:HttpClient) { }
   

  courseview=()=>{

    return this .http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}
