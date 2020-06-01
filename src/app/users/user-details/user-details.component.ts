import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersStoreService } from 'src/app/core/services/users-store.service';
import { FetchState } from 'src/app/core/models/fetch-state.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(
    private _route: ActivatedRoute,
    private _usersStore: UsersStoreService,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
    this._usersStore.usersFetchState$.subscribe(loadState => {
      if (loadState === FetchState.DONE) {
        this.getUser();
      }
    });
  }

  private getUser(): void {
    const userId = parseInt(this._route.snapshot.paramMap.get('id'), 10);
    const user = this._usersStore.findUser(userId);
    this.user = user;
  }
}
