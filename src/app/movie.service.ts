import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MovieService {
  constructor(private af: AngularFire) {}

  getFirebaseObservable(sortBy: string = 'rank'): FirebaseListObservable<Movie[]> {
    return this.af.database.list('/', {
      query: {
        orderByChild: sortBy
      }
    });
  }
}
