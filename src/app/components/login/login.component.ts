import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginParamsInterface } from 'src/app/interfaces/login-params.interface';
import { LoginResponseInterface } from 'src/app/interfaces/login-response';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent {

  //inicializar variables
  constructor(private _loginServices: LoginService, private _router: Router) {
    this.postLogin();
  }

  async postLogin() {
    //Credenciales
    let credenciales: LoginParamsInterface = {
      option: 1,
      user: 'mesero',
      pass: '123'
    }
    //Consumo de la promesa
    let res = await this._loginServices.postLogin(credenciales);
    //Si el servicio fallo mostramos
    if (!res.status) {
      alert("Algo salio mal")
      console.error(res.response);
      return;
    }
    //Si el servicio se ejecuto correctamente se muestra
    //Validar credenciales del usuario
    let resLoginJson: LoginResponseInterface = res.response

    //Validar usuario y contraseña son incorrectos
    if (!resLoginJson.res) {
      alert(resLoginJson.message);
      return;
    }
    //Si es correcto navegar al home
    this._router.navigate(['/home'])
  }

}
