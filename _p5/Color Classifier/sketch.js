function setup () {

    createCanvas(400, 400);    

    let r = floor(random(256));
    let g = floor(random(256));
    let b = floor(random(256));

    background(r, g, b);

    let dropdown = createSelect();
    dropdown.option("red-ish");
    dropdown.option("blue-ish");
    dropdown.option("green-ish");

}