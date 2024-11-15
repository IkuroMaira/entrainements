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

function getLatinCharacterList([characters]) {
    // console.log('Dans la variable charactersList', characters);

    return characters.split('');
}

function translateLatinCharacter(returnedLetter) {

    // OLD VERSION
    // for (const [latinLetter, morse] of Object.entries(latinToMorse)) {
    //
    //     for (const letter of returnedLetter) {
    //         // console.log(letter);
    //
    //         if (latinLetter === letter) {
    //             console.log(`${latinLetter} = ${morse}`);
    //
    //             // return morse;
    //         } else {
    //             // console.log('C\'est peut-être un espace');
    //         }
    //     }
    // }

    for (const letter of returnedLetter) {

        for (const [latinLetter, morse] of Object.entries(latinToMorse)) {

            if (latinLetter === letter) {
                console.log(`${latinLetter} = ${morse}`);
                // continue;
            } else {
                // console.log('C\'est peut-être un espace');
            }
        }
    }
}

function encode(words) {
    // Mettre en majuscule
    let capitalLetter = [words.toUpperCase()];
    console.log(capitalLetter);

    // transformer en liste dans un tableau
    let charactersList = getLatinCharacterList(capitalLetter);
    console.log(charactersList);

    // On traduit en morse
    translateLatinCharacter(charactersList);
}

// STEP 4
function decode() {

}

let wordsWrite = 'Hello world';
encode(wordsWrite);