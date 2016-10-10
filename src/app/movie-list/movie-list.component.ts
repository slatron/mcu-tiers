import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  movies: FirebaseListObservable<Movie[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getFirebaseObservable();
  }
}
