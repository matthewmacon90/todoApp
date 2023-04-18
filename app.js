const form = document.querySelector('#taskCreator');
const input = document.querySelector('#createTask');
const taskList = document.querySelector('#list');

const addToLocalStorage = (inputValue) => {
    let key = `todo${localStorage.length}`;
    localStorage.setItem(key, inputValue);
};

const retrieveLocalStorage = () => {
    const tasks = Object.values(localStorage);

    tasks.forEach(task => {
        const newTask = document.createElement('li');
        newTask.innerText = task;
        taskList.appendChild(newTask);

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove Task';
        removeBtn.classList.add('removeTaskBtn');
        newTask.appendChild(removeBtn);
    });
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