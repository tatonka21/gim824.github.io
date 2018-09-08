function Enemy () {

    this.x = 100;
    this.y = 100;
    this.xspeed = 0;
    this.yspeed = 0;

    this.setup = function () {

        this.timer = setInterval(this.moveTimer, 2000);

    }

    this.update = function () {

        // this.x += random(-4, 4);
        // this.y += random(-3, 3);

        this.x = this.x + this.xspeed * gridSize;
        this.y = this.y + this.yspeed * gridSize;

        document.getElementById("enemyX").innerHTML = "Enemy X: " + this.x;
        document.getElementById("enemyY").innerHTML = "Enemy Y: " + this.y;

        document.getElementById("enemySpeedX").innerHTML = "Enemy Speed X: " + this.xspeed;
        document.getElementById("enemySpeedY").innerHTML = "Enemy Speed Y: " + this.yspeed;

    }

    this.moveTimer = function () {

        let num = Math.round(Math.random());

        if (num === 1) {

            this.xspeed = 0;
            this.yspeed = 1;

        } else {

            this.xspeed = 1;
            this.yspeed = 0;

        }
        
        this.xspeed = 1;
        this.yspeed = 0;
        
        alert("hoi");

    }

    this.show = function () {

        fill(255, 255, 0);
        rect(this.x, this.y, gridSize, gridSize);

    }

    this.kill = function (snake) {

        if (snake != null) {

            var d = dist(this.x, this.y, snake.x, snake.y);

            if (d < 1) {

                return true;

            } else {

                return false;

            }

        }

    }

}