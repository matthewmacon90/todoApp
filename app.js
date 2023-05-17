const form = document.querySelector('#taskCreator');
const input = document.querySelector('#createTask');
const taskList = document.querySelector('#list');

const addToLocalStorage = (inputValue) => {
    let key = `todo${localStorage.length}`;
    localStorage.setItem(key, inputValue);
    return key;
};

const removeFromLocalStorage = (event) => {
    let taskID = event.target.getAttribute('data-taskid');
    localStorage.removeItem(taskID);
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!input.value.trim()) {
        alert('Please enter a valid task.');
        return;
    };
    const key = addToLocalStorage(input.value);
    newTask(key, input.value);
    input.value = '';
});

const newTask = (key, taskValue) => {
    const newTask = document.createElement('li');
    newTask.innerText = taskValue;
    taskList.appendChild(newTask);

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove Task';
    removeBtn.classList.add('removeTaskBtn');
    removeBtn.setAttribute('data-taskid', key);
    newTask.appendChild(removeBtn);
};

taskList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('li');
    };

    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        removeFromLocalStorage(event);
    };
});

const retrieveLocalStorage = () => {
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        newTask(key, localStorage[key]);
    });
};
retrieveLocalStorage();