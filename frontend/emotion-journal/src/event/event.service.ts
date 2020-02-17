import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';

import * as moment from 'moment';

const EVENT_RUD_URL = "event/";
const EVENT_FILTER_URL = "event/";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: SyncService) { }


  update_event(id: number, text: string) {
    const json_body = {
      'text': text,
    };
    this.http.patch(EVENT_RUD_URL + id.toString() + '/', json_body).subscribe();

  }

  filter_events(tags, date_from, date_to) {
    var params = {};
    if (tags.length > 0) {
      params['tags'] = tags[0]['type'] + ':' + tags[0]['name'];
      for (var i = 1; i < tags.length; i++) {
        params['tags'] += ',' + tags[i]['type'] + ':' + tags[i]['name'];
      }
    }

    if (date_from && date_to) {
      params['entry__datetime__range'] = moment(date_from).format('YYYY-MM-DD') + ',' + moment(date_to).format('YYYY-MM-DD');
    }
    
    return this.http.get(EVENT_FILTER_URL,params);
  }
}
