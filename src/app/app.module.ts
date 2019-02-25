import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FInputComponent } from './components/input/f-input';
import { FNavbarComponent } from './components/navbar/f-navbar';
import { FSelectComponent } from './components/f-select/f-select';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    FInputComponent,
    FNavbarComponent,
    FSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
