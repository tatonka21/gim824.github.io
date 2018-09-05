function Book (title, author, pages) {

    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function () {

        console.log("\'" + this.title + "\' by " + this.author + " has " + this.pages + " pages");

    }

}

const book1 = new Book("Shawn is angry", "Adam Lunds", 107);

book1.info();