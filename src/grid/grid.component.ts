import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { GridOptions } from 'ag-grid';
import { Quote } from '../quote/quote';
import { QuoteService } from '../quote/quote.service';

require('./grid.component.scss');

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit, AfterViewInit, OnDestroy { 
    gridOptions: GridOptions;

    private _subscriptions: Subscription[] =[];

    title = 'app';

    columnDefs = [
        {headerName: 'Quoter', field: 'quoter' },
        {headerName: 'Quote', field: 'quote' },
        {headerName: 'Source', field: 'source'}
    ];


    constructor(private QuoteService: QuoteService) {
        
        this.gridOptions = {
            rowData: [],
            columnDefs: []
        };
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        this.retrieveGridData();
    }

    ngOnDestroy() {
        this._subscriptions.forEach(x => x.unsubscribe);
        this._subscriptions.length = 0;
    }

    retrieveGridData() {
        this._subscriptions.push(this.QuoteService.getQuotes()
            .subscribe((data) => {
                if (data.quotes) {
                    this.gridOptions.api.setRowData(data.quotes);
                }
                
            })
        )

        this._subscriptions.push(this.QuoteService.getHeaders()
            .subscribe((data) => {
                if (data.columnDefs) {
                    this.gridOptions.api.setColumnDefs(data.columnDefs)
                }
            })
        )
    }


}