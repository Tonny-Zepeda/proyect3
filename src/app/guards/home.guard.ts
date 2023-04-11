import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Condicion que quiero que se cumpla para el acceso de la ruta
    let token = this.getToken();
    // Si existe el token
    if (token) {
      return true; //Si va a tener acceso a la ruta
    } else {
      this.router.navigate(['/login']);//Devolver al login
      return false;
    }
  }

  //Obtener token guardado en storage
  getToken() {
    let token;
    let _token = sessionStorage.getItem("token"); //Guardar en la sesion
    let __token = localStorage.getItem("token"); //Guardar permanente

    //Evaluar si existe el token
    if (_token) {
      token = _token;
    } else if (__token) {
      token = __token;
    } else {
      token = false; //No existe el token en sessionStorage o en localStorage retornar false
    }

    return token;

  }



}

