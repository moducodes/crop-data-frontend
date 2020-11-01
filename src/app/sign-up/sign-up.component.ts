import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;

  constructor( public dialogRef:MatDialogRef<SignUpComponent>,
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
      this.dialogRef.close()
    }
    }
   

  onNoClick(): void {
    this.dialogRef.close();
  }
  close(){
    this.dialogRef.close();
  }

}
