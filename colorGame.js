var numOfSquares = 6;
var colors = [];
var winningColor;
var squares = document.querySelectorAll(".square");
var winningDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");

init();

// sets up reset button to reset game and change text
resetButton.addEventListener("click", function(){
	reset();
});	

// sets up click listeners on squares that compare their colors to the winningColor
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		// add click listeners for squares to compare the square's color to colors[winningColor]
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === colors[winningColor]){
				messageDisplay.textContent = "Correct!";
				changeColors(colors[winningColor]);
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

// set up easy/hard mode buttons to change number of squares 
function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function(){
			// add and remove class selected
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// sets numOfSquares (Easy = 3; Hard = 6)
			// "ternary" operator
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		});
	}
}

// initializes the game
function init()
{
	setupSquares();
	setupModeButtons();
	reset();
}

// picks a random color for each square
function generateRandomColors(numOfColors){
	// create array of random numbers to be used in rgb colors
	var numbers = [];
	for(var i = 0; i < (numOfColors*3); i++){
		numbers[i] = Math.floor((Math.random()*256));
	}
	// create array of rgb colors for squares, using values in numbers
	var newColors = [];
	for(var i = 0; i < numOfColors; i++){
		newColors[i] = "rgb(" + numbers[i*3] + ", " + numbers[(i*3)+1] + ", " + numbers[(i*3)+2] + ")";
	}
	return newColors;
}

// picks random index to be winning color from color array
function pickWinningColor(){
	var winningColor = Math.floor(Math.random()*(colors.length));
	return winningColor;
}

// changes background color of all squares and the h1 to match color passed in
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	h1Display.style.backgroundColor = color;
}

// resets the game with new colors
function reset(){
	// generate new random colors
	colors = generateRandomColors(numOfSquares);
	// pick a new winning color and display its RGB
	winningColor = pickWinningColor();
	winningDisplay.textContent = "RGB" + colors[winningColor].substr(3);
	// change backgrounds of squares to match new colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	// reset h1 background to black
	h1Display.style.backgroundColor = "steelblue";
	// change resetButton's text back to "Change Colors"
	resetButton.textContent = "New Colors";
}


