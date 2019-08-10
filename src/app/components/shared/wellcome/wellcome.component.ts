import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  hideWelCome() {
    $('#wellcome').slideUp();
  }

}
