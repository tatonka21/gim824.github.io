var angle;

var slider;

function setup () {

    createCanvas(400, 400);

    create();

}

function create () {

    angle = PI / 4;
    slider = createSlider(0, TWO_PI, PI / 4);

}

function draw () {

    background(51);

    angle = slider.value();

    stroke(255);
    translate(200, height);
    branch(100);

}

function branch (len) {

    line(0, 0, 0, -len);

    translate(0, -len);
    rotate(PI / 4);

    if (len > 4) {

        branch(len * 0.67);

    }

} 