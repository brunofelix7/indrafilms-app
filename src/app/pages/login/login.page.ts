import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ApiService, private storage: Storage, private router: Router) {
    storage.get('token').then(data => {
      if (data != null) {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() { }

  login() {
    this.isLoading = true;
    this.service.login(this.user).subscribe(
      data => {
        this.storage.set('token', data.body.token);
        this.isLoading = false;
      },
      error => {
        console.log('Oops! ' + error);
        this.isLoading = false;
      });
  }
}

//  https://github.com/ionic-team/ionic-storage
