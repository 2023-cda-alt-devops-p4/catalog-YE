import { Injectable } from "@angular/core";
import { DiagrammeUml } from "../models/diagramme-uml.model";

@Injectable({
    providedIn: 'root'
})

export class DiagrammeUmlsService{

    diagrammesUml: DiagrammeUml[] = [

        {
            id : 1,
            title: 'Me With Oncle Mike',
            description: 'Training Hard ',
            imageUrl: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',
        },

        {
            id : 3,
            title: 'Me With Oncle Mike',
            description: 'Training Hard ',
            imageUrl: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',
        },

        {
            id : 3,
            title: 'Me With Oncle Mike',
            description: 'Training Hard ',
            imageUrl: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',
        },

        {
            id : 4,
            title: 'Me With Oncle Mike',
            description: 'Training Hard ',
            imageUrl: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',
        },

        {
            id : 5,
            title: 'Me With Oncle Mike',
            description: 'Training Hard ',
            imageUrl: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2023-04-04-141641.jpg?width=600',
        },

    ];
  getDiagrammeUmlById: any;

    getAllDiagrammeUml(): DiagrammeUml[]{
        return this.diagrammesUml;
    }

    getDiagrammeById(diagrammeUmlId:number): DiagrammeUml{
        const diagrammeUml = this.diagrammesUml.find(diagrammeUml => diagrammeUml.id === diagrammeUmlId);
        if (!diagrammeUml){
            throw new Error ('FaceSnap not found');
        }else{
            return diagrammeUml;
        }
    } 

}