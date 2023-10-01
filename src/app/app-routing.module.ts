import { NgModule } from "@angular/core";
import  { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleUmlComponent } from "./single-uml/single-uml.component";
import { DiagrammeUmlListComponent } from "./diagramme-uml-list/diagramme-uml-list.component";
import { MeriseListComponent } from "./merise-list/merise-list.component";
import { MeriseComponent } from "./merise/merise.component";


const routes: Routes = [
    {path : 'diagrammeumls/:id', component: SingleUmlComponent},
    {path : 'diagrammeumls', component : DiagrammeUmlListComponent},
    {path : 'merises/:id', component: MeriseComponent},
    {path : 'merises', component : MeriseListComponent},
    {path: '' , component : LandingPageComponent}
];


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }