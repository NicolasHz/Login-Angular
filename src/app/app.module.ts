import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {UsuarioService} from './usuario.service';
import {GuardiaGuard} from './guardia.guard';


const appRoutes: Routes = [
  {
  path: '',
  component: LoginformComponent
  },
  {
  path: 'welcome',
  canActivate: [GuardiaGuard] ,
  component: WelcomeComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [UsuarioService, GuardiaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
