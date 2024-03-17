// variables declarations 
var buttonColours = ["red","blue","green","yellow"] ;
var gamePattern = [];
var userClickedPattern = [];
var level =0 ;
var started = true;
document.addEventListener("keydown",function(){
  if(started===true){ 
    started = false; 
    nextSequence();}
});


// 
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id") ;
  userClickedPattern.push(userChosenColour);
  if(userClickedPattern.length===gamePattern.length){
    checkAnswer(userClickedPattern.length);
  }
  });

function nextSequence(){
var randomNumber = Math.floor(4*Math.random());
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);;
$("#level-title").text("Level "+level); 
playSound(randomChosenColour);
level++;

}

// function to play sound
function playSound(name){
    var audio = new Audio(name+".mp3");
    audio.play();
   
}


// function to perform animations 
function animatePress(currentColour){
 $(currentColour).addClass("pressed");
 setTimeout(function() {
    $(currentColour).removeClass("pressed");
  }, 100);

}

// function for checking right or wrong 
function checkAnswer(levell){
   var j = 1;

  for(var i=0;i<levell;i++){

    if(gamePattern[i]===userClickedPattern[i]){   
    }
    else {
      j = 0;
    }
  }
  if(j===1){
   console.log("success");
    userClickedPattern = [];
    setTimeout(function() {
      nextSequence();
    }, 1000);
  }
  else {
    console.log("Inside else");
    level = 0 ;
    $("h1").text("Game over press any key to restart");
gamePattern = [];
started = true ;

    userClickedPattern = [];
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      playSound(wrong);
      
      
  }

}