import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule } from "@angular/router";

import {StudentEditService } from './student-view/student-edit.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { StudentViewComponent } from './student-view/student-view.component';
import { StudentRegComponent } from './student-view/student-reg/student-reg.component';


const appRoutes:Routes=[
  
   
    {path:'',component:StudentRegComponent},
    { path:'header',component:HeaderComponent},
      { path:'student-view',component:StudentViewComponent},
       { path:'student-reg',component:StudentRegComponent},
        //{ path:'admin',component:AdminComponent},
        
        
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    StudentViewComponent,
    StudentRegComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentEditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
