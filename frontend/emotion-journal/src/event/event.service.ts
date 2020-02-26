import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';

import * as moment from 'moment';
import { map } from 'rxjs/operators';

const EVENT_RUD_URL = "event/";
const EVENT_FILTER_URL = "event/";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: SyncService) { }


  update_event(id: number, text: string) {
    const json_body = {
      'text': this.http.encrypt(text),
    };
    this.http.patch(EVENT_RUD_URL + id.toString() + '/', json_body).subscribe();

  }

  filter_events(tags, date_from, date_to) {
    /* 
      encodeURIComponent is used to encode the ENCRYPTED STRINGS (which contain reserved characters)
      so that they can be passed on as GET parameters without deformation.  
    */
    var params = {};
    if (tags.length > 0) {
      params['tags'] =  encodeURIComponent(this.http.encrypt(tags[0]['type'],true)) + 
                        ':' + 
                        encodeURIComponent(this.http.encrypt(tags[0]['name'],true));

      for (var i = 1; i < tags.length; i++) {
        params['tags'] += ',' +
                          encodeURIComponent(this.http.encrypt(tags[0]['type'],true)) + 
                          ':' + 
                          encodeURIComponent(this.http.encrypt(tags[0]['name'],true));
      }
    }

    if (date_from && date_to) {
      params['entry__datetime__range'] = moment(date_from).format('YYYY-MM-DD') + ',' + moment(date_to).format('YYYY-MM-DD');
    }
    
    return this.http.get(EVENT_FILTER_URL,params)
    .pipe(
      map(
        json =>{
          for(var i=0;i<Array(json).length;i++){
            json[i]['text']=this.http.decrypt(json[i]['text']);
            for(var j=0;j<json[i]['tags'].length;j++){

              json[i]['tags'][j]['type']=
                this.http.decrypt(json[i]['tags'][j]['type']);

              json[i]['tags'][j]['name']=
                this.http.decrypt(json[i]['tags'][j]['name']);  
            }
          }
          return json;
        }
      )
    ); ;
  }
}


/*
EVENT FILTER GET REQUEST:
localhost:8000/api/event/?tags=person:happy,emotion:sad
*/