import {Injectable} from '@angular/core';

export interface User {
  id?: number
  login: string
  fullNames: string
  phone: number
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = [
    {
      id: 1,
      login: 'vadon',
      fullNames: 'Горбачев Владислав Александрович',
      phone: 79139440800,
      address: 'советская 3'
    },
    {
      id: 2,
      login: 'alex',
      fullNames: 'Алексеев Алексей Алексеевич',
      phone: 79139440800,
      address: 'центральная 10'
    },
    {
      id: 3,
      login: 'lvan',
      fullNames: 'Иванов Иван Иванович',
      phone: 73455674578,
      address: 'петровка 10'
    },
    {
      id: 4,
      login: 'vadon',
      fullNames: 'Горбачев Владислав Александрович',
      phone: 79139440800,
      address: 'советская 3'
    },
    {
      id: 5,
      login: 'alex',
      fullNames: 'Алексеев Алексей Алексеевич',
      phone: 79139440800,
      address: 'центральная 10'
    },
    {
      id: 6,
      login: 'lvan',
      fullNames: 'Иванов Иван Иванович',
      phone: 73455674578,
      address: 'петровка 10'
    },
    {
      id: 7,
      login: 'vadon',
      fullNames: 'Горбачев Владислав Александрович',
      phone: 79139440800,
      address: 'советская 3'
    },
    {
      id: 8,
      login: 'alex',
      fullNames: 'Алексеев Алексей Алексеевич',
      phone: 79139440800,
      address: 'центральная 10'
    },
    {
      id: 9,
      login: 'lvan',
      fullNames: 'Иванов Иван Иванович',
      phone: 73455674578,
      address: 'петровка 10'
    },
    {
      id: 10,
      login: 'lvan',
      fullNames: 'Иванов Иван Иванович',
      phone: 73455674578,
      address: 'петровка 10'
    },
  ];

  public get users(): User[] {
    return this._users;
  }

  public create(user: User) : void {
    user.id = Math.floor(Math.random() * Math.floor(1000)); // для примера
    user.phone = Number(user.phone);
    this._users.push(Object.assign({}, user));
  }

  public update(user: User) : void {
    for (let key in this._users) {
      if (this._users[key].id === user.id) {
        this._users[key] = {
          id: user.id,
          login: user.login,
          fullNames: user.fullNames,
          phone: Number(user.phone),
          address: user.address
        };
        break;
      }
    }

  }

  public delete(id: number) : void {
    for (let key in this._users) {
      if (this._users[key].id === id) {
        this._users.splice(Number(key), 1);
        break;
      }
    }
  }
}
