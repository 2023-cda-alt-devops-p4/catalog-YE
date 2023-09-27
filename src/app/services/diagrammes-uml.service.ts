import { Injectable } from "@angular/core";
import { DiagrammeUml } from "../models/diagramme-uml.model";

@Injectable({
    providedIn: 'root'
})

export class DiagrammeUmlsService{

    diagrammesUmls: DiagrammeUml[] = [
        {
            id: 1,   
            title: "diagramme d'interactivité.",
            imageUrl: "",
            description: "Un diagramme d'interactivité est un dessin ou une image qui montre comment différentes parties d'un logiciel ou d'un système informatique se parlent et se donnent des instructions. Imaginez-le comme une carte qui indique qui parle à qui et ce qu'ils se disent.Il existe deux types principaux de ces diagrammes :- Diagramme de Séquence : C'est comme une bande dessinée qui raconte l'histoire de comment les parties d'un logiciel se parlent étape par étape, comme si vous suivez un personnage à travers une série d'actions. -Diagramme de Communication : C'est comme un schéma qui montre qui est connecté à qui, comme un réseau social où vous pouvez voir qui est ami avec qui, mais ici, il montre comment les parties d'un système se connectent et se parlent.En bref, ces diagrammes d'interactivité aident les programmeurs et les concepteurs à comprendre comment les différentes parties d'un logiciel ou d'un système informatique travaillent ensemble pour accomplir des tâches. C'est un peu comme dessiner un plan pour montrer comment les gens se parlent et coopèrent pour accomplir quelque chose.",
        },
        {
            id: 2,
     
            title: "Diagramme de classe.",
            imageUrl: "",
            description: "Le diagram de classe consiste a montrer les blocs de construction de tous système orienté objet. Le diagram de classe et souvent le plus utile pour illuster les relations entre les classes et les interfaces."
        },
        {
            id: 3,
            title: "Diagrammes d'Objets.",
            imageUrl: "",
            description: "Le diagramme d'objets utilisent un sous ensemble d'élément d'un diagramme de classes afin de souligner la relation entre les instances de classe à un certain moment. Cela est utile pour la compréhension des diagramme de classe."
        },
        {
            id: 4,

            title: "Diagrammes de Structure Composites.",
            imageUrl: "",
            description: "Le diagramme de structure composite est un diagramme qui permet d'afficher une structure interne d'un classificateur. Elle affiche la configuration et la relation de parties qui ensemble effectue le comportement d'un classificateur."
        },
        {
            id: 5,

            title: "Diagrammes de Composants.",
            imageUrl: "",
            description: "Le Diagram de composant illustre toute les parties logiciel. Le diagramme de composant à un niveau d'abstraction plus élevé qu'un diagramme de classes "
        },
        {
            id: 6,
            title: "Diagrammes de Déploiement",
            imageUrl: "",
            description: "Le diagramme de déploiement et un modèle architectural de temp d'exécution d'un système. Il permet d'afficher la configuration des éléments matériel (noeud) et affiche des élement logiciels."
        },
        {
            id: 7,
            title: "Diagrammes de cas d'Utilisation.",
            imageUrl: "",
            description: "Le modèle de cas d'utilisation capture les exigences d'un système. Il montre l'interaction entre le système et les entités externes au système. Le cas d'utilisation sont un moyen de communiquer avec les utilisateur et d'autre parties prenantes ce que le système est destiné a faire "
        },
        {
            id: 8,
            title: " Diagrammes d'activité",
            imageUrl: "",
            description: "Le Diagrammes d'activité est utilisé pour afficher la séquence d'activité. Il affiche le flux de travail d'un point de départ à un point d'arrivée en détaillant sur les nombreux chemins de décision existant. Il peux être utilisé pour détailler des situations dans lesquelles un traitement parralèle peut avoir lieu lors d'une exécution"
        },
        {
            id: 9,
            title: " Diagrammes de StateMachine",
            imageUrl: "",
            description: "Le Diagramme de StateMachine permet de voir le comportement d'un objet unique , en précisant la séquence des évenements qu'un objet passe pendant ca durée de vie"
        },
        {
            id: 10,
            title: " Diagrammes de communication",
            imageUrl: "",
            description: "Le diagramme de communication est un schéma d'interaction. Il affiche des information similaire à des diagrammes de séquence, mais son objectif principal est de relations objet."
        },
        {
            id: 11,
            title: "Diagrammes de séquence",
            imageUrl: "",
            description: "Le Diagramme de séquence est une forme de diagrammr d'interaction."
        },
        {
            id: 12,
            title: " Diagrammes de temps",
            imageUrl: "",
            description: "Le Diagramme de temps est utilisé pour afficher le changement de valeur d'un ou plusieur élement au fil du temps. Il peux également montrer l'interaction entre les événements prévus et le temps et les contraintes de durée. "
        },
        {
            id: 13,
            title: " Diagrammes d'apercu d'interaction",
            imageUrl: "",
            description: "Le diagramme d'apercu d'interaction est une forme d'un diagramme d'activité. Dans lequel les noueds représentent des diagrammes d'interaction. Les vues d'ensemble sont par exemple : initiale, finale, décision , fusionner, fourchette."
        },
        {
            id: 14,
            title: " Diagrammes de Profil",
            imageUrl: "	",
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