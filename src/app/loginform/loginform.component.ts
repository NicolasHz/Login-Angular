import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  private pass_error;
  private loader;
  private username;
  private password;

  constructor(private router: Router,  private user: UsuarioService) { }

  ngOnInit() {
  }

  loginUser() {
    if (this.username === this.user.getUserName() && this.password === this.user.getUserPass()) {
      this.loader = true;
      setTimeout(() => {
        this.user.setUser(this.username , this.password);
        this.user.setUserLogged();
        this.router.navigate(['welcome']);
       }, 3000);
    }else {
      this.pass_error = true;
    }
  }
}
