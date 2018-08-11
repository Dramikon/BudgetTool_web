import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiUtilService {
  public getApiUrl(apiPath: string) {
    return `${environment.apiUrl}/${apiPath}`;
  }
}
