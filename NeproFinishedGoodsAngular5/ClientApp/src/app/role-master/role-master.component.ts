import { Component } from '@angular/core';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html'

})
/** requestControl component*/
export class RoleMasterComponent {
  constructor() {

  }

  columnDefs = [
    { headerName: 'Sl No.', field: 'slNo', sortable: true, filter: true, width: 90 },
    { headerName: 'Role', field: 'role', sortable: true, filter: true, width: 190 },
    { headerName: '', field: '', width: 760 }

  ];

  rowData = [
    { slNo: '1', role: 'Material Receipt Note' },
    { slNo: '2', role: 'Batch' },
    { slNo: '3', role: 'Material Required' },
    { slNo: '4', role: 'Received Material Required' },
    { slNo: '5', role: 'Transfer Material Required' },
    { slNo: '6', role: 'Consumption Inventory Counting' },
    { slNo: '7', role: 'Wastage' }

  ];

}
