//Found this code online to create a UUID. I figured I could use this id to pinpoint which divs to remove from local storage later, if needed. I do need help understanding this code. 
const createUUID = () => {
    let dateTime = new Date().getTime();

    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
    function(char) {
        let randomNum = (dateTime + Math.random() * 16)%16 | 0;
        dateTime = Math.floor(dateTime/16);
        return (char ==='x' ? randomNum : (randomNum &0x3 | 0x8)).toString(16);
    });
    return uuid;
};

const removeFromLocalStorage = (UUID) => {
    return localStorage.removeItem(UUID);
};