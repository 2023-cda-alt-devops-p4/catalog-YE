import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DiagrammeUmlComponent } from './diagramme-uml/diagramme-uml.component';
import { DiagrammeUmlListComponent } from './diagramme-uml-list/diagramme-uml-list.component';
import { SingleUmlComponent } from './single-uml/single-uml.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    DiagrammeUmlComponent,
    DiagrammeUmlListComponent,
    SingleUmlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  registerLocaleData(fr.default)
  }
}
