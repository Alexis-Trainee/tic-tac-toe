# tic-tac-toe
jogo da velha com htlm, css e js 

Este jogo foi um desafio proposto pelo professor Marcle Rodrigues do curso Projeto Opala  desenvolvimento Web.
A ideia é desenvolver um jogo da velha que tenha uma interface grafica e funcione no browser. O game deveria ser escrito apenas com html, css e javaScript utilizando apenas meus conhcimentos já adiquiridos no decorrer do curso.

O Jogo: 

	HTML tem sua estrutura básica de um corpo HTML, e as divs para dividir cada parte do jogo nada muito dificil de enterder.
	
	no javaScript temos:
	
	Função equalFigures: Está função vai verificar se os elementos contidos dentro das divs square são iguais ou diferentes
	
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
    
    
    Função verifyChampion: esta função chama a função equalFigures e recebe como parâmetro numeros que corespondem as casas "square" estes números são concatenados com a palavra square pela função equalFigures e geram uma coordenada corespondente a cada uma das divs suares presentes no index.html está função também tem uma variável chamada champion que recebe inicialmente um valor boolean false está variável retornará verdadeira caso uma das condições if ou esle if sejam satisfeitas.  
    
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


OBS: Caso a variável champion retorne o valor true a div result no corpo HTML receberá o jogador vencedor e um som de aplausos será tocado. e o evento de onclick se encerrará.

    if(champion) {
        document.getElementById("result").innerHTML = "<h1> O jogador " +winner + " venceu!</h1><audio src='aplausos.mp3' autoplay>"
        let squares = document.getElementsByClassName("square");
        for (let i=0; i<squares.length; i++){
            squares[i].onclick = null;


        }
    }
}
    
    
    Variáveis:
    
let turn =1;
let winner = "";
let img = document.getElementById("start"); Esta variável é importante pois é faz parte do código que realiza a troca da figura do jogador a cada turno.

Função verifySquare: Esta função é responsável por colocar a imagem alternadamente dentro das divs square no html ela basicamente transforma a variável turn em string e concatena com a terminação jpg querando a url corespondente a imagem que vai preencher o background das divs square e fazer a alternância entre as imagem de x e o; a cada turno ela altera a imagem dentro do tabuleiro e a imagem do jogador da vez com o uso da condicional if.


function verifySquare(square){
    let image = document.getElementById(square).style.backgroundImage;
    if (image==="none"|| image==="") {
        let figure = "url("+turn.toString() +".jpg)";
        document.getElementById(square).style.backgroundImage = figure;// image recebe figure
        if(turn ===1) { //muda a figura do tabuleiro
            img.src= "2.jpg" //muda a imagem da vez do jogador
            turn=2;

        }else{
            turn=1;
            img.src="1.jpg"
        }

OBS: A cada turno é veita uma verificação de ganhador chamando a função abaixo:

        verifyChampion();
    }
}

A função abaixo reseta o game recarregando a página.

function resetGame(){
    location.reload();
}

