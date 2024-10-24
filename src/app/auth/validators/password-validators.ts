import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Injectable({
    providedIn:'root',
})
export class PasswordValidators{
    static validate(control:AbstractControl):ValidationErrors | null{
        if(!control.value){
            return null
        }else if(!/[A-Z]/.test(control.value)){
            return {noUppercaseLetter : true}
        }else if(!/[0-9]/.test(control.value)){
            return {noNumber : true}
        }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(control.value)){
            return {noSpecialCharacter:true}
        }else if(!!/[a-z]/.test(control.value)){
            return {noLowercaseLetter:true}
        }else{
            return null
        }
    }
}
