import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Input('placeholder')
  placeholder: string = "";
  
  ngOnInit(): void {
    this.debouncer
    .pipe(
        debounceTime(300)
      )
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  @Output()
  onEnter:EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  q: string = "";
  search():void{
    this.onEnter.emit(this.q)
  }


  keyPressed():void{
    this.debouncer.next(this.q);
  }

}
