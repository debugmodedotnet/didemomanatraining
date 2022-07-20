import { Component, OnInit } from '@angular/core';
import { UpdatedlogService } from '../updatedlog.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message = "";
  constructor(private pservice : UpdatedlogService) { }

  ngOnInit(): void {
    this.message = this.pservice.sayHello("Child 3");
  }

}
