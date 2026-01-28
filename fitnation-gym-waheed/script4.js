/*contact*/
const formBtn = document.getElementById('formBtn');
const infoBtn = document.getElementById('infoBtn');
const formBox = document.getElementById('formBox');
const infoBox = document.getElementById('infoBox');

formBtn.addEventListener('click', () => {
  formBox.classList.add('active');
  infoBox.classList.remove('active');
});

infoBtn.addEventListener('click', () => {
  infoBox.classList.add('active');
  formBox.classList.remove('active');
});
