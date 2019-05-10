import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { UserAccount } from '../Services/AccountService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { fail } from 'assert';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Login component*/
export class LoginComponent implements OnInit {
  myAppUrl: string = "";
  responcelogin: GetLogin;
  public href: string = "";
  userForm: FormGroup;
  submitted = false;
  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string, private formbuilder: FormBuilder, private _employeeService: UserAccount, private _router: Router) {
    this.myAppUrl = baseUrl;
  }


  ngOnInit() {
    this.href = this._router.url;

    console.log(this._router.url);

    this.userForm = this.formbuilder.group({

      EmailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    });
  }


  LoginUser() {

    if (!this.userForm.valid) {
      return;
    }


    this.http.post(this.myAppUrl + 'api/controller/Login', this.userForm.value)
      .subscribe(data => {

        if (data['_body'] == "success") {


          sessionStorage.setItem('username', this.userForm.controls['EmailId'].value);
          this._router.navigate(['/user']);
         

        }
        else {

          alert(data['_body']);
        }
      }, error => this.errorHandler = error)





  }


  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }



}

export class GetLogin {
  _body: any

  // emailId: string


}
