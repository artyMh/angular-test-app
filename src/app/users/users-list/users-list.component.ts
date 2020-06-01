import { Component } from '@angular/core';
import { UsersStoreService } from 'src/app/core/services/users-store.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  constructor(public usersStore: UsersStoreService) { }
}
