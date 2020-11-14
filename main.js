canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1Width = 120;
car1Height = 70;
car1X = 10;
car1Y = 10;
car2Width = 120;
car2Height = 70;
car2X = 10;
car2Y = 100;
backgroundImage = "https://lh3.googleusercontent.com/proxy/hZnCANDsJI_7N-ABhXqSoRWg4dGQuwXraFM8CdrSuQInUKiQzwTtO8y1CxjhQTorNP80eVYM3TVQG6_bcSlC4wS5";
car1Image = "car.png";
car2Image = "car2.png";

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;
    car1ImageTag = new Image();
    car1ImageTag.onload = uploadCar1;
    car1ImageTag.src = car1Image;
    car2ImageTag = new Image();
    car2ImageTag.onload = uploadCar2;
    car2ImageTag.src = car2Image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1ImageTag, car1X, car1Y, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2ImageTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up arrow key presssed");
    }
    if (keyPressed == "40") {
        down();
        console.log("down arrow key presssed");
    }
    if (keyPressed == "37") {
        left();
        console.log("left arrow key presssed");
    }
    if (keyPressed == "39") {
        right();
        console.log("right arrow key presssed");
    }
}


