import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ThemoviedbService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', 'tab1.page.css']
})
export class Tab1Page implements OnInit {

  movies: any;
  shows: any;
  animes: any;
  animations: any;
  documentarys: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // const movies =this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/movies.json');
    // movies.subscribe(
    //   (data) => console.log(data)
    // );

    //request api data for movies
    const movies =this.http.get('https://raw.githubusercontent.com/justmarvis/bit-box/master/src/assets/data/movies.json');
    movies.subscribe(
      (data) => this.movies = data
    );

  }
}
