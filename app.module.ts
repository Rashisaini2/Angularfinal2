// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { DisplayComponent } from './display/display.component';
// import { InputComponent } from './input/input.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     DisplayComponent,
//     InputComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,

//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UsersRoutingModule } from './users-routing/users-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { RouterModule ,RouterOutlet} from '@angular/router';


@NgModule({
  declarations: [AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports:[RouterModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }