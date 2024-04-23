let wins = 0;
let losses = 0;
let ties = 0;
let playInterval;

const icons = ["images/rock.png",
               "images/paper.png",
               "images/scissors.png"]
let playon = -1;

function autoplay(){
    playon *= -1;
    if(playon == 1){
        console.log("on");
        document.getElementById("play-button")
            .innerHTML = "Stop";
        playInterval = setInterval(playAutoGame, 2000);
    }
    else{
        console.log("off");
        document.getElementById("play-button")
            .innerHTML = "AutoPlay";
        clearInterval(playInterval);
        cancelGame();
    }
}

function cancelGame(){
    document.getElementById("youH3")
        .innerHTML = "";
    document.getElementById("computerH3")
        .innerHTML = "";
    document.getElementById("youImage")
        .src = "";
    document.getElementById("computerImage")
        .src = "";
}

function playAutoGame(){
    document.getElementById("youH3")
        .innerHTML = "you";
    document.getElementById("computerH3")
        .innerHTML = "computer";
    let your_icon = Math.floor(Math.random() * 3);
    let computer_icon = Math.floor(Math.random() * 3);

    document.getElementById("youImage")
        .src = icons[your_icon];
    document.getElementById("computerImage")
        .src = icons[computer_icon];

    updateScore(your_icon, computer_icon);

    console.log("game");
}

function updateScore(you, computer){
    if (you==computer){
        ties++;
    } 
    else if ((you == 0 && computer == 1)
            ||(you == 1 && computer == 2)
            ||(you == 2 && computer == 0)) {
        losses++;
    }
    else if ((you == 0 && computer == 2)
            ||(you == 1 && computer == 0)
            ||(you == 2 && computer == 1)) {
        wins++;
    }
    let score = "Wins: " + wins 
        + " Losses: " + losses
        + " Ties: " + ties;
    document.getElementById("scores")
        .innerHTML = score;
}


function resetScore(){
    wins = 0;
    losses = 0;
    ties = 0;

}
