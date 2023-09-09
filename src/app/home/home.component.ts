import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _getDataService: GetDataService) {
  }

  public pagedata: any[];
  public pagedata1: any;
  public pagedata2: any;
  public pagedata3: any;
  public pagedata4: any;
  public pcontnetAll: any;

  ngOnInit() {
    this.getContent();
  }

  getContent() {

    this._getDataService.getContentData().subscribe(
      data => {

        this.pagedata = data;

        this.pagedata1 = Object.keys(this.pagedata).map(it => this.pagedata);
        this.pagedata2 = Object.keys(this.pagedata).map(it => this.pagedata);
        this.pagedata3 = Object.keys(this.pagedata).map(it => this.pagedata);
        this.pagedata4 = Object.keys(this.pagedata).map(it => this.pagedata);

        this.pagedata1 = this.pagedata1[0].data[0]['pcontent1'];
        this.pagedata2 = this.pagedata2[0].data[0]['pcontent2'];
        this.pagedata3 = this.pagedata3[0].data[0]['pcontent3'];
        this.pagedata4 = this.pagedata4[0].data[0]['pcontent4'];

      },
      // error => console.log(error)
    );


    return this.pagedata1, this.pagedata2,  this.pagedata3, this.pagedata4;
  }

}
