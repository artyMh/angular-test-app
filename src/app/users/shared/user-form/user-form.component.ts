import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: [ 'user-form.component.scss' ]
})

export class UserFormComponent {
  @Input() user: User;
  @Output() submitUser = new EventEmitter<User>();

  constructor() { }

  onSubmit() {
    this.submitUser.emit(this.user);
  }
}
