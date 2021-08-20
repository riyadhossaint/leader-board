// change top players color
const topPlayers = document.getElementById('top-players');
topPlayers.style.color = 'orange';

// change top blogs color

const topBlogs = document.getElementById('top-blogs');
topBlogs.style.color = 'darkGreen';

// change players section background color

const players = document.getElementById('players-section');
players.style.backgroundColor = 'rgba(0,255,0,0.3)';

let count = 4;
// list item added by click a button 
document.getElementById('list-button').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `list-${count++}`;
    listContainer.appendChild(li);

});

// handle increasing the input field value

document.getElementById('plus-button').addEventListener('click', function () {
    const previousInput = document.getElementById('input-field');
    const previousInputText = previousInput.value;
    const previousInputNumber = parseInt(previousInputText);

    if (previousInputNumber + 1 <= 5) {
        const newNumber = previousInputNumber + 1;
        previousInput.value = newNumber;
    }
    if(previousInputNumber >= 4){
        const plusButton = document.getElementById('plus-button');
        plusButton.disabled = true;
    }

});


