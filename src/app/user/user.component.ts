import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import {UsersService, User} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  @Input() action: string;

  public idUser: number;


  public user: User = {
    login: '',
    fullNames: '',
    phone: null,
    address: ''
  };

  constructor(private location: Location, private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
    this.idUser = Number(this.route.snapshot.params['id']);
  }

  public openUser(id): void {
    let user: User;
    if (typeof id === 'number') {
      user = this.usersService.users.find(user => id === user.id);
    }
    if (!user) {
      this.router.navigateByUrl('404', {skipLocationChange: true});
    } else {
      this.user = user;
    }
  }

  public update() : void {
    this.usersService.update(this.user);
    this.router.navigate(['/users']);
  }

  create() : void {
    this.usersService.create(this.user);
    // clear
    this.user = {
      login: '',
      fullNames: '',
      phone: null,
      address: ''
    }
  }

  ngOnInit() : void {
    if (!this.action) {
      this.openUser(this.idUser)
    }
  }

}
