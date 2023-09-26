import { Injectable } from "@angular/core";
import { DiagrammeUml } from "../models/diagramme-uml.model";

@Injectable({
    providedIn: 'root'
})

export class DiagrammeUmlsService{

    diagrammesUmls: DiagrammeUml[] = [

        {
            id : 1,
            title: 'UML1',
            description: 'Training Hard ',
            imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGuRe4ocapMCA/article-cover_image-shrink_600_2000/0/1689147916438?e=2147483647&v=beta&t=8vg9nvsV5hQV_OUm4UgZQdNrBUyq9fSHVLXFuHhtnok',
        },

        {
            id : 2,
            title: 'UML2',
            description: 'Training Hard ',
            imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGuRe4ocapMCA/article-cover_image-shrink_600_2000/0/1689147916438?e=2147483647&v=beta&t=8vg9nvsV5hQV_OUm4UgZQdNrBUyq9fSHVLXFuHhtnok',
        },

        {
            id : 3,
            title: 'UML3',
            description: 'Training Hard ',
            imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGuRe4ocapMCA/article-cover_image-shrink_600_2000/0/1689147916438?e=2147483647&v=beta&t=8vg9nvsV5hQV_OUm4UgZQdNrBUyq9fSHVLXFuHhtnok',
        },

        {
            id : 4,
            title: 'UML4',
            description: 'Training Hard ',
            imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGuRe4ocapMCA/article-cover_image-shrink_600_2000/0/1689147916438?e=2147483647&v=beta&t=8vg9nvsV5hQV_OUm4UgZQdNrBUyq9fSHVLXFuHhtnok',
        },

        {
            id : 5,
            title: 'UML5',
            description: 'Training Hard ',
            imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGuRe4ocapMCA/article-cover_image-shrink_600_2000/0/1689147916438?e=2147483647&v=beta&t=8vg9nvsV5hQV_OUm4UgZQdNrBUyq9fSHVLXFuHhtnok',
        },

    ];

  

    getAllDiagrammeUmls(): DiagrammeUml[]{
        return this.diagrammesUmls;
    }

    getDiagrammeById(diagrammeUmlId:number): DiagrammeUml{
        const diagrammeUml = this.diagrammesUmls.find(diagrammeUml => diagrammeUml.id === diagrammeUmlId);
        if (!diagrammeUml){
            throw new Error ('FaceSnap not found');
        }else{
            return diagrammeUml;
        }
    } 

}