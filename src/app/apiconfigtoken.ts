import { InjectionToken } from "@angular/core";
import { IApiConfig } from "./apiconfig.entity";


export const apiconfigToken = new 
InjectionToken<IApiConfig>("token for api config");