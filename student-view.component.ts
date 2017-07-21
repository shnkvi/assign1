

import { Component, OnInit,ViewChild ,OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Studentmod } from './student-view.model';
import { Router} from "@angular/router";
import {StudentEditService } from '../student-view/student-edit.service';

import {Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit,OnDestroy {
editedStudent:Studentmod;
private subscription:Subscription;

   @ViewChild('f') slForm:NgForm;
   editMode=false;
  students: Studentmod[];
  editedStudentIndex:number;
 
 constructor(private slService:StudentEditService,private router:Router) {

  }
  ngOnInit() {
   this.students =this.slService.getstudents();
  this.subscription=this.slService.studentsChanged
  .subscribe(
  (students:Studentmod[]) =>{
   this.students = students;
  }
  );
 
    
}
 
  onSubmit(){
   

    
  

}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
onDelete(){
  //this.slService.deleteStudentmod(this.editedStudentIndex);
  this.onClear();
  this.router.navigate(['/student-view']);
}

  
  
  

onEditStudent(index:number)
{
  this.slService.startedEditing.next(index);
  
//this.router.navigate(['/student-reg']);
}
ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
