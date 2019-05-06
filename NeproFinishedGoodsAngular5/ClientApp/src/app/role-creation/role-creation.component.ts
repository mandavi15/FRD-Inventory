import { Component } from '@angular/core';


@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html'
})
/** itemRequest component*/
export class RoleCreationComponent {

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
}
