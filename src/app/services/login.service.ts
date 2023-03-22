import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginParamsInterface } from "../interfaces/login-params.interface";
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
    private _postLogin(params: LoginParamsInterface) {

        //Convertir el objeto a string
        let paramsStr = JSON.stringify(params)

        //Configurar los encabezados
        let headers = new HttpHeaders({ "Content-Type": "application/json" });

        //Realizar el consumo
        return this._http.post(this._urlBase + "Login", paramsStr, { headers: headers });
    }
    //promesas

}