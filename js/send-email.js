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
    
    const validateForm = (params.name && params.email && params.message);

    if (validateForm) {
        emailjs.send(serviceID, templateID, params, publicKey)
        .then((res) => {
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
            console.log(res);
            alert('Your message sent successfully!');
        })
        .catch((err) => console.log(err));
    } else {
        alert('Please, fill in the form with all the data');
    };
});
