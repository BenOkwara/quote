import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Amy Tan', 'Our uniqueness makes us special, makes perception valuable - but it can also make us lonely. This loneliness is different from being Alone: You can be lonely even surrounded by people. The feeling Im talking about stems from the sense that we can never fully share the truth of who we are. I experienced this acutely at an early age.'),
    new Quote(2, 'Albert Schweitzer', 'In everyone’s life, at some time, our inner fire goes out. It is then burst into flame by an encounter with another human being. We should all be thankful for those people who rekindle the inner spirit.'),
    new Quote(3, 'George Sand', 'Simplicity is the most difficult thing to secure in this world; it is the last limit of experience and the last effort of genius.'),
    new Quote(4, 'Hudson Taylor', 'Carrying the cross does mean following in Jesus footsteps. And in His footsteps are rejection, brokenheartedness, persecution and death. There are not two Christs - an easy going one for easy going Christians, and a suffering one for exceptional believers. There is only one Christ. Are we willing to follow His lead?'),
    new Quote(5, 'Hudson Taylor', 'The Great Commission is not an option to be considered; it is a command to be obeyed.'),
  ]


  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
