document.addEventListener("DOMContentLoaded", () => {

    let morpion = ["", "", "", "", "", "", "", "", ""]
    
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    //recuperer les cases du tableau html

    
    const playerOne = '╳';
    const playerTwo = '◯';
    let playerTurn = playerOne;
    let gameStatus = document.getElementById("statutJeu")
    let endGameStatus = gameStatus
    const case0 = document.getElementById("case0")
    const case1 = document.getElementById("case1")
    const case2 = document.getElementById("case2")
    const case3 = document.getElementById("case3")
    const case4 = document.getElementById("case4")
    const case5 = document.getElementById("case5")
    const case6 = document.getElementById("case6")
    const case7 = document.getElementById("case7")
    const case8 = document.getElementById("case8")
    
    const statutJeu = document.getElementById("statutJeu")//Affichage de la victoire
    const bouttons = Array.from(document.getElementsByTagName("button"))// conversion de la node list en tableau
    //On va comparer CETTE LISTE à notre Array WINNIN PATTERNS
    
    //function cas de victoire
    function isWinner() {
    winningPatterns.forEach(casDeVictoire => {
        const indexNb1 = casDeVictoire[0]
        const indexNb2 = casDeVictoire[1]
        const indexNb3 = casDeVictoire[2]

        console.log(morpion[indexNb1],morpion[indexNb2],morpion[indexNb3])
        if (morpion[indexNb1] !== "" && morpion[indexNb2] !== "" && morpion[indexNb3] !== "") {
            if (morpion[indexNb1] === morpion[indexNb2] && morpion[indexNb2] === morpion[indexNb3]) {
                alert('Le gagnant est: ' + morpion[indexNb1]);
            }
        }

    })
}
    //Fonction pour les tours
    let playGame = (e) => {
        e.target.innerHTML = playerTurn;
        playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
    }
    
    //parcourir les bouttons pour declencher le meme addeventlistener sur tous les bouttons
    //On appelle la fonction qui permet d'ajouter une croix ou un rond
    bouttons.forEach(function(item) {
        item.addEventListener("click", playGame,{once: true})
    })
    
    // Function qui parcourt le tableau 
    //verifier que les cases ne sont pas vides
    winningPatterns.forEach(possibility => {
        if (possibility[0] === possibility[1] && possibility[1] === possibility[2]) { //fonction de comparaison de cas de victoire avec le tableau des données
            alert('Vous avez gagné');
        }
    })


    



    //cas de victoire [[0,1,2], [3,4,5]]
    // Btn
    // function jeu gagnant
    // function changer de joueur
})

////////////////PSEUDO CODE//////////////////////
// but du morpion


///////Depart//////



//Commencer par le joueur 1 = croix
//modifier le texte dans le boutton avec la croix, changer la valeur du boutton ?


// ensuite joueur 2 = rond
//modifier le texte dans le boutton avec le rond, changer la valeur du boutton ?



//Creer une fonction qui voit si 3 elements sont collés et change la valeur de endGame en true : NOM : compareResultWithPatterns
//endGame met fin à la partie et renvoi un message au vainqueur on l'appelle que en cas de victoire ou d'égalité




// creer une fonction pour gerer les cas de victoire
//Pour pouvoir comparer il faut comparer a un tableau avec touts les patterns de victoire possible
// si 3 croix ou 3 ronds sont à la suite le joueur gagne
// sinon egalité
