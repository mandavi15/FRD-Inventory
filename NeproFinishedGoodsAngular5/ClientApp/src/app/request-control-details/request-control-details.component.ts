import { Component } from '@angular/core';

@Component({
  selector: 'app-request-control-details',
  templateUrl: './request-control-details.component.html',
  styleUrls: ['./request-control-details.component.css']

})
/** requestControl component*/
export class RequestControlDetailsComponent {
  constructor() {

  }

  public show: boolean = false;
  public hide: boolean = true;

  showhide() {
    this.show = true;
    this.hide = false;  
  }
  showhide2() {
    this.show = false;
    this.hide = true;    
  }
 
  columnDefs1 = [
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 90 },
    { headerName: 'Item Name', field: 'productname', sortable: true, filter: true, width: 100 },
    { headerName: 'Item Name(A)', field: 'productnameArabic', sortable: true, filter: true, width: 125 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 70 },
    { headerName: 'W/H(On Hand)', field: 'availability', sortable: true, filter: true, width: 120 },
    { headerName: 'Branch(On Hand)', field: 'availabilityBranch', sortable: true, filter: true, width: 130 },
    { headerName: 'Requested Qty', field: 'requestedQty', sortable: true, filter: true, width: 120 },
    { headerName: 'Approved Qty', field: 'scanQty', sortable: true, filter: true, width: 120 },
    { headerName: 'Shipped Qty', field: 'shippedQty', sortable: true, filter: true, width: 110 },
    { headerName: 'Received Qty', field: 'receivedQty', sortable: true, filter: true, width: 110 },
    { headerName: 'Remaining Qty', field: 'remQty', sortable: true, filter: true, width: 120 },
    { headerName: 'Reason', field: 'reason', sortable: true, filter: true, width: 120 }
  ];

  rowData1 = [
    { itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', scanQty: '80', shippedQty: '80', receivedQty: '80', remQty: '20', reason: 'Damaged' },
    { itemno: '2', productname: 'Rice', productnameArabic: 'qqqqq', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', scanQty: '80', shippedQty: '80', receivedQty: '80', remQty: '20', reason: 'Damaged' },
    { itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', scanQty: '80', shippedQty: '80', receivedQty: '80', remQty: '20', reason: 'Damaged' },
    { itemno: '4', productname: 'Rice', productnameArabic: 'qqqqq', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', scanQty: '80', shippedQty: '80', receivedQty: '80', remQty: '20', reason: 'Damaged' },
    { itemno: '5', productname: 'Rice', productnameArabic: 'qqqqq', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', scanQty: '80', shippedQty: '80', receivedQty: '80', remQty: '20', reason: 'Damaged' },
    { itemno: '6', productname: 'Rice', productnameArabic: 'qqqqq', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', scanQty: '80', shippedQty: '80', receivedQty: '80', remQty: '20', reason: 'Damaged' }

  ];
  columnDefs = [
    { headerName: 'Item Name', field: 'productname', sortable: true, filter: true, width: 100 },
    { headerName: 'Variant', field: 'variant', sortable: true, filter: true, width: 90 },
    { headerName: 'Batch No.', field: 'batchNo', sortable: true, filter: true, width: 90 },
    { headerName: 'Expiry Date', field: 'expiryDate', sortable: true, filter: true, width: 100 },
    { headerName: 'Available Qty', field: 'availableQty', sortable: true, filter: true, width: 120 },
    { headerName: 'Picked Qty', field: 'reqQty', sortable: true, filter: true, width: 110 },
    { headerName: '', field: '', width: 140 }
    
  ];

  rowData = [
    { productname: 'Rice', variant: 'Basmati', batchNo: '01', expiryDate: '24/09/2020', availableQty: '100', reqQty: '80' },
    { productname: 'Rice', variant: 'Basmati', batchNo: '01', expiryDate: '24/09/2020', availableQty: '100', reqQty: '80' },
    { productname: 'Rice', variant: 'Basmati', batchNo: '01', expiryDate: '24/09/2020', availableQty: '100', reqQty: '80' },
    { productname: 'Rice', variant: 'Basmati', batchNo: '01', expiryDate: '24/09/2020', availableQty: '100', reqQty: '80' },
    { productname: 'Rice', variant: 'Basmati', batchNo: '01', expiryDate: '24/09/2020', availableQty: '100', reqQty: '80' },
    { productname: 'Rice', variant: 'Basmati', batchNo: '01', expiryDate: '24/09/2020', availableQty: '100', reqQty: '80' }

  ];

  columnDefs2 = [
    { headerName: 'Item Request No.', field: 'itemReq', sortable: true, filter: true, width: 130 },
    { headerName: 'Transfer No.', field: 'transferNo', sortable: true, filter: true, width: 130 },
    { headerName: 'From W/H', field: 'fromWH', sortable: true, filter: true, width: 110 },
    { headerName: 'To W/H', field: 'toWH', sortable: true, filter: true, width: 100 },
    { headerName: '', field: '', width: 230 }
  ];

  rowData2 = [
    { itemReq: '1', transferNo: '001', fromWH: 'ABC', toWH: 'XYZ' },
    { itemReq: '2', transferNo: '002', fromWH: 'ABC', toWH: 'XYZ' },
    { itemReq: '3', transferNo: '003', fromWH: 'ABC', toWH: 'XYZ' },
    { itemReq: '4', transferNo: '004', fromWH: 'ABC', toWH: 'XYZ' },
    { itemReq: '5', transferNo: '005', fromWH: 'ABC', toWH: 'XYZ' }

  ];


}
