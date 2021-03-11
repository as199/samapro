import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: { username: string; password: string } = {
    username: '',
    password: '',
  };
  submitted = false;

  constructor(public router: Router) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    this.submitted = true;
    console.log(form.value);

    this.router.navigateByUrl('/tabs-admin/admin-system');
  }
}
