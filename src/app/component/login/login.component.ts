import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errors: string = '';
  errMessage:any=''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private _AuthService: AuthService, private _router: Router) {}

  loginUser(form: any) {
    const user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this._AuthService.login(user).subscribe(
      (data: any) => {


        if (data.message == 'welcome') {
                this._router.navigate(['home']);
                localStorage.setItem('userToken', data.token);
                this._AuthService.saveUser();
              } else {
                this.errors = data.message;
              }
      },
      (err: HttpErrorResponse) => {
if (err.error.message) {
this.errMessage =err.error.message
}

      }
    );

  }
}
