import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CropListComponent,
    CropDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,RouterModule, FormsModule, BrowserAnimationsModule,ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, 
    MatCheckboxModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule,
    MatTabsModule, HttpClientModule,MatTooltipModule,MatDialogModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SignUpComponent
 ]
})
export class AppModule { }
