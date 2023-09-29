import { Injectable } from "@angular/core";
import { DiagrammeUml } from "../models/diagramme-uml.model";

@Injectable({
    providedIn: 'root'
})

export class DiagrammeUmlsService{

    diagrammesUmls: DiagrammeUml[] = [
        {
            id: 1,  
            title: "UML Diagramme de temps " ,
            description: " Le diagramme de temps en UML est utilisé pour montrer comment différents événements ou états se produisent dans le temps. Imaginez-le comme un moyen de raconter une histoire dans laquelle le temps est crucial. <br> Supposons que nous voulions représenter le processus de fonte d'une glace en eau en utilisant un diagramme de temps UML. <br> Explication : <br> * Ligne de Temps : La ligne horizontale représente le temps, avec la gauche comme début du processus et la droite comme fin du processus.<br> Intervalle de Temps :  L'intervalle de temps s'étend de T1 à T2 pour montrer la période pendant laquelle la fonte de la glace en eau se produit. <br>- À l'instant T1, nous commençons avec la Glace solide <br>- À l'instant T1.5, nous marquons l'événement de Fonte de la glace <br>- À l'instant T2, nous atteignons l'état final, Eau liquide. <br>- Événements : Les événements sont des points dans le temps marqués le long de la ligne de temps. <br> - À T1, nous avons l'événement Glace solide, indiquant l'état initial de la glace. <br>- À T1.5, nous ajoutons l'événement Fonte de la glace pour indiquer quand la fonte commence. <br>-    * À T2, nous avons l'événement Eau liquide, indiquant que la glace a fondu et est devenue de l'eau liquide. <br> * Flèches de Durée : Les flèches de durée relient les événements ou les états pour montrer la durée pendant laquelle ils se produisent. <br>-La flèche entre Glace solide et Fonte de la glace indique que la fonte de la glace commence à T1 et se poursuit jusqu'à T1.5. <br>-    * La flèche entre Fonte de la glace et Eau liquide montre que la fonte se termine à T2, et la glace est complètement fondue, devenant de l'Eau liquide." , 
            imageUrl: " ",
        },
        {
            id: 2,
     
            title: " Diagramme de séquence " ,
            description: "Diagramme de Séquence UML : <br>Le diagramme de séquence en UML est utilisé pour représenter l'interaction entre différents objets ou acteurs dans un système logiciel au fil du temps. Il met en évidence la séquence d'actions et de messages échangés entre ces entités pour accomplir une tâche spécifique.<br>Éléments Clés du Diagramme de Séquence :<br>-Objets ou Acteurs : Les objets sont les instances spécifiques de classes ou de composants logiciels, tandis que les acteurs sont des entités externes au système. Les objets et acteurs sont représentés par des rectangles contenant leur nom.<br>-Lignes de Vie : Les lignes de vie sont des lignes verticales qui représentent la durée de vie d'un objet ou d'un acteur pendant l'exécution du scénario. Chaque objet ou acteur est associé à une ligne de vie.<br>-Messages : Les messages sont des actions ou des interactions entre les objets ou acteurs. Ils sont représentés par des flèches dirigées de l'expéditeur vers le destinataire, indiquant la direction de la communication. Les messages peuvent être synchrones (attente d'une réponse immédiate) ou asynchrones (envoi sans attendre de réponse).<br>-Fragments : Les fragments, tels que les alt (alternatives) ou les loop (boucles), permettent de définir des conditions ou des boucles dans le scénario. Ils sont généralement représentés par des boîtes rectangulaires avec une étiquette qui indique la condition.<br>-Utilisation :<br>-Le diagramme de séquence est largement utilisé pour modéliser et visualiser les interactions dynamiques entre les objets ou acteurs dans un système logiciel. Il est particulièrement utile pour :<br> -Définir et documenter des scénarios d'utilisation ou des cas d'utilisation.<br>dentifier les dépendances et les séquences d'actions entre les objets.<br> Clarifier les flux de communication entre les composants du système.<br>Valider et documenter les interactions clés du système.<br> Exemple Simple :<br>Prenons un exemple simple de diagramme de séquence pour un processus de commande en ligne :<br>Les objets/acteurs : Client, Panier, Produit, Système de Commande, Base de Données.<br> Le diagramme de séquence illustrerait la séquence d'interactions entre ces entités, montrant comment un client ajoute un produit à son panier, passe une commande, etc.<br>En résumé, le diagramme de séquence UML est un outil essentiel pour représenter visuellement les interactions et la séquence d'actions entre les objets et acteurs d'un système logiciel, permettant de comprendre comment ils collaborent pour accomplir des tâches spécifiques " ,
            imageUrl: " ",
        },
        {
            id: 3,

            title: " UML Diagramme d’acctivité " ,
            description: " Un diagramme d'activité en UML est utilisé pour modéliser les processus, les workflows et les activités à l'intérieur d'un système ou d'un processus métier. Il est particulièrement utile pour représenter les flux de travail, les opérations et les décisions au sein d'une application ou d'un processus. Voici comment fonctionne un diagramme d'activité : <br>  Éléments clés d'un diagramme d'activité : <br> Activités : Les activités représentent des actions ou des étapes spécifiques à l intérieur du processus. Elles sont généralement représentées par des formes rectangulaires avec le nom de l'activité à l'intérieur. <br>Flèches de Contrôle de Flux : Les flèches de contrôle de flux (flèches solides) sont utilisées pour indiquer la séquence des activités, c est-à-dire l'ordre dans lequel elles sont exécutées. <br>Décisions : Les décisions (losanges) sont utilisées pour représenter des points de décision dans le processus. En fonction des conditions spécifiées, le flux peut bifurquer vers différentes activités. <br>Fusion : Les points de fusion (barres en forme de T) indiquent où plusieurs chemins de contrôle se rejoignent après une décision. <br>Flèches de Flux de Contrôle Conditionnel : Les flèches de flux de contrôle conditionnel (flèches en pointillés) sont utilisées pour représenter les chemins alternatifs dans le cas de décisions. <br>Flots d Objets : Les flots d objets (lignes en zigzag) indiquent le transfert de données ou d informations entre les activités. <br>Utilisation : <br> Les diagrammes d activité sont couramment utilisés pour modéliser des processus métier, des algorithmes, des flux de travail logiciels, des systèmes embarqués et d autres systèmes où l accent est mis sur les activités et les actions qui se produisent dans un ordre spécifique.",
            imageUrl: " ",
        },
        {
            id: 4,

            title: " UML Diagramme   " ,
            description: "",
            imageUrl: " ",
        },
        {
            id: 5,

            title: "UML Diagramme de  " ,
            description: "",
            imageUrl: " ",
        },
        {
            id: 6,

            title: " UML - Diagramme de Package " ,

            description: " ", 
            imageUrl: "",
        },
        {
            id: 7,
            
            title: "Diagramme de profil" ,

            description: " Un diagramme de profil en UML est utilisé pour définir et personnaliser de nouveaux éléments, des stéréotypes, des types d'éléments, des contraintes et d'autres métadonnées pour étendre le langage UML de base. Ces profils permettent d'adapter UML à des domaines spécifiques ou à des besoins particuliers dans un projet. Voici comment fonctionne un diagramme de profil en UML : <br>Éléments clés d'un diagramme de profil :<br> Éléments UML de base : Un diagramme de profil utilise les éléments UML de base, tels que les classes, les associations, les packages, etc., comme point de départ pour la création de profils. <br> Stéréotypes : Les stéréotypes sont des étiquettes spéciales qui sont appliquées aux éléments UML de base pour indiquer qu'ils sont associés à un profil particulier. Les stéréotypes permettent de marquer les éléments en fonction de leur rôle dans le profil. <br>  Types d'éléments : Les types d'éléments définissent de nouveaux types spécifiques au profil, par exemple, de nouvelles classes, associations ou objets d'activité. <br> Contraintes : Les contraintes peuvent être utilisées pour définir des règles ou des conditions spécifiques aux éléments du profil. <br> Utilisation : <br> Les diagrammes de profil en UML sont utilisés pour personnaliser le langage UML afin qu'il corresponde aux besoins spécifiques d'un projet ou d'un domaine d'application. Les profils sont particulièrement utiles pour ajouter des métadonnées, des règles de validation et des conventions de modélisation spécifiques à un projet. <br> Exemple simplifié : <br> Prenons un exemple simple d'un diagramme de profil UML pour un projet de modélisation de système de réservation de billets en ligne. Voici comment cela pourrait être conçu : <br>Dans cet exemple : <br> - ProfilReservation est le nom du profil personnalisé. <br>- Reservation et Bill et sont des stéréotypes qui étendent les éléments UML de base, comme les classes.<br>- Les stéréotypes Reservation et Billet sont associés à des types d'éléments spécifiques qui les définissent comme des types de classes spécifiques au profil.<br> - Chaque stéréotype comporte des propriétés spécifiques, telles que Date, Heure, Type, etc., qui sont spécifiques à ce domaine d'application.<br> Ce diagramme de profil définit un profil UML personnalisé pour la modélisation d'un système de réservation de billets en ligne, en ajoutant des éléments et des propriétés spécifiques à ce domaine. Cela permet aux concepteurs de systèmes de réservation de billets d'utiliser ces éléments de profil lors de la création de leurs modèles UML pour ce projet. " ,
            imageUrl: " ",
        },
        {
            id: 8,

            title: " Diagramme de structure composite " ,

            description: "Un diagramme de structure composite en UML est utilisé pour représenter la structure interne d'un composant complexe en montrant comment les parties ou les sous-composants sont connectés pour former le composant global. Ce type de diagramme est utile pour décomposer un système en sous-systèmes ou composants, ce qui facilite la compréhension de sa structure hiérarchique. Voici comment fonctionne un diagramme de structure composite en UML : <br> Éléments clés d'un diagramme de structure composite : <br>1. Composant composite : Il s'agit du composant global que vous souhaitez décomposer en sous-composants. Il est généralement représenté par un rectangle avec un bord en pointillés et son nom à l'intérieur.<br> 2. Sous-composants : Ce sont les parties ou les composants internes qui composent le composant composite. Ils sont généralement représentés par des rectangles avec leur nom à l'intérieur.<br>3. Associations : Les flèches pleines indiquent les associations entre le composant composite et ses sous-composants, montrant comment ils sont connectés.<br> Utilisation :<br> Les diagrammes de structure composite sont utilisés pour décomposer des composants complexes en éléments plus simples, ce qui permet une meilleure compréhension de la structure hiérarchique d'un système. Ils sont particulièrement utiles lorsque vous devez modéliser des systèmes complexes, des sous-systèmes ou des composants logiciels.<br>  Exemple simplifié :<br> Supposons que vous souhaitiez créer un diagramme de structure composite pour représenter un ordinateur personnel en tant que composant complexe composé de plusieurs sous-composants internes. Voici comment cela pourrait être représenté :<br>Dans cet exemple :<br>  - Ordinateur est le composant composite global qui représente l'ordinateur personnel.<br> - Carte mère, Processeur, Mémoire RAM et Disque dur sont des sous-composants internes qui composent l'ordinateur.<br>   - Les associations (flèches pleines) montrent comment les sous-composants sont connectés à la carte mère, qui est le composant composite.<br>- Ce diagramme de structure composite décompose l'ordinateur en ses composants internes, ce qui permet de comprendre comment ces composants sont reliés pour former l'ensemble de l'ordinateur. " ,
              imageUrl: " ",
        },
        {
            id: 9,

            title: " Diagramme de composant" ,

            description: "Un diagramme de composants en UML est utilisé pour modéliser la structure physique d'un système logiciel en mettant en évidence les composants logiciels et leurs dépendances. Il montre comment les différents éléments logiciels (composants) sont regroupés et comment ils interagissent pour créer un système logiciel complet. Voici comment fonctionne un diagramme de composants en UML :<br>  Éléments clés d'un diagramme de composants :<br>1. Composants :Les composants sont des unités logicielles autonomes qui effectuent des tâches spécifiques. Ils sont représentés par des rectangles avec leur nom à l'intérieur.<br> 2. Interfaces :Les interfaces définissent les points d'interaction entre les composants. Elles sont généralement représentées par des demi-cercles et sont connectées aux composants pour montrer les ports par lesquels les composants communiquent.<br>3.Dépendances :Les flèches avec des pointillés indiquent les dépendances entre les composants. Une dépendance peut signifier qu'un composant dépend d'un autre pour fonctionner correctement.<br> Utilisation :<br> Les diagrammes de composants sont utilisés pour représenter la structure physique d un système logiciel, y compris la manière dont les composants sont organisés et comment ils interagissent. Cela aide les concepteurs à comprendre comment les différentes parties d un système logiciel sont connectées et interdépendantes.<br> Exemple simplifié :<br>Supposons que vous souhaitiez créer un diagramme de composants pour un système de gestion de bibliothèque en ligne. Voici comment cela pourrait être représenté :<br> Dans cet exemple :<br> - Système Bibliothèque est le nom du système logiciel global.<br>  - Application Web est le composant principal qui gère l'interface utilisateur et interagit avec les utilisateurs.<br>   - Gestionnaire de Bibliothèque est un sous-composant de l'application web qui gère la logique métier de la bibliothèque.<br>    - Base de données est un composant qui stocke toutes les données de la bibliothèque, telles que les informations sur les livres, les utilisateurs, les emprunts, etc.<br>   - Les interfaces (représentées par des demi-cercles) définissent les points d'interaction entre les composants. Par exemple, l'interface entre Application Web et Gestionnaire de Bibliothèque indique comment ils communiquent pour gérer les opérations de la bibliothèque.<br>  - Les dépendances (représentées par des flèches pointillées) indiquent que Application Web dépend de Gestionnaire de Bibliothèque pour fonctionner correctement, et que Gestionnaire de Bibliothèque dépend de Base de données pour accéder aux données de la bibliothèque.<br> Ce diagramme de composants simplifié montre la structure physique du système de gestion de bibliothèque en ligne, y compris les composants logiciels et leurs interactions." ,
            imageUrl: " ",
        },
        {
            id: 10,

            title: " Diagramme de déploiement" ,

            description: " Un diagramme de profil en UML est utilisé pour définir et personnaliser de nouveaux éléments, des stéréotypes, des types d'éléments, des contraintes et d'autres métadonnées pour étendre le langage UML de base. Ces profils permettent d'adapter UML à des domaines spécifiques ou à des besoins particuliers dans un projet. Voici comment fonctionne un diagramme de profil en UML :  <br>Éléments clés d'un diagramme de profil : <br> 1. Éléments UML de base : Un diagramme de profil utilise les éléments UML de base, tels que les classes, les associations, les packages, etc., comme point de départ pour la création de profils.<br> 2. Stéréotypes :Les stéréotypes sont des étiquettes spéciales qui sont appliquées aux éléments UML de base pour indiquer qu'ils sont associés à un profil particulier. Les stéréotypes permettent de marquer les éléments en fonction de leur rôle dans le profil.<br>3. Types d'éléments : Les types d'éléments définissent de nouveaux types spécifiques au profil, par exemple, de nouvelles classes, associations ou objets d'activité.<br> 4. Contraintes : Les contraintes peuvent être utilisées pour définir des règles ou des conditions spécifiques aux éléments du profil.<br>Utilisation :<br>Les diagrammes de profil en UML sont utilisés pour personnaliser le langage UML afin qu'il corresponde aux besoins spécifiques d'un projet ou d'un domaine d'application. Les profils sont particulièrement utiles pour ajouter des métadonnées, des règles de validation et des conventions de modélisation spécifiques à un projet.<br> " ,
            imageUrl: " ",
        },
        {
            id: 11,

            title: " Diagramme d’etat transition  " ,

            description: "￼ Un diagramme d'état-transition en UML est utilisé pour représenter les différents états d'un objet ou d'un système, ainsi que les transitions entre ces états en réponse à des événements spécifiques. Cela permet de modéliser le comportement d'un objet ou d'un système dans diverses situations. Voici comment fonctionne un diagramme d'état-transition : <br> Éléments clés d'un diagramme d'état-transition :<br> 1. État : Un état représente une condition ou une situation spécifique dans laquelle l'objet ou le système peut se trouver. Les états sont généralement représentés par des rectangles avec le nom de l'état à l'intérieur.<br>  * Tout diagramme a un état initial: point noir<br>  *   Tout diagramme a un état final : point noir + cercle<br> *   Une action est un élément représentant une partie élémentaire d'une activité. Représenter par un carrée <br> 2. Transition : Une transition est une flèche qui relie deux états et représente le passage d'un état à un autre en réponse à un événement. Les transitions sont déclenchées par des événements spécifiques et peuvent avoir des actions associées.<br> 3. Événement :Un événement est une cause externe ou interne qui déclenche une transition d'un état à un autre. Les événements sont généralement représentés par des flèches entrantes dans un état.<br> 4. Action : Une action est une activité ou un comportement qui peut être effectué lorsqu'une transition a lieu, par exemple, une action qui se produit lorsque l'objet entre dans un nouvel état.<br> Utilisation :<br>  Les diagrammes d'état-transition sont utilisés pour modéliser le comportement d'un objet ou d'un système dans le temps en décrivant comment il réagit aux différents événements. Ils sont utiles pour comprendre et documenter les états possibles d'un système, ainsi que les transitions entre ces états.<br> Exemple simple :<br> Bien sûr, voici un exemple simple d'un diagramme d'état-transition pour un feu de circulation (feu stop) :<br>  États :<br>   - État 1 : Feu Rouge (arrêt)<br>  - État 2 : Feu Vert (autorisation de passage)<br>  - État 3 : Feu Orange (préparation à l'arrêt)<br> Transitions :<br>  - Transition 1 : Lorsque le feu est à l'état Feu Rouge, il passe à l'état Feu Vert en réponse à l'événement Fin de l'intervalle du feu rouge (ex : minuterie).<br> - Transition 2 : Lorsque le feu est à l'état Feu Vert, il passe à l'état Feu Orange en réponse à l'événement Début de l'intervalle du feu vert.<br> - Transition 3 : Lorsque le feu est à l'état Feu Orange, il passe à l'état Feu Rouge en réponse à l'événement Fin de l'intervalle du feu orange (ex : minuterie).<br> Voici un schéma simple de ce diagramme :<br>  Ce diagramme représente le comportement d'un feu de circulation, montrant comment il passe de l état Feu Rouge à Feu Vert lorsque le temps alloué au feu rouge est écoulé, puis de Feu Vert à Feu Orange lorsque le temps alloué au feu vert est écoulé, et enfin de Feu Orange à Feu Rouge lorsque le temps alloué au feu orange est écoulé. C'est ainsi que fonctionne le cycle de régulation d'un feu de circulation typique.<br>  En résumé, un diagramme d'état-transition en UML est un outil puissant pour modéliser le comportement d'un objet ou d'un système en montrant les états possibles, les transitions entre ces états et les événements qui déclenchent ces transitions.",
            imageUrl: " ",
        },
        {
            id: 12,

            title: "Diagramme de communication  " ,

            description: " " ,
            imageUrl: " ",
        },
        {
            id: 13,

            title: "Diagram des use cases  " ,

            description: " Un diagramme de cas d'utilisation UML avec les relations « include » et « extend » est un excellent moyen de modéliser des scénarios de cas d'utilisation où certaines fonctionnalités (cas d'utilisation inclus) sont facultatives ou dépendent d'autres fonctionnalités (cas d'utilisation étendu). Voici comment ces relations fonctionnent, suivi d'un exemple avec un jeu où vous avez deux choix : jouer pour gagner. <br>  Include (Inclure) : Cette relation est utilisée pour montrer qu'un cas d'utilisation (inclus) peut être intégré (inclus) dans un autre cas d'utilisation principal. Le cas d'utilisation inclus est déclenché en fonction de certaines conditions. l’action implique cette autres action <br> Extend (Étendre) : Cette relation est utilisée pour montrer qu'un cas d'utilisation (étendu) peut ajouter des fonctionnalités optionnelles à un cas d'utilisation principal en fonction de certaines conditions. Options <br>  Exemple de Diagramme de Cas d'Utilisation - Jeu avec Include et Extend :<br> Imaginons un jeu d'aventure simple où un joueur peut choisir entre deux actions : Explorer la grotte ou Parler au gardien de la grotte. Dans le cas d'utilisation principal, le joueur peut choisir l'une de ces actions. Cependant, ces actions peuvent être étendues ou incluses en fonction de certaines conditions.<br> Voici comment le diagramme de cas d'utilisation pourrait être construit :<br> Dans cet exemple :<br> - Le joueur peut choisir d'Explorer la Grotte ou Parler au Gardien de la Grotte dans le cas d'utilisation principal.<br>  - L'action Explorer la Grotte est un cas d'utilisation inclus qui peut être déclenché à tout moment par le joueur. Par exemple, il peut choisir d'explorer la grotte à tout moment pendant le jeu.<br> - L'action Parler au Gardien de la Grotte est un cas d'utilisation étendu qui ajoute une option de dialogue au cas d'utilisation principal. Il est déclenché lorsque le joueur choisit de parler au gardien.<br> En résumé, ce diagramme de cas d'utilisation illustre comment les cas d'utilisation inclus et étendus peuvent être utilisés pour modéliser des fonctionnalités optionnelles ou conditionnelles dans un scénario de jeu simple." ,
            
            imageUrl: " ",
        },
        {
            id: 14,

            title: " " ,
            description: " " ,
            imageUrl: " ",
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