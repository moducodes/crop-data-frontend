import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ICrop} from '../cropData';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  crops_data:ICrop[] =[]; //[{​​​​​​​​"name":"Brinjal","soil_type":"sandy loam soil","water_requirement":"600mm - 1000mm of rainfall","expected_income":114000}​​​​​​​​,{​​​​​​​​"name":"Cabbage","soil_type":"sandy loam to clay","water_requirement":"350-500 mm of rainfall","expected_income":110000}​​​​​​​​,{​​​​​​​​"name":"Maize","soil_type":"loams and sandy loams","water_requirement":"500-800 mm of rainfall","expected_income":44200}​​​​​​​​,{​​​​​​​​"name":"Paddy","soil_type":"all types of soil","water_requirement":"more than 800 mm of rainfall","expected_income":24000}​​​​​​​​,{​​​​​​​​"name":"Cotton","soil_type":"black cotton soil","water_requirement":"650-750 mm of rainfall","expected_income":86330}​​​​​​​​]
  
  
  
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    const val = 'Token ' + sessionStorage.getItem('token');
    console.log(val);
    const headers = new HttpHeaders({'Authorization': val});

    this.http.get<ICrop[]>('http://127.0.0.1:8000/crops/list/', {headers}).subscribe(
      data=>this.crops_data=data
    )
  }

  cropDetails(e){
    this.route.navigateByUrl('/crop-details?name='+e)
  }

}
