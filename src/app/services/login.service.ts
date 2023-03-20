import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiHost } from "../providers/api-host.provider";

@Injectable()
export class LoginService {

    //url base
    private _urlBase: string = "";

    //Inicializar variables
    constructor(private _http: HttpClient) {
        //Asignar el valor de la urlBase
        this._urlBase = ApiHost.ApiSqlServer.urlBase
    }

    //Consumo del api login
    postLogin() {
        //Configurar los encabezados
        let headers = new HttpHeaders({ "Content-Type": "application/json" });
    }

}