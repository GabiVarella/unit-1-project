/*==>==>==>==> CONSTANTS ==>==>==>==>*/

const easyWords = ["apple", "baloon", "circle", "beard", "sweet"];
const medWords = ["garbage", "computer", "mattress"];
const hardWords = ["javascript", "photograph", "neighborhood", "dashboard", "pharmacist"];

//Fill in with image links later
const imageLookup = {
    "default" : "",
    "first" : "",
    "second" : "",
    "third" : "",
    "fourth" : "",
    "fifth" : "",
};


/*==>==>==>==> APP STATE (VARIABLES) ==>==>==>==>*/
let secretWord; //needs to be a string??
let score; 
let timeLeft;  
let chancesLeft;
let correctGuesses;
let answerArr;
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
const wrongChoicesEl = document.getElementById("wrong-choices");
const choicesLeftEl = document.getElementById("chances-left");
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
    imageEl.innerText = imageLookup["default"];
    //set secret word to ""
    secretWord = "";
};
function selectWord(){
    //check which difficulty btn was clicked
    //select randomly from chosen dificulty array
    //secretWord = difArrayclickeds[Math.floor(Math.random() * difArrayclickeds.length)];
    //let answerArr = secretWord.split(''); into an array of letters
    //turn answerArr into "_" by answer.forEach((element) => {answer.element = "_";
    //});
    
};

function checkLetter(){
    //1- get evt.target.innerText, uppercase it(also put it in a variable????)
    //2- CONDITIONAL -- check to see if evt.target.innerText is included in secret word
    //3- if true:
    // * display letter
    //4- If false:
    // * subtract 1 from chancesLeft
    // * Display chances left on chances-left HTML div
    // * Dispay in HTML wrong-choice div
    // * Access and display correspondent img from imageLookup obj
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

