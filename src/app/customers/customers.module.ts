import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddressComponent } from './address/address.component';
import { IApiConfig } from '../apiconfig.entity';
import { apiconfigToken } from '../apiconfigtoken';
import { LogService } from '../log.service';

export const configvalue : IApiConfig = {
  Token:"7777",
  EndPoint:"Customer.com"
}
@NgModule({
  declarations: [
    CustomersComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[
    {provide:apiconfigToken,useValue:configvalue}
  ]
})
export class CustomersModule { }

// ng generate module customers --route customers --module app.module

// ng generate module orders --route orders --module app.module

