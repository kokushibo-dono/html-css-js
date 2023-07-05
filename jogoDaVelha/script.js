console.log("carregou com sucesso")

//vamos configurar o evento de clique dos tds jogáveis

var tdsJogaveis = document.querySelectorAll("tbody td")
for (var n = 0; n < tdsJogaveis.length; n++) {
    var td = tdsJogaveis[n]
    td.indice = n
    td.addEventListener("click", clicouNoTd)
}

//definindo funcoes
//placar
var pontosJogador = 0
var pontosCpu = 0

//posicoes do jogo
var posicoesJogo = [
    "", "", "",
    "", "", "",
    "", "", ""]

//popular posicoes ja preenchidas
function popularPosicoes() {
    for (var n = 0; n < posicoesJogo.length; n++) {
        var jogada = posicoesJogo[n]
        var corJogada = ""
        if (jogada == "X") {
            corJogada = "vermelho"
        }
        if (jogada == "O") {
            corJogada = "verde"
        }
        tdsJogaveis[n].innerHTML = "<div class='" + corJogada + "'>" + jogada + "</div>"
    }
}

//popularPosicoes()

//reiniciar
function reiniciar() {
    // pontosJogador = 0;
    // pontosCpu = 0;
    posicoesJogo = ["","","","","","","","",""]
    popularPosicoes()
    placar();
}


function placar() {
    var pJogador = document.querySelector("#pontosJogador")
    var pCpu = document.querySelector("#pontosCpu");
    pJogador.innerText = pontosJogador
    pCpu.innerText = pontosCpu
}


function clicouNoTd(event) {
    var indice = event.currentTarget.indice
    if (posicoesJogo[indice] == "") {
        event.target.innerHTML = "<div class='verde'>O</div>"
        posicoesJogo[indice] = "O";

    }
    console.log(posicoesJogo)
    popularPosicoes();

    //verificar se tem ganhador  ou empate

    var temGanhador = verificaGanhador()
    if (temGanhador == true) {
        return
    }


    //chamar a qui a função da jogada da CPU
    jogadaCpu()



}

function verificaGanhador() {
    var returno = false;
    var espacosVazios = posicoesJogo.filter(item => item == "")


    //comeca a verificar ganhador
    var l1c1 = posicoesJogo[0]
    var l1c2 = posicoesJogo[1]
    var l1c3 = posicoesJogo[2]
    var l2c1 = posicoesJogo[3]
    var l2c2 = posicoesJogo[4]
    var l2c3 = posicoesJogo[5]
    var l3c1 = posicoesJogo[6]
    var l3c2 = posicoesJogo[7]
    var l3c3 = posicoesJogo[8]


    //condições de vitora do jogador nas linhas
    if (l1c1 == "O" && l1c2 == "O" && l1c3 == "O") {
        pontosJogador++
        placar()
        returno = true
    }
    if (l2c1 == "O" && l2c2 == "O" && l2c3 == "O") {
        pontosJogador++
        placar()
        returno = true
    }
    if (l3c1 == "O" && l3c2 == "O" && l3c3 == "O") {
        pontosJogador++
        placar()
        returno = true
    }


    //condicao de vitoria do jogador nas colunas
    if (l1c1 == "O" && l2c1 == "O" && l3c1 == "O") {
        pontosJogador++
        placar()
        returno = true
    }
    if (l1c2 == "O" && l2c2 == "O" && l3c2 == "O") {
        pontosJogador++
        placar()
        returno = true
    }
    if (l1c3 == "O" && l2c3 == "O" && l3c3 == "O") {
        pontosJogador++
        placar()
        returno = true
    }

    //condições de vitoria do jogador nas diagonais
    if (l1c1 == "O" && l2c2 == "O" && l3c3 == "O") {
        pontosJogador++
        placar()
        returno = true
    }
    if (l1c3 == "O" && l2c2 == "O" && l3c1 == "O") {
        pontosJogador++
        placar()
        returno = true
    }
 
    //condicoes de vitoria da cpu nas linhas

    

    if (l1c1 == "X" && l1c2 == "X" && l1c3 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    if (l2c1 == "X" && l2c2 == "X" && l2c3 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    if (l3c1 == "X" && l3c2 == "X" && l3c3 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    //condicao de vitoria da cpu nas colunas
    if (l1c1 == "X" && l2c1 == "X" && l3c1 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    if (l1c2 == "X" && l2c2 == "X" && l3c2 == "") {
        pontosCpu++
        placar()
        returno = true
    }
    if (l1c3 == "X" && l2c3 == "X" && l3c3 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    //condições de vitoria da Cpu nas diagonais
    if (l1c1 == "X" && l2c2 == "X" && l3c3 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    if (l1c3 == "X" && l2c2 == "X" && l3c1 == "X") {
        pontosCpu++
        placar()
        returno = true
    }
    
    if (espacosVazios.length == 0) {
        returno = true
    }
    if(returno == true){
        alert("O Jofo Linafizou")
        reiniciar()
    }
    return returno
}

function numeroAleatorico(minimo, maximo) {
    var numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return numeroSorteado

}

function jogadaCpu() {
    var posicaoPossivel = numeroAleatorico(0, 8)
    if (posicoesJogo[posicaoPossivel] == "") {
        posicoesJogo[posicaoPossivel] = "X"
        verificaGanhador()
    } else {
        jogadaCpu()
    }
    popularPosicoes()

}
placar()