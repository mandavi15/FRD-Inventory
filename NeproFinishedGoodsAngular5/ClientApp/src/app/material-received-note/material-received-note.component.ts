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
    { headerName: 'Vendor Name', field: 'vendorname', sortable: true, filter: true, width: 110 },
    { headerName: 'PO Number', field: 'PON', sortable: true, filter: true, width: 125 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100 },
    { headerName: ' ', field: ' ', width: 490 }
  ];

  rowData = [
    { vendorCode: '001', vendorname: 'Fateh', PON: 'PON-01', status: 'Active' },
    { vendorCode: '002', vendorname: 'Fateh', PON: 'PON-02', status: 'Active' },
    { vendorCode: '003', vendorname: 'Fateh', PON: 'PON-03', status: 'Active' },
    { vendorCode: '004', vendorname: 'Fateh', PON: 'PON-04', status: 'Active' },
    { vendorCode: '005', vendorname: 'Fateh', PON: 'PON-05', status: 'Active' },
    { vendorCode: '006', vendorname: 'Fateh', PON: 'PON-06', status: 'Active' }
  ];

  columnDefs1 = [
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 90 },
    { headerName: 'Item Name', field: 'productname', sortable: true, filter: true, width: 100 },
    { headerName: 'Item Name(A)', field: 'productnameArabic', sortable: true, filter: true, width: 125 },
    { headerName: 'Configuration', field: 'configuration', sortable: true, filter: true, width: 110 },
    { headerName: 'Remaining Qty', field: 'remQty', sortable: true, filter: true, width: 120 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 70 },
    { headerName: 'Received Qty', field: 'receivedQty', sortable: true, filter: true, width: 140 },
    { headerName: 'Created Batch Qty', field: 'batchQty', sortable: true, filter: true, width: 140 },
    { headerName: '', field: '', width: 40 }
  ];

  rowData1 = [
    { itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '2', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '4', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '5', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' },
    { itemno: '6', productname: 'Rice', productnameArabic: 'qqqqq', configuration: 'Config 1', remQty: '100', unit: 'kg', receivedQty: '50', batchQty: '30' }
  ];
  
  columnDefs2 = [
    { headerName: 'Configuration', field: 'config', sortable: true, filter: true, width: 110 },
    { headerName: 'Batch No.', field: 'batchNo', sortable: true, filter: true, width: 110 },
    { headerName: 'Expiry Date', field: 'expiryDate', sortable: true, filter: true, width: 125 },
    { headerName: 'Quantity', field: 'qty', sortable: true, filter: true, width: 100 },
    { headerName: ' ', field: ' ', width: 490 }
  ];

  rowData2 = [
    { config: 'Config 1', batchNo: 'Batch 01', expiryDate: '15/05/2019', qty: '50' },
    { config: 'Config 2', batchNo: 'Batch 02', expiryDate: '15/05/2019', qty: '100' },
    { config: 'Config 3', batchNo: 'Batch 03', expiryDate: '15/05/2019', qty: '70' },
    { config: 'Config 4', batchNo: 'Batch 04', expiryDate: '15/05/2019', qty: '50' },
    { config: 'Config 5', batchNo: 'Batch 05', expiryDate: '15/05/2019', qty: '80' },
    { config: 'Config 6', batchNo: 'Batch 06', expiryDate: '15/05/2019', qty: '60' }

  ];

 }
