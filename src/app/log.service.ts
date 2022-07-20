import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from './apiconfig.entity';
import { apiconfigToken } from './apiconfigtoken';
import { UpdatedlogService } from './updatedlog.service';

console.log("I am part of final output bundle");
@Injectable({
  providedIn:'any'
})
export class LogService {

  static objectcount = 0; 
  constructor(@Inject(apiconfigToken) private config : IApiConfig) { 
    LogService.objectcount = LogService.objectcount + 1; 
    console.log('logservice object -', LogService.objectcount)
  }

  sayHello(name: string):string{
   return "Hello " + name; 
  }

  getConfigValue(){
    return this.config;
  }
}
