import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarmapaComponent } from './src/app/miscomponentes/mostrarmapa/mostrarmapa.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarmapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
