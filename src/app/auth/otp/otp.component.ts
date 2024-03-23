import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otp: any;
  disableButton: boolean = false
  conf: any;
  showloading: any = {
    button: false,
    forget: false,
    otp: false
  }
  resendToken: any;
  username: any;
  private subscription!: Subscription;
  timer: number = 120;
  lastPage: any;
  checkLogin: boolean = false
  constructor(
    private auth:AuthService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.conf = {
      allowNumbersOnly: true,
      length: 6,
      isPasswordInput: false,
      disableAutoFocus: false,
      inputStyles: {
        width: "45px",
        height: "45px",

      },
    };

    this.subscription = interval(1000)
      .subscribe(x => { this.countDown(); });
  }
  countDown() {
    if (this.timer >= 1)
      this.timer = this.timer - 1;
    else if (this.timer == 0) {
      this.subscription.unsubscribe();
    }
  }

  onOtpChange(event:any) {
    this.disableButton = event.length == 6;
    this.otp = event
    // event.length == 6 && this.login()
    if (!this.checkLogin) {
      if (event.length == 6) {
        this.checkLogin = true
        this.login()
      }
    }
  }
  login() {
    debugger
    this.showloading.button = true
    let params = new HttpParams()
      .set('client_id', 'axeto.web.angular')
      .set('client_secret', 'e3d67afe-f982-67ad-23bf-563d3a80b603')
      .set('grant_type', 'phone_number_token')
      .set('scope', 'IdentityServerApi openid offline_access roles')
      .set('phone_number', this.username)
      .set('verification_token', this.otp)

    this.auth.login(params).subscribe(res => {
      // if (res.status) {
      // if (res.status != 200) {
      //   if (res.body.error_description) {
      //     this.apiCall.notification('danger', 'خطا', res.body.error_description)
      //     this.router.navigate(["/panel/login"])
      //   }
      // }

      // } 
      if (!res.status) {
        localStorage.setItem('credential', JSON.stringify(res.body));
        // this.signalrService.connect();
        if (this.lastPage) {
          this.router.navigateByUrl(this.lastPage)

        } else {
          this.router.navigate(["privacy"])
        }
      }
      this.showloading.button = false

    })
  }

  resetTimer(){
    console.log('reset');
    
  }
  password(){
    console.log('password');
    
  }
}
