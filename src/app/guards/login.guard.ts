import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class LoginGuard implements CanActivate {

    constructor(private _router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        // Condicion que quiero que se cumpla para el acceso de la ruta
        let token = this.getToken();
        // Si existe el token
        if (token) {
            this._router.navigate(['/home']);//Devolver al home
            return false; //Si va a tener acceso a la ruta
        } else {
            // Si el token no existe devolver al login
            return true;
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
