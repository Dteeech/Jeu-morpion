let morpion = ["", "", "", "", "", "", "", "", ""]

const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let turn = document.getElementById("turn");
turn = 0
const allCase = []

const onClick = (item) => {
    const index = item.getAttribute("id")
    /*console.log("test")*/
    if (turn === 0) {
        morpion[index] = '╳';
        item.innerText = '╳';
        turn++
    }
    else if (turn >= 1) {
        morpion[index] = '◯';
        item.innerText = '◯';
        turn--
    }
    isWinner()
}

document.addEventListener('DOMContentLoaded', () => {
    let caseOne = document.getElementById('0');
    let caseTwo = document.getElementById('1');
    let caseThree = document.getElementById('2');
    let caseFour = document.getElementById('3');
    let caseFive = document.getElementById('4');
    let caseSix = document.getElementById('5');
    let caseSeven = document.getElementById('6');
    let caseEight = document.getElementById('7');
    let caseNine = document.getElementById('8');


    allCase.push(caseOne, caseTwo, caseThree, caseFour, caseFive, caseSix, caseSeven, caseEight, caseNine)


    allCase.forEach(function(item) {
        item.addEventListener("click", () => onClick(item))
    })

});

function isWinner() {
    victory.forEach(casDeVictoire => {
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