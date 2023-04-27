{
  const body = document.querySelector('.body');
  let capsLock = false;

  const keysCode = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
  ];
  const keysEng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8657;', 'Shift',
    'Ctrl', 'Win', 'Alt', '_____', 'Alt', '&#8656;', '&#8659;', '&#8658;', 'Ctrl'
  ];
  const keysRus = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8657;', 'Shift',
    'Ctrl', 'Win', 'Alt', '_____', 'Alt', '&#8656;', '&#8659;', '&#8658;', 'Ctrl'
  ];
    //TODO сделать выбор между языками в зависимости от языка, записанного в локал сторадж
  
  let titleBlock = document.createElement('h1');
  let keyBoard = document.createElement('div');
  let textArea = document.createElement('div');
  let description = document.createElement('div');

  titleBlock.classList.add('title-block');
  titleBlock.innerHTML = 'virtual keyboard';
  textArea.classList.add('textarea-block');
  keyBoard.classList.add('keyboard-block');
  description.classList.add('description-block');

  body.prepend(description);
  body.prepend(keyBoard);
  body.prepend(textArea);
  body.prepend(titleBlock);

  function createKeys() {
    for (let i = 0; i < keysEng.length; i++) {
      let key = `<div class="keyboard-key">${keysEng[i]}</div>`;
      keyBoard.insertAdjacentHTML('beforeend', key);
    }
    return keyBoard;
  }
  createKeys()

  let keys = Array.from(document.querySelectorAll('.keyboard-key'));
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
  // console.log(keys);
  function lightingKeysByTap(event) {
    let e = event.code;
    let index = keysCode.indexOf(e);
    let activeKey = keys.find(key => key.innerText === keysEng[index]);
    keys.forEach(key => key.classList.remove('transition-down'));
    activeKey.classList.add('transition-down');
    activeKey.addEventListener('animationend', () => activeKey.classList.remove('transition-down'));
    console.log(keysEng[index]);
  };

  function lightingKeysByClick(elem) {
    keys.forEach(elem => elem.classList.remove('transition-down'));
    if (elem.innerText === 'CapsLock') {
      elem.classList.toggle('key_active');
      elem.classList.contains('key_active') ? capsLock = true : capsLock = false;
      console.log(capsLock);
    } else {
      elem.classList.add('transition-down');
      console.log(elem.innerText);
      elem.addEventListener('animationend', () => elem.classList.remove('transition-down'));
    }
    
  }

  //TODO объединить индексы массивов ключей и букв и вывести букву на экран в поле инпут

  document.addEventListener('keydown', lightingKeysByTap);
  keys.forEach(elem => elem.addEventListener('click', () => { lightingKeysByClick(elem) }))

  // function createCodeInd() {
  //   let arr = [];
  //   document.onkeydown = function (event) {
  //     //console.log(event)
  //     arr.push(event.code)
  //     console.log(arr)
  //   }
  // } 
  //  createCodeInd()
  // let arr1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  // let arr2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
  // let arr3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
  // let arr4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
  // let arr5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
}