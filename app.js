const form = document.querySelector('#taskCreator');
const input = document.querySelector('input#createTask');
const ul = document.querySelector('#list');
const li = document.querySelectorAll('li');

const addToLocalStorage = (inputValue) => {
    localStorage.setItem('todo', JSON.stringify(inputValue));
    let todos = [];
    const todosJSON = localStorage.getItem('todo');
    if(todosJSON){
        todos = JSON.parse(todosJSON);
    };
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!input.value.trim()) {
        alert('Please enter a valid task.');
        return;
    }
    newTask();
});

const newTask = () => {
    const newItem = document.createElement('li');
    newItem.innerText = input.value;

    ul.appendChild(newItem);


    const removeItem = document.createElement('button');
    removeItem.innerText = 'Remove Task';
    removeItem.classList.add('removeTaskBtn');

    newItem.appendChild(removeItem);

    addToLocalStorage(input.value);
    input.value = '';
};

ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('li');
    };

    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        //Work on finding a cleaner solution...If the button name changes we are screwed here. Breaks the code.
        // let removeText = event.target.parentElement.innerText.replace('Remove Task', '');

        // removeFromLocalStorage();
    };
});

