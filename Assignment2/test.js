var easingsList = [
"swing",
"easeInQuad",
"easeOutQuad",
"easeInOutQuad",
"easeInCubic",
"easeOutCubic",
"easeInOutCubic",
"easeInQuart",
"easeOutQuart",
"easeInOutQuart",
"easeInQuint",
"easeOutQuint",
"easeInOutQuint",
"easeInSine",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElastic",
"easeOutElastic",
"easeInOutElastic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];

var moveRight = function(){
  for(n=0; n<30; n++){
	var e = easingsList[n];
	var d = parseInt($("#delay").val());
	moveBoxRight(n, e, d);
  }
}

var moveLeft = function(){
  for(n=0; n<30; n++){
		var e = easingsList[n];
		var d = parseInt($("#delay").val());
		moveBoxLeft(n, e, d);
	}
}

var hideBoxes = function(){
  var selection = parseInt($("#jqoption").val())
  if(selection == 0){
    $(".button").fadeOut();
  }
  else if(selection == 1){
    $(".button").fadeToggle();
  }
  else if(selection == 2){
    $(".button").slideToggle();
  }
  else if(selection == 3){
    $(".button").toggle();
  }
  else if(selection == 4){
    $(".button").slideUp();
  }
  else if(selection == 5){
    $(".button").hide();
  }
  else{
    $(".button").animate({opacity:0});
  }

}

var showBoxes = function(){
  var selection = parseInt($("#jqoption").val())
  if(selection == 0){
    $(".button").fadeIn();
  }
  if(selection == 1){
    $(".button").fadeToggle();
  }
  if(selection == 2){
    $(".button").slideToggle();
  }
  if(selection == 3){
    $(".button").toggle();
  }
  if(selection == 4){
    $(".button").slideDown();
  }
  if(selection == 5){
    $(".button").show();
  }
  if(selection == 6){
    $(".button").animate({opacity:1});
  }
}

var backgroundChange = function(){
  var selection = parseInt($("#bgoption").val())
  if(selection == 0){
    $( ".button" ).css( "background-color", "white" );
  }
  if(selection == 1){
    $( ".button" ).css( "background-color", "red" );
  }
  if(selection == 2){
    $( ".button" ).css( "background-color", "green" );
  }
  if(selection == 3){
    $( ".button" ).css( "background-color", "blue" );
  }
  if(selection == 4){
    $( ".button" ).css( "background-color", "gray" );
  }
}

var moveBoxRight= function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left":pageWidth-boxWidth + "px"}, duration, easing); 
}

var moveBoxLeft= function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left" : "0px"}, duration, easing); 
}


var toggleBoxes = function()
{
  var selection = $("#hideShowButton").html();
  if(selection == "Hide Boxes"){
    hideBoxes();
    $("#hideShowButton").html("Show Boxes");
  }
  else{
    showBoxes();
    $("#hideShowButton").html("Hide Boxes");
  }
}

var LeftRightButton = function()
{
  var current = $("#LeftRight").html();
  if(current == "Move Right"){
	moveRight();
    $("#LeftRight").html("Move Left");
  }
  else{
	 moveLeft();
    $("#LeftRight").html("Move Right");
  }
}

var init = function()
{
    $(".button").each(doSomething);
}

var doSomething = function(index){
  console.log(index);
}
