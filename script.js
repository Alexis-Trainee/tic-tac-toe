
function equalFigures(a, b, c) {
    let backGroundA = document.getElementById("square"+a).style.backgroundImage;
    let backGroundB = document.getElementById("square"+b).style.backgroundImage;
    let backGroundC = document.getElementById("square"+c).style.backgroundImage;
    if((backGroundA===backGroundB) && (backGroundB===backGroundC) && (backGroundA!="none" && backGroundA!="")) {
        if(backGroundA.indexOf("1.jpg") >=0)
            winner = "1";
        else
            winner ="2";
        return true;

    }else {
        return false;
    }
}
//--------------------//
function verifyChampion() {
    let champion=false;
    if (equalFigures(1, 2, 3)) {
        champion=true;

    }else if (equalFigures(4, 5, 6)){
        champion=true;

    }else if (equalFigures(7, 8, 9)) {
        champion=true;

    }else if (equalFigures(1, 4, 7)) {
        champion=true;

    }else if (equalFigures(2, 5, 8)) {
        champion=true;

    }else if (equalFigures(3, 6, 9)) {
        champion=true;

    }else if (equalFigures (1, 5, 9)) {
        champion=true;

    }else if (equalFigures (3, 5, 7)) {
        champion=true;

    }

    if(champion) {
        document.getElementById("result").innerHTML = "<h1> O jogador " +winner + " venceu!</h1>"
        let squares = document.getElementsByClassName("square");
        for (let i=0; i<squares.length; i++){
            squares[i].onclick = null;


        }
    }
}

let turn =1;
let winner = "";
let img = document.getElementById("start");

function verifySquare(square){
    let image = document.getElementById(square).style.backgroundImage;
    if (image==="none"|| image==="") {
        let figure = "url("+turn.toString() +".jpg)";
        document.getElementById(square).style.backgroundImage = figure;
        if(turn ===1) {
            img.src= "2.jpg" 
            turn=2;

        }else{
            turn=1;
            img.src="1.jpg"
        }

        verifyChampion();
    }
}

function resetGame(){
    location.reload();
}
