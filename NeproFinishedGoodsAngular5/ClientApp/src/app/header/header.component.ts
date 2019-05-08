import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { strictEqual } from 'assert';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
/** header component*/
export class HeaderComponent implements OnInit {

 
  ChangePassword: FormGroup;
  formbuilder: FormBuilder;
  myAppUrl: string = "";
  currentPass: any;
  newPass: any;
  cnfrmPass: any;
  uName = sessionStorage.getItem('username');
  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string, private _router: Router) {
    this.uName = sessionStorage.getItem('username');
  }
  logout() {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

  ngOnInit() {

    this.ChangePassword = new FormGroup({
      currentPass: new FormControl(),
      newPass: new FormControl(),
      confirmPass: new FormControl()
    })

  }
  changePassword() {

    var CurrentPwd = this.ChangePassword.controls.currentPass.value;
    var Password = this.ChangePassword.controls.newPass.value;
    var cpass = this.ChangePassword.controls.confirmPass.value;
    var EmailId = sessionStorage.getItem('username');
    if (EmailId == "" || EmailId == null) {
      alert("Please Login");
    }
    else {
      if (Password == cpass) {


        var data: {
          Password: string;
          EmailId: string;
          CurrentPwd: string;
        } = {
          Password: Password + "_" + CurrentPwd,
          EmailId: EmailId,
          CurrentPwd: CurrentPwd
        };



        this.http.post(this.myAppUrl + "api/controller/ChangePassword", data)
          .subscribe(data => {

            if (data['_body'] == "success") {
              sessionStorage.clear();
              this._router.navigate(['/login']);
            }
            else {

              alert(data['_body']);
            }
          })
      }
      else {
        alert('NewPassword and Confirm Password Not Match');
      }
    }

  }
}

