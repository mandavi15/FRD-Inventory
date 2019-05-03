import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { UserAccount } from '../Services/AccountService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { fail } from 'assert';
import { Http } from '@angular/http';

@Component({
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css']
})
/** Login component*/
export class ResetPasswordComponent implements OnInit {
  myAppUrl: string = "";
  userForm: FormGroup;
  submitted = false;
  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string, private formbuilder: FormBuilder, private _employeeService: UserAccount, private _router: Router) {
    this.myAppUrl = baseUrl;
  }


  ngOnInit() {
    
  }

}

