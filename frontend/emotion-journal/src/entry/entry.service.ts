import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const ENTRY_API_URL='entry/';
const ENTRY_CREATE_URL=ENTRY_API_URL+"create/";


@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private subject=new Subject();
  constructor(private http:SyncService) {  
  }

  getEntryByDate(date){
    return this.http.get(ENTRY_API_URL,{'datetime__date':date})
      .pipe(
        map(
          json=>{
            // json will be an array of results. But however, it should only have 1 event.
            // Hence, json[0] 
            if(!json[0]){
              return json;
            }
            
            for(var i=0;i<json[0]['events'].length;i++){
              json[0]['events'][i]['text']=this.http.decrypt(json[0]['events'][i]['text']);
              for(var j=0;j<json[0]['events'][i]['tags'].length;j++){

                json[0]['events'][i]['tags'][j]['type']=
                  this.http.decrypt(json[0]['events'][i]['tags'][j]['type']);

                json[0]['events'][i]['tags'][j]['name']=
                  this.http.decrypt(json[0]['events'][i]['tags'][j]['name']);  
              }
            }
            return json;
          }
        )
      );    
  }

  create_entry(text:string,datetime){
    // Creating an new entry also creates a new base event.
    const json_body={
      'text':this.http.encrypt(text),
      'datetime':datetime
    };
    return this.http.post(ENTRY_CREATE_URL,json_body);
  }

  refreshEntry(){
    this.subject.next({text:'Re-query and refresh the entry component'})
  }
  
  readRefresh(){
    return this.subject.asObservable();
  }


  
}


/*
ENTRY BY DATE JSON
[
    {
        "id": 54,
        "datetime": "2020-02-26T21:13:29.215000+05:30",
        "events": [
            {
                "id": 133,
                "date": "Wednesday, 26 Feb 2020",
                "text": "U2FsdGVkX18MqVHYU0X27rUC/TOt8zcyKrTLJMcgvKA=",
                "order_id": "1",
                "tags": [
                    {
                        "id": 138,
                        "type": "U2FsdGVkX1/LAgT9KgNq/cREhfX2tS2x4SHAsVdXOPw=",
                        "name": "U2FsdGVkX1+cGsbCRkSFqxI/RYPRIdFJUZb7jk+Ckoc=",
                        "text": null,
                        "event": 133
                    }
                ]
            }
        ]
    }
]
*/