import { Injectable } from '@angular/core';
import { SyncService } from 'src/app/sync.service';
import { map } from 'rxjs/operators';

import * as moment from 'moment';

const ANALYTICS_URL = 'event/analytics/';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: SyncService) { }

  get_type_ratio(search_params: object) {
    
    var params = {
      'analytics_tag_type': this.http.encrypt(search_params['primary_tag_type'], true, true),
    }
    var tags=search_params['tags'];
    var date_from=search_params['date_from'];
    var date_to=search_params['date_to'];
    if (tags.length != 0) {
      var tags = search_params['tags'];
      params['tags'] = this.http.encrypt(tags[0]['type'], true, true) +
        ':' +
        this.http.encrypt(tags[0]['name'], true, true);

      for (var i = 1; i < tags.length; i++) {
        params['tags'] += ',' +
          this.http.encrypt(tags[i]['type'], true, true) +
          ':' +
          this.http.encrypt(tags[i]['name'], true, true);
      }
    }
    
    if (date_from && date_to) {
      params['entry__datetime__range'] = moment(date_from).format('YYYY-MM-DD') + ',' + moment(date_to).format('YYYY-MM-DD');
    }

    return this.http.get(ANALYTICS_URL, params)
      .pipe(
        map(
          (json: object) => {
            var decrypted_array = [];
            for (var key in json) {
              decrypted_array.push({ 'name': this.http.decrypt(key), 'value': json[key] })
            }
            return decrypted_array;
          }
        )
      );
  }
}
