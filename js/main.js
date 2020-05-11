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
let secretWord;
let score; 
let timeLeft;  
let chancesLeft;
let correctGuesses;
let answerArr;
let isWinner;
let wrongGuesses;

/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
const titleEL = document.getElementById("title");
const easybtnEl = document.getElementById("easybtn");
const medbtnEl = document.getElementById("mediumbtn");
const hardbtnEl = document.getElementById("hardbtn");
const rstBtnEl = document.getElementById("resetbtn");
const letterBtnsElm = document.getElementById("letters-div");
const secretWordEl = document.getElementById("secret-word");
const imageEl = document.getElementById("image");
const wrongGuessesEl = document.getElementById("wrong-guesses");
const chancesLeftEl = document.getElementById("chances-left");
//add const difBtnsEl = document.getElementById("difbuttons");

//Maybe something like:
//const difBtnEls = {
//     "easy" : easybtnEl,
//     "medium" : medbtnEl,
//     "hard" : hardbtnEl

// }



/*==>==>==>==> EVENT LISTENERS ==>==>==>==>*/

// Then here:

// difBtnsEl.addEventListener("click", (evt) => {
//     secretWord = difBtnsEl[evt.target.innerText.toLowerCase][Math.floor(Math.random() * difBtnsEl[evt.target.innerText.toLowerCase].length)];
//     setWordUp();
// });




easybtnEl.addEventListener("click", () => {
    secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
    setWordUp();

});

medbtnEl.addEventListener("click", () => {
    secretWord = medWords[Math.floor(Math.random() * medWords.length)];
    setWordUp();

});

hardbtnEl.addEventListener("click", () => {
    secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];
    setWordUp();


});

letterBtnsElm.addEventListener("click", function(evt) {
    checkLetter(evt.target.innerText.toLowerCase());

})

rstBtnEl.addEventListener ("click", () => {
    init();
});


/*==>==>==>==> FUNCTIONS ==>==>==>==>*/
init();
function init(){
    score = 0;
    chancesLeft = 3;
    wrongGuesses = [];
    wrongGuessesEl.innerText = "";
    chancesLeftEl.innerText = chancesLeft;
    secretWordEl.innerText = "";
    imageEl.innerText = imageLookup["default"];
    isWinner = false;
};

function setWordUp(){
    answerArr = secretWord.split(""); //fix spacing between elm in arrary
    for (var i = 0; i < answerArr.length; i++) {
        answerArr[i] = "_";
        //create a elem, give it a class and id
       }
    secretWordEl.innerText = answerArr;
};

function checkLetter(letter){
    if (isWinner || chancesLeft === 0){
        return;
    };
    if (secretWord.includes(letter)) {
        for (let j=0; j<secretWord.length; j++){
            if (secretWord[j] === letter) {
                answerArr[j] = letter;
            }
        }
    } else {
        chancesLeft -= 1;
        wrongGuesses.push(letter);
        chancesLeftEl.innerText = chancesLeft;
        wrongGuessesEl.innerText = wrongGuesses;
        // * Access and display correspondent img from imageLookup obj
    }
        checkWinner();
        render();
};

function checkWinner(){
    if (chancesLeft === 0) {
        titleEL.innerText = "Oh Dang it!! You lose!";
    }
    else if (answerArr.includes("_")) {
        return;
    }
    else {
        isWinner = true;
        titleEL.innerText = "Congratulations, you WIN!!";

        //play confetti();
        //disallow clicking on the letters or difBtn
    }
    

};

function render(){
    secretWordEl.innerText = answerArr;


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
