import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsComponentComponent } from  './forms-component/forms-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule,],
  declarations: [ AppComponent, HelloComponent, FormsComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
