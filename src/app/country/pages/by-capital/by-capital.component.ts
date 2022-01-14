import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {


  constructor(private _countryService: CountryService) {}

  q: string = "";
  isErr: boolean = false;
  countries: Country[] = [];

  suggestion(event:string):void{
    this.isErr = false;
    console.log('suggestion: ',event);
    
  }
  
  search(q:string):void{
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

}
