import { Injectable, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AlertService } from './alert.service';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';

@Injectable()
export class AuthService implements OnInit {

  private _token: string;

  constructor(private alert: AlertService) {
  }

  ngOnInit() {
    this._token = localStorage.getItem('token');
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
    localStorage.setItem('token', this._token);
  }

  public isUserLoggedIn() {
    const jwt = new JwtHelper();

    if (!this._token) return false;

    try {
      return jwt.isTokenExpired(this._token);
    } catch (e) {
      return false;
    }
  }

  public showLoginDialog() {
    this.alert.showDialog(LoginDialogComponent, {});
  }
}
