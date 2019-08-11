import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  press = new EventEmitter<string>();
  keyword: string;

  constructor() {
  }

  ngOnInit() {
  }
  doSearch(){
    this.press.emit(this.keyword);
  }


}
