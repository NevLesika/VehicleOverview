import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;

  /**
   * 
   * @param authService 
   * @param formBuilder 
   * @param router 
   */
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (this.authService.userValue()) {
      this.router.navigate(['./overview']);
    }
  }

  /**
   * 
   */
  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator()]]
    });
  }

  /**
   * Event listener: On form submit
   */
  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const response = this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
    if (response) {
      this.router.navigate(['./overview']);
    }
  }

  /**
   * Custom password validator
   */
  private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;

      if (!password) {
        return null;
      }

      const hasMinLength = password.length >= 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      const isValid = hasMinLength && hasUpperCase && hasNumber && hasSpecialChar;

      return isValid ? null : {
        invalidPassword: {
          hasMinLength: !hasMinLength,
          hasUpperCase: !hasUpperCase,
          hasNumber: !hasNumber,
          hasSpecialChar: !hasSpecialChar
        }
      };
    };
  }
}