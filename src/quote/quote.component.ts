import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { QuoteService } from './quote.service';
require('./quote.component.scss');

@Component({
    selector: 'single-quote',
    templateUrl: './quote.component.html',
})
export class QuoteComponent implements OnInit, AfterViewInit, OnDestroy { 
    constructor(private QuoteService: QuoteService) {
        
    }

    ngOnInit() {
        console.log(this.QuoteService.getQuotes());
    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {

    }
}