var endgameParent = document.getElementById("endgame");
var buttonBuyChild = document.getElementById("big-red-button");
var points = 0;
var clickerPoints = 5;
var clickerUpgradeCost = 20;
var autoClicker = 0;
var autoClickerUpgradeCost = 50;
var superClicker = 0;
var superClickerUpgradeCost = 500;
var bigRedCost = 1000000;

document.getElementById("clicker").addEventListener("click", clickerPointsUpgrade);

function clickerPointsUpgrade(){
    points = points + clickerPoints;
}

document.getElementById("clicker-upgrade").addEventListener("click", clickerUpgrade);

function clickerUpgrade(){
    if (points >= clickerUpgradeCost) {
        points = points - clickerUpgradeCost;
        clickerUpgradeCost = clickerUpgradeCost * 3;
        clickerPoints = clickerPoints * 2;
    } else {
        alert("You can't afford this!");
    }
}

document.getElementById("autoclicker").addEventListener("click", autoClickerUpgrade);

function autoClickerUpgrade(){
    if (points >= autoClickerUpgradeCost) {
        points = points - autoClickerUpgradeCost;
        autoClickerUpgradeCost = autoClickerUpgradeCost * 5;
        autoClicker = autoClicker + 5;
    } else {
        alert("You can't afford this!");
    }
}

setInterval(autoClickerPoints, 1000);

function autoClickerPoints(){
    points = points + autoClicker;
}

setInterval(totalPointsUpdate, 50);

function totalPointsUpdate(){
    document.getElementById("points").innerHTML = points;

    if (points >= clickerUpgradeCost){
        document.getElementById("clicker-upgrade").style.backgroundColor = "#5aff5a";
    } else {
        document.getElementById("clicker-upgrade").style.backgroundColor = "#ff5a5a";
    }

    if (points >= autoClickerUpgradeCost){
        document.getElementById("auto-clicker").style.backgroundColor = "#5aff5a";
    } else {
        document.getElementById("auto-clicker").style.backgroundColor = "#ff5a5a";
    }
}

document.getElementById("big-red-button").addEventListener("click", endGame);

function endGame(){
    if (points >= bigRedCost) {
        points = points - bigRedCost;
        endgameParent.removeChild(buttonBuyChild);
    } else {
        alert("You can't afford this!");
    }
}