const player1roll = document.getElementById("p1-play")
const player2roll = document.getElementById("p2-play")
document.getElementById("p2-play").disabled = true;
let p1score = 0;
let p2score = 0;


player1roll.addEventListener("click", () => {

    let p1Roll = Math.floor(Math.random () *6 +1)
    document.getElementById("p1-roll").innerText = p1Roll
    
    switch (p1Roll) {
        case 1:
            document.getElementById("p1-dice").src = "./img/dice1.png"
            alert("you lost")  
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = true;   

        break;

        case 2:
            p1score += 2;
            document.getElementById("p1-score").innerText = p1score;
            document.getElementById("p1-dice").src = "./img/dice2.png";
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = false;

        break;

        case 3:
            p1score += 3
            document.getElementById("p1-score").innerText = p1score
            document.getElementById("p1-dice").src = "./img/dice3.png"
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = false;

        break;

        case 4:
            p1score += 4
            document.getElementById("p1-score").innerText = p1score
            document.getElementById("p1-dice").src = "./img/dice4.png"
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = false;

        break;

        case 5:
            p1score += 5
            document.getElementById("p1-score").innerText = p1score
            document.getElementById("p1-dice").src = "./img/dice5.png"
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = false;

        break;

        case 6:
            p1score += 6
            document.getElementById("p1-score").innerText = p1score
            document.getElementById("p1-dice").src = "./img/dice6.png"
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = false;
        break;
    }

    
    if (p1score >= 20) {
        alert("You win");
        document.getElementById("p1-play").disabled = true;
        document.getElementById("p2-play").disabled = true;
    }


})


player2roll.addEventListener("click", () => {

    let p2Roll = Math.floor(Math.random () *6 +1)
    document.getElementById("p2-roll").innerText = p2Roll
    
    switch (p2Roll) {
        case 1:
            document.getElementById("p2-dice").src = "./img/dice1.png"
            alert("you lost")  
            document.getElementById("p1-play").disabled = true;
            document.getElementById("p2-play").disabled = true;

        break;

        case 2:
            p2score += 2;
            document.getElementById("p2-score").innerText = p2score;
            document.getElementById("p2-dice").src = "./img/dice2.png";
            document.getElementById("p2-play").disabled = true;
            document.getElementById("p1-play").disabled = false;

        break;

        case 3:
            p2score += 3
            document.getElementById("p2-score").innerText = p2score
            document.getElementById("p2-dice").src = "./img/dice3.png"
            document.getElementById("p2-play").disabled = true;
            document.getElementById("p1-play").disabled = false;

        break;

        case 4:
            p2score += 4
            document.getElementById("p2-score").innerText = p2score
            document.getElementById("p2-dice").src = "./img/dice4.png"
            document.getElementById("p2-play").disabled = true;
            document.getElementById("p1-play").disabled = false;

        break;

        case 5:
            p2score += 5
            document.getElementById("p2-score").innerText = p2score
            document.getElementById("p2-dice").src = "./img/dice5.png"
            document.getElementById("p2-play").disabled = true;
            document.getElementById("p1-play").disabled = false;

        break;

        case 6:
            p2score += 6
            document.getElementById("p2-score").innerText = p2score
            document.getElementById("p2-dice").src = "./img/dice6.png"
            document.getElementById("p2-play").disabled = true;
            document.getElementById("p1-play").disabled = false;
        break;
    }

    
    if (p2score >= 20) {
        alert("You win");
        document.getElementById("p1-play").disabled = true;
        document.getElementById("p2-play").disabled = true;
    }

})


