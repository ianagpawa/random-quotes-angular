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
    quote: Quote;
    constructor() {
        
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {

    }

}