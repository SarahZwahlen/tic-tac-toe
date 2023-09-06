Composants : 
App
    NavBar
    Main
        EnterPlayerName
        BoardGame
            Cross
            Circle
        CurrentScore
        PreviousScores
    Footer


Voir l'historique des scores
Maintenir les scores si on refresh la page


// Etapes de jeu 

// Start the game 
// Créer le nom du joueur1
// Créer le nom du joueur2

// Random pour savoir qui commence
// JoueurX joue
// JoueurY Joue

// Si un joueur a posé plus de 3 pions, alors il peut être en position de gagner
// Tester à partir de 3 poins posés si le joueur peu gagner 
// Comment gagner ? 
    - Tester si le joueur a une combinaison de pions gagnantes

0 | 1 | 2 
3 | 4 | 5 
6 | 7 | 8

Combinaison gagnantes : 
 - [0,1,2]
 - [3,4,5]
 - [6,7,8]
 - [0,3,6]
 - [1,4,7]
 - [2,5,8]
 - [0,4,8]
 - [2,4,6]

Joueur 1 :  
    - Choisi l'une des cases
    - Stockage de la case choisie -> J1Pions = [0]
    - Tester : 
        si J1Pions.lenght > 3
            si combinaison gagnante // isWinning()
                J1 a gagné
                Afficher le score
                Arreter la partie 
                Enregistrer le score
                Proposer de relancer la partie
            sinon 
                continuer la partie
        sinon
            continuer la partie


IsWinning(){ // tester la combinaison
    Je reçois un tableau de combinaison de joueur : [2,4,7,6]
    Je dois tester si une des combinaisons gagnantes contient ces trois valeurs
        Prendre la première valeur [0], conserver uniquement les combinaisons qui contiennent cette valeur  
            [[2,4,6],[0,1,2], [2,5,8]]
            Sur les combinaisons qui contiennent ces valeurs, je veux savoir si 

    Si le retour ne contient rien 
        Retourner false // le joueur n'a pas gagné
    Si le retour contient qqch
        retourner true // le joueur a gagné
}

// Si Qqn a gagné -> Arrêt de la partie
// Afficher le résulat
// Stocker le résultat 

// On veut aussi pouvoir consulter le résultat


// déclencher le début du jeu
// Gérer qui commence
// reset le jeu


// gérer le fait qu'un bouton est cliqué par un joueur
// Sauvegarder les cases cliquées par joueur
// Vérifier les combinaisons