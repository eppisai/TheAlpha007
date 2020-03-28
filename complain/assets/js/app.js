const complainModal = document.querySelector('.new-complain');
const complainForm = document.querySelector('.com');
var add;
var loc;
var l;

// add a new complain
complainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const addComplain = firebase.functions().httpsCallable('addComplain');
    alert(complainForm.name.value);
    addComplain({
        name: complainForm.name.value,
        subject: complainForm.subject.value,
        complain: complainForm.complain.value
    })
        .then(() => {
            complainForm.reset();
            complainForm.querySelector('.error').textContent = '';
            complainModal.classList.remove('open');
        })
        .catch(error => {
            complainForm.querySelector('.error').textContent = error.message;
        });
});


// notification
const notification = document.querySelector('.notification');

const showNotification = (message) => {
    notification.textContent = message;
    notification.classList.add('active');
    setTimeout(() => {
        notification.classList.remove('active');
        notification.textContent = '';
    }, 4000);
};







