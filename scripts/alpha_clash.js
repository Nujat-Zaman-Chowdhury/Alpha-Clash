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
    getElementById('final-score');
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',5);

    showElementById('play-ground-screen');
    continueGame();
}

function gameOver(){
    getElementById('play-ground-screen');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score',lastScore);

    const currentAlphabet = setElementTextValueById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    
}

function handleKeyboardButtonPress(event){
    const pressedKey = event.key;

    if(pressedKey === 'Escape'){
        gameOver();
    }
    

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerHTML;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(pressedKey,expectedAlphabet);


    if(pressedKey === currentAlphabet){

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score',newScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();

        //----------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

       
        // currentScoreElement.innerText = newScore;

        
    }else{
        console.log('you lost a life');

        const currentLife  = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life',newLife);

        if(newLife === 0){
            console.log("game over");
            gameOver();
        }


        //--------------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife  = parseInt(currentLifeText);

        
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup',handleKeyboardButtonPress);
