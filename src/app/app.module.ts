import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 120}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
