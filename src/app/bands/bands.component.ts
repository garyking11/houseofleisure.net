import { Component, OnInit } from '@angular/core';
import {GetBandDataService} from '../services/get-band-data.service';


@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})

export class BandsComponent implements OnInit {

  constructor(private _getDataService: GetBandDataService, ) {
  }

  public banddata: any[];
  public data: any;

  ngOnInit() {
    this.getContent();
  }

  getContent() {

    this._getDataService.getContentData().subscribe(
        data => {

          this.banddata = Object.keys(data).map(it => data[it])
           // console.log(this.banddata);
        },
        error => console.log(error)
    );

    return this.banddata;
  }
}
