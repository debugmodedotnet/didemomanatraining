import { Component, OnInit } from '@angular/core';
import { IApiConfig } from '../apiconfig.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  message = "";
  config? : IApiConfig; 
  constructor(private logservice : LogService ) { }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Orders ");
    this.config = this.logservice.getConfigValue();
  }

}
