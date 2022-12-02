//Angular Componentes
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

//Mis componentes
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs/resultados/resultados.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    GifsPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
