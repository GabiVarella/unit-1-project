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
let isWinner;
let hiddenWord;
//maybe let remainingLetters;???


/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
const titleEL = document.getElementById("title");
const easybtnEl = document.getElementById("easybtn");
const medbtnEl = document.getElementById("mediumbtn");
const hardbtnEl = document.getElementById("hardbtn");
const rstBtnEl = document.getElementById("resetbtn");
const letterBtnsElm = document.getElementById("letters-div");
const secretWordEl = document.getElementById("secret-word");
const imageEl = document.getElementById("image");
const wrongGuessessEl = document.getElementById("wrong-guesses");
const chancesLeftEl = document.getElementById("chances-left");



/*==>==>==>==> EVENT LISTENERS ==>==>==>==>*/
easybtnEl.addEventListener("click", () => {
    secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
    setWordUp();
});

medbtnEl.addEventListener("click", () => {
    //Picks a word from mediumWords array
    secretWord = medWords[Math.floor(Math.random() * medWords.length)];
    setWordUp();
});

hardbtnEl.addEventListener("click", () => {
    //Picks a word from hardWords array
    secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];
    setWordUp();

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
    secretWordEl.innerText = "";
    score = 0;
    imageEl.innerText = imageLookup["default"];
    secretWord = "";
    isWinner = false;
};

function setWordUp(){
    answerArr = secretWord.split(""); //fix spacing between elm in arrary
    for (var i = 0; i < answerArr.length; i++) {
        answerArr[i] = "_";
       }
    secretWordEl.innerText = answerArr;
};

function checkLetter(){
    //1- get evt.target.innerText, uppercase it(also put it in a variable????)
    //2- CONDITIONAL -- check to see if evt.target.innerText is included in secret word
    //3- if true:
    // * substitute correct letter at correct index of answerArr
    // * display letter
    //4- If false:
    //(On chancesLeft:)
    // * subtract 1 from chancesLeft
    // * Display number of chances left on "chances-left" HTML div
    // * Dispay in HTML wrong-choice div the wrong letter chosen
    // * Access and display correspondent img from imageLookup obj
    //5- checkWinner();
    //6- render();
};

function checkWinner(){
    if (answerArr.includes("_")) {
        return;
    }
    else {
        winner = true;
        titleEL.innerText = "Congratulations, you WIN!!";
        //play confetti();
    }
    

};

function render(){
    //if (winner === true) 
    //display selecWord() choice to secret-word HTML elem
    //update the secret-word HTML elem
    //update wrong-guesses HTML elem
    //update chances-left HTML elem
    //update score
    //update time left

};

// function confetti(){

// };