import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public attemptLogin() {
    let email = this.email.value;
    let password = this.password.value;
    this.auth.login(email, password)
  }

}
