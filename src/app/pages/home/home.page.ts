import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: any[];

  constructor(private service: ApiService, private router: Router) {
    this.getMovies();
  }

  showDetails(item: any) {
    const navigationExtras = {
      queryParams: {
        movie: JSON.stringify(item)
      }
    };
    this.router.navigate(['/details'], navigationExtras);
  }

  getMovies() {
    this.service.fetchMovies('').subscribe(
      data => {
        this.movies = data.results;
      },
      error => {
        console.log(error);
    });
  }
}
