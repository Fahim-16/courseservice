import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from '../viewservice.service';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.component.html',
  styleUrls: ['./courseview.component.css']
})
export class CourseviewComponent implements OnInit {

  constructor(private api:ViewserviceService) { 
    api.courseview().subscribe(
    (Response)=>{
      this.data=Response
    }
    )
  }

  ngOnInit(): void {
  }
  data:any=[
    
  ]
  

}
