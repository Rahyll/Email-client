import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../validators/password-validators';
import { UsernameValidators } from '../validators/username-validators';
import { MatchPasswordValidator } from '../validators/match-password-validator';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ISignin, ISignup } from 'src/app/models/auth.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  username = new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)])
  password = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20),PasswordValidators.validate])

  signinForm = new FormGroup({
    username:this.username,
    password:this.password
  })

  constructor(private auth:AuthService){}
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.signinForm.invalid){
      return
    }
    this.auth.signin(this.signinForm.value as ISignin).subscribe({
      //Navigate to some URL
    })
  }
}
