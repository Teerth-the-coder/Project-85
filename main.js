canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

carWidth = 125;
carHeight = 125;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carX = 650;
carY = 400;

fixedX = 650;
fixedY = 400;

resetBtn = document.getElementById("restartbtn");

resetBtn.addEventListener("click", restart);

function add() {
	backgroundImage_tag = new Image();
	backgroundImage_tag.onload = uploadBackground;
	backgroundImage_tag.src = background_image;

	carImg_Tag = new Image();
	carImg_Tag.onload = uploadgreencar;
	carImg_Tag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundImage_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(carImg_Tag, carX, carY, carWidth, carHeight);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (carY > 0) {
		carY = carY - 10;
		uploadBackground()
		uploadgreencar()

		if (carX >= 350 && carX <= 425 && carY >= 100 && carY <= 175) {
			console.log("win");
			document.getElementById("winlabel").textContent = `Well Done You Won`
			resetBtn.style.display = `block`;
		}
	}
}

function down() {
	//Define function to move the car downward
	if (carY < canvas.height - carHeight) {
		carY = carY + 10;
		uploadBackground()
		uploadgreencar()

		if (carX >= 350 && carX <= 425 && carY >= 100 && carY <= 175) {
			console.log("win");
			document.getElementById("winlabel").textContent = `Well Done You Won`
			resetBtn.style.display = `block`;
		}
	}
}

function left() {
	//Define function to move the car left side
	if (carX > 0) {
		carX = carX - 10;
		uploadBackground()
		uploadgreencar()

		if (carX >= 350 && carX <= 425 && carY >= 100 && carY <= 175) {
			console.log("win");
			document.getElementById("winlabel").textContent = `Well Done You Won`
			resetBtn.style.display = `block`;
		}
	}


}

function right() {
	//Define function to move the car right side
	if (carX < canvas.width - carWidth) {
		carX = carX + 10;
		uploadBackground()
		uploadgreencar()

		if (carX >= 350 && carX <= 425 && carY >= 100 && carY <= 175) {
			console.log("win");
			document.getElementById("winlabel").textContent = `Well Done You Won`
			resetBtn.style.display = `block`;
		}
	}
}

function restart() {
	carX = 650;
	carY = 400;
	uploadBackground()
	uploadgreencar()
}