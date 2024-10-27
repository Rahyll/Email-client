import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  signedin$?:Observable<boolean>
  constructor(public auth:AuthService){}

  ngOnInit(): void {
    this.signedin$ = this.auth.signedin$
  }
}
