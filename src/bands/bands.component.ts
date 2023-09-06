import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})

export class BandsComponent implements OnInit {

  constructor(private _getDataService: GetDataService, ) {
  }

  public banddata;
  public data;

  ngOnInit() {
    this.getContent();
  }

  getContent() {

    this._getDataService.getContentData().subscribe(
        data => {
          this.banddata = data;
          // console.log(this.banddata);
        },
        error => console.log(error)
    );

    return this.banddata;
  }
}
