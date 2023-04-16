const removeFromLocalStorage = (keyName) => {
    // console.log(`text: `, text);
    // let listContents = JSON.parse(localStorage.getItem("todo")) || [];
    // console.log(listContents);
    // // listContents.includes(text);
    // for (let i = 0; i < listContents.length; i++) {
    //     console.log(`i: `, i);
    //     if (listContents[i] === text) {
    //         console.log('listOfContents', listContents);
    //         listContents = listContents.splice[i];
    //     };
    // };
    // console.log(`ListofContents: `, listContents);
    // localStorage.setItem('todo', JSON.stringify(listContents));

    //This code is to retrieve and remove the key from the data attribute that we passed in.
    return localStorage.removeItem(keyName);
};



const newTask = () => {
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    ul.appendChild(newItem);


    const removeItem = document.createElement('button');
    removeItem.innerText = 'Remove Task';
    removeItem.classList.add('removeTaskBtn');


    // @TODO: Create data-ket value here that is in the format: "tile0"
    //This code basically keeps track of how many there are...use this in a way to assign a unique value to the li.
    localStorage.setItem(`todo${localStorage.length}`, JSON.stringify(listContents));
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
        //Work on finding a cleaner solution
        let removeText = event.target.parentElement.innerText.replace('Remove Task', '');
        // console.log(removeButtontext);

        // @TODO: Pass data-key value through here. 
        //Pass in the data key we assigned to the new li.
        removeFromLocalStorage("todo1");
    };
});