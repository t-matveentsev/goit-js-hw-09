const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.form-input');
const textarea = form.querySelector('.form-area');

form.addEventListener('input', onInputChange);
form.addEventListener('submit', handleSubmit);

populateForm();

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = textarea.value.trim();

  if (email === '' || message === '') {
    alert('Please fill in all fields before submitting.');
    return;
  }

  const formData = {
    email: email,
    message: message,
  };

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function onInputChange() {
  const email = emailInput.value.trim();
  const message = textarea.value.trim();

  const savedForm = {
    email: email,
    message: message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
}

function populateForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    const { email, message } = JSON.parse(savedForm);
    emailInput.value = email || '';
    textarea.value = message || '';
  }
}
