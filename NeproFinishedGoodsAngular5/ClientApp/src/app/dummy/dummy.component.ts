import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-dummy',
    templateUrl: './dummy.component.html'
 
})
/** dummy component*/
export class DummyComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private components;
  private rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete"
      },
      {
        headerName: "Age",
        field: "age"
      },
      {
        headerName: "Country",
        field: "country"
      },
      {
        headerName: "Year",
        field: "year",
        cellEditor: "yearCellEditor"
      },
      {
        headerName: "Date",
        field: "date"
      },
      {
        headerName: "Sport",
        field: "sport"
      },
      {
        headerName: "Gold",
        field: "gold"
      },
      {
        headerName: "Silver",
        field: "silver"
      },
      {
        headerName: "Bronze",
        field: "bronze"
      },
      {
        headerName: "Total",
        field: "total"
      }
    ];
    this.defaultColDef = {
      editable: true,
      width: 100,
      filter: true
    };
    this.components = { yearCellEditor: getYearCellEditor() };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}

function getYearCellEditor() {
  function YearCellEditor() { }
  YearCellEditor.prototype.getGui = function () {
    return this.eGui;
  };
  YearCellEditor.prototype.getValue = function () {
    return this.value;
  };
  YearCellEditor.prototype.isPopup = function () {
    return true;
  };
  YearCellEditor.prototype.init = function (params) {
    this.value = params.value;
    var tempElement = document.createElement("div");
    tempElement.innerHTML =
      '<div class="yearSelect">' +
      "<div>Clicking here does not close the popup!</div>" +
      '<button id="bt2006" class="yearButton">2006</button>' +
      '<button id="bt2008" class="yearButton">2008</button>' +
      '<button id="bt2010" class="yearButton">2010</button>' +
      '<button id="bt2012" class="yearButton">2012</button>' +
      "<div>" +
      '<input type="text" style="width: 100%;" placeholder="clicking on this text field does not close"/>' +
      "</div>" +
      "</div>";
    var that = this;
    [2006, 2008, 2010, 2012].forEach(function (year) {
      tempElement.querySelector("#bt" + year).addEventListener("click", function () {
        that.value = year;
        params.stopEditing();
      });
    });
    this.eGui = tempElement.firstChild;
  };
  return YearCellEditor;
}
