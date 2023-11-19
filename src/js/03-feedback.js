import { LoadFromLS, saveToLS } from "./helpers";
import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 500;

const refs = {
    form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener("input", onFormInput)
refs.form.addEventListener("submit", onFormSubmit)

const onLoadThrottled = throttle(onLoad, THROTTLE_DELAY);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value,
    };

    if (!formData.email || !formData.message) {
        alert("Заповніть усі поля!");
        return;
    }

    saveToLS('formData', formData);

    event.target.reset();

    localStorage.removeItem("formData");

    console.log(formData);
}

function onFormInput(event) {
    const formData = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value,
    };

    saveToLS('formData', formData);
}

function onLoad() {
    const savedData = LoadFromLS('formData');

    if (savedData) {
        refs.form.elements.email.value = savedData.email;
        refs.form.elements.message.value = savedData.message;
    }
}

onLoadThrottled();