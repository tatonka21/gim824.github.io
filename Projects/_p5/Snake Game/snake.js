function Snake () {

    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 1;
    this.total = 0;
    this.tail = [];
    this.isPowered = false;

    this.eat = function (type) {

        if (type === food) {

            var d = dist(this.x, this.y, type.x, type.y);

            if (d < 1) {

                this.total++;

                return true;            

            } else {

                return false;

            }

        }  else if (type === power) {

            var d = dist(this.x, this.y, type.x, type.y);

            if (d < 1) {

                this.isPowered = true;

                return true;            

            } else {

                return false;

            }

        }

    }

    this.dir = function (x, y) {

        this.xspeed = x;
        this.yspeed = y;

    }

    this.death = function (message) {

        for (var i = 0; i < this.tail.length; i++) {

            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);

            if (d < 1) {

                total = 0;
                this.tail = [];

            }

        }

        if (message === "enemy") {

            total = 0;
            this.tail = [];

        }

    }

    this.update = function () {

        if (this.total === this.tail.length) {

            for (var i = 0; i < this.tail.length - 1; i++) {

                this.tail[i] = this.tail[i + 1];
    
            }

        }

        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * gridSize;
        this.y = this.y + this.yspeed * gridSize;

        this.x = constrain(this.x, 0, width - gridSize);
        this.y = constrain(this.y, 0, height - gridSize);

        //document.write(this.x);
        //document.write(this.y);

        document.getElementById("snakeX").innerHTML = "Snake X: " + this.x;
        document.getElementById("snakeY").innerHTML = "Snake Y: " + this.y;

        document.getElementById("snakeSpeedX").innerHTML = "SnakeSpeed X: " + this.xspeed;
        document.getElementById("snakeSpeedY").innerHTML = "SnakeSpeed Y: " + this.yspeed;


    }

    this.show = function () {

        if (this.isPowered) {

            fill(100, 300, 0);

            for (var i = 0; i < this.tail.length; i++) {

                rect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);

            }

            rect(this.x, this.y, gridSize, gridSize);

        } else {

            fill(255);

            for (var i = 0; i < this.tail.length; i++) {

                rect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);

            }

            rect(this.x, this.y, gridSize, gridSize);

        }

    }

}