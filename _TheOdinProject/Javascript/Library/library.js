function newBook () {

    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;

    if (typeof(Storage) !== "undefined") {

        localStorage.setItem("BookTitle", title);
        localStorage.setItem("BookAuthor", author);
        localStorage.setItem("BookPages", pages);

    } else {

        alert("No Web Storage Supported");

    }

    // let book = "<tr><td>"+title+"</td><td>"+author+"</td><td>"+pages+"</td></tr>";

    // document.getElementById("bookTable").innerHTML += book;

}

function loadBooks () {

    let title = localStorage.getItem("BookTitle");
    let author = localStorage.getItem("BookAuthor");
    let pages = localStorage.getItem("BookPages");

    let book = "<tr><td>"+title+"</td><td>"+author+"</td><td>"+pages+"</td></tr>";

    document.getElementById("bookTable").innerHTML += book;

}