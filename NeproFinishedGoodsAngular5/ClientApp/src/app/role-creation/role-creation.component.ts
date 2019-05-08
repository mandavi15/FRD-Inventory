import { Component } from '@angular/core';


@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html'
})
/** itemRequest component*/
export class RoleCreationComponent {
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
  columnDefs = [
    { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, width: 110 },
    { headerName: 'Role', field: 'role', sortable: true, filter: true, width: 200 },
    { headerName: '', field: '', template: `<button class="btn btn-success btn-sm mr-2">View</button><button class="btn btn-success btn-sm">Edit</button>`, width: 150 },
    { headerName: '', field: '', width: 580 }

  ];

  rowData = [
    { warehouse: 'SZP', role: 'Material Receipt Note' },
    { warehouse: 'AL-KM', role: 'Batch' },
    { warehouse: 'AL-A', role: 'Material Required' },
    { warehouse: 'NAR-KM', role: 'Received Material Required' },
    { warehouse: 'NAR-A', role: 'Transfer Material Required' },
    { warehouse: 'MAL', role: 'Consumption Inventory Counting' },
    { warehouse: 'MWH', role: 'Wastage' }

  ];

  columnDefs1 = [
    { headerName: 'Security Role', field: 'securityRole', sortable: true, filter: true, width: 110 },
    { headerName: 'Description', field: 'desc', sortable: true, filter: true, width: 300 },
    { headerName: '', field: '', width: 628 }

  ];

  rowData1 = [
    { securityRole: 'Role 1', desc: 'Description 1' },
    { securityRole: 'Role 2', desc: 'Description 2' },
    { securityRole: 'Role 3', desc: 'Description 3' },
    { securityRole: 'Role 4', desc: 'Description 4' },
    { securityRole: 'Role 5', desc: 'Description 5' },
    { securityRole: 'Role 6', desc: 'Description 6' },
    { securityRole: 'Role 7', desc: 'Description 7' }

  ];

  columnDefs2 = [
    { headerName: 'Warehouse', field: 'warehouse', sortable: true, filter: true, width: 110 },
    { headerName: 'Role', field: 'role', sortable: true, filter: true, width: 200 },
    { headerName: '', field: '', template: `<button class="btn btn-success btn-sm mr-2">View</button><button class="btn btn-success btn-sm">Edit</button>`, width: 150 },
    { headerName: '', field: '', width: 280 }

  ];

  rowData2 = [
    { warehouse: 'SZP', role: 'Material Receipt Note' },
    { warehouse: 'AL-KM', role: 'Batch' },
    { warehouse: 'AL-A', role: 'Material Required' },
    { warehouse: 'NAR-KM', role: 'Received Material Required' },
    { warehouse: 'NAR-A', role: 'Transfer Material Required' },
    { warehouse: 'MAL', role: 'Consumption Inventory Counting' },
    { warehouse: 'MWH', role: 'Wastage' }

  ];
}
