import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';
import { Component } from '@angular/core';

LoginComponent

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /**
   *
   */
  //Inicializar instancia router
  constructor(
    private _router: Router,

  ) {
  }

  //Cerrar sesion
  logout() {
    //Limpiar storage del navegador
    localStorage.clear();
    sessionStorage.clear();
    this._router.navigate(["/login"]); //Cerramos sesion (Navegamos al login)
  }

}
