import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() showQuote = new EventEmitter<boolean>();

  quoteShow(show: boolean) {
    this.showQuote.emit(show);
  }
  constructor() { }

  ngOnInit() {
  }

}
