let mainScreen = window.document.querySelector('#main-screen');
let installIcon = window.document.querySelector('#install-icon');

////////////////////////////////////////// download  ////////////

// Обработчики событий
const backIconClick = () => {
    mainScreen.style.display = 'block';
   
  }

  const addNoteIconClick = () => {
    mainScreen.style.display = 'none';

  }

// Установка
let defaultInstallEvent = null;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  defaultInstallEvent = event;
})
installIcon.addEventListener('click', (event) => {
  defaultInstallEvent.prompt();
})