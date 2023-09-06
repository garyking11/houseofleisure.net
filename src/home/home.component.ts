import { Component, OnInit } from '@angular/core';
import {GetDataService} from './get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _getDataService: GetDataService) {
  }

  public pagedata: any;

  ngOnInit() {
    this.getContent();
  }

  getContent() {

    this._getDataService.getContentData().subscribe(
        data => {

          this.pagedata = data.data[0];
          console.log(this.pagedata);

        },
        error => console.log(error)
    );

    return this.pagedata;
  }

}
