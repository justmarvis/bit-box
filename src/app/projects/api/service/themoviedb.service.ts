import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  movies: any;

  constructor(private http: HttpClient) { }


  getMovieList(type: string): Observable<any> {
    const requestURL = 'https://api.themoviedb.org/3/movie/550?api_key=952bea0dd4c61ddda8073e7223e22c62';
    return this.http.get(requestURL);
  }

  // getTrendingList(type: string): Observable<any> {
  //   const requestURL = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&language=en-US`;
  //   return this.http.get(requestURL);
  // }


  // getDetailList(type: string, id: string): Observable<any> {
  //   const requestURL = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`;
  //   return this.http.get(requestURL);
  // }

  // getCreditList(type: string, id: string): Observable<any> {
  //   const requestURL = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=en-US`;
  //   return this.http.get(requestURL);
  // }

  // getVideoList(type: string, id: string): Observable<any> {
  //   const requestURL = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`;
  //   return this.http.get(requestURL);
  // }

  // getRecommendationList(type: string, id: string): Observable<any> {
  //   const requestURL = `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${apiKey}&language=en-US`;
  //   return this.http.get(requestURL);
  // }
}
