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
export class SigninComponent {
  
}
