import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../bill';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillsListComponent implements OnInit {

  @Input() bills: Bill[]

  constructor() { }

  ngOnInit() {
  }

}
