import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { RootComponent } from './root.component';
import { GridComponent } from '../grid/grid.component';
import { QuoteComponent } from '../quote/quote.component';

import { QuoteService } from '../quote/quote.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AgGridModule.withComponents([

        ]),
        CardModule,
        ButtonModule
    ],
    declarations: [
        RootComponent,
        GridComponent,
        QuoteComponent
    ],
    providers: [
        QuoteService
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }