import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-login',
  templateUrl: './check-login.component.html',
  styleUrls: ['./check-login.component.scss']
})
export class CheckLoginComponent implements OnInit {

  showloading: boolean = false;
  errorList: boolean = false;
  usernameInvalid: boolean = false;
  formData: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {
    this.formData = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      username: ['', Validators.required],
      // Other form controls...
    });
  }

  checkLogin(): void {
    debugger
    if (this.formData.valid) {
      this.showloading = true;
      const username = this.formData.value.username;
  
      this.authService.checkLogin(username).subscribe(
        (res) => {
          if (res && res.status === 200) {
            switch (res.body.data) {
              case 1: // 1 = REDIRECTTOPASSWORD
              this.otp(username)
              break;
              case 2: // 2 = REDIRECTTOREGISTER
              this.router.navigate(["register"],
              {
                state:
                {
                  username: username,
                }
              });
                break;
                case 3: // 3 = CONFIRMCODE
                this.otp(username);
                this.showloading = false    
                break;
            }
          } else {
            console.error('Invalid response:', res);
          }
          this.showloading = false; // Hide loading indicator after processing response
        },
        (err) => {
          console.error('Error during login check:', err);
          // Handle error (show a notification, etc.)
          this.showloading = false; // Hide loading indicator in case of error
        }
      );
      
    } else {
      this.errorList = true;
    }
  }
  
  
  
  

  otp(username : string) {
    // Set loading indicator to true
    this.showloading = true;

    // Call the post method from your authentication service
    this.authService.otpPost(username).subscribe(res => {
      if (res.status == 200) {
        // this.apiCall.notification('success', 'انتقال', res.body.message)
        this.router.navigate(["otp"],
          {
            state:
            {
              resendToken: res.body.data.resendToken,
              username: username,
              // lastPage: this.lastPage ? this.lastPage : null

            }
          });
      }
      // else {
      //   this.apiCall.notification('danger', 'خطا ' + res.status, res.error ? res.error.message : res.body.message)
      // }
      this.showloading = false;
    })
  }
}
