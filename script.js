//ddress different SVG separately
const CLOCKFACE = document.querySelector("#face")
const AGAHAND = document.querySelector("#Aga");
const GOSIAHAND = document.querySelector("#Gosia");
const KRZYHAND = document.querySelector("#Krzy");
const JULUHAND = document.querySelector("#Julu");
const DAMHAND = document.querySelector("#Dam");
const OLUHAND = document.querySelector("#Olu");
const GRAHAND = document.querySelector("#Gra");
const ANNAHAND = document.querySelector("#Anna");
const ROBIHAND = document.querySelector("#Robi");
const ELIAHAND = document.querySelector("#Elia");
const ESTERHAND = document.querySelector("#Ester");
const TOMMAHAND = document.querySelector("#Tomma");
const TEREHAND = document.querySelector("#Tere");
const AUHAND = document.querySelector("#Au");


//
var seattle = (360/8)*0;
var travel = (360/8)*1;
var caravaggio = (360/8)*2;
var mazure =(360/8)*3;
var london =(360/8)*4;
var mountains =(360/8)*5;
var rzepin = (360/8)*6;
var gdansk = (360/8)*7;


//setup base locations
var desiredPosAga = mazure;
var desiredPosGosia = rzepin;
var desiredPosKrzy = rzepin;
var desiredPosJul = mazure;
var desiredPosDam = mazure;
var desiredPosOla = seattle;
var desiredPosGra = gdansk;
var desiredPosAnna = caravaggio;
var desiredPosRobi = caravaggio;
var desiredPosElia = seattle;
var desiredPosEster = caravaggio;
var desiredPosTomma = london;
var desiredPosTere = london;
var desiredPosAu = london;

var desiredPosVec = [desiredPosAga,desiredPosGosia,desiredPosKrzy,desiredPosJul,desiredPosDam,desiredPosOla,desiredPosGra,desiredPosAnna,desiredPosRobi,desiredPosElia,desiredPosEster,desiredPosTomma,desiredPosTere,desiredPosAu];
var hands = [AGAHAND , GOSIAHAND , KRZYHAND, JULUHAND , DAMHAND , OLUHAND , GRAHAND , ANNAHAND , ROBIHAND , ELIAHAND , ESTERHAND , TOMMAHAND , TEREHAND , AUHAND];

//function moveToPlace( currentPose, nextPose){
//    if (nextPose>currentPose){
//      var angleMove1 = nextPose-currentPose;
//      var angleMove2 = 0;
//    }else{
//      var anlgeMove1 =360-currentPose;
//      var anlgeMove2=nextPose;
//    }
//    var moves = [anlgeMove1,angleMove2];
//  return  moves;
//};

function moveToPlace(constant,nextPose){
     constant.style.transform = "rotate(" + nextPose + "deg)";
   }

function updatePoses(){
    //for some reason the for loop doesn't work
    moveToPlace(hands[0],desiredPosVec[0]);
    moveToPlace(hands[1],desiredPosVec[1]);
    moveToPlace(hands[2],desiredPosVec[2]);
    moveToPlace(hands[3],desiredPosVec[3]);
    moveToPlace(hands[4],desiredPosVec[4]);
    moveToPlace(hands[5],desiredPosVec[5]);
    moveToPlace(hands[6],desiredPosVec[6]);
    moveToPlace(hands[7],desiredPosVec[7]);
    moveToPlace(hands[8],desiredPosVec[8]);
    moveToPlace(hands[9],desiredPosVec[9]);
    moveToPlace(hands[10],desiredPosVec[10]);
    moveToPlace(hands[11],desiredPosVec[11]);
    moveToPlace(hands[12],desiredPosVec[12]);
    moveToPlace(hands[13],desiredPosVec[13]);
  }

function hideSVGOla() {
  var arg = "Olu";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}

function hideSVGElia() {
  var arg = "Elia";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}

function hideSVGGosia() {
  var arg = "Gosia";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}


function hideSVGKrzystow() {
  var arg = "Krzy";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}

function hideSVGAga() {
  var arg = "Aga";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGJulia() {
  var arg = "Julu";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGDamian() {
  var arg = "Dam";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGGratian() {
  var arg = "Gra";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGTomma() {
  var arg = "Tomma";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGAurora() {
  var arg = "Au";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGTere() {
  var arg = "Tere";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGAnna() {
  var arg = "Anna";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGRobi() {
  var arg = "Robi";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}
function hideSVGEster() {
  var arg = "Ester";
  var style = document.getElementById(arg).style.display;
  if(style === "none")
    document.getElementById(arg).style.display = "block";
  else
    document.getElementById(arg).style.display = "none";
}


updatePoses();

































//var interval = setInterval(runTheClock, 1000);
