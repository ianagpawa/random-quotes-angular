import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RootComponent } from './root.component';
import { AgGridModule } from 'ag-grid-angular';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

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
        RootComponent
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }