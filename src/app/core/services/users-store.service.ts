import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { FetchState } from 'src/app/core/models/fetch-state.model';
import { UsersService } from 'src/app/core/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {
  constructor(private _usersService: UsersService) {
    this.fetchUsers();
  }

  private readonly _usersFetchState = new BehaviorSubject<FetchState>(FetchState.IDLE);

  readonly usersFetchState$ = this._usersFetchState.asObservable();

  public set usersFetchState(val: FetchState) {
    this._usersFetchState.next(val);
  }

  public get usersFetchState(): FetchState {
    return this._usersFetchState.getValue();
  }

  private readonly _users = new BehaviorSubject<User[]>([]);

  readonly users$ = this._users.asObservable();

  public set users(val: User[]) {
    this._users.next(val);
  }

  public get users(): User[] {
    return this._users.getValue();
  }

  public findUser(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  public async fetchUsers() {
    console.log('!!! fetchUsers !!!');
    this.usersFetchState = FetchState.FETCHING;
    try {
      const res = await this._usersService.getUsers().toPromise();
      this.users = res.data;
      this.usersFetchState = FetchState.DONE;
      console.log('fetched and filled');
    } catch (e) {
      console.error('Error while fetching all users!', e);
      this.usersFetchState = FetchState.ERROR;
    }
  }

  public async deleteUser(userId: number): Promise<void> {
    try {
      await this._usersService.deleteUser(userId).toPromise();
      this.users = this.users.filter(user => user.id !== userId);
    } catch (e) {
      console.error('Error while deleteing user!', e);
    }
  }

  public async createUser(user: User): Promise<void> {
    try {
      const newUser = await this._usersService.createUser(user).toPromise();
      this.users = [...this.users, newUser];
    } catch (e) {
      console.error('Error while creating user!', e);
    }
  }

  public async updateUser(user: User): Promise<void> {
    try {
      const updatedUser = await this._usersService.updateUser(user).toPromise();
      console.log('updatedUser', updatedUser);
      this.users = this.users.map(u => u.id === user.id ? updatedUser : u);
    } catch (e) {
      console.error('Error while creating user!', e);
    }
  }
}
