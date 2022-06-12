import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileName = '';

  fileHandlerUrl = "http://localhost:4000/file";

  constructor(private http: HttpClient,private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn()){
      this.router.navigateByUrl("/");
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();
      formData.append("data", file);

      const upload$ = this.http.post(this.fileHandlerUrl, formData);
      upload$.subscribe();
    }
  }
}
