/*==>==>==>==> CONSTANTS ==>==>==>==>*/

const easyWords = ["apple", "baloon", "circle", "beard", "sweet"];
const medWords = ["garbage", "computer", "mattress"];
const hardWords = ["javascript", "photograph", "neighborhood", "dashboard", "pharmacist"];

const imageLookup = {
    "default" :
    "first" :
    "second" :
    "third" :
    "fourth" :
    "fifth" :
};


/*==>==>==>==> APP STATE (VARIABLES) ==>==>==>==>*/
let secretWord; 
let score; 
let timeLeft;  
let chancesLeft;
let correctGuesses;
//maybe let remainingLetters;


/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
const titleEL = document.getElementById("title");
const easybtnEl = document.getElementById("easybtn");
const medbtnEl = document.getElementById("mediumbtn");
const hardbtnEl = document.getElementById("hardbtn");
const rstBtnEl = document.getElementById("resetbtn");
const letterBtnsElm = document.getElementById("letters-div");
const secretWordEl = document.getElementById("secret-word");
const imageEl = document.getElementById("image");
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


rstBtnEl.addEventListener ("click", () => {
    init();
});


/*==>==>==>==> FUNCTIONS ==>==>==>==>*/
init();
function init(){
    //sets secret word display to none
    secretWordEl.innerText = "";
    //set score to 0
    score = 0;
    //diplay image to none
    imageEl.innerText = imageLookup[]
    //set secret word to ""
};
function selectWord(){
    //check which difficulty btn was clicked
    //select ranmdomly from respective array
    //displays on secret word html div
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