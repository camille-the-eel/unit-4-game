//VARIABLES
//-----------------------------------------------------
var wins = 0;
var losses = 0;
var score = 0;
var computerNumber = Math.floor(Math.random() * 101) + 19;
var crystalAmount = [];
var randomCrystalValue;
var randomCrystalNumber;

//GAME SETUP AND START
function gameSet () {

    //JQUERY LINKS TO HTML CLASSES
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

    score = 0;
    $("#score").html(score);
    
    crystalAssignment();
    computerAssignment();
    crystalClick();

};


//GENERATES NEW RANDOM VALUES FOR CRYSTALS
function crystalAssignment () {

    for (i = 0; i < 4; i++) {
    crystalAmount[i] = Math.floor(Math.random() * 12) + 1;
    crystalAmount.push[i];
    // console.log(crystalAmount[i]);
    };

    $("#red").attr("crystal-Value", crystalAmount[0]);
    $("#yellow").attr("crystal-Value", crystalAmount[1]);
    $("#orange").attr("crystal-Value", crystalAmount[2]);
    $("#blue").attr("crystal-Value", crystalAmount[3]);

};

//GENERATES NEW RANDOM NUMBER FOR COMPUTER
function computerAssignment () {
    computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#computerNumber").html("Head Miner's Crystal Amount: " + computerNumber);
};

function crystalClick () {
    $(".crystal").on("click", function() {
        randomCrystalValue = ($(this).attr("crystal-Value"));
        randomCrystalNumber = parseInt(randomCrystalValue);
        score += randomCrystalNumber;
        $("#score").html(score);

        console.log("SCORE", score, " COMPUTER", computerNumber);
        setTimeout(scoreLogic, 500);
    });
};

//GAME LOGIC
function scoreLogic () {

    if (score > computerNumber) {
        $(".crystal").off('click');
        console.log("You Lose!");
        lossDisplay();
        losses++;
        gameSet();
    }
    else if (score === computerNumber) {
        $(".crystal").off('click');
        console.log("You won!");
        winDisplay();
        wins++;
        gameSet();
    }
};

function lossDisplay () {

    alert("You Lose! Final Score: " + score + " Head Miner: " + computerNumber);

};

function winDisplay () {

    alert("You Win! Final Score: " + score + " Head Miner: " + computerNumber);

};

//STARTS GAME
gameSet();