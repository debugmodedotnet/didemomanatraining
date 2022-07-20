// import { ErrorHandler, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { Child1Component } from './child1/child1.component';
// import { Child2Component } from './child2/child2.component';
// import { LogService } from './log.service';
// import { UpdatedlogService } from './updatedlog.service';
// import { Child3Component } from './child3/child3.component';
// import { SuperupdatelogService } from './superupdatelog.service';
// import { GlobalerrorhandlerService } from './globalerrorhandler.service';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// const flag = false; 
// const getLog = ()=>{
//   if(flag){
//     return new LogService;
//   }
//   else {
//     return new UpdatedlogService
//   }
// }
// @NgModule({
//   declarations: [
//     AppComponent,
//     Child1Component,
//     Child2Component,
//     Child3Component,
//     HomeComponent,
//     LoginComponent,
//     PageNotFoundComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     {provide:LogService,useFactory:getLog},
//     {provide:UpdatedlogService,useExisting:LogService},
//     {provide:ErrorHandler, useClass:GlobalerrorhandlerService}
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedlogService } from './updatedlog.service';
import { Child3Component } from './child3/child3.component';
import { SuperupdatelogService } from './superupdatelog.service';
import { GlobalerrorhandlerService } from './globalerrorhandler.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { apiconfigToken } from './apiconfigtoken';
import { IApiConfig } from './apiconfig.entity';

// const flag = false; 
// const getLog = ()=>{
//   if(flag){
//     return new LogService;
//   }
//   else {
//     return new UpdatedlogService
//   }
// }
export const configvalue : IApiConfig = {
  Token:"22626",
  EndPoint:"home.com"
}
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:apiconfigToken,useValue: configvalue
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

