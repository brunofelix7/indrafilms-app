import { Component, OnInit } from '@angular/core';
import { User } from './../../model/user';
import { ApiService } from './../../services/api.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = { email: '', password: '' };
  isLoading: boolean;

  constructor(private service: ApiService,
    private storage: Storage,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn();
  }

  login() {
    this.isLoading = true;
    this.service.login(this.user).subscribe(
      data => {
        this.storage.set('token', data.body.token);
        this.router.navigate(['/home']);
        this.isLoading = false;
      },
      error => {
        console.log('Oops! ' + error);
        this.isLoading = false;
      });
  }

  isLoggedIn() {
    this.storage.get('token').then(data => {
      if (data != null) {
        this.router.navigate(['/home']);
      }
    });
  }
}

//  https://github.com/ionic-team/ionic-storage
