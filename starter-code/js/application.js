// Use this file to write the interactions between your game and the user

//Initialize ion library

window.onload = function(){

};

function showValue(newValue){

  document.getElementById("labelLimit").innerHTML=newValue*10;
}

function moveSections(){
  document.getElementById("game-options").style.display = "None";
  document.getElementById("game-board").style.display = "Block";

}
