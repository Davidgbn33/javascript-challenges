let word = 'java';
let wordSize = word.length;
let tiret = document.getElementById('tiret');
let error = document.getElementById('error');
let form = document.getElementById('form');

let valLetter = '';

let ModifTiret = '-'.repeat(wordSize);
tiret.textContent = ModifTiret;

error.textContent = '0';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let inputValue = document.getElementById('letter').value.toLowerCase(); // Convertir en minuscules pour la correspondance
  document.getElementById('letter').value = ''; // Effacer la zone de texte

  if (inputValue.length !== 1 || !/[a-z]/.test(inputValue)) {
    alert('Veuillez entrer une seule lettre valide.');
    return;
  }

  if (word.includes(inputValue)) {
    let indices = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === inputValue) {
        indices.push(i);
      }
    }

    indices.forEach((position) => {
      ModifTiret =
        ModifTiret.substring(0, position) +
        inputValue +
        ModifTiret.substring(position + 1);
    });

    tiret.textContent = ModifTiret;
    let textId = document.getElementById('text');
    let bravo = document.getElementById('bravo');

    if (word === ModifTiret) {
      tiret.textContent = ModifTiret;

      bravo.textContent = 'youpi tu as bien trouvé le mot';
      textId.classList.add('text');
      textId.textContent = `${ModifTiret}`;
    }
  } else {
    let valueError = (error.textContent = parseInt(error.textContent) + 1);

    if (valueError === 10) {
      bravo.classList.add('loose');
      bravo.textContent = 'Perdu dommage';
    }
  }
}

function resetGame() {
  ModifTiret = '-'.repeat(wordSize);
  tiret.textContent = ModifTiret;
  error.textContent = '0';
  bravo.textContent = '';
  text.textContent = '';
  bravo.classList.remove('loose');
}
