import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from './quote';

@Injectable()
export class QuoteService {

  constructor(
      private HttpClient: HttpClient
  ) { 
      
  }

}