console.log("minha pika")

/*
  TODO:
  configurar a tecla do reset
  configurar a tecla do raiz
  configurar a tecla do +/- (troca de sinal)
  configurar a ação e tecla do DEL

*/


var tituloPagina = "Calculadora JavaScript";
var operadores = ["/", "*", "-", "+"]


var listaDeCores = ["AZUL", "VERMERDI", "YERELO", "Cizul"];
var visorCalculadora = document.querySelector("div#visor span");
visorCalculadora.innerText = ""

var botoes = document.querySelectorAll("button")


for (var botao of botoes) {
    console.log("passou aqui")
    botao.addEventListener("click", clicou)
}


document.addEventListener("keyup", digitou)

function digitou(event) {
    var listaTeclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", ",", "-", "+"]
    var teclasResultado = ["Enter", "=",]
    var teclasReset = ["Escape"]
    var teclasDel = ["Backspace"]
    var textoVisor = visorCalculadora.innerText
    if (listaTeclas.includes(event.key) == true) {
        if (operadores.includes(event.key) == true && textoVisor == "") {
            return
        }
        var ultimoDigito = textoVisor.substr(textoVisor.length - 1);
        if (textoVisor != "" && operadores.includes(ultimoDigito) == true && operadores.includes(event.key)) {
            // digitar(event.key)
        }

        //digitar(event.key)


    }

    if (teclasResultado.includes(event.key)) {
        exibirResultado()
    }
    if(teclasDel.includes(event.key)){
        apagarCaracteres();
    }
    console.log(event.key)
}


function temOperadoresNoVisor(numero, operadores) {
    for (var operador of operadores) {
        if (numero.indexOf(operador) != -1) {
            return true
        }

    }
    return false
}

function contarCasasDecimais(numero) {
    var numeroTexto = numero.toString()
    var posicaoPonto = numeroTexto.indexOf(".")
    var casasDecimais = numeroTexto.substr(posicaoPonto + 1)
    return casasDecimais.length
}

function clicou(event) {
    var textoBotao = event.target.innerText

    if (isNaN(textoBotao) == false) {
        digitar(textoBotao)
    } else {
        console.log(textoBotao)

        if (textoBotao == "AC") {
            limpar()
        }
        if (textoBotao == "+/-") {
            inverterSinal()
        }
        if (textoBotao == "RAIZ") {
            var numero = visorCalculadora.innerText
            if (temOperadoresNoVisor(numero, operadores) == false) {
                var resultadoRaiz = Math.sqrt(numero)
                //console.log(resultadoRaiz)
                if (contarCasasDecimais(resultadoRaiz) > 5) {
                    visorCalculadora.innerText = resultadoRaiz.toFixed(5)
                } else {
                    visorCalculadora.innerText = resultadoRaiz
                }

            }
        }
        if (textoBotao == ".") {
            var numero = visorCalculadora.innerText
            if (numero != "" && numero.indexOf(".") == -1) {
                digitar(textoBotao)
            }
        }


        if (operadores.includes(textoBotao)) {
            console.log("clicrou ");
            var textoV = visorCalculadora.innerText
            var ultimoDigito = textoV.substr(textoV.length - 1)
            if (textoV != "" && operadores.includes(ultimoDigito) == false) {
                digitar(textoBotao)
            }

        }
        if (textoBotao == "=") {
            exibirResultado();
        }
        if (textoBotao == "DEL") {
            apagarCaracteres()


        }
    }
}

function apagarCaracteres() {
    var textoV = visorCalculadora.innerText
    var textoUltimoCaracter = textoV.substr(0, textoV.length - 1)
    visorCalculadora.innerText = textoUltimoCaracter

}

function exibirResultado() {
    var textoV = visorCalculadora.innerText
    var ultimoDigito = textoV.substr(textoV.length - 1)
    if (operadores.includes(ultimoDigito) == false) {
        var resultado = eval(textoV)
        visorCalculadora.innerText = resultado
    }
}

function inverterSinal() {
    var numero = visorCalculadora.innerText
    if (numero != "") {
        console.log(numero * -1)
        console.log("Minha roula")
        visorCalculadora.innerText = numero * -1
    }
}

function limpar() {
    visorCalculadora.innerText = ""
}
// function deletarUmNumero(){
//     var del= textoV.substr(textoV.length -1)
//     if(numero.includes(ultimoDigito) == false) {
//         var resultado = eval(textoV)
//         visorCalculadora.innerText = resultado
//     }

// }

function escreveTitulo() {
    //manipular um elemento HTML
    document.querySelector("h1").innerText = tituloPagina;
};


function escreveTituloDinamico(titulo) {
    document.querySelector("h1").innerText = titulo;
}
//escreveTituloDinamico("mudei o título da página com JS");
escreveTitulo();

function digitar(texto) {
    var visor = document.querySelector("div#visor  span")
    var valorNoVisor = visor.innerText
    visor.innerText = valorNoVisor + texto;

}