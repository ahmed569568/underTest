import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeWhile, finalize, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {


  myForm: FormGroup;
  alive = true;

  loginUserData = {}


  get password() {
    return this.myForm.get('password')
  }
  get email() {
    return this.myForm.get('email')
  }


  constructor(private authServices: AuthService,
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.pattern('.*com$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      remember: true
    })
  }

  onSubmit() {
    this.authServices.login(this.myForm.value)
    .pipe(
      takeWhile(() => this.alive),
      finalize(() => console.log('Request Finished!')),
      map(res => {
        return { role: res, modified: 'yes' }
      }),
      )
      .subscribe(res => {
        console.log(res)
      })
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
