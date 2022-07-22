const inputEl = document.querySelector('#validation-input');
// console.log(inputEl.dataset.length);
// console.log(String(inputEl.value.length));
inputEl.addEventListener('blur', () => {

    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        console.log(inputEl.value);
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});