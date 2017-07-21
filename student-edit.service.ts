import {Studentmod} from '../student-view/student-view.model';
import {EventEmitter }from '@angular/core';
import { Subject }   from 'rxjs/Subject';
export class StudentEditService{
    studentsChanged = new EventEmitter<Studentmod[]>();
     startedEditing = new Subject<number>();
    private students:Studentmod[]=[
      
        new Studentmod('Vishal','Singh','vishal01','vishal@yahoo.co.in',"")

    ];
    getstudents(){
      return this.students.slice();
    }
    getstudent(index:number){
        return this.students[index];
    }
    addstudent(student:Studentmod){
        this.students.push(student);
        this.studentsChanged.emit(this.students.slice());
        
    }
    updateStudent(index:number,newStudentmod:Studentmod){
        this.students[index]=newStudentmod;
        this.studentsChanged.next(this.students.slice());
    }
    deleteStudentmod(index,number){
        this.students.splice(index,1);
    this.studentsChanged.next(this.students.slice());
    }
}