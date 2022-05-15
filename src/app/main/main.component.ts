import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn()){
      this.auth.logout();
    }
  }

}
