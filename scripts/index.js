const popupElement = document.querySelector('.popup');

const openButton = document.querySelector('.profile__change-name-button');

const closeButton = popupElement.querySelector('.popup__close-button');

const form = document.querySelector('.form');

const nameInput = form.querySelector('.form__name');

const employmentInput = form.querySelector('.form__employment');

const profileName = document.querySelector('.profile__name');

const profileEmployment = document.querySelector('.profile__employment');

function openPopup() {
  popupElement.classList.remove('hidden');
}

function closePopup() {
  popupElement.classList.add('hidden');
}



openButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);



function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileEmployment.textContent = employmentInput.value;
  closePopup();
}

form.addEventListener('submit', formSubmitHandler);


