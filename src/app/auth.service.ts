import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authHost = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    return this.http.post(this.authHost, {"email": email, "password": password}).subscribe(authResult => this.setSession);
  }

  public setSession(authResult: any) {
    const expiresAt = (new Date).getTime() + authResult.expiresIn;

    localStorage.setItem('id_token', authResult.user.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

}
