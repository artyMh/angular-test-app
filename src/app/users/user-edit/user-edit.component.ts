import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersStoreService } from 'src/app/core/services/users-store.service';
import { FetchState } from 'src/app/core/models/fetch-state.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _usersStore: UsersStoreService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this._usersStore.usersFetchState$.subscribe(loadState => {
      if (loadState === FetchState.DONE) {
        this.getUser();
      }
    });
  }

  updateUser(newUser: User) {
    this._usersStore.updateUser(newUser);
    this._router.navigate(['']);
  }

  private getUser(): void {
    const userId = parseInt(this._route.snapshot.paramMap.get('id'), 10);
    const user = this._usersStore.findUser(userId);
    this.user = user;
  }
}
