import { Component, OnInit } from '@angular/core';
import {GetDataService} from "./get-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //template: '<p>This is a test</p>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _getDataService:GetDataService,) {
  }

  private pagedata;


  ngOnInit() {
    this.getContent();
  }

  getContent() {

    this._getDataService.getContentData().subscribe(
        res => {

          this.pagedata = res.data[0];
          console.log(this.pagedata);
        },
        error => console.log(error)
    );

    return this.pagedata;
  }

}
