import { NgModule } from "@angular/core";
import  { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleUmlComponent } from "./single-uml/single-uml.component";
import { DiagrammeUmlListComponent } from "./diagramme-uml-list/diagramme-uml-list.component";


const routes: Routes = [
    {path : 'diagrammeumls/:id', component: SingleUmlComponent},
    {path : 'diagrammeumls', component : DiagrammeUmlListComponent},
    {path: '' , component : LandingPageComponent}
];


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }