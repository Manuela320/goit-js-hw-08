import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        form.email.value = savedData.email || '';
        form.message.value = savedData.message || '';
    }
});

const saveFormData = throttle(() => {
    const formData = {
        email: form.email.value,
        message: form.message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveFormData);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        email: form.email.value,
        message: form.message.value,
    };

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});