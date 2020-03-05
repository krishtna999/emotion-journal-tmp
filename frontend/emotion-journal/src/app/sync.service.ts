import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
// import { constants } from "./encryption/constants";

import * as CryptoJS from 'crypto-js';


const BASE_URL = 'http://localhost:8000/api/';

const key = 'testing_key';
var iv = CryptoJS.enc.Hex.parse(CryptoJS.SHA512(key));
@Injectable({
  providedIn: 'root'
})
export class SyncService {
  token: null;
  private handleError<T>(result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  private getHttpOptions() {
    // TODO: Figure out CHACHE !

    // IMPORTANT
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Cache-Control': 'no-cache',
      // 'Pragma': 'no-cache',
      // 'Authorization': 'Token ' + token
    });
  }

  constructor(private http: HttpClient) {
  }

  post<T>(url, vars): Observable<T> {
    return this.http.post<T>(BASE_URL + url, vars, { headers: this.getHttpOptions() })
      .pipe(
        catchError(this.handleError<T>(null))
      );
  }

  get<T>(url, parameters): Observable<T> {
    return this.http.get<T>(BASE_URL + url, { params: parameters, headers: this.getHttpOptions() })
      .pipe(
        catchError(this.handleError<T>(null))
      );
  }

  delete<T>(url): Observable<T> {
    return this.http.delete<T>(BASE_URL + url, { headers: this.getHttpOptions() })
      .pipe(
        catchError(this.handleError<T>(null))
      );
  }

  patch<T>(url, vars): Observable<T> {
    return this.http.patch<T>(BASE_URL + url, vars, { headers: this.getHttpOptions() })
      .pipe(
        catchError(this.handleError<T>(null))
      );
  }

  encrypt(plain_text: string, make_lower = false) {
    if (make_lower) {
      plain_text = plain_text.toLowerCase();
    }
    return CryptoJS.AES.encrypt(plain_text, CryptoJS.SHA512(key), { iv: iv }).toString();
  }

  decrypt(cipher_text) {
    // console.log(cipher_text);
    // console.log(CryptoJS.AES.decrypt(cipher_text, CryptoJS.SHA512(key), { iv: iv }).toString(CryptoJS.enc.Utf8));
    return CryptoJS.AES.decrypt(cipher_text, CryptoJS.SHA512(key), { iv: iv }).toString(CryptoJS.enc.Utf8);
  }
}