import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/service/auth.service';
import {LoginRequest} from '../../shared/model/login/login-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: new FormControl('marcus.svensson@mailinator.com', [Validators.required, Validators.email]),
      password: new FormControl('test-test', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public loginUser(): void {
    const email: string = this.form.get('email').value;
    const password: string = this.form.get('password').value;
    const request: LoginRequest = new LoginRequest(email, password);

    this.authService.loginUser(request)
      .then(loginResponse => {
        this.router.navigate(['/list']);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
