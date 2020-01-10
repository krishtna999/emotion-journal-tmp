import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';

const ENTRY_CREATE_URL="entry/create/";
const EVENT_RUD_URL="event/";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:SyncService) { }

  create_event(text:string,datetime){
    // Creating an new entry also creates a new event. Hence the confusion in naming (ENTRY_CREATE, create_event etc)
    const json_body={
      'text':text,
      'datetime':datetime
    };
    this.http.post(ENTRY_CREATE_URL,json_body).subscribe(
      data=>{console.log(data)}
    );
  }

  update_event(id:number,text:string){
    const json_body={
      'text':text,
    };
    this.http.patch(EVENT_RUD_URL+id.toString()+'/',json_body).subscribe();

  }
}
