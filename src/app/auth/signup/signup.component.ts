import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISignup } from 'src/app/models/auth.model';
import { AuthService } from '../auth.service';
import { MatchPasswordValidator } from '../validators/match-password-validator';
import { PasswordValidators } from '../validators/password-validators';
import { UsernameValidators } from '../validators/username-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  username = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)],[this.usernameValidator.validate])
  password = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20),PasswordValidators.validate])
  passwordConfirmation = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)])
  
  authForm = new FormGroup({
    username:this.username,
    password: this.password,
    passwordConfirmation: this.passwordConfirmation

  },[MatchPasswordValidator.match('password','passwordConfirmation')])
  constructor(private usernameValidator:UsernameValidators,private auth: AuthService){
  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.authForm.invalid){
      return
    }
    this.auth.signup(this.authForm.value as ISignup).subscribe({
      next:(resp)=>{
        console.log(resp)
      },
      error:(err)=>{

      }
    })
  }
}
