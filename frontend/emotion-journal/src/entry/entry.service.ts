import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';
import { Observable,Subject } from 'rxjs';
const ENTRY_API_URL='entry/';

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

  refreshEntry(){
    setTimeout(() => { },1000);
    this.subject.next({text:'Re-query and refresh the entry component'})
  }
  
  readRefresh(){
    return this.subject.asObservable();
  }


  
}
