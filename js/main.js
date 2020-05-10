/*==>==>==>==> CONSTANTS ==>==>==>==>*/

const easyWords = ["apple", "baloon", "circle", "beard", "sweet"];
const medWords = ["garbage", "computer", "mattress"];
const hardWords = ["javascript", "photograph", "neighborhood", "dashboard", "pharmacist"];


/*==>==>==>==> APP STATE (VARIABLES) ==>==>==>==>*/
let secretWord; 
let score; 
let timeLeft;  
let chancesLeft;
let correctGuesses
//maybe let remainingLetters;


/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
let titleEL = document.getElementById("title");
const easybtnEl = document.getElementById("easybtn");
const medbtnEl = document.getElementById("mediumbtn");
const hardbtnEl = document.getElementById("hardbtn");
const rstBtn = document.getElementById("resetbtn");
const letterBtnsElm = document.getElementById("letters-div");
//Maybe not byclassname but queryselector


/*==>==>==>==> EVENT LISTENERS ==>==>==>==>*/
easybtnEl.addEventListener("click", () => {
    //renders the game EASY mode
});
medbtnEl.addEventListener("click", () => {
    //renders the game MEDIUM mode
});
hardbtnEl.addEventListener("click", () => {
    //renders the game HARD mode
});


letterBtnsElm.addEventListener("click", function(evt) {
    checkLetter();
})


rstBtn.addEventListener ("click", () => {
    init();
});


/*==>==>==>==> FUNCTIONS ==>==>==>==>*/
init();
function init(){
    //resets the game
};
function selectWord(){
    //check which difficulty btn was clicked
    //select ranmdomly from respective array
    //
};

function checkLetter(){
    //1-check if evt.target.innerText is included in secret word
    //2- if true display letter
    //render();
};

function checkWinner(){
    //returns win/lose logic
};

function render(){
    //display selecWord() choice to secret-word HTML elem
    //update the secret-word HTML elem
    //update wrong-guesses HTML elem
    //update chances-left HTML elem
    //update score
    //update time left

};