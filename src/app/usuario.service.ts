import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

    private isUserlogged;
    private username= 'admin';
    private password= 'admin';
  constructor() {
     this.isUserlogged = false;
    }
  setUserLogged() {
    this.isUserlogged = true;
  }

  getUserLogged() {
    return this.isUserlogged;
  }
  setUser(usr: string, pass: string) {
    this.username = usr;
    this.password = pass;
  }
  getUserName() {
   return this.username;
  }
  getUserPass() {
   return this.password;
  }
}
