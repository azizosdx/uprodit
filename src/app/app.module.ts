import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { MyappComponent } from './aziz/HomePage/myapp.component';
import {MatCardModule} from '@angular/material/card';
import { UserCardComponent } from './aziz/Usercard/user-card/user-card.component';




@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    UserCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
