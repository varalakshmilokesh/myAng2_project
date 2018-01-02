import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {OrderModule} from './orders/order.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OrderModule,
    RouterModule.forRoot([

      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  declarations: [
  AppComponent,
  HomeComponent
  
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
