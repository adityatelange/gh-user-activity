import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BACKEND_URL = environment.baseUrl + 'users';

  constructor(private http: HttpClient) { }

  async getUserEvents(username: string) {
    return await this.http
      .get(`${this.BACKEND_URL}/${username}/events`)
      .toPromise();
  }
}
