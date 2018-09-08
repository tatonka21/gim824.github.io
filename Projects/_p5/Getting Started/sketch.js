function  setup () {

    createCanvas(640, 480);

    bgcolor = color(200);

}

function draw () {

    if (mouseIsPressed) {

        changeColor();

        background(bgColor);

        fill(255);

        ellipse(mouseX, mouseY, 80, 80);

    } else {

        fill(255);

    }

    ellipse(mouseX, mouseY, 80, 80);

}

function changeColor () {

    bgColor = color(random(0, 255), random(0, 255), random(0, 255));

}