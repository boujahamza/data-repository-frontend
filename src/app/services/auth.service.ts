import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authHost = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  public register(username: string, email: string, password: string) {
    return this.http.post(this.authHost+"/register", {username: username, email: email, password: password});
  }

  public login(email: string, password: string) {
    return this.http.post(this.authHost+"/login", {"email": email, "password": password});
  }

  public setSession(authResult: any) {
    const expiresAt = (new Date).getTime() + authResult.expiresIn;
    
    localStorage.setItem('id_token', authResult.user.token);
    localStorage.setItem('username', authResult.user.username);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  getUsername() {
    return localStorage.getItem("username");
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("username");
    localStorage.removeItem("expires_at");
  }
  
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || "0";
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }    


  async getUsernameFromId(user_id: string) {
    let username = await this.http.get(this.authHost + "/username/" + user_id).toPromise();
    return username;
  }
}
