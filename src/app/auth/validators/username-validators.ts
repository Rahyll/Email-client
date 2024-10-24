import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../auth.service";
@Injectable({providedIn:'root'})
export class UsernameValidators implements AsyncValidator{
    constructor(public auth: AuthService){}
    
    validate = (control:AbstractControl):Observable<ValidationErrors | null> =>{
        return this.auth.checkUsername(control.value).pipe(
            map(()=> null),
            catchError((error)=>{
                if(error.error.username){
                    return of({usernameTaken:true})
                }
                return of({somethingWentWrong:true})
            })
        )
    }
}