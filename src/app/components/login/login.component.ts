import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  saveMyData = false;
  usuario: string = "";
  clave: string = "";


  //inicializar variables
  constructor(private _loginServices: LoginService, private _router: Router) {
    // this.postLogin();
  }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this._router.navigate(['/home'])

    }
  }
  //Permannsia de la sesion
  rememberMe() {
    this.saveMyData ? this.saveMyData = false : this.saveMyData = true;
  }

  async postLogin() {
    //Credenciales
    let credenciales: LoginParamsInterface = {
      option: 1,
      user: this.usuario,
      pass: this.clave
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
    //Guardar el token del ususario
    if (this.saveMyData) {
      //Sesion sea permanente
      localStorage.setItem("token", resLoginJson.message)
    } else {
      //Sesion no permanente
      sessionStorage.setItem("token", resLoginJson.message)


    }

  }

}
