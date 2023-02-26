const formInputEl = document.querySelector('#validation-input');
const inputLength = parseInt(formInputEl.dataset.length);

formInputEl.addEventListener('blur', onFormInputElBlur);
formInputEl.addEventListener('focus', onFormInputElFocus);

function onFormInputElBlur(event) {
  if (event.currentTarget.value.length !== inputLength) {
    formInputEl.classList.add('invalid');
  } else {
    formInputEl.classList.add('valid');
  }
};

function onFormInputElFocus() {
  formInputEl.classList.remove('invalid');
  formInputEl.classList.remove('valid');
};