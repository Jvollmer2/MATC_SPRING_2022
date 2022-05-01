function sendForm() {
    let subjectValue = document.getElementById('subject').value;
    let emailValue = document.getElementById('email').value;
    let commentsValue = document.getElementById('comments').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "vollmej2@gmatc.matc.edu",
        Password: "Theskyisblue2",
        From: "vollmej2@gmatc.matc.edu",
        To: emailValue,
        Subject: subjectValue,
        Body: commentsValue
    }).then(function (message) {
        alert("Contact Form sent successfully.")  
    }
    );
}


