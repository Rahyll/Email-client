import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ISignup, ISignupResponse } from '../models/auth.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = `${environment.baseUrl}/auth`
  signedin$ = new BehaviorSubject(false)
  constructor(private http: HttpClient) { }


  checkUsername(username:string){
    return this.http.post(`${this.authUrl}/username`,{username})
  }

  signup(credentials:ISignup){
    return this.http.post<ISignupResponse>(`${this.authUrl}/signup`,credentials).pipe(tap(()=>{
      this.signedin$.next(true)
    }))
  }
  checkAuth(){
    return this.http.get(`${this.authUrl}/signedin`)
  }
}
