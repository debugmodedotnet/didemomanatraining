import { Component, OnInit } from '@angular/core';
import { IApiConfig } from '../apiconfig.entity';
import { LogService } from '../log.service';
import { UpdatedlogService } from '../updatedlog.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  message = "";
  config? : IApiConfig;
  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Child 1");
    this.config = this.logservice.getConfigValue();
  }

}
