import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Permitir usar recursos de internet



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { LogosComponent } from './componets/logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Forms Module
    routing, //rutas
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
