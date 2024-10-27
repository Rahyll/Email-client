import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ISignedinResponse, ISignin, ISigninResponse, ISignup, ISignupResponse } from '../models/auth.model';
import { BehaviorSubject, map, tap } from 'rxjs';

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

  signin(credentials:ISignin){
    return this.http.post<ISigninResponse>(`${this.authUrl}/signin`,credentials).pipe(
      tap(()=>{
        this.signedin$.next(true)
      })
    )
  }
  
  checkAuth(){
    return this.http.get<ISignedinResponse>(`${this.authUrl}/signedin`).pipe(
      tap((resp)=>{
        this.signedin$.next(resp.authenticated)
      }),
      map((resp)=>resp.authenticated)
    )
  }
}
