import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements  OnInit {

  registrationForm!: FormGroup; 
  
  username: any;
  // usernameTyp: any = {}
  modalacquaintance: boolean = false;
  showloading: boolean = false
  acquaintanceSelected: any = { id: 0, title: '' };
  // acquaintanceList = acquaintance;
  errorList: any = {};
  showPassword: boolean = false;
  isMobile: boolean = false;

  //form data
  phoneNumber: string | undefined;
  email: string | undefined;
  userNameForm: string = '';
  password: string | undefined;
  fName: string | undefined;
  lName: string | undefined;
  colaps: boolean = false;
  registerPolicies: any;

  constructor(private formBuilder: FormBuilder,
    private auth : AuthService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  get f() { return this.registrationForm.controls; }

  register() {
    debugger
    this.showloading = true;

  if (this.registrationForm.valid) {
    const formData = this.registrationForm.value;
    
    this.auth.register(formData).subscribe(
      (res: any) => {
        if (res.status == 200) {
          // Navigate to the desired route upon successful registration
          this.router.navigate([""]);
        } else {
          if (res.body.errors && res.body.errors.length) {
            for (let i = 0; i < res.body.errors.length; i++) {
              // Handle errors if needed
              this.auth.notification('warning', 'لیست خطا ها', res.body.errors[i]);
            }
          }
        }
        this.showloading = false;
      },
      (err) => {
        console.log('Error occurred:', err);
        // Handle error notifications or other actions if needed
        this.auth.notification('danger', 'خطا', err.error.message);
        this.showloading = false;
      }
    );
  } else {
    // Handle invalid form notifications or other actions if needed
    this.auth.notification('warning', 'اخطار', 'فرم ثبت نام را با دقت تکمیل کنید');
    this.showloading = false;
  }
  }
  
  

  // Define your checkForm method here
  checkForm(): any {
    debugger
    this.errorList = {}
    let data: any = {
      "gender": 0,
      "acceptEULA": true,
      "otherAcquaintanceType": "string"
    }
    if (this.registerPolicies.isPasswordRequired) {
      if (this.checkingPasswordLevel(this.password!)) {
        data.password = this.password; data.confirmPassword = this.password
      }
      else { this.errorList.password = true }
    }
    if (this.registerPolicies.isFirstNameRequired) this.fName ? data.firstName = this.fName : this.errorList.fName = true
    if (this.registerPolicies.isLastNameRequired) this.lName ? data.lastName = this.lName : this.errorList.lName = true
    if (this.registerPolicies.isAcquaintanceRequired) this.acquaintanceSelected.id ? data.acquaintanceType = this.acquaintanceSelected.id : this.errorList.acquaintance = true

    if (this.detectMobile(this.phoneNumber!)) data.phoneNumber = this.phoneNumber;

    // if (this.phoneNumber) {
    //   if (this.detectMobile(this.phoneNumber)) data.phoneNumber = this.phoneNumber;
    //   else this.errorList.phoneNumber = true
    // }

    if (this.registerPolicies.isEmailRequired) {
      if (this.email) {
        if (this.detectEmail(this.email)) data.email = this.email;
        else this.errorList.email = true;
      }
      else this.errorList.email = true;
    }

    if (this.registerPolicies.isUserNameRequired) {
      if (this.detectUserName(this.userNameForm)) data.userName = this.userNameForm;
      else this.errorList.userIsFa = true
    }

    if (this.errorList && (Object.keys(this.errorList).length === 0))
      return data
    else null
  }
  detectUserName(value: string): boolean {
    var p = /^[\u0600-\u06FF\s]+$/;
    var fa = /^[a-zA-Z0-9]{3,100}$/;

    return fa.test(value)
  }
  checkingPasswordLevel(value : string): boolean {
    let level1 = /^(?=.*[a-z])[A-Za-z\d@$!%*?&]{4,32}$/;
    let level2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
    let level3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,32}$/;
    switch (this.registerPolicies.passwordComplexityLevel) {
      case 1:
        if (level1.test(value)) return true
        else
          this.errorList.passwordList = [{ error: 'رمز عبور نامعتبر است' }]

        break;

      case 2:
        if (level2.test(value)) return true
        break;

      case 3:
        if (level3.test(value)) return true
        break;
    }
    return false;
  }

  detectMobile(value :string): boolean {
    let phoneNumberPattern = /^09[0-9]{9}$/;
    return phoneNumberPattern.test(value)
  }
  detectEmail(value:string): boolean {
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailPattern.test(value);
  }
}