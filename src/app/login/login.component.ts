import { Component, OnInit, Input } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() name;

  username: String;
  password: String;


  constructor(/*private authService: AuthService,*/ private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username:  this.username,
      password: this.password
    };

    /*this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        // this.router.navigate(['dashboard']);
        console.log('user logged in');
      } else {
        // this.router.navigate(['login']);
        console.log('user not logged in');
      }
    });*/
  }
}
