const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

function getLatinCharacterList([latinCharacters]) {

    console.log(latinCharacters);
    return latinCharacters.split('');
}

function translateLatinCharacter(returnedLetters) {
    console.log('returnedLetter', returnedLetters);

    // Créer un tableau pour stocker les caractères morse
    let morseResult = [];

    for (const letter of returnedLetters) {
        if (letter === ' ') {
            morseResult.push('/');  // Ajouter un slash pour les espaces
        } else if (latinToMorse[letter]) { // est vraie
            morseResult.push(latinToMorse[letter]);  // Ajouter le code morse
        }
    }

    return morseResult.join(' ');
}

function encode(latinWords) {
    console.log('latinWords :', latinWords);
    // Mettre en majuscule
    let capitalLetter = [latinWords.toUpperCase()];
    console.log('Mis en lettre capitale: ', capitalLetter);

    // transformer en liste dans un tableau
    let charactersList = getLatinCharacterList(capitalLetter);
    // console.log('Tableau avec les lettres capitales: ', charactersList);


    // On traduit en morse
    translateLatinCharacter(charactersList);
}

// STEP 4
// On sépare chaque caractère
function getMorseCharacterList(morseCharacters) {
    console.log('morseCharacters: ', morseCharacters);

}

function translateMorseCharacter(returnedMorse) {

}

function decode(morseWords) {
    let morseList = getMorseCharacterList(morseWords);
    console.log('Liste morse: ', morseList);

    // On traduit en caractère latin
    translateMorseCharacter(morseList);
}

let wordsWrite = 'Hello world !';
encode(wordsWrite);

let morseWrite = '.- -... / -... .-'; // AB BA
getMorseCharacterList(morseWrite);
// decode(morseWrite);
