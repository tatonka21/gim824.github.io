document.getElementById('myForm').addEventListener('submit', saveBookmark);
document.getElementById('myForm').setAttribute('autocomplete', 'off');

function saveBookmark (e) {

    let siteName = document.getElementById('siteName').value;
    let siteURL = document.getElementById('siteURL').value;

    if (!validateBookmark(siteName, siteURL)) {

        return false;

    }

    let bookmark = {
        name: siteName,
        url: siteURL
    }

    if (localStorage.getItem('bookmarks') === null) {

        let bookmarks = [];
        bookmarks.push(bookmark);
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }

    document.getElementById('myForm').reset();

    fetchBookmarks();

    e.autocomplete = 'off';
    e.preventDefault();

}

function deleteBookmark (url) {

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for (let i = 0; i < bookmarks.length; i++) {

        if (bookmarks[i].url === url) {

            bookmarks.splice(i, 1);

        }

    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchBookmarks();

}

function fetchBookmarks () {

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let bookmarksResults = document.getElementById('bookmarksResults');

    bookmarksResults.innerHTML = "";

    for (let i = 0; i < bookmarks.length; i++) {

        let name = bookmarks[i].name;
        let url = bookmarks[i].url;

        bookmarksResults.innerHTML +=   '<div class="card">' + 
                                            '<div class="card-body">' +
                                                '<h3 class="card-title">'+name+'</h3>' +
                                                '<a class="btn btn-primary" target="_blank" href="'+url+'">Visit Page</a>' +
                                                '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete Page</a>' +
                                            '</div>' +
                                        '</div';

    }

}

function validateBookmark (siteName, siteURL) {

    if (!siteName || !siteURL) {

        alert("Please fill in every field");

        return false;

    } else {

        return true;

    }

}