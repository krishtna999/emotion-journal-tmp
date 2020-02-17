import { Injectable } from '@angular/core';

import { SyncService } from '../app/sync.service';

const TAG_CREATE_URL = 'event/tag/';

const TAG_RUD_URL = 'tag/';

const TAG_AUTOFILL_URL = TAG_RUD_URL+'autofill/';


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
          "type": tag_type,
          "name": tag_name,
          // TODO: Add provision for note
          // "note": ""
        },
      ]
    }
    return this.http.post(TAG_CREATE_URL, json_body);
  }

  remove_tag(tag_id: number) {
    this.http.delete(TAG_RUD_URL + tag_id.toString() + '/').subscribe();
  }

  get_autofill_data(field:string,type:string){
    var params={
      'field':field
    }
    
    if(type){
      params['type']=type;
    }
    return this.http.get(TAG_AUTOFILL_URL,params);
  }

}

/*
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

*/
