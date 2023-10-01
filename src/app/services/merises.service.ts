import { Injectable } from "@angular/core";
import { Merise } from "../models/merise.model";

@Injectable({ providedIn :'root'})

export class MerisesService{

    merises: Merise[] = [   

        {
            id: 15,

            title: " MODÈLE CONCEPTUEL DE DONNÉES (MCD)" ,
            description: "Le Modèle Conceptuel de Données (MCD) représente les entités, leurs attributs et leurs associations dans un système d'information. Il s'agit d'une abstraction visuelle qui définit la structure des données utilisées dans un système, en identifiant les entités (objets), leurs propriétés (attributs) et les relations entre elles. " ,
            content:"",
            imageUrl: "https://www.prospection-ciblee.com/wp-content/uploads/2021/06/exemple-MCD.jpg",
        },
        {
            id: 16,

            title: "MODÈLE CONCEPTUEL DE TRAITEMENT (MCT)" ,
            description: " Le Modèle Conceptuel de Traitement (MCT) modélise les processus métier et les flux d'information entre eux. Il offre une vue d'ensemble des activités et des opérations au sein d'une organisation, en mettant en évidence comment les données circulent entre les différents processus. ",
            content:"",
            imageUrl: " ",
        },
        {
            id: 17,

            title: "MODÈLE CONCEPTUEL DE COMMUNICATION (MCC)" ,
            description: " Le Modèle Conceptuel de Communication (MCC) montre les interactions entre les acteurs (utilisateurs) du système et les processus métier. Il met en lumière comment les utilisateurs interagissent avec le système pour accomplir leurs tâches et comment ces interactions influencent les flux d'information.",
            content:"",
            imageUrl: " ",
        },
        {
            id: 18,

            title: "MODÈLE ORGANISATIONNEL DE DONNÉES (MOD)" ,
            description: " Le Modèle Organisationnel de Données (MOD) spécifie la manière dont les données sont stockées et organisées dans le système, notamment les tables de bases de données et leurs relations. Il décrit la structure de la base de données sous-jacente qui prend en charge le MCD. ",
            content:"",
            imageUrl: " ",
        },
        {
            id: 19,

            title: "MODÈLE ORGANISATIONNEL DE TRAITEMENT (MOT)" ,
            description: " Le Modèle Organisationnel de Traitement (MOT) définit la façon dont les tâches et les activités sont organisées au sein de l'entreprise, y compris les acteurs responsables de chaque activité. Il complète le MCT en précisant qui fait quoi dans le cadre des processus métier. ",
            content:"",
            imageUrl: " ",
        },
        {
            id: 20,

            title: "DIAGRAMME DE FLUX DE DONNÉES (DFD)" ,
            description: " Le Diagramme de Flux de Données (DFD) représente les flux de données entre les processus, les entités externes et les entrepôts de données. Il permet de visualiser comment les données circulent à travers un système et comment elles sont transformées lors des différentes étapes. ",
            content:"",
            imageUrl: " ",
        },
        {
            id: 21,

            title: "DIAGRAMME DE FLUX DE CONTRÔLE (CFD)" ,
            description: " Le Diagramme de Flux de Contrôle (CFD) détaille la séquence des étapes dans un processus ou une fonction. Il met en évidence l'ordre dans lequel les actions sont exécutées, ce qui est essentiel pour comprendre le fonctionnement détaillé d'un processus",
            content:"",
            imageUrl: " ",
        },
        {
            id: 22,

            title: " DIAGRAMME D'ARCHITECTURE DES SYSTÈMES D'INFORMATION (ASI) " ,
            description: " Le Diagramme d'Architecture des Systèmes d'Information (ASI) montre la structure générale du système d'information, y compris les composants matériels et logiciels. Il offre une vue d'ensemble de l'infrastructure technologique qui soutient les opérations de l'entreprise. ",
            content:"",
            imageUrl: " ",
        },
        {
            id: 23,

            title: " DIAGRAMME DE FLUX D'ARCHITECTURE (AFC) " ,
            description: "Le Diagramme de Flux d'Architecture (AFC) identifie les flux d'information à travers le système. Il permet de comprendre comment les données sont échangées entre les différents composants de l'architecture et comment elles contribuent aux processus métier",
            content:"",
            imageUrl: " ",
        },
        {
            id: 24,

            title: " DIAGRAMME D'ARCHITECTURE DES ORGANISATIONS (AO) " ,
            description: " Le Diagramme d'Architecture des Organisations (AO) décrit la structure organisationnelle de l'entreprise et les rôles des différents acteurs. Il permet de visualiser comment les responsabilités sont réparties au sein de l'organisation et comment les individus interagissent pour atteindre les objectifs.",
            content:"",
            imageUrl: " ",
        }

    ];

    getAllMerises(): Merise[] {
        return this.merises;
    }

    getMeriseById(meriseId:number): Merise{
        const merise = this.merises.find(merise => merise.id === meriseId);
        if(!merise){
            throw new Error ('not found');
        }else{
            return merise;
        }
    }

}