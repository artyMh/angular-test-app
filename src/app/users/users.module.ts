import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './users.routing';
import { UsersService } from 'src/app/core/services/users.service';
import { UsersStoreService } from 'src/app/core/services/users-store.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    UserCardComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserCreateComponent,
    UserFormComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [ UsersService, UsersStoreService ]
})
export class UsersModule { }
