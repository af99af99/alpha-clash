// function play(){
//     //console.log('play now');
//     //hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     //console.log(homeScreen) gota hom screen er full section niye felsi
//     homeSection.classList.add('hidden');

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }

function handleKeyboardButtonPress(event){
   // console.log('button pressed');
   const playerPressed = event.key;
   console.log('player pressed',playerPressed)

   //stop yhe game if pressed 'esc'
   if(playerPressed === 'Escape'){
    gameOver();
   }
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check matched or not 
    if (playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        //update score:
        //1. get the current score

  //first way      // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // //2. increase the score by 1

        // const newScore = currentScore + 1;
        // //3. show the updated score
        // currentScoreElement.innerText = newScore; //////////first way sesh

        // start a new round
        removeBackgroundColorById (expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed.lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
           // console.log('game over');
            gameOver();
       
        }
   
   
   
        // s-1 get the current lige num
//    ////// /////// //// first wayr part
//    const currentLifeElement = document.getElementById('current-life');
//    const currentLifeText = currentLifeElement.innerText;
//    const currentLife = parseInt(currentLifeText);
//    //s-2 reduce the life count

//    const newLife = currentLife -1;
//    //s-3 display the update life count
//    currentLifeElement.innerText = newLife;
////////// //////////// first wayr part eituk
   
    }

}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)




function continueGame(){
    //generate a rendom alphabet
    const alphabet = getRandomAlphabet();
    //console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to the screen (show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color to alpha key
setBackgroundColorById(alphabet);

}
function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);
    continueGame()
}


function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score');
    //updat final score
    //1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore)

//clear the last selected alphabet highlight
const currentAlphabet = getElementTextById('current-alphabet');
//console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);



}

