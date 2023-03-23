const form = document.querySelector('form');
const input = document.querySelector('.input1');
const buttonAdd = document.querySelector('.button-add');
const mainList = document.querySelector('#main-list');
let inputText;

function createNewItem() {
  const newElement = document.createElement('li');
  const newDeleteBtn = document.createElement('button');
  const newCompleteBtn = document.createElement('button');

  newDeleteBtn.className = 'delete-btn';
  newCompleteBtn.className = 'complete-btn';

  newElement.appendChild(newDeleteBtn);
  newElement.appendChild(newCompleteBtn);
  newElement.appendChild(document.createTextNode(inputText));

  mainList.appendChild(newElement);
  input.value = '';
  inputText = '';

  newDeleteBtn.addEventListener('click', function () {
    newElement.remove();
  });

  newCompleteBtn.addEventListener('click', function () {
    newCompleteBtn.classList.toggle('complete-btn');
    newCompleteBtn.classList.toggle('complete-btn-click');
    newElement.classList.toggle('list-after-click');
  });
}

input.addEventListener('input', function (event) {
  inputText = input.value;
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (inputText.trim() !== '') {
    createNewItem();
  }
});

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    form.dispatchEvent(new Event('submit'));
  }
});

buttonAdd.addEventListener('click', function (event) {
  event.preventDefault();
  input.focus();
  if (inputText.trim() !== '') {
    createNewItem();
  }
});
