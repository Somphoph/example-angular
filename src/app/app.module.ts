import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleOneComponent } from './example-one/example-one.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModuleModule} from './material-module';
import { ExampleTwoComponent } from './example-two/example-two.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
      ExampleTwoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
