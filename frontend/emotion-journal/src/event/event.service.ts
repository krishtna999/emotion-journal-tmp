import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';

const EVENT_RUD_URL="event/";
const EVENT_FILTER_URL="api/event/";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:SyncService) { }


  update_event(id:number,text:string){
    const json_body={
      'text':text,
    };
    this.http.patch(EVENT_RUD_URL+id.toString()+'/',json_body).subscribe();

  }

  filter_events(){
    // this.http.get(EVENT_FILTER_URL,)
  }
}
