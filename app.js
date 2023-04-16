const form = document.querySelector('#taskCreator');
const input = document.querySelector('input#createTask');
const ul = document.querySelector('#list');
const li = document.querySelectorAll('li');

//Found this code online to create a UUID. I figured I could use this id to pinpoint which divs to remove from local storage later, if needed. I do need help understanding this code. 
// const createUUID = () => {
//     let dateTime = new Date().getTime();

//     let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
//     function(char) {
//         let randomNum = (dateTime + Math.random() * 16)%16 | 0;
//         dateTime = Math.floor(dateTime/16);
//         return (char ==='x' ? randomNum : (randomNum &0x3 | 0x8)).toString(16);
//     });
//     return uuid;
// };

const addToLocalStorage = (inputValue) => {
    localStorage.setItem('todo', JSON.stringify(inputValue));
    let todos = [];
    const todosJSON = localStorage.getItem('todo');
    if(todosJSON){
        todos = JSON.parse(todosJSON);
    };


    // const listContents = JSON.parse(localStorage.getItem('todo')) || [];
    // listContents.push(inputValue);
    // localStorage.setItem('todo', JSON.stringify(listContents));
    // console.log(localStorage);
    // return JSON.parse();
};

// const loadLocalStorage = (listContents) => {
//     console.log(listContents);
// };
// loadLocalStorage();

// const removeFromLocalStorage = (UUID) => {
//     return localStorage.removeItem(UUID);
// };

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
    
    // newItem.setAttribute('data-UUID', createUUID());
    // const uuidStore = newItem.dataset.uuid;

    ul.appendChild(newItem);


    const removeItem = document.createElement('button');
    removeItem.innerText = 'Remove Task';
    removeItem.classList.add('removeTaskBtn');

    newItem.appendChild(removeItem);

    addToLocalStorage(input.value);
    // loadLocalStorage(addToLocalStorage);

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

