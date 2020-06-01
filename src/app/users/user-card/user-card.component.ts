import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: User;

  @Output() deleteUser = new EventEmitter<number>();

  constructor() {
    console.log('UserCardComponent');
  }

}
