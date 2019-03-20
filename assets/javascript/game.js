//VARIABLES
//-----------------------------------------------------
var wins = 0;
var losses = 0;
var score = 0;
var computerNumber = Math.floor(Math.random() * 101) + 19;
var crystalAmount = [];

//GAME RESET
//----------------------------------------------------
function gameReset () {

    //RESETS VARIABLE FOR SCORE
    score = 0;
    //GENERATES NEW RANDOM NUMBER FOR COMPUTER
    computerNumber = Math.floor(Math.random() * 101) + 19;
    //CALLS CRYSTAL FUNCTION FOR NEW RANDOM VALUES
    crystalAssignment();
}

//VARIABLES FOR LINKING JQUERY TO HTML CLASSES
//-----------------------------------------------------
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#score").html(score);
$("#computerNumber").html("Head Miner's Crystal Amount: " + computerNumber);

//GAME PLAY
//----------------------------------------------------
function crystalAssignment () {

    for (i = 0; i < 4; i++) {
    crystalAmount[i] = Math.floor(Math.random() * 12) + 1;
    crystalAmount.push[i];
    console.log(crystalAmount[i]);
    };

    $("#red").attr("crystal-Value", crystalAmount[0]);
    $("#yellow").attr("crystal-Value", crystalAmount[1]);
    $("#orange").attr("crystal-Value", crystalAmount[2]);
    $("#blue").attr("crystal-Value", crystalAmount[3]);

};
crystalAssignment();

$(".crystal").on("click", function() {
    var randomCrystalNumber = ($(this).attr("crystal-Value"));
    randomCrystalNumber = parseInt(randomCrystalNumber);
    score += randomCrystalNumber;
    $("#score").html(score);
    console.log(randomCrystalNumber);
});

//GAME LOGIC
//-------------------------------------------------------
if (score === computerNumber) {
    console.log("You won!");
    wins++;
    gameReset();
}
else if (score > computerNumber) {
    console.log("You Lose!");
    losses++;
    gameReset();
}
