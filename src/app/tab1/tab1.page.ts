import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ThemoviedbService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', 'tab1.page.css']
})
export class Tab1Page implements OnInit {

  news: any;
  forYous: any;
  movies: any;
  shows: any;
  animes: any;
  animations: any;
  documentarys: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    //test request api for movies
    // const movies =this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/movies.json');
    // movies.subscribe(
    //   (data) => console.log(data)
    // );

    //request api data for news
    const news = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/new.json');
    news.subscribe(
    (data) => this.news = data
    );

    //request api data for movies
    const movies = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/movies.json');
    movies.subscribe(
      (data) => this.movies = data
    );

    //request api data for shows
    const shows = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/shows.json');
    shows.subscribe(
    (data) => this.shows = data
    );

    //request api data for forYous
    const forYous = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/fy.json');
    forYous.subscribe(
    (data) => this.forYous = data
    );

    //request api data for animes
    const animes = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/anime.json');
    animes.subscribe(
    (data) => this.animes = data
    );

    //request api data for documentarys
    const documentarys = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/documentary.json');
    documentarys.subscribe(
    (data) => this.documentarys = data
    );

    //request api data for animations
    const animations = this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/animation.json');
    animations.subscribe(
      (data) => this.animations = data
    );

  }
}
