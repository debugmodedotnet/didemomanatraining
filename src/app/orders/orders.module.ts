import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { IApiConfig } from '../apiconfig.entity';
import { apiconfigToken } from '../apiconfigtoken';
import { LogService } from '../log.service';

export const configvalue : IApiConfig = {
  Token:"9999",
  EndPoint:"order.com"
}

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[
    {provide:apiconfigToken,useValue:configvalue}
  ]
})
export class OrdersModule { }
