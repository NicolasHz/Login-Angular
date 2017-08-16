import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private status;

  constructor( private user: UsuarioService) { }

  ngOnInit() {
   this.status = this.user.getUserLogged() ? 'Online' : 'Offline';
}
}
