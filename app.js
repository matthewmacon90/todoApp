const form = document.querySelector('#taskCreator');
const input = document.querySelector('#createTask');
const taskList = document.querySelector('#list');

const addToLocalStorage = (inputValue) => {
    // let todoListContents = localStorage.setItem('todo', JSON.stringify(inputValue)) || [];

    // let arrayList = [];
    // let valueString = localStorage.getItem('todo', inputValue);
    // arrayList = valueString;
    // console.log(`Arraylist`, arrayList);


    let todoListContents = JSON.parse(localStorage.getItem('todo')) || [];
    localStorage.setItem('todo', JSON.stringify(inputValue));
    console.log(todoListContents);
    return todoListContents
};


// Using this to load the values to the DOM from local storage.
const retrieveLocalStorage = (todoListContents) => {
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while(i--) {
        const newTask = document.createElement('li');
        newTask.innerText = JSON.parse(localStorage.getItem(keys));
        // newTask.innerText = todoListContents;
        taskList.appendChild(newTask);

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove Task';
        removeBtn.classList.add('removeTaskBtn');
        newTask.appendChild(removeBtn);
    }
};
retrieveLocalStorage();

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!input.value.trim()) {
        alert('Please enter a valid task.');
        return;
    };
    newTask();
});

const newTask = () => {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    taskList.appendChild(newTask);

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove Task';
    removeBtn.classList.add('removeTaskBtn');

    newTask.appendChild(removeBtn);

    addToLocalStorage(input.value);
    input.value = '';
};

taskList.addEventListener('click', function (event) {
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

//I used this code to render the todo list on my app. 
// https://stackoverflow.com/questions/62235770/how-do-i-save-to-local-storage-via-vanilla-js