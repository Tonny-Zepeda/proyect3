import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; //Permitir usar recursos de internet


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { LogosComponent } from './logos/logos.component';

// Soporte de idiomas
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 

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
    HttpClientModule,
    //Soporte para varios idiomas
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }