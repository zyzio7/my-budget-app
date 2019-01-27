import {Component, OnInit} from '@angular/core';
import {Bill} from './bill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-budget';
  bills: Bill[];

  ngOnInit(): void {
    this.bills = [
      {
        'date': new Date(), 'entries': [{
          'name': 'produkt 1000',
          'value': 50
        },
          {
            'name': 'produkt 2',
            'value': 20
          }]
      },
      {
        'date': new Date(), 'entries': [{
          'name': 'produkt 10',
          'value': 1000
        },
          {
            'name': 'produkt 12',
            'value': 1200
          }]
      }
    ];
  }


}
