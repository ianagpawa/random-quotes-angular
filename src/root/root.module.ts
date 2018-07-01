import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { RootComponent } from './root.component';
import { GridComponent } from '../grid/grid.component';
import { QuoteComponent } from '../quote/quote.component';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
    bootstrap: [ RootComponent ]
})
export class AppModule { }