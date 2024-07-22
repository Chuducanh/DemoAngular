import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isFocused: boolean = false;

  constructor(private router: Router) { }

  login(loginForm : any) {
    if (loginForm.invalid) {
      return;
    }
    this.router.navigate(['home'])
  }

  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
    ]),
  })

  onBlur() {
    this.isFocused = false;
  }

  onFocus() {
    this.isFocused = true;
  }
}
