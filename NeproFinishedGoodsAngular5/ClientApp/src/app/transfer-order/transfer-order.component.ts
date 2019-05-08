import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-order',
  templateUrl: './transfer-order.component.html',

})

export class TransferOrderComponent {
  constructor() {

  }

  columnDefs2 = [
    { headerName: 'Item Request No.', field: 'itemReq', sortable: true, filter: true, width: 130 },
    { headerName: 'Transfer No.', field: 'transferNo', sortable: true, filter: true, width: 130 },
    { headerName: 'From W/H', field: 'fromWH', sortable: true, filter: true, width: 110 },
    { headerName: 'To W/H', field: 'toWH', sortable: true, filter: true, width: 100 },
    { headerName: 'Shipped Date', field: 'shippedDate', sortable: true, filter: true, width: 140 },
    { headerName: 'Received Date', field: 'receivedDate', sortable: true, filter: true, width: 140 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 90 },
    { headerName: '', field: '', width: 200 }
  ];

  rowData2 = [
    { itemReq: '1', transferNo: '001', fromWH: 'ABC', toWH: 'XYZ', shippedDate: '25/04/2019', receivedDate: '28/04/2019', status: 'Active' },
    { itemReq: '2', transferNo: '002', fromWH: 'ABC', toWH: 'XYZ', shippedDate: '25/04/2019', receivedDate: '28/04/2019', status: 'Active' },
    { itemReq: '3', transferNo: '003', fromWH: 'ABC', toWH: 'XYZ', shippedDate: '25/04/2019', receivedDate: '28/04/2019', status: 'Active' },
    { itemReq: '4', transferNo: '004', fromWH: 'ABC', toWH: 'XYZ', shippedDate: '25/04/2019', receivedDate: '28/04/2019', status: 'Active' },
    { itemReq: '5', transferNo: '005', fromWH: 'ABC', toWH: 'XYZ', shippedDate: '25/04/2019', receivedDate: '28/04/2019', status: 'Active' }

  ];


}
