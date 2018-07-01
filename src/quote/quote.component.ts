import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Quote } from './quote';
import { QuoteService } from './quote.service';
require('./quote.component.scss');

@Component({
    selector: 'single-quote',
    templateUrl: './quote.component.html',
})
export class QuoteComponent implements OnInit, AfterViewInit, OnDestroy {
    quotes: Quote[]

    constructor(private QuoteService: QuoteService) {
        this.retrieveQuotes();
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {

    }

    retrieveQuotes() {
        this.QuoteService.getQuotes()
            .subscribe((data) => {
                if (data.quotes) {
                    this.quotes = data.quotes;
                }
            })
    }
}