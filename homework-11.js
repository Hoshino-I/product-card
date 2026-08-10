const footerForm = document.querySelector('.footer__subscribe-form')
const emailInput = document.querySelector('.footer__form-input')
const openModalBtn = document.querySelector('.open__modal-btn')
const modalCloseBtn = document.querySelector('.modal__close-btn')
const divOverlay = document.querySelector('.overlay')
const modalForm = document.querySelector('.modal__form')
const modalPassword = document.querySelector('.modal__input_password')
const modalPasswordConfirm = document.querySelector('.modal__input_password-confirm')
const modalInputName = document.querySelector('.modal__input__name')
const modalInputLastName = document.querySelector('.modal__input__last-name')
const modalInputDateBirth = document.querySelector('.modal__input__date-birth')
const modalInputage = document.querySelector('.modal__input__age')
const modalInputemail = document.querySelector('.modal__input__email')
let user;

footerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {email: emailInput.value}
  console.log(formData);
});


openModalBtn.addEventListener('click', function() {
  divOverlay.classList.add('modal-showed')
});

modalCloseBtn.addEventListener('click', function() {
  divOverlay.classList.remove('modal-showed')
});

modalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!modalForm.checkValidity()) {
    alert("Регистрация отклонена: форма заполнена неверно!");
    return;
  }

  const inputPassword = modalPassword.value;
  const inputPasswordConfirm = modalPasswordConfirm.value;
  const inputName = modalInputName.value;
  const inputLatName = modalInputLastName.value;
  const inputAge = modalInputage.value;
  const inputDateBirth = modalInputDateBirth.value;
  const inputEmail = modalInputemail.value;

  if (inputPassword !== inputPasswordConfirm) {
    alert("Регистрация отклонена: пароли не совпадают!");
    return;
  }

  user = {
    firstName: modalInputName.value,
    lastName: modalInputLastName.value,
    age: modalInputage.value,
    dateBirth: modalInputDateBirth.value,
    email: modalInputemail.value,
    password: modalPassword.value,
    passwordConfirm: modalPasswordConfirm.value,

    createdOn: new Date()
  };
  console.log(user);
  divOverlay.classList.remove('modal-showed');
  modalForm.reset();

})