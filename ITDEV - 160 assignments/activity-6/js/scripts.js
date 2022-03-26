var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'John',
        message: 'Hey bro! Long time, how have you been?'
    },
    {
        type: messageType.in,
        user: 'Austin',
        message: 'Living the dream, how are you?'
    },
    {
        type: messageType.out,
        user: 'John',
        message: 'Good.'
    }
];

//message constructor
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

//function to create and return message
function createMessageElement(message) { 

    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;
    return messageEl;
}

//button click event handler to add new message
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //determine type of message with switch statement
    switch (event.target.id) {
        case 'send-button':
            user = 'John';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Austin';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

//create new message
    if (messageInput.value != '') {

        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

//load seed data from data array 
function loadSeedData() {
    for (var i = 0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

//load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function() { 
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();

