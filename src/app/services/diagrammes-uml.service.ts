import { Injectable } from "@angular/core";
import { DiagrammeUml } from "../models/diagramme-uml.model";

@Injectable({
    providedIn: 'root'
})

export class DiagrammeUmlsService{

    diagrammesUmls: DiagrammeUml[] = [
        {
            id: 1,   
            title: "Diagrammes de Paquetage.",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/package-diagram.png",
            description: "Le diagramme de paquetage reflete une organisation de paquetage et de leur élements. Il est utiliser pour représenter des élements de classe.",
        },
        {
            id: 2,
     
            title: "Diagramme de classe.",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/classe-diagram.jpg",
            description: "Le diagram de classe consiste a montrer les blocs de construction de tous système orienté objet. Le diagram de classe et souvent le plus utile pour illuster les relations entre les classes et les interfaces."
        },
        {
            id: 3,
            title: "Diagrammes d'Objets.",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/object-diagram.png",
            description: "Le diagramme d'objets utilisent un sous ensemble d'élément d'un diagramme de classes afin de souligner la relation entre les instances de classe à un certain moment. Cela est utile pour la compréhension des diagramme de classe."
        },
        {
            id: 4,

            title: "Diagrammes de Structure Composites.",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/composit-diagram.jpg",
            description: "Le diagramme de structure composite est un diagramme qui permet d'afficher une structure interne d'un classificateur. Elle affiche la configuration et la relation de parties qui ensemble effectue le comportement d'un classificateur."
        },
        {
            id: 5,

            title: "Diagrammes de Composants.",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/composant-diagramme.jpg",
            description: "Le Diagram de composant illustre toute les parties logiciel. Le diagramme de composant à un niveau d'abstraction plus élevé qu'un diagramme de classes "
        },
        {
            id: 6,
            title: "Diagrammes de Déploiement",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/use-case-diagram.png",
            description: "Le diagramme de déploiement et un modèle architectural de temp d'exécution d'un système. Il permet d'afficher la configuration des éléments matériel (noeud) et affiche des élement logiciels."
        },
        {
            id: 7,
            title: "Diagrammes de cas d'Utilisation.",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/use-case-diagram.png",
            description: "Le modèle de cas d'utilisation capture les exigences d'un système. Il montre l'interaction entre le système et les entités externes au système. Le cas d'utilisation sont un moyen de communiquer avec les utilisateur et d'autre parties prenantes ce que le système est destiné a faire "
        },
        {
            id: 8,
            title: " Diagrammes d'activité",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/activity-diagram.jpg",
            description: "Le Diagrammes d'activité est utilisé pour afficher la séquence d'activité. Il affiche le flux de travail d'un point de départ à un point d'arrivée en détaillant sur les nombreux chemins de décision existant. Il peux être utilisé pour détailler des situations dans lesquelles un traitement parralèle peut avoir lieu lors d'une exécution"
        },
        {
            id: 9,
            title: " Diagrammes de StateMachine",
            imageUrl: "https://www.sparxsystems.fr/products/ea/14/images/cdplayer-debug.png",
            description: "Le Diagramme de StateMachine permet de voir le comportement d'un objet unique , en précisant la séquence des évenements qu'un objet passe pendant ca durée de vie"
        },
        {
            id: 10,
            title: " Diagrammes de communication",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/communication-diagram.jpg",
            description: "Le diagramme de communication est un schéma d'interaction. Il affiche des information similaire à des diagrammes de séquence, mais son objectif principal est de relations objet."
        },
        {
            id: 11,
            title: "Diagrammes de séquence",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/basis-sequence-diagram.png",
            description: "Le Diagramme de séquence est une forme de diagrammr d'interaction."
        },
        {
            id: 12,
            title: " Diagrammes de temps",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/timing-diagram.png",
            description: "Le Diagramme de temps est utilisé pour afficher le changement de valeur d'un ou plusieur élement au fil du temps. Il peux également montrer l'interaction entre les événements prévus et le temps et les contraintes de durée. "
        },
        {
            id: 13,
            title: " Diagrammes d'apercu d'interaction",
            imageUrl: "https://www.sparxsystems.fr/images/screenshots/interaction-diagram.png",
            description: "Le diagramme d'apercu d'interaction est une forme d'un diagramme d'activité. Dans lequel les noueds représentent des diagrammes d'interaction. Les vues d'ensemble sont par exemple : initiale, finale, décision , fusionner, fourchette."
        },
        {
            id: 14,
            title: " Diagrammes de Profil",
            imageUrl: "	https://www.sparxsystems.fr/images/screenshots/uml-profile-import.png",
            description: "Le Diagramme de Profil fournit un mécanisme d'éxtenstion générique pour construire des modèles UML dans des domaines particuliers. Il sont fondés sur les stéréotypes et les valeurs. "
        }
    ];


    getAllDiagrammeUmls(): DiagrammeUml[]{
        return this.diagrammesUmls;
    }

    getDiagrammeUmlById(diagrammeUmlId:number): DiagrammeUml{
        const diagrammeUml = this.diagrammesUmls.find(diagrammeUml => diagrammeUml.id === diagrammeUmlId);
        if (!diagrammeUml){
            throw new Error ('FaceSnap not found');
        }else{
            return diagrammeUml;
        }
    } 

}