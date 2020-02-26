import { Injectable } from '@angular/core';

import { SyncService } from '../app/sync.service';
import { map } from 'rxjs/operators';

const TAG_CREATE_URL = 'event/tag/';

const TAG_RUD_URL = 'tag/';

const TAG_AUTOFILL_URL = TAG_RUD_URL + 'autofill/';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: SyncService) { }

  add_tag(base_event_id: number, start_index: number, end_index: number, tag_type: string, tag_name: string) {
    const json_body = {
      "base_event_id": base_event_id,
      "start_index": start_index,
      "end_index": end_index,
      "tags": [
        {
          "type": this.http.encrypt(tag_type,true),
          "name": this.http.encrypt(tag_name,true),
          // TODO: Add provision for text. Which acts like a note to a tag
          // "text": ""
        },
      ]
    }
    return this.http.post(TAG_CREATE_URL, json_body);
  }

  remove_tag(tag_id: number) {
    this.http.delete(TAG_RUD_URL + tag_id.toString() + '/').subscribe();
  }

  get_autofill_data(field: string, type: string) {
    var params = {
      'field': field
    }

    if (type) {
      console.log(type);
      /* 
        encodeURIComponent is used to encode the ENCRYPTED STRINGS (which contain reserved characters)
        so that they can be passed on as GET parameters without deformation.

      */
      params['type'] = encodeURIComponent(this.http.encrypt(type,true));
    }
    return this.http.get(TAG_AUTOFILL_URL, params)
      .pipe(
        map(json => {
          for(var i=0;i<json['values'].length;i++){
            console.log(json['values'][i]);
            json['values'][i]=this.http.decrypt(json['values'][i]);
          }

          return json;
        }
        )
      );

  }

}

/*

ADD_TAG OUTGOING JSON
{
    "base_event_id": 1,
    "start_index": 193,
    "end_index": 406,
    "tags": [
        {
            "type": "EMOTION",
            "name": "Happy",
            "note": "I was happy because of my friends"
        },
        {
            "type": "EMOTION",
            "name": "Overjoyed"
        }
    ]
}


INCOMING AUTOFILL JSON:
{
    "status": true,
    "values": [
        "alive",
        "angry",
        "calm",
        "happy",
        "happyzs",
        "lol",
        "nice",
        "placeholder",
        "sad",
        "sads",
        "test_emotion"
    ]
  }
*/
