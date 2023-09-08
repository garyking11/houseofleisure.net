import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetBandDataService {

  constructor(private _http: HttpClient) {
  }

  getContentData(): Observable<any> {
    const bandsData = this._http.get('./assets/data/bands-data.json');
    console.log('bands-data')
    console.log(bandsData);
    return bandsData;
  }
}
