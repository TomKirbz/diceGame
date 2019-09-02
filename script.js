const player1roll = document.getElementsByClassName("button")[0]
const player2roll = document.getElementsByClassName("button")[1] 
document.getElementsByClassName("button")[1].disabled = true;
let p1score = 0;
let p2score = 0;
let input1 = document.getElementById("p1-input-name")
let input2 = document.getElementById("p2-input-name")
let numberOfPlayers = 0
let player1Name = ""
let player2Name = ""

player1roll.addEventListener("click", () => {
    let myRoll = roll()
    document.getElementById("p1-dice").src = `./img/dice${myRoll}.png`
    document.getElementById("p1-score").innerText = "Score: " + (p1score += myRoll);
    

    if (numberOfPlayers == 1) {
        document.getElementById("game-updates").style.top = "700px"
        document.getElementById("game-updates").innerText = `You rolled a ${myRoll}`
    } else if (numberOfPlayers == 2) {
        document.getElementById("game-updates").innerText = `${player1Name} rolled a ${myRoll}`
    }
    
    if (myRoll == 1 && p1score == 20) {
        p1score -= 1
    }

    if (myRoll == 1 && numberOfPlayers == 1){
        document.getElementById("game-updates").innerText = "You Rolled a 1, Sorry, you lose!"
        player1roll.disabled = true;
        player2roll.disabled = true;
        newGame();
        document.getElementById("game-updates").style.top = "800px"
    } else if (myRoll == 1 && numberOfPlayers == 2) {
        document.getElementById("game-text").innerText = `${player2Name} wins!!`
        player1roll.disabled = true;
        player2roll.disabled = true;
        newGame();
    } 

    if (p1score >= 20 && numberOfPlayers == 1) {
        document.getElementById("game-updates").innerText = "You win!"
        newGame();
        player1roll.disabled = true;
        player2roll.disabled = true;
        document.getElementById("game-updates").style.top = "800px"
    } else if (p1score >= 20 && numberOfPlayers == 2) {
        document.getElementById("game-text").innerText = `${player1Name} wins!!`
        player1roll.disabled = true;
        player2roll.disabled = true;
        newGame()
        return p1score
    }
})

player2roll.addEventListener("click", () => {
    let myRoll = roll()
    document.getElementById("p2-dice").src = `./img/dice${myRoll}.png`
    document.getElementById("p2-score").innerText = "Score: " + (p2score += myRoll);
    document.getElementById("game-updates").innerText = `${player2Name} rolled a ${myRoll}`

    if (myRoll == 1 && p2score == 20) {
        p2score -= 1
    }

    if (myRoll == 1){
        player1roll.disabled = true;
        player2roll.disabled = true;
        newGame(); 
        document.getElementById("game-text").innerText = `${player1Name} wins!!`
    } else if (p2score >= 20) {
        player1roll.disabled = true;
        player2roll.disabled = true;
        newGame()
        document.getElementById("game-text").innerText = `${player2Name} wins!!`
        return p2score
    }
})

let roll = () => {
    let myRoll = Math.floor(Math.random () *6 +1)
    
    if (numberOfPlayers == 1){
        return myRoll
    } else if (!player1roll.disabled){
        player1roll.disabled = true
        player2roll.disabled = false
        document.getElementById("game-text").innerText = `It's ${player2Name}'s turn to roll!`
    } else if (!player2roll.disabled) {
        player1roll.disabled = false
        player2roll.disabled = true
        document.getElementById("game-text").innerText = `It's ${player1Name}'s turn to roll!`
    } 
    
    return myRoll
}

const newGame = () => {
        document.getElementById("new-game").style.display = "block";
        document.getElementById("new-game").style.visibility = "visible";
}

document.getElementById("new-game").addEventListener("click", () => {
    p1score = 0
    p2score = 0
    document.getElementById("p1-score").innerText = p1score
    document.getElementById("p2-score").innerText = p2score
    player1roll.disabled = false;
    player2roll.disabled = true;
    document.getElementById("new-game").style.display = "none";
    document.getElementById("new-game").style.visibility = "hidden";
    document.getElementById("p1-dice").src = ""
    document.getElementById("p2-dice").src = ""
    document.getElementById("game-text").innerText = `It's ${player1Name}'s turn to roll!`
    document.getElementById("game-updates").innerText = ""
})

//Choosing players at the beginning. 1 Player
document.getElementById("no-players-1").addEventListener("click", () => {
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("how-many-players-text").innerText = "Enter your name Player 1";
    document.getElementById("no-players-1").style.display = "none";
    document.getElementById("no-players-2").style.display = "none";
    document.getElementById("p1-input-name").style.display = "block";
    document.getElementById("submitp1").style.display = "flex";
    document.getElementById("read-rules").style.display = "none";
    numberOfPlayers = 1
})

document.getElementById("no-players-2").addEventListener("click", () => {
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("read-rules").style.display = "none";
    document.getElementById("how-many-players-text").innerText = "Enter your name Player 1";
    document.getElementById("no-players-1").style.display = "none";
    document.getElementById("no-players-2").style.display = "none";
    document.getElementById("p1-input-name").style.display = "block";
    document.getElementById("submitp1").style.display = "flex";
    numberOfPlayers = 2
})



document.getElementById("submitp1").addEventListener("click", () => {
    if (numberOfPlayers == 1) {
        player1Name = input1.value
        document.getElementById("read-rules").style.display = "none";
        document.getElementById("main-container").style.display = "flex";
        document.getElementById("player-1-title").innerText = player1Name;
        input1.value = "";
        document.getElementById("first-game-container").style.display = "none";
        document.getElementById("player-2-container").style.display = "none";
        document.getElementById("game-updates").style.top = "650px"
    } else if (numberOfPlayers == 2){
        player1Name = input1.value
        document.getElementById("read-rules").style.display = "none";
        document.getElementById("player-1-title").innerText = player1Name;
        document.getElementById("how-many-players-text").innerText = "Enter your name Player 2";
        document.getElementById("p2-input-name").style.display = "flex";
        document.getElementById("input-field-p1").style.display = "none";
        document.getElementById("submitp2").style.display = "flex";
        document.getElementById("game-text").style.display = "block";
        document.getElementById("game-text").innerText = `It's ${player1Name}'s turn to roll!`
        input2.value = "";
        
    }
})

document.getElementById("submitp2").addEventListener("click", () => {
    player2Name = input2.value
    document.getElementById("main-container").style.display = "flex";
    document.getElementById("player-1-title").innerText = player1Name;
    document.getElementById("player-2-title").innerText = player2Name;
    document.getElementById("first-game-container").style.display = "none";
    input2.value = "";
})

document.getElementById("rules-button").addEventListener("click", () => {
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("read-rules").style.display = "none";
    document.getElementById("the-rules").style.display = "block";
    document.getElementById("how-many-players-text").style.display = "none";
    document.getElementById("no-players-1").style.display = "none";
    document.getElementById("no-players-2").style.display = "none";
})

document.getElementById("go-back").addEventListener("click", () => {
    document.getElementById("welcome-text").style.display = "block";
    document.getElementById("read-rules").style.display = "flex";
    document.getElementById("the-rules").style.display = "none";
    document.getElementById("how-many-players-text").style.display = "flex";
    document.getElementById("no-players-1").style.display = "flex";
    document.getElementById("no-players-2").style.display = "flex";
})
