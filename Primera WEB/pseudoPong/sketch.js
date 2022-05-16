//P1 BLAU, P2 VERMELL

const input_radi = document.getElementById("radi_pilota");

let contadorP1, contadorP2;

let rebot;

let pilota;
let P1;
let P2;

let pausa = false;
  
function objectes(){
  
  pilota = new Cercle(width/2, height/2, input_radi.value, 0, 2, 0, 255, 0);

  P1 = new player((width/2)-75, height-25, 150, 15, 0, 0, 255, 1);

  P2 = new player((width/2)-75, 10, 150, 15, 255, 0, 0, 2);
  
}

function setup() {
  const canvasDiv = document.getElementById("canvasContainer");
  
  //


  //
  


  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas= canvasDiv.offsetHeight;

  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");

  contadorP1 = 0;
  contadorP2 = 0;
  rebot = 0;
  objectes();
  vermell = 0;
  blau = 0;
}

function draw() {
  background(blau, 0, vermell);
  
  pilota.radi = input_radi.value;

  pilota.dibuixa();
  P1.dibuixa();
  P2.dibuixa();
  if(pausa == false){
    pilota.moviment();
    P1.moviment();
    P2.moviment();
  }else{
    textSize(35);
    fill(255, 0, 255);
    text("Joc en pausa", width/3, height/2);
  }
  
  
  


  //contadors
  fill("black");
  rect(0, 220, 170, 45);

  //Contador P2
  fill("red");
  textSize(20);
  textStyle(BOLD);
  text("Puntuació P2: " + contadorP1, 5, (height/2)-10);

  //Contador P1
  fill("blue");
  textSize(20);
  textStyle(BOLD);
  strokeWeight(5);
  text("Puntuació P1: " + contadorP2, 5, (height/2)+10);

}

function keyPressed() {
  if(keyCode === 16){

   pausa = !pausa;
  
   
  }

}

//radi pilota !
//pausa (keyPressed) !
