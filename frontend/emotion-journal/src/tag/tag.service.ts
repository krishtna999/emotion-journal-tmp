import { Injectable } from '@angular/core';

import { NbToastrService } from '@nebular/theme';
import { SyncService } from '../app/sync.service';
import { map } from 'rxjs/operators';

const TAG_CREATE_URL = 'event/tag/';

const TAG_RUD_URL = 'tag/';

const TAG_AUTOFILL_URL = TAG_RUD_URL + 'autofill/';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: SyncService, private toastrService: NbToastrService, ) { }

  add_tag(event: object, start_index: number, end_index: number, tag_type: string, tag_name: string) {

    // TODO: Remove unnecessary data from event['text'].
    var og_text = event['text'];
    var og_order_id = event['order_id']
    // og=original


    /*
    NOTE: The absence of a new_events field in the json indicates that there is no split in the event.
          => Just add tags to the base_event
    */
    if (start_index < 0 || og_text.length < end_index) {
      //  TODO: Display error toastr
      this.toastrService.show(
        'Indexes are out of bounds',
        'Bad Highlight'
      );
      return null;
    }
    const json = {
      'base_event': event,
      "tags": [
        {
          "type": this.http.encrypt(tag_type, true),
          "name": this.http.encrypt(tag_name, true),
          // TODO: Add provision for text. Which acts like a note to a tag
          // "text": ""
        },
      ]
    };


    if (start_index != end_index
      &&
      !(start_index == 0 && end_index == og_text.length)
    ) {
      if (start_index == 0) {
        // [FROM START, BEFORE END] Event will be split into 2 events, one additional at the end.
        json['base_event']['text'] = this.http.encrypt(og_text.slice(start_index, end_index), true);
        json['base_event']['order_id'] = og_order_id + '1';
        json['base_event']['tag_flag'] = true;
        json['new_events'] = [
          {
            'text': this.http.encrypt(og_text.slice(end_index), true),
            'order_id': og_order_id + '2',
          }
        ]
      }
      else if (end_index == og_text.length) {
        /*
          [AFTER START, TILL END]
          Event will be split into 2 events, 1 additional. Existing base event will be modified.
        */
        json['base_event']['text'] = this.http.encrypt(og_text.slice(0, start_index), true);
        json['base_event']['order_id'] = og_order_id + '1';
        json['new_events'] = [
          {
            'text': this.http.encrypt(og_text.slice(start_index), true),
            'order_id': og_order_id + '2',
            'tag_flag': true,
          }
        ]
      }
      else {
        /*
          [ 
            FROM MIDDLE.  i.e.:
            AFTER START,BEFORE END
          ]
        */
        json['base_event']['text'] = this.http.encrypt(og_text.slice(0, start_index), true);
        json['base_event']['order_id'] = og_order_id + '1';
        json['new_events'] = [
          {
            'text': this.http.encrypt(og_text.slice(start_index, end_index), true),
            'order_id': og_order_id + '2',
            'tag_flag': true,
          },
          {
            'text': this.http.encrypt(og_text.slice(end_index), true),
            'order_id': og_order_id + '3',
          },
        ]
      }
    }

    return this.http.post(TAG_CREATE_URL, json);
  }

  remove_tag(tag_id: number) {
    this.http.delete(TAG_RUD_URL + tag_id.toString() + '/').subscribe();
  }

  get_autofill_data(field: string, type: string) {
    var params = {
      'field': field
    }

    if (type) {
      /* 
        encodeURIComponent is used to encode the ENCRYPTED STRINGS (which contain reserved characters)
        so that they can be passed on as GET parameters without deformation.

      */
      params['type'] = encodeURIComponent(this.http.encrypt(type, true));
    }
    return this.http.get(TAG_AUTOFILL_URL, params)
      .pipe(
        map(json => {
          for (var i = 0; i < json['values'].length; i++) {
            json['values'][i] = this.http.decrypt(json['values'][i]);
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
