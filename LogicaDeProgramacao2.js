var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

//#region Exercício de teste

// pincel.fillStyle = 'lightgrey';
// pincel.fillRect(0, 0, 600, 400);

// pincel.fillStyle = 'green';
// pincel.fillRect(0, 0, 200, 400);

// pincel.fillStyle = 'red';
// pincel.fillRect(400, 0, 200, 400);

// pincel.fillStyle = 'yellow';
// pincel.beginPath();
// pincel.moveTo(300, 200);
// pincel.lineTo(200, 400);
// pincel.lineTo(400, 400);
// pincel.fill();

// pincel.fillStyle = "blue";
// pincel.beginPath();
// pincel.arc(300, 200, 50, 0, 2 * 3.14);
// pincel.fill();
//#endregion

//#region Exercício Creeper

// pincel.fillStyle = 'darkgreen';
// pincel.fillRect(200, 50, 350, 300);

// pincel.fillStyle = 'black';
// pincel.fillRect(250, 110, 90, 90);
// pincel.fillRect(410, 110, 90, 90);

// pincel.fillRect(340, 200, 70, 100);

// pincel.fillRect(300, 240, 40, 110);
// pincel.fillRect(410, 240, 40, 110);

//#endregion

//#region Exercício esquadro

// pincel.fillStyle = 'black';
// pincel.beginPath();
// pincel.moveTo(50, 50);
// pincel.lineTo(50, 400);
// pincel.lineTo(400, 400);
// pincel.fill();

// pincel.fillStyle = 'white';
// pincel.beginPath();
// pincel.moveTo(100, 175);
// pincel.lineTo(100, 350);
// pincel.lineTo(275, 350);
// pincel.fill();

//#endregion

//#region Exercício bandeira // Ficou torta, nao finalizado

// pincel.fillStyle='green';
// pincel.fillRect(0, 0, 600, 400);

// pincel.fillStyle='yellow';
// pincel.beginPath();
// pincel.moveTo(300, 50);
// pincel.lineTo(50, 200);
// pincel.lineTo(550, 200);
// pincel.fill();

// pincel.beginPath();
// pincel.moveTo(300, 350);
// pincel.lineTo(50, 200);
// pincel.lineTo(550, 200);
// pincel.fill();

// pincel.fillStyle='darkblue';
// pincel.beginPath();

// pincel.arc(300, 200, 100, 0, 2*3.14);
// pincel.fill();

//#endregion

//#region Exercícios Aleatórios

// function DesenhaQuadrado(x, y, tamanho, cor) {
//   pincel.fillStyle = cor;
//   pincel.fillRect(x, y, tamanho, 50);
//   pincel.strokeStyle = "black";
//   pincel.strokeRect(x, y, 50, 50);
// }
// function EscreveTexto(texto, x, y) {

//   pincel.font = "20px Georgia";
//   pincel.fillStyle = "black";
//   pincel.fillText(texto, x, y);
// }

// EscreveTexto("Qual a fração ?", 50, 30);

// var y = 50;
// DesenhaQuadrado(0, y, y, "green");
// DesenhaQuadrado(50, y, y, "green");
// DesenhaQuadrado(100, y, y, "green");
// DesenhaQuadrado(150, y, y, "white");

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// function DesenhaCirculo(x, y, raio, cor) {
//   pincel.fillStyle = cor;
//   pincel.beginPath();
//   pincel.arc(x, y, raio, 0, 2 * 3.14);
//   pincel.fill();
// }
// function DesenhaFlor(x,y) {
//   DesenhaCirculo(x, y + 20, 10 , 'red');
//   DesenhaCirculo(x, y, 10 , 'orange');
//   DesenhaCirculo(x, y - 20, 10 , 'black');
//   DesenhaCirculo(x - 20, y,  10 , 'yellow');
//   DesenhaCirculo(x + 20, y, 10 , 'blue');
// }
// DesenhaFlor(300, 200);

//#endregion

//#region Não finalizado - Exercício de gráfico

// function DesenhaRetangulo(x, y, largura, altura, cor) {
//   var tela = document.querySelector("canvas");
//   var pincel = tela.getContext("2d");

//   pincel.fillStyle = cor;
//   pincel.fillRect(x, y, largura, altura);
//   pincel.strokeStyle = "black";
//   pincel.strokeRect(x, y, largura, altura);
// }
// function EscreveTexto(texto, x, y) {
//   var tela = document.querySelector("canvas");
//   var pincel = tela.getContext("2d");

//   pincel.font = "20px Georgia";
//   pincel.fillStyle = "black";
//   pincel.fillText(texto, x, y);
// }
// function DesenhaBarra(x, y, serie, cores, texto) {
//   var tela = document.querySelector("canvas");
//   var pincel = tela.getContext("2d");

//   EscreveTexto(x, y - 10, texto);

//   var somaAltura = 0;
//   for (var i = 0; 0 < serie.length; i++) {
//     var altura = serie[i];
//     DesenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
//     somaAltura = somaAltura + altura;
//   }
// }

// var serie2015 = [50, 25, 20, 5];
// var serie2016 = [65, 20, 13, 2];
// var cores = ["blue", "green", "yellow", "red"];

// DesenhaBarra(50, 50, serie2015, cores, "2015");
// DesenhaBarra(150, 50, serie2016, cores, "2016");

// function DesenhaEsquadro(xa, ya, xc, yc, cor) {

//   var tela = document.querySelector('canvas');
//     var pincel = tela.getContext('2d');

//     pincel.fillStyle = cor;

//     pincel.beginPath();
//     pincel.moveTo(xa, ya);
//     pincel.lineTo(xa, yc);
//     pincel.lineTo(xc, yc);
//     pincel.fill();

//     //Pego do professor não entendi ainda
//     pincel.fillStyle = 'white'
//     pincel.beginPath();
//     pincel.moveTo((6*xa + xc)/7, (9*ya + 5*yc)/14);
//     pincel.lineTo((6*xa + xc)/7, (ya + 6*yc)/7);
//     pincel.lineTo((5*xa + 9*xc)/14, (ya + 6*yc)/7);
//     pincel.fill();
// }

// DesenhaEsquadro(50, 50, 400, 400, 'black');

//#endregion

//#region Exercício Bolinhas - Diminuir bolinhas nao funciona

// pincel.fillStyle = "gray";
// pincel.fillRect(0, 0, 600, 400);

// var cores = ['blue', 'red', 'green'];
// var indice = 0;

// var raio = 10;

// function DesenhaCirculo(evento) {
//   var x = evento.pageX - tela.offsetLeft;
//   var y = evento.pageY - tela.offsetTop;

//   if (evento.shiftKey && evento.ctrlKay) {
//     alert("Pressione uma tecla por vez, por favor!!");
//     }
//     else if(evento.shiftKey && raio + 10 <= 40 ){
//         raio = raio + 10;
//         alert("Teste");
//     }
//     else if(evento.ctrlKay && raio - 5 >= 10){
//         alert("Teste");
//         raio = raio - 5;
//     }

//     pincel.fillStyle = 'blue';
//     pincel.beginPath();
//     pincel.arc(x, y, raio, 0, 2 * 3.14);
//     pincel.fill();
// }
// function MudaCor() {

//     indice++;

//     if(indice >= cores.length){
//         indice = 0;
//     }
//     return false;
// }

// tela.onclick = DesenhaCirculo;

//#endregion

//#region Exercício Desenha com mouse

// pincel.fillStyle = "grey";
// pincel.fillRect(0, 0, 600, 400);
// var cores = document.querySelector("input");

// var check = false;

// function DesenhaCirculo(evento) {

//   if (check) {
//     var x = evento.pageX - tela.offsetLeft;
//     var y = evento.pageY - tela.offsetTop;
//     pincel.fillStyle = cores.value;
//     pincel.beginPath();
//     pincel.arc(x, y, 10, 0, 2 * 3.14);
//     pincel.fill();
//   }
//   console.log(x + "," + y);
// }

// tela.onmousemove = DesenhaCirculo;

// function CheckTrue() {
//   check = true;
// }

// function CheckFalse() {
//   check = false;
// }
// tela.onmousedown = CheckTrue;
// tela.onmouseup = CheckFalse;

//#endregion

//#region Exercício Alvo

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// var raio = 10;

// function DesenhaCirculo(x, y, raio, cor) {
//   pincel.fillStyle = cor;
//   pincel.beginPath();
//   pincel.arc(x, y, raio, 0, 2 * Math.PI);
//   pincel.fill();
// }

// DesenhaCirculo(300, 200, raio + 20, "red"); // maior círculo
// DesenhaCirculo(300, 200, raio + 10, "white");
// DesenhaCirculo(300, 200, raio, "red"); // menor circulo

// function Dispara(evento) {
//   var x = evento.pageX - tela.offsetLeft;
//   var y = evento.pageY - tela.offsetTop;

//   if ((x >= 290 && x <= 310) && (y >= 190 && y <= 210)) {
//     alert("Você acertou!!!");
//   }

//   console.log(x + "," + y);
// }

// tela.onclick = Dispara;

//#endregion

//#region Exercício Animação Círculos

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// function DesenhaCirculo(x, y, raio) {
//   pincel.fillStyle = "blue";
//   pincel.beginPath();
//   pincel.arc(x, y, raio, 0, 2 * Math.PI);
//   pincel.fill();
// }
// function LimpaTela() {
//   pincel.clearRect(0, 0, 600, 400);
// }

// var x = 20;
// var voltar = 1;

// function AtualizaTela() {
//   LimpaTela();
//   if (x > 600) {
//     voltar = -1;
//   } else if (x < 0) {
//     voltar = 1;
//   }
//   DesenhaCirculo(x, 20, 10);
//   x = x + voltar;
// }

// setInterval(AtualizaTela, 10);

// var crescimento = 0;
// var raio = 19;

// function PulsarTela() {
//   LimpaTela();

//   if (raio > 30) {
//     crescimento = -1;
//   } else if (raio < 20) {
//     crescimento = 1;
//   }

//   raio = raio + crescimento;
//   DesenhaCirculo(300, 200, raio, "blue");
// }

// setInterval(PulsarTela, 20);

// var x = 20;
// var y = 20;

// var esquerda = 37;
// var cima = 38;
// var direita = 39;
// var baixo = 40;

// function AtualizaTela() {
//   LimpaTela();
//   DesenhaCirculo(x, y, 10);
// }
// function Teclado(evento) {
//   var codigoTeclado = evento.keyCode;

//   if (codigoTeclado == esquerda) {
//     x = x + 10;
//   } else if (codigoTeclado == direita) {
//     x = x - 10;
//   } else if (codigoTeclado == cima) {
//     y = y - 10;
//   } else if (codigoTeclado == baixo) {
//     y = y + 10;
//   }
// }

// document.onkeydown = Teclado;
// setInterval(AtualizaTela, 20);

//#endregion

//#region Exercício Animação Bandeira

// function DesenhaBandeiraBrasil() {
//   pincel.fillStyle = "green";
//   pincel.fillRect(0, 0, 600, 400);

//   pincel.fillStyle = "yellow";
//   pincel.beginPath();
//   pincel.moveTo(300, 50);
//   pincel.lineTo(50, 200);
//   pincel.lineTo(550, 200);
//   pincel.fill();

//   pincel.beginPath();
//   pincel.moveTo(50, 200);
//   pincel.lineTo(300, 350);
//   pincel.lineTo(550, 200);
//   pincel.fill();

//   pincel.fillStyle = "darkblue";
//   pincel.beginPath();

//   pincel.arc(300, 200, 100, 0, 2 * 3.14);
//   pincel.fill();
// }

// function DesenhaBandeiraAlemanha() {
//   pincel.fillStyle = "black";
//   pincel.fillRect(0, 0, 600, 133);

//   pincel.fillStyle = "red";
//   pincel.fillRect(0, 133, 600, 133);

//   pincel.fillStyle = "yellow";
//   pincel.fillRect(0, 266, 600, 133);
// }

// var mostraBandeira = true;
// function TrocaBandeira() {
//   if (mostraBandeira) {
//     DesenhaBandeiraAlemanha();
//   } else {
//     DesenhaBandeiraBrasil();
//   }
//   mostraBandeira = !mostraBandeira;
// }

// setInterval(TrocaBandeira, 3000);

//#endregion

//#region Exercício Jogo de Pontaria

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// var raio = 10;
// var xAleatorio;
// var yAleatorio;

// function DesenhaCirculo(x, y, raio, cor) {
//   pincel.fillStyle = cor;
//   pincel.beginPath();
//   pincel.arc(x, y, raio, 0, 2 * Math.PI);
//   pincel.fill();
// }

// function LimpaTela() {
//   pincel.clearRect(0, 0, 600, 400);
// }

// function DesenhaAlvo(x, y) {
//   DesenhaCirculo(x, y, raio + 20, "red");
//   DesenhaCirculo(x, y, raio + 10, "white");
//   DesenhaCirculo(x, y, raio, "red");
// }

// function SorteiaPosicao(maximo) {
//   return Math.floor(Math.random() * maximo);
// }

// function AtualizaTela() {
//   LimpaTela();
//   xAleatorio = SorteiaPosicao(600);
//   yAleatorio = SorteiaPosicao(400);
//   DesenhaAlvo(xAleatorio, yAleatorio);
// }

// setInterval(AtualizaTela, 1000);

// function Dispara(evento) {
//   var x = evento.pageX - tela.offsetLeft;
//   var y = evento.pageY - tela.offsetTop;

//   if (
//     x > xAleatorio - raio &&
//     x < xAleatorio + raio &&
//     y > yAleatorio - raio &&
//     y < yAleatorio + raio
//   ) {
//     alert("Acertou!");
//   }
// }
// tela.onclick = Dispara;

//#endregion

//#region Exercício

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function DesenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor;
  pincel.fillRect(x, y, tamanho, tamanho);
  pincel.fill();
}

function DesenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function DesenhaPaletaDeCores() {
  DesenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, "red");
  DesenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, "green");
  DesenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, "blue");
}

function LidaComMovimentoDoMouse(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  if (desenha) {
    DesenhaCirculo(x, y, 5, corAtual);
  }
}

function HabilitaDesenhar() {
  desenha = true;
}

function DesabilitaDesenhar() {
  desenha = false;
}

var desenha = false;
var corAtual = "blue";
var xVermelho = 0;
var xVerde = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

DesenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = LidaComMovimentoDoMouse;

tela.onmousedown = HabilitaDesenhar;

tela.onmouseup = DesabilitaDesenhar;

//#endregion
