import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class ByCapitalComponent {


  constructor(private _countryService: CountryService) {}

  q: string = "";
  isErr: boolean = false;
  countries: Country[] = [];
  countriesSuggested: Country[] = [];
  word: string = "";
  showSuggestions: boolean = false;

  suggestion(event:string):void{
    if(event.trim().length === 0){
      this.showSuggestions = false;
      return;
    }
    this.showSuggestions = true;
    this.word = event;
    this.isErr = false;
    console.log('suggestion: ',event);
    this._countryService.searchCountryByCapital(event).subscribe(countries => {
      try {
        this.countriesSuggested = countries.splice(0,5);  
      } catch (error) {
        this.countriesSuggested = [];  
      }
      
    }, (err)=>{
      this.countriesSuggested = [];
    })
    
  }
  
  search(q:string):void{
    this.showSuggestions = false;
    this.q = q;
    this.isErr = false;

    const observable = this._countryService.searchCountryByCapital(this.q);
    observable.subscribe((res)=>{
      if(res.length === undefined || res.length === 0){
        this.isErr = true;
        return;
      }
      this.countries = res;
    },(err)=>{
      // console.log(err);
      this.countries = [];
      this.isErr = true;
      
    })
    
    
  }

  searchWord(q:string):void{
    this.search(q);
    
  }

}
