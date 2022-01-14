import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit {

  countries: Country[] = [];
  regions: string[] = [
    'EU', // (European Union)
    'EFTA', // (European Free Trade Association)
    'CARICOM', // (Caribbean Community)
    'PA', // (Pacific Alliance)
    'AU', // (African Union)
    'USAN', // (Union of South American Nations)
    'EEU', // (Eurasian Economic Union)
    'AL', // (Arab League)
    'ASEAN', // (Association of Southeast Asian Nations)
    'CAIS', // (Central American Integration System)
    'CEFTA', // (Central European Free Trade Agreement)
    'NAFTA', // (North American Free Trade Agreement)
    'SAARC' //(South Asian Association for Regional Cooperation)
  ];
  activeRegion: string = "";

  selectRegion(region:string):void{
    if(this.activeRegion === region){
      return;
    }
    this.activeRegion = region;
    this._countryService.searchCountryByRegion(region).subscribe(res=>{
      this.countries = res;
    })
  }

  getCssActive(item:string):string{
    return item === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
  }

}
