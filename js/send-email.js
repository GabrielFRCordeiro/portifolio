const button = document.querySelector('#button');
button.addEventListener('click', () => {
    let params = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    };

    const serviceID = "service_pxeg169";
    const templateID = "template_yomaqlf";
    const publicKey = "Qyxr91oFJmWWrzIsN";
    
    const validForm = (params.name && params.email && params.message);

    if (validForm) {
        emailjs.send(serviceID, templateID, params, publicKey)
        .then((res) => {
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
            console.log(res);
            let emailSent = `Your message sent successfully!`;
            notifyUser(emailSent);
        })
        .catch((err) => console.log(err));
    } else {
        let formIncomplete = `Please, fill in the form with all the data.`;
        notifyUser(formIncomplete);
    };
});

function notifyUser(situation) {
    let notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<p class='notification__message'>${situation}</p>
    <button class='notification__ok' onclick='removeNotification()'>OK</button>`;
    const form = document.querySelector('.contact-me');
    form.appendChild(notification);
}

function removeNotification() {
    let notification = document.querySelector('.notification');
    notification.remove();
};
