import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _baseurl: string = "https://restcountries.com/v2";
  private _params: HttpParams = new HttpParams()
  .set('fields','name,capital,alpha2Code,flag,population')


  constructor(private http: HttpClient) { }

  searchCountryByName(term:string):Observable<Country[]>{

    const url = `${this._baseurl}/name/${term}`;

    return this.http.get<Country[]>(url,{params:this._params});
  }

  searchCountryByCapital(term:string):Observable<Country[]>{
    const url = `${this._baseurl}/capital/${term}`;

    return this.http.get<Country[]>(url,{params:this._params}); 
  }

  searchCountryByRegion(term:string){
    const url = `${this._baseurl}/regionalbloc/${term}`;

    return this.http.get<Country[]>(url,{params:this._params}); 
  }

  getCountryByAlpha(id:string):Observable<Country>{
    const url = `${this._baseurl}/alpha/${id}`;
    return this.http.get<Country>(url); 
  }

  
}
