var snake;
var enemy;
var gridSize = 20;

var food;
var power;

function setup () {

    var canvas = createCanvas(600, 600);
    canvas.parent('canvas-holder');

    snake = new Snake();
    enemy = new Enemy();

    enemy.setup();

    pickLocation("food");
    fill(255, 0, 100);
    rect(food.x, food.y, gridSize, gridSize);

    pickLocation("power");
    fill(0, 255, 100);
    rect(power.x, power.y, gridSize, gridSize);

    frameRate(20);

}

function pickLocation (type) {

    var cols = floor(width / gridSize);
    var rows = floor(height / gridSize);

    if (type === "food") {

        food = createVector(floor(random(cols)), floor(random(rows)));
        console.log("created food");
        food.mult(gridSize);

    } else if (type === "power") {

        power = createVector(floor(random(cols)), floor(random(rows)));
        power.mult(gridSize);

    }

}

function mousePressed () {

    snake.total++;

}

function draw () {

    background(52);

    if (snake.eat(food)) {

        pickLocation("food");

        fill(255, 0, 100);
        rect(food.x, food.y, gridSize, gridSize);

    }

    if (snake.eat(power)) {

        pickLocation("power");

        fill(0, 255, 100);
        rect(power.x, power.y, gridSize, gridSize);

    }

    if (enemy.kill(snake)) {

        snake.death("enemy");

    }

    fill(255, 0, 100);
    rect(food.x, food.y, gridSize, gridSize);

    fill(0, 255, 100);
    rect(power.x, power.y, gridSize, gridSize);

    snake.death();
    snake.update();
    snake.show();

    enemy.update();
    enemy.show();
    enemy.kill();

}

function keyPressed () {

    if (keyCode === UP_ARROW) {

        snake.dir(0, -1);

    } else if (keyCode === DOWN_ARROW) {

        snake.dir(0, 1);

    } else if (keyCode === RIGHT_ARROW) {

        snake.dir(1, 0);

    } else if (keyCode === LEFT_ARROW) {

        snake.dir(-1, 0);

    }

}