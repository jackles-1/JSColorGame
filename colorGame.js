// generate random colors for squares
var colors = generateRandomColors(6);

// select winning color and display rgb values
var winningDisplay = document.querySelector("#winner");
var winningColor = pickWinningColor();
winningDisplay.textContent = colors[winningColor].substr(3);

//assign colors in colors to the squares
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	//add click listeners for squares to compare the square's color to colors[winningColor]
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === colors[winningColor]){

			console.log("correct");
			messageDisplay.textContent = "Correct!";

			changeColors(colors[winningColor]);

		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

// changes background color of all squares and the h1 to match color passed in
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	h1Display.style.backgroundColor = color;
}

// picks random index to be winning color from color array
function pickWinningColor(){
	var winningColor = Math.floor(Math.random()*(colors.length));
	console.log(winningColor);
	return winningColor;
}

// picks a random color for each square
function generateRandomColors(numOfColors){
	// create array of random numbers to be used in rgb colors
	var numbers = [];

	for(var i = 0; i < (numOfColors*3); i++){
		numbers[i] = Math.floor((Math.random()*256));
	}
	// create array of rgb colors for squares, using values in numbers
	var colors = [];

	for(var i = 0; i < numOfColors; i++){
		colors[i] = "rgb(" + numbers[i*3] + ", " + numbers[(i*3)+1] + ", " + numbers[(i*3)+2] + ")";
	}

	return colors;
}


