import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator,  Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponentComponent  {

public welcomeRef: string="";


profileForm=new FormGroup({
username: new FormControl('',
  Validators.required),
password: new FormControl(''),
age: new FormControl(''),
name: new FormControl(''),
address: new FormControl(''),
})

  welcome(){
   this.welcomeRef="Welcome "+name;
  }

}