//get number of racers
function racers() {
    let racers = [];
    let numberOfRacers;
    do {
        numberOfRacers = prompt("How many doxies are racing? :");
    }
    while ((isInteger(numberOfRacers) != true) || (numberOfRacers < 0));//fix this?
    for (let i = 0; i < numberOfRacers; i++){
        let temp = "Doxie #" + (i+1);
        racers.push(temp);
    }

    alert(numberOfRacers);
    race(racers);
}

//alert
function alert(count) {
    prompt("There are " + (count + " contestants");
    prompt("Race commencing, good luck!");
}

//race
function race(racers) {
    let results = [];
    let numbersUsed = [];
    for (let i = 0; i<racers.length; i++) {
        let temp = getRandomInt(racers.length);
        if (numbersUsed.includes(temp)) { continue; }
        numbersUsed.push(temp);
        for (let i = 0; i<racers.length; i++) {
            if (i == temp) {
                results.push(racers[i]);
            }
        }
    }
    results(results);
}

//results
function results(racers) {
    let stringTemp;
    for (let i = 0; i < racers.length; i++){
        stringTemp = (i+1) + " : " + results[i] + ", ";
    }
    prompt("Results : " + stringTemp + ".");
}

function get(element) {
    return document.getElementById(element);
}

//forums
function openModal() {
    var modal =get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visable');
    backdrop.classList.add('visable');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    title.value = '';
    text.value = '';

    modal.classList.remove('visable');
    backdrop.classList.remove('visable');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});
