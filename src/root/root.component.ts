import { Component } from '@angular/core';

require('./root.component.scss');

@Component({
    selector: 'root-app',
    templateUrl: './root.component.html',
})
export class RootComponent { 
    title = 'app';

    columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

}