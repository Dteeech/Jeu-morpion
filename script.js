document.addEventListener("DOMContentLoaded", () => {

    //recuperer les cases du tableau html
    const morpion = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]
    const case0 = document.getElementById("case0")
    const case1 = document.getElementById("case1")
    const case2 = document.getElementById("case2")
    const case3 = document.getElementById("case3")
    const case4 = document.getElementById("case4")
    const case5 = document.getElementById("case5")
    const case6 = document.getElementById("case6")
    const case7 = document.getElementById("case7")
    const case8 = document.getElementById("case8")
    const statutJeu = document.getElementById("statutJeu")
    const bouttons = Array.from(document.getElementsByTagName("button"))

    console.log(bouttons)
    //function cas de victoire
    const victoryCases = () => {

    }

    const onClick = (e) => {
        alert("test")

    }

    bouttons.forEach(function(item){
        onClick(item)
    })
    // bouttons.addEventListener("click", (e) => onClick(e))
    bouttons.addEventListener("click", onClick())
    //parcourir les bouttons pour declencher le meme addeventlistener sur tous les bouttons


    //onclick

    //["","",""] => notre jeu
    //cas de victoire [[0,1,2], [3,4,5]]
    // Btn
    // function jeu gagnant
    // function changer de joueur
})
