import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

//el tipado patmatch
type PathMatch = 'full' | 'prefix' | undefined;

//Rutas
const appRoutes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' as PathMatch },
    { path: '**', redirectTo: '/login', pathMatch: 'full' as PathMatch }
];
//Exportamos las rutas
export const routing = RouterModule.forRoot(appRoutes);