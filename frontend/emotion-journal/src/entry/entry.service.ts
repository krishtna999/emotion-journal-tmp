import { Injectable } from '@angular/core';
import { SyncService } from '../app/sync.service';

const ENTRY_API_URL='api/entry/';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http:SyncService) {  
  }

  getEntryByDate(date){
    return this.http.get(ENTRY_API_URL,{'datetime__date':date});    
  }
  

  
}
