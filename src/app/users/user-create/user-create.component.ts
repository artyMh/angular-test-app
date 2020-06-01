import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersStoreService } from 'src/app/core/services/users-store.service';

@Component({
  selector: 'app-user-create',
  templateUrl: 'user-create.component.html',
  styleUrls: [ 'user-create.component.scss' ]
})
export class UserCreateComponent {
  user: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  constructor(
    private _userStoreService: UsersStoreService,
    private _router: Router
  ) { }

  createUser(newUser: User) {
    this._userStoreService.createUser(newUser);
    this._router.navigate(['']);
  }
}
