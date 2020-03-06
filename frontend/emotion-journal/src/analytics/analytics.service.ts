import { Injectable } from '@angular/core';
import { SyncService } from 'src/app/sync.service';
import { map } from 'rxjs/operators';

const ANALYTICS_URL = 'event/analytics/'

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: SyncService) { }

  type_ratio(primary_type: string) {
    var params = {
      'analytics_tag_type': this.http.encrypt(primary_type, true, true),
    }
    return this.http.get(ANALYTICS_URL, params)
      .pipe(
        map(
          (json: object) => {
            var decrypted_array = [];
            for (var key in json) {
              decrypted_array.push({ 'name': this.http.decrypt(key), 'value': json[key] })
            }
            return decrypted_array;
          }
        )
      );
  }
}
