
// let word = window.prompt('Enter a word');

// function wordSplit (word) {
//     return word === word.split('');
//   }

// function checkPalindrom (word) {
//     return word === word.reverse();
//   }

// function checkPalindrom (word) {
//     return word === word.join('');
//   }

//     if (checkPalindrom (word)) {
//         console.log('The word IS palimdrome');
//     } else {
//         console.log('Word is NOT palimdrone')
//     }




let word = window.prompt('Enter a word');

function checkPalindrom(word) {
    return word === word.split('').reverse().join('');
}

if (checkPalindrom(word)) {
    console.log('The word IS palimdrome');
} else {
    console.log('Word is NOT palimdrone')
}