import { Injectable } from "@angular/core";
import { DiagrammeUml } from "../models/diagramme-uml.model";

@Injectable({
    providedIn: 'root'
})

export class DiagrammeUmlsService{

    diagrammesUmls: DiagrammeUml[] = [
        {
            id: 1,  
            title: "Diagramme de temps " ,
            description: " Le diagramme de temps en UML est utilisé pour montrer comment différents événements ou états se produisent dans le temps. Imaginez-le comme un moyen de raconter une histoire dans laquelle le temps est crucial." , 
            content:" <br/><br/> Supposons que nous voulions représenter le processus de fonte d'une glace en eau en utilisant un diagramme de temps UML. <br/><br/> Explication : <br/><br/> * Ligne de Temps : La ligne horizontale représente le temps, avec la gauche comme début du processus et la droite comme fin du processus.<br/><br/> Intervalle de Temps :  L'intervalle de temps s'étend de T1 à T2 pour montrer la période pendant laquelle la fonte de la glace en eau se produit. <br/><br/>- À l'instant T1, nous commençons avec la Glace solide <br/><br/>- À l'instant T1.5, nous marquons l'événement de Fonte de la glace <br/><br/>- À l'instant T2, nous atteignons l'état final, Eau liquide. <br/><br/>- Événements : Les événements sont des points dans le temps marqués le long de la ligne de temps. <br/><br/> - À T1, nous avons l'événement Glace solide, indiquant l'état initial de la glace. <br/><br/>- À T1.5, nous ajoutons l'événement Fonte de la glace pour indiquer quand la fonte commence. <br/><br/>-    * À T2, nous avons l'événement Eau liquide, indiquant que la glace a fondu et est devenue de l'eau liquide. <br/><br/> * Flèches de Durée : Les flèches de durée relient les événements ou les états pour montrer la durée pendant laquelle ils se produisent. <br/><br/>-La flèche entre Glace solide et Fonte de la glace indique que la fonte de la glace commence à T1 et se poursuit jusqu'à T1.5. <br/><br/>-    * La flèche entre Fonte de la glace et Eau liquide montre que la fonte se termine à T2, et la glace est complètement fondue, devenant de l'Eau liquide.Ligne de Temps :<br/><br/>  |------------------------------------------------------------|<br/><br/>Intervalle de Temps :<br/><br/>    |--------------------------------|<br/><br/>                   T1                               T2<br/><br/> Événements :<br/><br/>T1 : Glace solide<br/><br/>T2 : Eau liquide<br/><br/>Flèches de Durée :<br/><br/>[--------------------|--------------------------------]<br/><br/>   Glace solide      Eau liquide<br/><br/> (fonte de la glace)",
            imageUrl: "https://i.ytimg.com/vi/K_RD307O4Co/maxresdefault.jpg",
        },
        {
            id: 2,
     
            title: " Diagramme de séquence " ,
            content : "Éléments Clés du Diagramme de Séquence :<br/><br/>-Objets ou Acteurs : Les objets sont les instances spécifiques de classes ou de composants logiciels, tandis que les acteurs sont des entités externes au système. Les objets et acteurs sont représentés par des rectangles contenant leur nom.<br/><br/>-Lignes de Vie : Les lignes de vie sont des lignes verticales qui représentent la durée de vie d'un objet ou d'un acteur pendant l'exécution du scénario. Chaque objet ou acteur est associé à une ligne de vie.<br/><br/>-Messages : Les messages sont des actions ou des interactions entre les objets ou acteurs. Ils sont représentés par des flèches dirigées de l'expéditeur vers le destinataire, indiquant la direction de la communication. Les messages peuvent être synchrones (attente d'une réponse immédiate) ou asynchrones (envoi sans attendre de réponse).<br/><br/>-Fragments : Les fragments, tels que les alt (alternatives) ou les loop (boucles), permettent de définir des conditions ou des boucles dans le scénario. Ils sont généralement représentés par des boîtes rectangulaires avec une étiquette qui indique la condition.<br/><br/>-Utilisation :<br/><br/>-Le diagramme de séquence est largement utilisé pour modéliser et visualiser les interactions dynamiques entre les objets ou acteurs dans un système logiciel. Il est particulièrement utile pour :<br/><br/> -Définir et documenter des scénarios d'utilisation ou des cas d'utilisation.<br/><br/>dentifier les dépendances et les séquences d'actions entre les objets.<br/><br/> Clarifier les flux de communication entre les composants du système.<br/><br/>Valider et documenter les interactions clés du système.<br/><br/> Exemple Simple :<br/><br/>Prenons un exemple simple de diagramme de séquence pour un processus de commande en ligne :<br/><br/>Les objets/acteurs : Client, Panier, Produit, Système de Commande, Base de Données.<br/><br/> Le diagramme de séquence illustrerait la séquence d'interactions entre ces entités, montrant comment un client ajoute un produit à son panier, passe une commande, etc.<br/><br/>En résumé, le diagramme de séquence UML est un outil essentiel pour représenter visuellement les interactions et la séquence d'actions entre les objets et acteurs d'un système logiciel, permettant de comprendre comment ils collaborent pour accomplir des tâches spécifiques " ,
            description:"Le diagramme de séquence en UML est utilisé pour représenter l'interaction entre différents objets ou acteurs dans un système logiciel au fil du temps. Il met en évidence la séquence d'actions et de messages échangés entre ces entités pour accomplir une tâche spécifique.",
            imageUrl: "https://images.edrawmax.com/examples/sequence-diagram-examples/example03.jpg",
        },
        {
            id: 3,

            title: "Diagramme d’acctivité " ,
            content : "  Voici comment fonctionne un diagramme d'activité : <br/><br/>  Éléments clés d'un diagramme d'activité : <br/><br/> Activités : Les activités représentent des actions ou des étapes spécifiques à l intérieur du processus. Elles sont généralement représentées par des formes rectangulaires avec le nom de l'activité à l'intérieur. <br/><br/>Flèches de Contrôle de Flux : Les flèches de contrôle de flux (flèches solides) sont utilisées pour indiquer la séquence des activités, c est-à-dire l'ordre dans lequel elles sont exécutées. <br/><br/>Décisions : Les décisions (losanges) sont utilisées pour représenter des points de décision dans le processus. En fonction des conditions spécifiées, le flux peut bifurquer vers différentes activités. <br/><br/>Fusion : Les points de fusion (barres en forme de T) indiquent où plusieurs chemins de contrôle se rejoignent après une décision. <br/><br/>Flèches de Flux de Contrôle Conditionnel : Les flèches de flux de contrôle conditionnel (flèches en pointillés) sont utilisées pour représenter les chemins alternatifs dans le cas de décisions. <br/><br/>Flots d Objets : Les flots d objets (lignes en zigzag) indiquent le transfert de données ou d informations entre les activités. <br/><br/>Utilisation : <br/><br/> Les diagrammes d activité sont couramment utilisés pour modéliser des processus métier, des algorithmes, des flux de travail logiciels, des systèmes embarqués et d autres systèmes où l accent est mis sur les activités et les actions qui se produisent dans un ordre spécifique.",
            description:"Un diagramme d'activité en UML est utilisé pour modéliser les processus, les workflows et les activités à l'intérieur d'un système ou d'un processus métier. Il est particulièrement utile pour représenter les flux de travail, les opérations et les décisions au sein d'une application ou d'un processus.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Schéma_d%27un_groupe_d%27activités_représentant_le_fonctionnement_d%27une_borne_bancaire.PNG ",
        },
        {
            id: 4,

            title: "Diagramme  Collaboration " ,
            content : ": 1. Acteurs : Les acteurs sont des entités externes au système qui interagissent avec lui. Ils sont représentés par des formes ovales ou des boîtes de texte situées en haut du diagramme. Chaque acteur peut être nommé et avoir un rôle spécifique. 2. Objets : Les objets sont les instances de classes ou d'entités du système qui participent aux interactions. Ils sont représentés par des rectangles situés sous les acteurs. Chaque objet peut être nommé et indiquer sa classe d'appartenance. 3. Lignes de communication : Les lignes de communication sont des flèches oudes lignes pleines qui connectent les acteurs aux objets et les objets entre eux. Elles représentent les messages ou les informations échangés lors des interactions. 4. Messages : Les messages sont des étiquettes le long des lignes de communication qui décrivent les actions ou les interactions entre les acteurs et les objets. Les messages peuvent être synchrones (bloquants) ou asynchrones (non bloquants). 5. Rôles : Les rôles sont des labels optionnels attribués aux obiets pour préciser leur fonction dans une interaction spécifique. Ils sont souvent utilisés pour montrer comment différents objets collaborent pour accomplir une tâche.",
            description :"Voici une explication rapide des composants clés d'un diagramme de collaboration",
            imageUrl: "https://i.ytimg.com/vi/Lp77w8TDZ3A/maxresdefault.jpg ",
        },
        {
            id: 5,

            title: "Diagramme de vue d'ensemble " ,
            content: "Ces paquetages aident à organiser les classes, les composants, les modules, etc., en unités logiques cohérentes. Les flèches entre les  paquetages représentent les dépendances ou les relations entre eux. Le diagramme de vue d'ensemble offre une vue globale de la structure   du système et simplifie la compréhension de sa complexité. ",
            description:"Un diagramme de vue d'ensemble est composé de paquetages, qui sont des conteneurs logiques pour regrouper des éléments du modèle.",
            imageUrl: " ",
        },
        {
            id: 6,

            title: "Diagramme de Package à completer " ,

            content: " • Ils simplifient les diagrammes de classes complexes en les  organisant de manière visuelle. • Ils sont particulièrement utiles pour les projets et systèmes de grande envergure. • Les diagrammes de paquetages peuvent être utilisés pour clarifier visuellement divers types de proiets et systèmes. • Ils sont facilement mis à jour pour refléter les changements dans les systèmes et les projets au fil du temps. ",
            description:"Ils offrent une vue hiérarchique précise de la structure deséléments UML au sein d'un système.", 
            imageUrl: "https://help.sap.com/doc/1cc460ad80f446e6a9d19303919ee269/16.7.07/fr-FR/loioc7609c916e1b10148c64ce93d386136d_LowRes.gif",
        },
        {
            id: 7,
            
            title: "Diagramme de profil" ,

            description: " Un diagramme de profil en UML est utilisé pour définir et personnaliser de nouveaux éléments, des stéréotypes, des types d'éléments, des contraintes et d'autres métadonnées pour étendre le langage UML de base. Ces profils permettent d'adapter UML à des domaines spécifiques ou à des besoins particuliers dans un projet.",
            content:"Voici comment fonctionne un diagramme de profil en UML : <br/><br/>Éléments clés d'un diagramme de profil :<br/><br/> Éléments UML de base : Un diagramme de profil utilise les éléments UML de base, tels que les classes, les associations, les packages, etc., comme point de départ pour la création de profils. <br/><br/> Stéréotypes : Les stéréotypes sont des étiquettes spéciales qui sont appliquées aux éléments UML de base pour indiquer qu'ils sont associés à un profil particulier. Les stéréotypes permettent de marquer les éléments en fonction de leur rôle dans le profil. <br/><br/>  Types d'éléments : Les types d'éléments définissent de nouveaux types spécifiques au profil, par exemple, de nouvelles classes, associations ou objets d'activité. <br/><br/> Contraintes : Les contraintes peuvent être utilisées pour définir des règles ou des conditions spécifiques aux éléments du profil. <br/><br/> Utilisation : <br/><br/> Les diagrammes de profil en UML sont utilisés pour personnaliser le langage UML afin qu'il corresponde aux besoins spécifiques d'un projet ou d'un domaine d'application. Les profils sont particulièrement utiles pour ajouter des métadonnées, des règles de validation et des conventions de modélisation spécifiques à un projet. <br/><br/> Exemple simplifié : <br/><br/> Prenons un exemple simple d'un diagramme de profil UML pour un projet de modélisation de système de réservation de billets en ligne. Voici comment cela pourrait être conçu : <br/><br/>Dans cet exemple : <br/><br/> - ProfilReservation est le nom du profil personnalisé. <br/><br/>- Reservation et Bill et sont des stéréotypes qui étendent les éléments UML de base, comme les classes.<br/><br/>- Les stéréotypes Reservation et Billet sont associés à des types d'éléments spécifiques qui les définissent comme des types de classes spécifiques au profil.<br/><br/> - Chaque stéréotype comporte des propriétés spécifiques, telles que Date, Heure, Type, etc., qui sont spécifiques à ce domaine d'application.<br/><br/> Ce diagramme de profil définit un profil UML personnalisé pour la modélisation d'un système de réservation de billets en ligne, en ajoutant des éléments et des propriétés spécifiques à ce domaine. Cela permet aux concepteurs de systèmes de réservation de billets d'utiliser ces éléments de profil lors de la création de leurs modèles UML pour ce projet.",
            imageUrl: " https://i.ytimg.com/vi/bNtaIlB1eQc/maxresdefault.jpg ",
        },
        {
            id: 8,

            title: " Diagramme de structure composite   " ,

            description: "Un diagramme de structure composite en UML est utilisé pour représenter la structure interne d'un composant complexe en montrant comment les parties ou les sous-composants sont connectés pour former le composant global. Ce type de diagramme est utile pour décomposer un système en sous-systèmes ou composants, ce qui facilite la compréhension de sa structure hiérarchique.  " ,
            content:"Voici comment fonctionne un diagramme de structure composite en UML : <br/><br/> Éléments clés d'un diagramme de structure composite : <br/><br/>1. Composant composite : Il s'agit du composant global que vous souhaitez décomposer en sous-composants. Il est généralement représenté par un rectangle avec un bord en pointillés et son nom à l'intérieur.<br/><br/> 2. Sous-composants : Ce sont les parties ou les composants internes qui composent le composant composite. Ils sont généralement représentés par des rectangles avec leur nom à l'intérieur.<br/><br/>3. Associations : Les flèches pleines indiquent les associations entre le composant composite et ses sous-composants, montrant comment ils sont connectés.<br/><br/> Utilisation :<br/><br/> Les diagrammes de structure composite sont utilisés pour décomposer des composants complexes en éléments plus simples, ce qui permet une meilleure compréhension de la structure hiérarchique d'un système. Ils sont particulièrement utiles lorsque vous devez modéliser des systèmes complexes, des sous-systèmes ou des composants logiciels.<br/><br/>  Exemple simplifié :<br/><br/> Supposons que vous souhaitiez créer un diagramme de structure composite pour représenter un ordinateur personnel en tant que composant complexe composé de plusieurs sous-composants internes. Voici comment cela pourrait être représenté :<br/><br/>Dans cet exemple :<br/><br/>  - Ordinateur est le composant composite global qui représente l'ordinateur personnel.<br/><br/> - Carte mère, Processeur, Mémoire RAM et Disque dur sont des sous-composants internes qui composent l'ordinateur.<br/><br/>   - Les associations (flèches pleines) montrent comment les sous-composants sont connectés à la carte mère, qui est le composant composite.<br/><br/>- Ce diagramme de structure composite décompose l'ordinateur en ses composants internes, ce qui permet de comprendre comment ces composants sont reliés pour former l'ensemble de l'ordinateur.",
              imageUrl: "https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/blog/UML-class-example@2x.png",
        },
        {
            id: 9,

            title: " Diagramme de composant à modifier " ,

            description: "Un diagramme de composants en UML est utilisé pour modéliser la structure physique d'un système logiciel en mettant en évidence les composants logiciels et leurs dépendances. Il montre comment les différents éléments logiciels (composants) sont regroupés et comment ils interagissent pour créer un système logiciel complet. " ,
            content:"Voici comment fonctionne un diagramme de composants en UML :<br/><br/>  Éléments clés d'un diagramme de composants :<br/><br/>1. Composants :Les composants sont des unités logicielles autonomes qui effectuent des tâches spécifiques. Ils sont représentés par des rectangles avec leur nom à l'intérieur.<br/><br/> 2. Interfaces :Les interfaces définissent les points d'interaction entre les composants. Elles sont généralement représentées par des demi-cercles et sont connectées aux composants pour montrer les ports par lesquels les composants communiquent.<br/><br/>3.Dépendances :Les flèches avec des pointillés indiquent les dépendances entre les composants. Une dépendance peut signifier qu'un composant dépend d'un autre pour fonctionner correctement.<br/><br/> Utilisation :<br/><br/> Les diagrammes de composants sont utilisés pour représenter la structure physique d un système logiciel, y compris la manière dont les composants sont organisés et comment ils interagissent. Cela aide les concepteurs à comprendre comment les différentes parties d un système logiciel sont connectées et interdépendantes.<br/><br/> Exemple simplifié :<br/><br/>Supposons que vous souhaitiez créer un diagramme de composants pour un système de gestion de bibliothèque en ligne. Voici comment cela pourrait être représenté :<br/><br/> Dans cet exemple :<br/><br/> - Système Bibliothèque est le nom du système logiciel global.<br/><br/>  - Application Web est le composant principal qui gère l'interface utilisateur et interagit avec les utilisateurs.<br/><br/>   - Gestionnaire de Bibliothèque est un sous-composant de l'application web qui gère la logique métier de la bibliothèque.<br/><br/>    - Base de données est un composant qui stocke toutes les données de la bibliothèque, telles que les informations sur les livres, les utilisateurs, les emprunts, etc.<br/><br/>   - Les interfaces (représentées par des demi-cercles) définissent les points d'interaction entre les composants. Par exemple, l'interface entre Application Web et Gestionnaire de Bibliothèque indique comment ils communiquent pour gérer les opérations de la bibliothèque.<br/><br/>  - Les dépendances (représentées par des flèches pointillées) indiquent que Application Web dépend de Gestionnaire de Bibliothèque pour fonctionner correctement, et que Gestionnaire de Bibliothèque dépend de Base de données pour accéder aux données de la bibliothèque.<br/><br/> Ce diagramme de composants simplifié montre la structure physique du système de gestion de bibliothèque en ligne, y compris les composants logiciels et leurs interactions",
            imageUrl: " ",
        },
        {
            id: 10,

            title: " Diagramme de déploiement a re faire" ,

            description: " A re faire  " ,
            content:".",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/UML_Diagram_Deployment.svg ",
        },
        {
            id: 11,

            title: " Diagramme d’etat transition  " ,

            description: "￼ Un diagramme d'état-transition en UML est utilisé pour représenter les différents états d'un objet ou d'un système, ainsi que les transitions entre ces états en réponse à des événements spécifiques. Cela permet de modéliser le comportement d'un objet ou d'un système dans diverses situations. ",
            content:"Voici comment fonctionne un diagramme d'état-transition : <br/><br/> Éléments clés d'un diagramme d'état-transition :<br/><br/> 1. État : Un état représente une condition ou une situation spécifique dans laquelle l'objet ou le système peut se trouver. Les états sont généralement représentés par des rectangles avec le nom de l'état à l'intérieur.<br/><br/>  * Tout diagramme a un état initial: point noir<br/><br/>  *   Tout diagramme a un état final : point noir + cercle<br/><br/> *   Une action est un élément représentant une partie élémentaire d'une activité. Représenter par un carrée <br/><br/> 2. Transition : Une transition est une flèche qui relie deux états et représente le passage d'un état à un autre en réponse à un événement. Les transitions sont déclenchées par des événements spécifiques et peuvent avoir des actions associées.<br/><br/> 3. Événement :Un événement est une cause externe ou interne qui déclenche une transition d'un état à un autre. Les événements sont généralement représentés par des flèches entrantes dans un état.<br/><br/> 4. Action : Une action est une activité ou un comportement qui peut être effectué lorsqu'une transition a lieu, par exemple, une action qui se produit lorsque l'objet entre dans un nouvel état.<br/><br/> Utilisation :<br/><br/>  Les diagrammes d'état-transition sont utilisés pour modéliser le comportement d'un objet ou d'un système dans le temps en décrivant comment il réagit aux différents événements. Ils sont utiles pour comprendre et documenter les états possibles d'un système, ainsi que les transitions entre ces états.<br/><br/> Exemple simple :<br/><br/> Bien sûr, voici un exemple simple d'un diagramme d'état-transition pour un feu de circulation (feu stop) :<br/><br/>  États :<br/><br/>   - État 1 : Feu Rouge (arrêt)<br/><br/>  - État 2 : Feu Vert (autorisation de passage)<br/><br/>  - État 3 : Feu Orange (préparation à l'arrêt)<br/><br/> Transitions :<br/><br/>  - Transition 1 : Lorsque le feu est à l'état Feu Rouge, il passe à l'état Feu Vert en réponse à l'événement Fin de l'intervalle du feu rouge (ex : minuterie).<br/><br/> - Transition 2 : Lorsque le feu est à l'état Feu Vert, il passe à l'état Feu Orange en réponse à l'événement Début de l'intervalle du feu vert.<br/><br/> - Transition 3 : Lorsque le feu est à l'état Feu Orange, il passe à l'état Feu Rouge en réponse à l'événement Fin de l'intervalle du feu orange (ex : minuterie).<br/><br/> Voici un schéma simple de ce diagramme :<br/><br/>  Ce diagramme représente le comportement d'un feu de circulation, montrant comment il passe de l état Feu Rouge à Feu Vert lorsque le temps alloué au feu rouge est écoulé, puis de Feu Vert à Feu Orange lorsque le temps alloué au feu vert est écoulé, et enfin de Feu Orange à Feu Rouge lorsque le temps alloué au feu orange est écoulé. C'est ainsi que fonctionne le cycle de régulation d'un feu de circulation typique.<br/><br/>  En résumé, un diagramme d'état-transition en UML est un outil puissant pour modéliser le comportement d'un objet ou d'un système en montrant les états possibles, les transitions entre ces états et les événements qui déclenchent ces transitions.",
            
            imageUrl: "data:image/jpeg;base64,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 ",

        },
        {
            id: 12,

            title: "Diagramme de communication  " ,

            description: " Un diagramme de communication est utilisé pour représenter les interactions entre les objets ou les acteurs d'un système logiciel. " ,
            content:"Voici une explication rapidedes composants clés d'un diagramme de communication : 1. Acteurs : Les acteurs sont des entités externes au système qui interagissent avec lui. Ils sont représentés par des formes ovales ou des boîtes de texte situées en haut du diagramme. Chaque acteur peut être nommé et avoir unrôle spécifique. 2. Objets : Les objets sont les instances de classes ou d'entités du système qui participent aux interactions. Ils sont représentés par des rectangles situés sous les acteurs. Chaque objet peut être nommé et indiquer sa classe d'appartenance. 3. Lignes de communication : Les lignes de communication sont des flèches oudes lignes pleines qui connectent les acteurs aux objets et les objets entre eux. Elles représentent les messages ou les informations échangés lors desinteractions. 4. Messages : Les messages sont des étiquettes le long des lignes de communication qui décrivent les actions ou les interactions entre les acteurs et les objets. Les messages peuvent être synchrones (bloquants) ou asynchrones(non bloquants). 5. Rôles : Les rôles sont des labels optionnels attribués aux objets pour préciser leur fonction dans une interaction spécifique. Ils sont souvent utilisés pour    montrer comment différents objets collaborent pour accomplir une tâche.",
            
            imageUrl: "https://laurent-audibert.developpez.com/Cours-UML/images/fig7_6.png",
        },
        {
            id: 13,

            title: "Diagram des Cas d'Utilisation" ,

            description: " Un diagramme de cas d'utilisation UML avec les relations « include » et « extend » est un excellent moyen de modéliser des scénarios de cas d'utilisation où certaines fonctionnalités (cas d'utilisation inclus) sont facultatives ou dépendent d'autres fonctionnalités (cas d'utilisation étendu)." ,
            content:"Voici comment ces relations fonctionnent, suivi d'un exemple avec un jeu où vous avez deux choix : jouer pour gagner. <br/><br/>  Include (Inclure) : Cette relation est utilisée pour montrer qu'un cas d'utilisation (inclus) peut être intégré (inclus) dans un autre cas d'utilisation principal. Le cas d'utilisation inclus est déclenché en fonction de certaines conditions. l’action implique cette autres action <br/><br/> Extend (Étendre) : Cette relation est utilisée pour montrer qu'un cas d'utilisation (étendu) peut ajouter des fonctionnalités optionnelles à un cas d'utilisation principal en fonction de certaines conditions. Options <br/><br/>  Exemple de Diagramme de Cas d'Utilisation - Jeu avec Include et Extend :<br/><br/> Imaginons un jeu d'aventure simple où un joueur peut choisir entre deux actions : Explorer la grotte ou Parler au gardien de la grotte. Dans le cas d'utilisation principal, le joueur peut choisir l'une de ces actions. Cependant, ces actions peuvent être étendues ou incluses en fonction de certaines conditions.<br/><br/> Voici comment le diagramme de cas d'utilisation pourrait être construit :<br/><br/> Dans cet exemple :<br/><br/> - Le joueur peut choisir d'Explorer la Grotte ou Parler au Gardien de la Grotte dans le cas d'utilisation principal.<br/><br/>  - L'action Explorer la Grotte est un cas d'utilisation inclus qui peut être déclenché à tout moment par le joueur. Par exemple, il peut choisir d'explorer la grotte à tout moment pendant le jeu.<br/><br/> - L'action Parler au Gardien de la Grotte est un cas d'utilisation étendu qui ajoute une option de dialogue au cas d'utilisation principal. Il est déclenché lorsque le joueur choisit de parler au gardien.<br/><br/> En résumé, ce diagramme de cas d'utilisation illustre comment les cas d'utilisation inclus et étendus peuvent être utilisés pour modéliser des fonctionnalités optionnelles ou conditionnelles dans un scénario de jeu simple.",
            
            imageUrl: " https://www.sparxsystems.fr/enterprise_architect_user_guide/16.0/images/operational-use-cases-7700.png ",
        },
        {
            id: 14,

            title: " Diagramme D'état  à modifiier " ,
            description: " Un diagramme d'état, également connu sous le nom de diagramme d'états- transitions ou diagramme d'états-machine, est un type de diagramme UML utilisé pour modéliser le comportement d'un objet ou d'une entité sous différentes conditions et états. " ,

            content:"Voici une explication rapide des composants clés d'un diagramme d'état : 1. États : Les états représentent les situations ou les conditions dans lesquelles un objet ou une entité peut se trouver. Ils sont généralement représentés par des rectangles avec des noms à l'intérieur. 2. Transitions : Les transitions sont des flèches qui relient les états et indiquent comment l'objet passe d'un état à un autre en réponse à des événements ou des conditions spécifiques. 3. Événements : Les événements sont des déclencheurs qui provoquent des transitions entre les états. Ils sont représentés à côté des flèches de transition et peuvent inclure des conditions qui doivent être satisfaites pour que la transition se produise. 4. Actions : Les actions sont des opérations ou des comportements associés à un état ou une transition. Elles sont généralement spécifiées sous forme de texte à l'intérieur des états ou à côté des transitions. 5. État initial : Il s'agit de l'état dans lequel l'objet se trouve au moment de sa création ou du début de son cycle de vie. Il est généralement indiqué par une flèche entrante spéciale. 6. État final : C'est l'état qui marque la fin du cycle de vie de l'obiet. Il est généralement représenté par un cercle avec un point à l'intérieur. ",
            
            imageUrl: "https://laurent-audibert.developpez.com/Cours-UML/images/fig6_2.png",
        },
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
        },
        {
            id: 25,

            title: "MLD à completer" ,
            description: " ",
            content:"",
            imageUrl: "",
        },
        {
            id: 26,

            title: " $$$$$$" ,
            description: " " ,
            content:"",
            imageUrl: " ",
        },



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