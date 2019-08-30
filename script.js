const player1roll = document.getElementsByClassName("button")[0]
const player2roll = document.getElementsByClassName("button")[1] 
let p1score = 0;
let p2score = 0;
document.getElementsByClassName("button")[1].disabled = true;

//let myArray = ["./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"]
//document.getElementById("p1-dice").src = myArray[p1Roll - 1]

player1roll.addEventListener("click", () => {
    let myRoll = roll()
    document.getElementById("p1-dice").src = `./img/dice${myRoll}.png`
    document.getElementById("p1-score").innerText = p1score += myRoll;

if (p1score >= 20) {
        alert("You win");
        player1roll.disabled = true;
        player2roll.disabled = true;
        newGame()
        return p1score
    }
})

player2roll.addEventListener("click", () => {
    let myRoll = roll()
    document.getElementById("p2-dice").src = `./img/dice${myRoll}.png`
    document.getElementById("p2-score").innerText = p2score += myRoll;

    if (p2score >= 20) {
            alert("You win");
            player1roll.disabled = true;
            player2roll.disabled = true;
            newGame()
            return p2score
        }
})

let roll = () => {
    let myRoll = Math.floor(Math.random () *6 +1)
    if (myRoll == 1) {
        alert("You lose");
           player1roll.disabled = true;
           player2roll.disabled = true;
           newGame();
    }
    if (player1roll.disabled == false){
        player1roll.disabled = true
        player2roll.disabled = false
    } else if (player2roll.disabled == false) {
        player1roll.disabled = false
        player2roll.disabled = true
    } 
    
    return myRoll
}

const newGame = () => {
        document.getElementById("new-game").style.display = "block";
        document.getElementById("new-game").style.visibility = "visible";
}

const yesNewGame = document.getElementById("new-game").addEventListener("click", () => {
    document.getElementById("p1-score").innerText = p1score *0
    document.getElementById("p2-score").innerText = p1score *0
    player1roll.disabled = false;
    player2roll.disabled = true;
    document.getElementById("new-game").style.display = "none";
    document.getElementById("new-game").style.visibility = "hidden";
    document.getElementById("p1-dice").src = ""
    document.getElementById("p2-dice").src = ""
})
    

 