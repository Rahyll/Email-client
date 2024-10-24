import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export class MatchPasswordValidator {
    static match(controlName:string,confirmControlName:string): ValidatorFn {
        return (group:AbstractControl):ValidationErrors|null=>{
            const control = group.get(controlName)
            const matchingControl = group.get(confirmControlName)
            if(!control || !matchingControl) return {controlNotFound: true}
            const error = control.value !== matchingControl.value ? {noMatch:true} : null;
            matchingControl.setErrors(error)
            return error
        }
    }
}
