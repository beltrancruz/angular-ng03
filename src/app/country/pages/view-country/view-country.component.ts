import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _countryService: CountryService) { }

  country!: Country;

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(
      switchMap(params=> this._countryService.getCountryByAlpha(params.id)),
      tap(console.log)
      )
    .subscribe((res)=> {
      this.country = res;
    })
    
    
    
  }


}
