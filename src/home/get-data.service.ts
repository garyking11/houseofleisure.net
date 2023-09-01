import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
declare var $: any;

@Injectable()
export class GetDataService {

  // public data;
  constructor(private _http: Http) {
    // console.log('getDataService Constructor');
  }

  getContentData(): Observable<any> {

  const page = this._http.get('/data/pages.json').map(res => res.json());
  console.log(page);
  return page;
  }
}
