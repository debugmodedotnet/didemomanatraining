import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn:'root',
  useExisting:LogService
})
export class UpdatedlogService {

  static objectcount = 0; 
  constructor() { 
    UpdatedlogService.objectcount = UpdatedlogService.objectcount + 1; 
    console.log('updated log service object -', UpdatedlogService.objectcount)
  }

  sayHello(name: string):string{
   return "Updated Hello " + name; 
  }
}
