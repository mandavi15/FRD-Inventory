import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, AbstractControl } from '@angular/forms';
import { UserAccount } from '../Services/AccountService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UserModel } from '../Models/UserModel';
import { ColumnApi, GridApi } from 'ag-grid-community';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'

})
/** user component*/
export class UserComponent implements OnInit {



  showhide() {
    this.show = true;
    this.hide = false;

  }
  showhide2() {
    this.show = false;
    this.hide = true;

  }
  /** user ctor */
  addressApi: GridApi[];
  addressColumnApi: ColumnApi;
  UserRes: UserModel[];
  myAppUrl: string = "";
  userForm: FormGroup;
  submitted = false;
  control: AbstractControl;
  temp: any;
  userId: any;
  rowSelection: any;
  //public show: boolean = false;
  //public hide: boolean = true;
  show: boolean;
  hide: boolean;


  constructor(private formbuilder: FormBuilder, private _employeeService: UserAccount, private _router: Router, private http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
    this.rowSelection = "multiple";
    this.show = false;
    this.hide = true;
  }




  ngOnInit() {
    this.userForm = this.formbuilder.group({
      username: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required],
      userpin: ['', Validators.required],
      StorePicker: ['', Validators.required],
      InventoryController: ['', Validators.required]

    });

    this.BindUserGrid();
    //this.filldata();
  }
  get f() { return this.userForm.controls; }
  public filldata() {
    this.userForm.patchValue({
      'username': 'abc',
    })
  }
  save() {
    this.submitted = true;

    if (!this.userForm.valid) {
      return;
    }
    //this._employeeService.saveUser(this.userForm.value)
    //  .subscribe(() => {
    //    alert('Data saved Successfully');
    //    this.userForm.reset();

    //  });
    this.http.post(this.myAppUrl + 'api/controller/CreateUser', this.userForm.value).subscribe((data) => {

      this.BindUserGrid();

      alert("User Registered successfully");
      // gridOptions.api.setRowData(gridOptions.rowData1)
      this.userForm.reset();

    });
  }

  DeleteUser() {
    if (this.userId == "" || this.userId == null) {
      alert("Please select a Row");
      return;
    }
    else {
      this.http.get(this.myAppUrl + "api/controller/DeleteUser/" + this.userId).subscribe((data) => {

        this.BindUserGrid();
        alert("User deleted successfully");
      });
    }
  }



  gridOptions = {
    addressApi: this.addressApi,
    onRowDoubleClicked: this.SelectedRowData,
    rowClicked: this.GetId


  }



  SelectedRowData(row) {
    this.show = true;
    this.hide = false;
    this.temp = row.data;


    alert(this.show);
    // this.filldata();

    //this.userForm.patchValue({

    //  'username': this.temp.userName ,  
    //})
    // this.userForm.get('username').setValue(this.temp.userName);
    // this.userForm.controls['username'].setValue(temp.userName);
    //(<FormControl>this.userForm.controls['username']).setValue(temp.userName);
    //this.userForm.value.username.setValue(temp.userName);
    // this.control.root.get('password').setValue(this.temp.userName);


    alert(this.temp.userName);
    alert(this.temp.userID);
  }


  GetId(row) {

    this.temp = row.data;
    this.userId = this.temp.userID;

  }


  BindUserGrid() {

    this.http.get(this.myAppUrl + 'api/controller/BindUserGrid').subscribe((data) => {

      this.UserRes = data.json();
      this.rowData1 = this.UserRes;
    });


  }

  onAddressGridReady(params) {
    this.addressApi = params.api;
    this.addressColumnApi = params.columnApi;
  }


  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }


  columnDefs1 = [
    { headerName: "UId", field: "userID", hide: true, width: 60 },
    { headerName: 'User Name', field: 'userName', sortable: true, filter: true, width: 200 },
    { headerName: 'E-mail', field: 'emailId', sortable: true, filter: true, width: 220 },
    { headerName: 'User Pin', field: 'userPin', sortable: true, filter: true, width: 200 },
    { headerName: 'Controller', field: 'inventoryController', sortable: true, filter: true, width: 155 },
    { headerName: 'Store Picker', field: 'storePicker', sortable: true, filter: true, width: 155 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 190 }
  ];

  rowData1 = [];


}

