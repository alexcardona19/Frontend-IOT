import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDTO } from '../Modelos/jwt';
import { Login } from '../Modelos/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

 /*  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  } */

  public login(loginUsuario: Login): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}