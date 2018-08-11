import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiUtilService } from './api-util.service';

@Injectable()
export abstract class BaseHttpService {
  constructor(private http: HttpClient, private apiUtil: ApiUtilService) {}

  protected options = {
    params: new HttpParams(),
    reportProgress: true,
  };

  abstract list(): Observable<any>;
  abstract getById(id: string | number): Observable<any>;
  abstract create(entity: any): Observable<any>;
  abstract update(entity: any, ...args: any[]): Observable<any>;
  abstract remove(id: string | number): Observable<any>;

  get(uri: string, options?): Observable<any> {
    return this.http.get(this.apiUtil.getApiUrl(uri), options);
  }

  post(uri: string, data, options?): Observable<any> {
    return this.http.post(this.apiUtil.getApiUrl(uri), data, options);
  }

  put(uri: string, data, options?): Observable<any> {
    return this.http.put(this.apiUtil.getApiUrl(uri), data, options);
  }

  delete(uri: string, options?): Observable<any> {
    return this.http.delete(this.apiUtil.getApiUrl(uri), options);
  }
}
