{
  const body = document.querySelector('.body');
  let capsLock = false;
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
  ]
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
  


  // function createCodeInd() {
  //   let arr = [];
  //   document.onkeydown = function (event) {
  //     //console.log(event)
  //     arr.push(event.key)
  //     console.log(arr)
  //   }
  // } 
  //  createCodeInd()
  // let arr1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'];
  // let arr2 = ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];
  // let arr3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
  // let arr4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift'];
  // let arr5 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
}