import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

export interface responseInterface {
 key:string
}

// , Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  loginRequest:any;
  loginResponse:any;

  constructor(public dialog: MatDialog, private http: HttpClient, private route:Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  validateCustomer(){
   if(this.loginForm.valid){
   this.loginRequest = {
     email: this.loginForm.controls.emailId.value,
     username: '',
     password: this.loginForm.controls.password.value
   }
   console.log(this.loginRequest)

   this.http.post('http://127.0.0.1:8000/rest-auth/login/', this.loginRequest).subscribe(
     data => {
       console.log(data);
       this.loginResponse = data;
       if(this.loginResponse.key !=null || this.loginResponse.key !=undefined || this.loginResponse.key !=""){
        sessionStorage.setItem("token",this.loginResponse.key);
        this.route.navigateByUrl('/crop-list');
       }
       else{
        alert('Incorrect Password')
       }
     }, error=>{
       console.log(error);
       alert('Incorrect Password')
     }
   )

    
   }
  }

  signup(){
    const dialogRef1 = this.dialog.open(SignUpComponent, {});
    dialogRef1.afterClosed().subscribe(data => {
    console.log(data);
  });
  }

}
