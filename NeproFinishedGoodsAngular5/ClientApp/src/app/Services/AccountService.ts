import { Injectable, Inject, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http' 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()


export class UserAccount {
  myAppUrl: string = "";
  

  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
  this.myAppUrl = baseUrl;
  
  }  

  saveUser(user) {
    return this.http.post(this.myAppUrl + 'api/controller/CreateUser', user)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  //LoginUser(user) {

  //  var result = this.http.post(this.myAppUrl + 'api/controller/Login', user).map((response: Response) => response.json());
      
  //  console.log(status)
  //  return result;
  //}  

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }  
}
