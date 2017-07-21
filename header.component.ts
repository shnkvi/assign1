import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {Router} from"@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //@Output() featureSelected =new EventEmitter <string>();
  //onSelect(feature: string){
    // this.featureSelected.emit(feature);
  

  constructor() { }

  ngOnInit() {
  }

}

