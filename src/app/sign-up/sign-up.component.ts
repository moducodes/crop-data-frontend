import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;
  signupRequest:any;
  signupResponse:any;

  constructor( public dialogRef:MatDialogRef<SignUpComponent>, private http: HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

  
  this.signupForm= new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', [Validators.required]),
      confirmpass:new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  Register(){
    if(this.signupForm.valid){
      const uname = this.signupForm.controls.emailId.value.split('@')[0];
      this.signupRequest = {
        email: this.signupForm.controls.emailId.value,
        username: uname,
        password1: this.signupForm.controls.password.value,
        password2: this.signupForm.controls.confirmpass.value
      }
      console.log(this.signupRequest);
      this.http.post('http://127.0.0.1:8000/rest-auth/registration/', this.signupRequest).subscribe(
        data => {
          console.log(data);
          this.signupResponse = data;
          if(this.signupResponse.key !=null || this.signupResponse.key !=undefined || this.signupResponse.key !=""){
            alert('Registered successfully!');
            this.dialogRef.close();
          }
          else{
           alert('There was some error. Please try again :(');
          }
        }, error=>{
          alert('There was some error. Please try again :(');
        }
      )
    }
    }
   

  onNoClick(): void {
    this.dialogRef.close();
  }
  close(){
    this.dialogRef.close();
  }

}
