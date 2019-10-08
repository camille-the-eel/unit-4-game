//VARIABLES
//-----------------------------------------------------
var wins = 0;
var losses = 0;
var haul = 0;
var computerNumber = Math.floor(Math.random() * 101) + 19;
var crystalAmount = [];
var randomCrystalValue;
var randomCrystalNumber;

//GAME SETUP AND START
function gameSet () {

    //JQUERY LINKS TO HTML CLASSES
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

    haul = 0;
    $("#yourHaul").html(haul);
    
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
    $("#green").attr("crystal-Value", crystalAmount[2]);
    $("#blue").attr("crystal-Value", crystalAmount[3]);

};

//GENERATES NEW RANDOM NUMBER FOR COMPUTER
function computerAssignment () {
    computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#computerHaul").html(computerNumber);
};

function crystalClick () {
    $(".crystal").on("click", function() {
        randomCrystalValue = ($(this).attr("crystal-Value"));
        randomCrystalNumber = parseInt(randomCrystalValue);
        haul += randomCrystalNumber;
        $("#yourHaul").html(haul);

        console.log("YOUR HAUL", haul, " COMPUTER HAUL", computerNumber);
        setTimeout(scoreLogic, 500);
    });
};

//GAME LOGIC
function scoreLogic () {

    if (haul > computerNumber) {
        $(".crystal").off('click');
        console.log("You Lose!");
        lossDisplay();
        losses++;
        gameSet();
    }
    else if (haul === computerNumber) {
        $(".crystal").off('click');
        console.log("You won!");
        winDisplay();
        wins++;
        gameSet();
    }
};

function lossDisplay () {

    alert("You Lose! Final Haul: " + haul + " Head Miner: " + computerNumber);

};

function winDisplay () {

    alert("You Win! Final Haul: " + haul + " Head Miner: " + computerNumber);

};

//STARTS GAME
gameSet();