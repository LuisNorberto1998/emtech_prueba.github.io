import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private globalService: GlobalService) {}

  public getRandomUser(params: any): Observable<any> {
    return this.globalService.get<any>(`?results=${params} `);
  }
}
