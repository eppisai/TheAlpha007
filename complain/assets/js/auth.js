alert("conecting");
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');

//register form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        alert('registered', user);
        registerForm.reset();
    })
        .catch((error) => {
            registerForm.querySelector('.error').textContent = error.message;
        })
    console.log(email, password)
})
//login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        registerForm.reset();
    })
        .catch((error) => {
            loginForm.querySelector('.error').textContent = error.message;
        });
    window.location.href = "complain/index.html";


});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});