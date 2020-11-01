import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'crop-list',component:CropListComponent},
  {path:'crop-details',component:CropDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
