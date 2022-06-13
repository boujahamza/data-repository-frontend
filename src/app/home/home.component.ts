import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  files: Array<any> = [];

  constructor(private fileService: FileService, private auth: AuthService) { }

  async ngOnInit() {
    this.files = await this.fileService.getAllFiles().toPromise() || [];
    this.files = await Promise.all(this.files.map(async (file) => {
      file.username = await this.auth.getUsernameFromId(file.user_id);
      return file;
    }))
  }

}
