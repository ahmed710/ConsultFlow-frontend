import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.html',
  styleUrl: './authentication-layout.scss',
  standalone: false
})
export class AuthenticationLayout implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //document.body.classList.add('main-body', 'login-page');
    // document.body.classList.remove('horizontal');
  }

  ngOnDestroy(): void {
    //document.body.classList.remove('main-body', 'login-page');
  }

}
