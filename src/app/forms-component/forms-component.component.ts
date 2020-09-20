import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator,  Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponentComponent implements OnInit {
profileForm=new FormGroup({
name: new FormControl('',
  Validators.required),
password: new FormControl('')
})

  ngOnInit() {
  }

}