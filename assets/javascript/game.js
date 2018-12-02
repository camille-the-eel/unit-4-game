//VARIABLES
//-----------------------------------------------------
var wins = 0;
var losses = 0;
var score = 0;
var computerNumber = Math.floor(Math.random() * 101) + 19;
var crystals = [];

//GAME RESET
//----------------------------------------------------
function gameReset () {

    //RESETS VARIABLE FOR SCORE
    score = 0;
    //GENERATES NEW RANDOM NUMBER FOR COMPUTER
    computerNumber = Math.floor(Math.random() * 101) + 19;
    //CALLS CRYSTAL FUNCTION FOR NEW RANDOM VALUES
    //??????
}

//VARIABLES FOR LINKING JQUERY TO HTML CLASSES
//-----------------------------------------------------
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#score").html(score);
$("#computerNumber").html("Computer's Number: " + computerNumber);

//GAME PLAY
//----------------------------------------------------
function crystalAssignment () {

    for (i = 0; i < 4; i++) {
    crystals[i] = Math.floor(Math.random() * 12) + 1;
    };

    $("#red").attr("crystal-Value", crystal[0]);
    $("#yellow").attr("crystal-Value", crystal[1]);
    $("#orange").attr("crystal-Value", crystal[2]);
    $("#blue").attr("crystal-Value", crystal[3]);


};

function crystalClick () {

    $(".crystal").on("click", function() {
        var randomCrystalNumber = ($(this).attr("crystal-Value"));
        randomCrystalNumber = parseInt(randomCrystalNumber);
        randomCrystalNumber += score;
    });
};


crystalAssignment();
crystalClick();

