const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.form-input');
const textarea = form.querySelector('.form-area');

emailInput.addEventListener('input', onInputChange);
textarea.addEventListener('input', onInputChange);
form.addEventListener('submit', handleSubmit);

populateForm();

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function onInputChange() {
  const message = {
    email: emailInput.value,
    message: textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
}

function populateForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    const { email, message } = JSON.parse(savedForm);
    emailInput.value = email || '';
    textarea.value = message || '';
  }
}
