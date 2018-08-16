var points = 0;

document.getElementById("button").addEventListener("click", clickerPoints);

function clickerPoints(){
    points++;
}

setInterval(totalPointsUpdate, 50);

function totalPointsUpdate(){
    document.getElementById("points").innerHTML = points;
    console.log(points);
}