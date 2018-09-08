function Cell (pos, radius, colour) {

    if (pos) {

        this.pos = pos.copy();

    } else {

        this.pos = createVector(random(width), random(height));

    }
    
    this.radius = radius || 60;
    this.colour = colour || color(random(50, 255), 0, random(50, 255));

    this.clicked = function (x, y) {

        var d = dist(this.pos.x, this.pos.y, x, y);

        if (d < this.radius) {

            return true;

        } else {

            return false;

        }

    }

    this.mitosis = function () {

        this.pos.x += random(-this.radius, this.radius);

        this.pos.y += random(-this.radius, this.radius);

        var newRadius = sqrt(2 / 2) * this.radius;

        var cell = new Cell(this.pos, newRadius * 0.8, this.colour);

        return cell;

    }

    this.move = function () {

        var vel = p5.Vector.random2D();

        this.pos.add(vel);

    }

    this.show = function () {

        noStroke();
        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

    }

}