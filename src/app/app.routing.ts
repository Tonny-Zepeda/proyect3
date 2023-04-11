import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeGuard } from "./guards/home.guard";
import { LoginGuard } from "./guards/login.guard";

//el tipado patmatch
type PathMatch = 'full' | 'prefix' | undefined;

//Rutas
const appRoutes = [

    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'home', component: HomeComponent, canActivate: [HomeGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' as PathMatch },
    { path: '**', redirectTo: '/login', pathMatch: 'full' as PathMatch }
];
//Exportamos las rutas
export const routing = RouterModule.forRoot(appRoutes);