import { LoadFromLS, saveToLS } from "./helpers";
import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 500;

const refs = {
    form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener("input", onFormInput)
refs.form.addEventListener("submit", onFormSubmit)

const onLoadThrottled = throttle(onLoad, THROTTLE_DELAY);

function onFormSubmit(event){
    event.preventDefault();

    const email = refs.form.elements.email.value;
    const message = refs.form.elements.message.value;

    const obj = {
        email,
        message,
    };

    event.target.reset();

    localStorage.removeItem("email");
    localStorage.removeItem("message")

    console.log(obj)
}

function onFormInput(event) {

const key = event.target.name;
const value = event.target.value;

localStorage.setItem(key, value);
const data = localStorage.getItem(key);

saveToLS(key, value)
};

function onLoad(){
    const email = LoadFromLS("email");
    const message = LoadFromLS("message");

    refs.form.elements.email.value = email;
    refs.form.elements.message.value = message;
}

onLoadThrottled();

