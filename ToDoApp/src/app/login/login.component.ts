import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: null,
    password: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    if (this.user.username === 'admin' && this.user.password === 'admin') {
      const key = btoa(btoa(this.user.username) + '??' + btoa(this.user.password));
      sessionStorage.setItem('sessionID', key);
      this.router.navigate(['list']);
    } else {
      alert('Username or password is incorrect');
    }
  }
}
