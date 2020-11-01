import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ICropDetails} from '../cropData';
@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  url:string;
  cropname:string;
  cropdetailsResp:ICropDetails;
  
  ngOnInit() {
    this.url = window.location.href;
   // this.routeact.queryParamMap.subscribe(params=>params.name)
   if(this.url.indexOf('?')>-1)
   {
     
       this.url = this.url.split('?')[1];
       this.cropname=this.url.split('=')[1];

       console.log(this.cropname);

       const val = 'Token ' + sessionStorage.getItem('token');
      console.log(val);
      const headers = new HttpHeaders({'Authorization': val});

       this.http.get<ICropDetails>('http://127.0.0.1:8000/crops/crop?cropname='+this.cropname, {headers}).subscribe(data=>{
           this.cropdetailsResp=data;
       })
   }
  }
}
