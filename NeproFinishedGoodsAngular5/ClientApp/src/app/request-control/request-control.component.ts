import { Component } from '@angular/core';

@Component({
    selector: 'app-request-control',
    templateUrl: './request-control.component.html'
   
})
/** requestControl component*/
export class RequestControlComponent {
  constructor() {

  }

  public show: boolean = false;
  public hide: boolean = true;

  //showhide() {
  //  this.show = true;
  //  this.hide = false;  
  //}
  //showhide2() {
  //  this.show = false;
  //  this.hide = true;    
  //}
  //columnDefs = [
  //  { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
  //  { headerName: 'Item No.', field: 'itemno', sortable: true, filter: true, width: 100 },
  //  { headerName: 'Product Name', field: 'productname', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Item Comment', field: 'itemcomment', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Site Requested Quantity', field: 'siteRequestedQuantity', sortable: true, filter: true, width: 220 },
  //  { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, width: 120 },
  //  { headerName: 'Unit', field: 'unit', sortable: true, filter: true, width: 90 },
  //  { headerName: 'Available in requested warehouse', field: 'requestedAvailability', sortable: true, filter: true, width: 225 },
  //  { headerName: 'Availability in branch', field: 'branchAvailability', sortable: true, filter: true, width: 200 },
  //  { headerName: 'Requested Quantity', field: 'requestedQuantity', sortable: true, filter: true, width: 200 },
  //  { headerName: 'Attachment', field: 'attachment', sortable: true, filter: true, width: 100 },
  //  { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 85 },
  //  { headerName: 'Transfer Order No.', field: 'transferOrderNo', sortable: true, filter: true, width: 150 }

  //];

  //rowData = [
  //  { all: " ", checkboxSelection: true, itemno: '1', productname: 'Rice', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '2', productname: 'Pulse', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '3', productname: 'Rice', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '4', productname: 'Grapse', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '5', productname: 'Potato', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },
  //  { all: " ", checkboxSelection: true, itemno: '6', productname: 'Chilly', itemcomment: '200', siteRequestedQuantity: '150', warehouse: '20', unit: 'kg', requestedAvailability: '50', branchAvailability: '30', requestedQuantity: '100', attachment: 'Doc19998', status: 'Active', transferOrderNo: 'TON19998' },

  //];

  //columnDefs1 = [
  //  { headerName: "All", checkboxSelection: true, field: "all", width: 70 },
  //  { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 125 },
  //  { headerName: 'Request Name', field: 'requestname', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 120 },
  //  { headerName: 'Requested Date', field: 'requesteddata', sortable: true, filter: true, width: 150 },
  //  { headerName: 'Requesting Warehouse', field: 'requestingwarehouse', sortable: true, filter: true, width: 180 },
  //  { headerName: 'Requested Submitted Date', field: 'submitteddata', sortable: true, filter: true, width: 190 },
  //  { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 90 }
  



  //];

  //rowData1 = [
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active' },
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active' },
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active' },
  //  { all: " ", checkboxSelection: true, requestno: '1', requestname: 'Rice', createdby: '200', requesteddata: '12-03-2019', requestingwarehouse: '20', submitteddata: '12-03-2019', status: 'Active'},

  //];
 

  columnDefs3 = [
    { headerName: 'Request No.', field: 'requestno', sortable: true, filter: true, width: 110 },
    { headerName: 'Created By', field: 'createdby', sortable: true, filter: true, width: 100 },
    { headerName: 'Created On', field: 'requesteddata', sortable: true, filter: true, width: 130 },
    { headerName: 'Submitted Date', field: 'submitteddata', sortable: true, filter: true, width: 180 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 80 },
    { headerName: '', field: '', width: 355 }

  ];

  rowData3 = [
    { requestno: '1', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '2', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '3', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '4', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '5', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },
    { requestno: '6', createdby: 'Fateh', requesteddata: '15-02-2017', submitteddata: '15-02-2017', status: 'Active' },

  ];

}
