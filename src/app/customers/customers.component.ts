import { Component, OnInit } from '@angular/core';
import { IApiConfig } from '../apiconfig.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message = "";
  config? : IApiConfig;
  constructor(private logservice : LogService) { }

  ngOnInit(): void {

    this.message = this.logservice.sayHello("Customers ");
    this.config = this.logservice.getConfigValue();
  }

}
