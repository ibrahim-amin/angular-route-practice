import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
 isAdminRights():boolean{
  return false;
 }
  constructor() { }
}
