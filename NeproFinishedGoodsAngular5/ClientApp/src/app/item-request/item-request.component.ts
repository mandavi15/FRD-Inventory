import { Component } from '@angular/core';


@Component({
    selector: 'app-item-request',
    templateUrl: './item-request.component.html'
})
/** itemRequest component*/
export class ItemRequestComponent {
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
    { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, editable: true, width: 90 },
    { headerName: 'Item Name', field: 'productname', sortable: true, filter: true, editable: true, width: 100 },
    { headerName: 'Item Name(A)', field: 'productnameArabic', sortable: true, filter: true, editable: true, width: 125 },
    { headerName: 'Warehouse', field: 'toWarehouse', sortable: true, filter: true, editable: true, width: 120 },
    { headerName: 'Unit', field: 'unit', sortable: true, filter: true, editable: true, width: 70 },
    { headerName: 'Availability in req. W/H', field: 'availability', sortable: true, filter: true, editable: true, width: 165 },
    { headerName: 'Availability in Branch', field: 'availabilityBranch', sortable: true, filter: true, editable: true, width: 155 },
    { headerName: 'Requested Qty', field: 'requestedQty', sortable: true, filter: true, editable: true, width: 125 },
    { headerName: 'Reason', field: 'reason', sortable: true, filter: true, editable: true, width: 90 }
  ];

  rowData = [
    { itemno: '1', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', reason: 'reason 1'},
    { itemno: '2', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', reason: 'reason 1'},
    { itemno: '3', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', reason: 'reason 1'},
    { itemno: '4', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', reason: 'reason 1'},
    { itemno: '5', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', reason: 'reason 1'},
    { itemno: '6', productname: 'Rice', productnameArabic: 'qqqqq', toWarehouse: 'XYZ', unit: 'kg', availability: '100', availabilityBranch: '50', requestedQty: '40', reason: 'reason 1'}
   
  ];

  columnDefs1 = [
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 110 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 100 },
    { headerName: 'Created On', field: 'requesteddata', sortable: true, filter: true, width: 130 },
    { headerName: 'Submitted Date', field: 'submitteddata', sortable: true, filter: true, width: 180 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 80 },
    { headerName: '', field: '', width: 430 }
    

  ];

  rowData1 = [
    { requestno: '1', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '2', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '3', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '4', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '5', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '6', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },

  ];
}
