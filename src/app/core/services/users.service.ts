import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedUsers, User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiBaseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<PaginatedUsers> {
    return this.http.get<PaginatedUsers>(`${this.apiBaseUrl}/users`);
  }

  public deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(`${this.apiBaseUrl}/users/${userId}`);
  }

  public createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.apiBaseUrl}/users`, newUser);
  }

  public updateUser(updatedUser: User): Observable<User> {
    return this.http.patch<User>(`${this.apiBaseUrl}/users`, updatedUser);
  }
}
