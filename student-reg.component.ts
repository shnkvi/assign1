import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit,OnDestroy,ViewChild} from '@angular/core';
import { Studentmod } from '../student-view.model';
import { StudentEditService } from '../student-edit.service';
import { Router } from     "@angular/router";
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
subscription:Subscription;
editMode=false;
editedStudentIndex:number;
editedStudent:Studentmod;

  constructor( private slService: StudentEditService,private router:Router) { }

  ngOnInit() {
    this.subscription= this.slService.startedEditing.subscribe(
        (index:number)=> {
          this.editedStudentIndex=index;
            this.editMode=true;
            this.editedStudent=this.slService.getstudent(index);
             this.slForm.setValue({
               firstname:this.editedStudent.firstname,
               lastname:this.editedStudent.lastname,
               username:this.editedStudent.username,
               email:this.editedStudent.email,
               password:this.editedStudent.password,
               
             })  
      }
    );
    
  }
  AddStudent(form:NgForm){
    
   const value=form.value;
    const newStudentmod = new Studentmod(value.firstname,value.lastname,value.username, value.email, value.password);
     if (this.editMode)
     {
       this.slService.updateStudent(this.editedStudentIndex,newStudentmod);
     }
     else 
     {
       this.slService.addstudent(newStudentmod);
     }
    
    console.log(form);
   
     
    this.router.navigate(['/student-view'])
    
  }
  onSubmit(){
   

    
  

}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}

  

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  }
  