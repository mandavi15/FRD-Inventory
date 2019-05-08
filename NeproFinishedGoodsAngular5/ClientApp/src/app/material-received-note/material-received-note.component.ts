import { Component } from '@angular/core';

@Component({
  selector: 'app-material-received-note',
  templateUrl: './material-received-note.component.html'
})
/** itemRequest component*/
export class MaterialReceivedNoteComponent {
  /** itemRequest ctor */
  public show: boolean = false;
  public hide: boolean = true;

  showhide() {
    this.show = true;
    this.hide = false;
    //alert(this.hide);
  }
  showhide2() {
    this.show = false;
    this.hide = true;
    //alert(this.hide);
  }
 

  columnDefs = [
    { headerName: 'Vendor Code', field: 'vendorCode', sortable: true, filter: true, width: 110 },
    { headerName: 'Vendor Name', field: 'vendorname', sortable: true, filter: true, width: 125 },
    { headerName: 'PO Number', field: 'PON', sortable: true, filter: true, width: 125 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100 },
    { headerName: ' ', field: ' ', width: 560}
  ];

  rowData = [
    { vendorCode: '001', vendorname: 'Fateh', PON: 'PON-01', status: 'Active' },
    { vendorCode: '002', vendorname: 'Fateh', PON: 'PON-02', status: 'Active' },
    { vendorCode: '003', vendorname: 'Fateh', PON: 'PON-03', status: 'Active' },
    { vendorCode: '004', vendorname: 'Fateh', PON: 'PON-04', status: 'Active' },
    { vendorCode: '005', vendorname: 'Fateh', PON: 'PON-05', status: 'Active' }
  ];

  columnDefs1 = [
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 90 },
    { headerName: 'Item Name', field: 'productname', sortable: true, filter: true, width: 105 },
    { headerName: 'Item Name(A)', field: 'productnameArabic', sortable: true, filter: true, width: 120 },
    { headerName: 'Configuration', field: 'configuration', sortable: true, filter: true, width: 120 },
    { headerName: 'Remaining Qty', field: 'remQty', sortable: true, filter: true, width: 117 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 70 },
    { headerName: 'Received Qty', field: 'receivedQty', sortable: true, filter: true, width: 110 },
    { headerName: 'Created Batch Qty', field: 'batchQty', sortable: true, filter: true, width: 140 },
    { headerName: '', field: '', template: `<button class="btn pull-right btn-success btn-sm" data-toggle="modal" data-target="#batchPopup">Create Batch</button>`, width: 100 },
    { headerName: '', field: '', sortable: true, filter: true, width: 80 }
  ];

  rowData1 = [
    { itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '2', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '4', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '5', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '2', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '4', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '5', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },

    ];
  
  columnDefs2 = [
    { headerName: 'Configuration', field: 'config', sortable: true, filter: true, width: 120 },
    { headerName: 'Batch No.', field: 'batchNo', sortable: true, filter: true, width: 110 },
    { headerName: 'Expiry Date', field: 'expiryDate', sortable: true, filter: true, width: 125 },
    { headerName: 'Quantity', field: 'qty', sortable: true, filter: true, width: 100 },
    { headerName: '', field: '', template: `<button class="btn pull-right btn-success btn-sm" data-toggle="modal" data-target="#generatePopup">Generate Sticker</button>`, width: 120 },
    { headerName: ' ', field: ' ', width: 490 }
  ];

  rowData2 = [
    { config: 'Config 1', batchNo: 'Batch 01', expiryDate: '15/05/2019', qty: '50' },
    { config: 'Config 2', batchNo: 'Batch 02', expiryDate: '15/05/2019', qty: '100' },
    { config: 'Config 3', batchNo: 'Batch 03', expiryDate: '15/05/2019', qty: '70' },
    { config: 'Config 4', batchNo: 'Batch 04', expiryDate: '15/05/2019', qty: '50' },
    { config: 'Config 5', batchNo: 'Batch 05', expiryDate: '15/05/2019', qty: '80' }

  ];

 columnDefs3 = [
   { headerName: 'PO No.', field: 'PON', sortable: true, filter: true, width: 90 },
   { headerName: 'Vendor Name', field: 'vendorname', sortable: true, filter: true, width: 130 },
   { headerName: 'MRN No.', field: 'MRNno', sortable: true, filter: true, width: 125 },
   { headerName: 'Activity No.', field: 'activityNo', sortable: true, filter: true, width: 110 },
   { headerName: 'MRN Date', field: 'MRNDate', sortable: true, filter: true, width: 120 },
   { headerName: 'Activity Date', field: 'activityDate', sortable: true, filter: true, width: 130 },
   { headerName: 'Received Qty', field: 'receivedQty', sortable: true, filter: true, width: 130 },
   { headerName: '', field: '', width: 200 }
  
  ];

  rowData3 = [
    { PON: 'PO-1', vendorname: 'Fateh', MRNno: 'MRN-01', activityNo: 'Act 1', MRNDate: '02/05/2019', activityDate: '02/05/2019', receivedQty: '50' },
    { PON: 'PO-1', vendorname: 'Fateh', MRNno: 'MRN-01', activityNo: 'Act 1', MRNDate: '02/05/2019', activityDate: '02/05/2019', receivedQty: '50' },
    { PON: 'PO-1', vendorname: 'Fateh', MRNno: 'MRN-01', activityNo: 'Act 1', MRNDate: '02/05/2019', activityDate: '02/05/2019', receivedQty: '50' },
    { PON: 'PO-1', vendorname: 'Fateh', MRNno: 'MRN-01', activityNo: 'Act 1', MRNDate: '02/05/2019', activityDate: '02/05/2019', receivedQty: '50' },
    { PON: 'PO-1', vendorname: 'Fateh', MRNno: 'MRN-01', activityNo: 'Act 1', MRNDate: '02/05/2019', activityDate: '02/05/2019', receivedQty: '50' }
  ];
}
export class AppComponent {
  checked: boolean;
}
