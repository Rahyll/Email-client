import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../validators/password-validators';
import { UsernameValidators } from '../validators/username-validators';
import { MatchPasswordValidator } from '../validators/match-password-validator';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ISignup } from 'src/app/models/auth.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  username = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)],[this.usernameValidator.validate])
  password = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20),PasswordValidators.validate])
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
        //Navigate to some other route
      },
      error:(err)=>{

      }
    })
  }
}
