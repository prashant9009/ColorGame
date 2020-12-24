var colors = generateColor(6);

var sq = document.querySelectorAll(".sq");
var colorPicked = pickColor();
var a = document.querySelector("#head");
a.textContent = colorPicked;
var msg = document.querySelector("#message");


var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	colors = generateColor(6);
	colorPicked = pickColor();
	a.textContent = colorPicked;
	msg.textContent = "";
	reset.textContent ="New Colors";
	for(var i=0;i<sq.length;i++){
	
		sq[i].style.background = colors[i];
	}
	document.querySelector("h1").style.background = "steelblue";
});
var easyButton = document.querySelector("#easybtn");
var hardButton = document.querySelector("#hardbtn");	
easyButton.addEventListener("click",function(){

	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");

	colors = generateColor(3);
	colorPicked = pickColor();
	a = document.querySelector("#head");
	a.textContent = colorPicked;

	for(var i = 0;i<sq.length;i++){
		if(colors[i])
		{
			sq[i].style.background = colors[i];
		}
		else{
			sq[i].style.display = "none";
		}
	}

})

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	
	colors = generateColor(6);
	colorPicked = pickColor();
	a = document.querySelector("#head");
	a.textContent = colorPicked;


	for(var i = 0;i<sq.length;i++){
		sq[i].style.background = colors[i];
		sq[i].style.display = "block";
	}
})


for(var i=0;i<sq.length;i++){
	
	sq[i].style.background = colors[i];

	sq[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === colorPicked){
			msg.textContent = "Correct!";
			//this.style.background
			for(var j = 0;j<sq.length;j++){
				sq[j].style.background = colorPicked;
			}
			document.querySelector("h1").style.background = colorPicked;
			resetButton.textContent = "Play Again?";
		}	
		else{
			msg.textContent = "Try Again!";
			this.style.background = "black";
		}
		
	});
}

function pickColor(){

	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateColor(num){
	var arr = [];
	for(var i = 0;i<num;i++)
		arr.push(randomColor());

	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}