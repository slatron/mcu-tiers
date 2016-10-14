import { Component, OnInit, Pipe } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  movies: FirebaseListObservable<Movie[]>;
  active: string;
  sortTabs: string[] = [
    'rank', 'title', 'release', 'tomato'
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getFirebaseObservable();
  }

  sortBy(key) {
    this.movies = this.movieService.getFirebaseObservable(key);
  }
}
