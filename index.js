//
// for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//     console.log(this);
//     this.style.color = "white";
//   });
//
// }
function makesound(trigger){

  switch(trigger){
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom1 = new Audio('sounds/tom-2.mp3');
      tom1.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    }
}

for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var ButtoninnerHTML = this.innerHTML;
    makesound(ButtoninnerHTML);
    makeAnimation(ButtoninnerHTML);

  });

}

document.addEventListener('keydown',function(event){
  makesound(event.key);
  makeAnimation(event.key);
});

function makeAnimation(keyPress){
  var activeButton = document.querySelector("."+keyPress);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}
