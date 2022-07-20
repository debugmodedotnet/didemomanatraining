import { ErrorHandler, Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable({
  providedIn: 'root'
})
export class GlobalerrorhandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    console.log("I wll handle my self");
    const message = error.message ? error.message : error.toString();
    const url = "abc";
  
    StackTrace.fromError(error).then(s=>{
      const stackstring = s.splice(0,20).map(function(r){
          return r.toString();
      }).join('\n');

      console.log({message,url,stack:stackstring}); // database
  })  

  }

}
