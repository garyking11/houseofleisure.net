import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetDataService {

  constructor(private _http: HttpClient) {
  }

  getContentData(): Observable<any> {
  const page = this._http.get('./assets/data/pages.json');
  console.log('page-data')
  console.log(page)
  return page;
  }
}
