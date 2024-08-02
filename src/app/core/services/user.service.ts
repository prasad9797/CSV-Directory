import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Result, User } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiURL: string = 'https://reqres.in/api/users';

  userData: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<Result>(this.apiURL).pipe(
      map((response: Result) => {
        return response.data;
      })
    );
  }
}
