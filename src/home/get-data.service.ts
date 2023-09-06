import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
declare var $: any;

@Injectable()
export class GetDataService {

  constructor(private _http: Http) {
  }

  getContentData(): Observable<any> {
  const page = this._http.get('/data/pages.json').map(res => res.json());
  return page;
  }
}
