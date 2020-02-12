import {Component} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {
  constructor(private usersService: UsersService) {
  }
}
