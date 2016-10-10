/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Movie} from './movie';

describe('Movie Class > ', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let movie = new Movie({
      title: 'hello',
      release: '12-21-2015'
    });
    expect(movie.title).toEqual('hello');
    expect(movie.release).toEqual('12-21-2015');
  });
});
