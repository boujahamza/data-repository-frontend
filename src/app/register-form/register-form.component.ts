import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  password_confirm = new FormControl('');
  registerSuccess = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public attemptRegister() {
    let username = this.username.value;
    let email = this.email.value;
    let password = this.password.value;
    let password_confirm = this.password_confirm.value;

    if(password == password_confirm){
      this.auth.register(username, email, password).subscribe({
        next: authResult => {
          this.auth.setSession(authResult);
          this.registerSuccess = true;
          this.router.navigateByUrl('/');
        },
        error: error => {
          this.registerSuccess = false;
        }
      });
    }else{
      //handle unmatching passwords
    }
      
  }

}
