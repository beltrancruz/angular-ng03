import { Component, Input } from "@angular/core";
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'app-country-table',
    templateUrl: './country-table.component.html',
    styles:[`
        .small-flag{
        width: 50px;
        }
    `]
})
export class CountryTableComponent {
    @Input('array')
    countries: Country[] = [];



}