import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: any[] = [
    {userName: 'רחל', password: 1234, userPermission: 'teacher'},
    {userName: 'נחמי', password: 556, userPermission: 'teacher'},
    {userName: 'שרה', password: 8989, userPermission: 'teacher'},
    {userName: 'נועה', password: 5598, userPermission: 'teacher'},
    {userName: 'לאה', password: 154, userPermission: 'teacher'},
    {userName: 'הדס', password: 875, userPermission: 'teacher'},
    {userName: 'יעל', password: 52641, userPermission: 'secretary'},
    {userName: 'מיכל', password: 44, userPermission: 'secretary'},
    {userName: 'ריקי', password: 8796, userPermission: 'secretary'}
  ];

  constructor() { }

  getUserdetails(): any[] {
    return this.users;
  }
}
