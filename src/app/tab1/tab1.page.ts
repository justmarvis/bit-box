import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', 'tab1.page.css']
})
export class Tab1Page implements OnInit {

  modelType: 'movie';
  users: any;

  constructor(private service: ThemoviedbService) {}

  ngOnInit(): void {
    // this.service.getMovieList(this.modelType).subscribe(tredingMoviesEl => {
    //   console.log(tredingMoviesEl);
    // });
    this.service.getMovieList(this.modelType).subscribe(tredingMoviesEl => this.users = tredingMoviesEl);
  }

  // initializeSliderContainer() {
  //       this.service.getMovieList(this.modelType).subscribe(tredingMoviesEl => {
  //         console.log(tredingMoviesEl);
  //       });
  //     }
}
