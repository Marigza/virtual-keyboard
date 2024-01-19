{
  const body = document.querySelector('.body');
  const keysCode = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
  ];
  const keysEng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⇑', 'Shift',
    'Ctrl', 'Win', 'Alt', '_____', 'Alt', '⇐', '⇓', '⇒', 'Ctrl'
  ];
  const keysRus = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⇑', 'Shift',
    'Ctrl', 'Win', 'Alt', '_____', 'Alt', '⇐', '⇓', '⇒', 'Ctrl'
  ];
  
  let capsLock = localStorage.getItem('capsLock') || false;

  let keysArr;

  const languageTranslation = {
    'eng': 'eng',
    'rus': 'rus',
  }

  let lang = localStorage.getItem('lang') || languageTranslation.rus;
  let keys;

  document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey) {
      lang === languageTranslation.eng ? lang = languageTranslation.rus : lang = languageTranslation.eng;
      changeLang();
      setLocalStorage();
      createKeys();
      getLocalStorage();
      capsLock = localStorage.getItem('capsLock') || false;
    };
  });

  function changeLang() {
    if (lang === languageTranslation.eng) {
      keysArr = keysEng;
      return keysArr;
    } else if (lang === languageTranslation.rus) {
      keysArr = keysRus;
      return keysArr;
    }
  }
  changeLang();

  //local storage set/get
 
  function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('capsLock', capsLock);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
      return lang;
    }
    if (localStorage.getItem('capsLock')) {
      capsLock = localStorage.getItem('capsLock');
      return capsLock;
    }
  }

  window.addEventListener('load', getLocalStorage);

  //rendering page

  let titleBlock = document.createElement('h1');
  let keyBoard = document.createElement('div');
  let textArea = document.createElement('div');
  let description = document.createElement('div');

  titleBlock.classList.add('title-block');
  titleBlock.innerText = 'virtual keyboard';
  textArea.classList.add('textarea-block');
  keyBoard.classList.add('keyboard-block');
  description.classList.add('description-block');

  body.prepend(description);
  body.prepend(keyBoard);
  body.prepend(textArea);
  body.prepend(titleBlock);

  let inputTextarea = document.createElement('div');
  inputTextarea.classList.add('text-area');
  textArea.append(inputTextarea);

  let descrLang = document.createElement('div');
  let descrHowChangeLang = document.createElement('div');
  let descrOS = document.createElement('div');
  descrOS.innerText = 'Клавиатура создана в операционной системе Windows';
  descrHowChangeLang.innerText = 'Для переключения языка комбинация: левыe shift + alt';

  description.append(descrLang);
  description.append(descrHowChangeLang);
  description.append(descrOS);

  function createKeys() {
    keyBoard.innerHTML = '';
    for (let i = 0; i < keysArr.length; i++) {
      let key = `<div class="keyboard-key">${keysArr[i]}</div>`;
      keyBoard.insertAdjacentHTML('beforeend', key);
    }
    keys = Array.from(document.querySelectorAll('.keyboard-key'));
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].innerText === 'Backspace' || keys[i].innerText === 'CapsLock' || keys[i].innerText === 'Enter' || keys[i].innerText === 'Shift') {
        keys[i].classList.add('key_wide', 'key_darken');
      }
      if (keys[i].innerText === 'Del' || keys[i].innerText === 'Tab' || keys[i].innerText === 'Ctrl' || keys[i].innerText === 'Win' || keys[i].innerText === 'Alt' || keys[i].innerText === '⇑' || keys[i].innerText === '⇐' || keys[i].innerText === '⇒' || keys[i].innerText === '⇓') {
        keys[i].classList.add('key_darken');
      }
      if (keys[i].innerText === '_____') {
        keys[i].classList.add('key_extra-wide');
      }
    }
    keys.forEach(elem => elem.addEventListener('click', () => { lightingKeysByClick(elem) }));
    return keys;
  };
  createKeys();

  function lightingKeysByTap(event) {
    let e = event.code;
    let index = keysCode.indexOf(e);
    let activeKey = keys[index];
    event.preventDefault();
    switchingKeysBehavior(activeKey);
    activeKey.addEventListener('animationend', () => activeKey.classList.remove('transition-down-up'));
  };

  function lightingKeysByClick(elem) {
    switchingKeysBehavior(elem);
    elem.addEventListener('animationend', () => elem.classList.remove('transition-down-up'));
  };
    
  document.addEventListener('keydown', lightingKeysByTap);

  function switchingKeysBehavior(key) {
    if (key.innerText === 'CapsLock') {
      key.classList.toggle('key_active');
      key.classList.contains('key_active') ? capsLock = true : capsLock = false;
    } else if (key.innerText === 'Tab') {
      key.classList.add('transition-down-up');
      inputTextarea.innerText += '\u00A0' + '\u00A0' + '\u00A0' + '\u00A0';
    } else if (key.innerText === 'Enter') {
      key.classList.add('transition-down-up');
      inputTextarea.innerText += '\n';
    } else if (key.innerText === '_____') {
      key.classList.add('transition-down-up');
      inputTextarea.innerText += '\u00A0';
    } else if (key.innerText === 'Backspace') {
      key.classList.add('transition-down-up');
      inputTextarea.innerText = inputTextarea.innerText.slice(0, inputTextarea.innerText.length - 1);
    } else if (key.innerText === 'Del' || key.innerText === 'Ctrl' || key.innerText === 'Alt' || key.innerText === 'Win' || key.innerText === 'Shift') {
      key.classList.add('transition-down-up');
    } else {
      key.classList.add('transition-down-up');
      if (capsLock === true) {
        inputTextarea.innerText += key.innerText.toUpperCase();
      } else {
        inputTextarea.innerText += key.innerText;
      }
    }   
  }

  // TODO: SHIFT BEHAVIOR

  
}
