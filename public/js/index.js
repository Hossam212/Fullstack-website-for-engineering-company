import { joinTeam } from './joinus';
import { sendMessage } from './contactUs';
import { login } from './login';
import { signup } from './signup';
//DOM ELEMENTS
const appsform = document.querySelector('#apps_form');
const contactForm = document.querySelector('#contact_form');
const loginForm = document.querySelector('#login_form');
const signupForm = document.querySelector('#signup_form');
if (appsform) {
  console.log(appsform);
  appsform.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const firstName = document.querySelector('#name_input').value;
    const lastName = document.querySelector('#lastname_input').value;
    const email = document.querySelector('#email_input').value;
    const phone = document.querySelector('#telephone_input').value;
    const exp = document.querySelector('#subject_input').value;
    const diploma = document.querySelector('#diplomasubject_input').value;
    const message = document.querySelector('#message_input').value;
    const info = {
      firstName,
      lastName,
      email,
      phone,
      exp,
      diploma,
      message,
    };
    joinTeam(info);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('[name="firstname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const phone = document.querySelector('[name="phonenumber"]').value;
    const message = document.querySelector('[name="message"]').value;
    const info = {
      name,
      email,
      phone,
      message,
    };
    sendMessage(info);
  });
}
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const phone = document.querySelector('[name="phone"]').value;
    const password = document.querySelector('[name="password"]').value;
    const confirmPassword = document.querySelector(
      '[name="confirmPassword"]'
    ).value;
    signup(name, email, password, confirmPassword, phone);
  });
}
