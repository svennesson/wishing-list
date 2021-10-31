import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {WishingList} from '../model/wishing-list/wishing-list';

@Injectable({
  providedIn: 'root'
})
export class WishingListService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseUrl}`;
  }

  public getAllMyLists(): Promise<WishingList[]> {
    return this.http.get(`${this.baseUrl}/api/list`)
      .toPromise()
      .then(response => response as WishingList[]);
  }
}
