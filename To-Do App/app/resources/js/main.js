function buttonClick () {

    let value = document.getElementById('item').value;

    if (value) {

        addItemTodo(value);

    }

}

function addItemTodo (text) {

    let item = document.createElement('li');
    item.innerText = text;

}

document.getElementById('add').addEventListener('click', buttonClick);