import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from './quote';
const MOCKDATA = require('../MOCKDATA/MOCKDATA.json');
const MOCKHEADERS = require('../MOCKDATA/MOCKHEADERS.json');

@Injectable()
export class QuoteService {

  constructor(
      private HttpClient: HttpClient
  ) { 
      
  }

  getQuotes(): Observable<any> {
    return Observable.fromPromise(new Promise((res) => {
      res(MOCKDATA);
    }));
  }

  getHeaders(): Observable<any> {
    return Observable.fromPromise(new Promise((res) => {
      res(MOCKHEADERS);
    }))
  }
}