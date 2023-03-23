import { Component } from '@angular/core';
import { LoginParamsInterface } from 'src/app/interfaces/login-params.interface';
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
  constructor(private _loginServices: LoginService) {
    this.postLogin();
  }

  postLogin() {
    //Credenciales
    let credenciales: LoginParamsInterface = {
      option: 1,
      user: 'mesero',
      pass: '123'
    }
    //Suscribimos al servidor para poder usarlo
    this._loginServices.postLogin(credenciales).subscribe(

      res => {
        //Si la respuesta es correcta
        console.log("Primero")
        // console.log(res);
      },

      err => {
        //Si la respuesta es incorrecta
        // console.error(err);
      }
    );

    console.log("Segundo");

  }

}
