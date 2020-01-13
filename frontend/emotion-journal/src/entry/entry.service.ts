import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';
import { Observable,Subject } from 'rxjs';

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
    return this.http.get(ENTRY_API_URL,{'datetime__date':date});    
  }

  create_entry(text:string,datetime){
    // Creating an new entry also creates a new base event.
    const json_body={
      'text':text,
      'datetime':datetime
    };
    this.http.post(ENTRY_CREATE_URL,json_body).subscribe(
      data=>{console.log(data)}
    );
  }

  refreshEntry(){
    setTimeout(() => { },1000);
    this.subject.next({text:'Re-query and refresh the entry component'})
  }
  
  readRefresh(){
    return this.subject.asObservable();
  }


  
}
