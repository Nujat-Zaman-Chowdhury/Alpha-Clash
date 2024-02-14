// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playgroundScreen = document.getElementById('play-ground-screen');
//     playgroundScreen.classList.remove('hidden');
// }


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log("Your random alphabet: ", alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);

}

function play(){
    getElementById('home-screen');
    showElementById('play-ground-screen');
    continueGame();
}

