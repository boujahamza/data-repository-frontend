import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileHost = "http://localhost:4000/files";

  constructor(private http: HttpClient) { }

  getAllFiles() {
    return this.http.get<Array<any>>(this.fileHost);
  }
}
