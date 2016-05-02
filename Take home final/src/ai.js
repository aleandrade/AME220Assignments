var stl = "./src/ac.png";
var imgs = ["./src/ac.png","./src/myloading.png","./src/myloading2.png"]
var current = 0;

var AI = {
  show: function(stl){
    var mu = "<div class='fadeBox' tabindex='1' onkeypress='changeImage(event,stl)'> <div class='spinner'> </div> </div>";
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}

function startUP(){
	AI.show(stl);
}

function changeImage(e,path){
	if(e.keyCode == 0){
		stl = imgs[current];
	
		current++;
		
		if(current == 3)
			current = 0;
			
		$('.spinner')[0].style.backgroundImage = 'url("' + path + '")';
		
	} else if (e.keyCode == 27){
		AI.hide();
	}
}