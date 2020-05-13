//====================================//
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
//================================================//
/*==>==>==>==> APP STATE (VARIABLES) ==>==>==>==>*/
let secretWord;
let score; 
let timeLeft;  
let timerInterval;
let chancesLeft;
let letterClicked;  //Added this for making wrong guess btn a different color
let answerArr;
let isWinner;
let wrongGuesses;

//=====================================================//
/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
const titleEL = document.getElementById("title");
const easybtnEl = document.getElementById("easybtn");
const medbtnEl = document.getElementById("mediumbtn");
const hardbtnEl = document.getElementById("hardbtn");
const rstBtnEl = document.getElementById("resetbtn");
const letterBtnsElm = document.getElementById("letters-div");

const eachLetterEl = document.querySelectorAll(".letters");
const secretWordEl = document.getElementById("secret-word");
const imageEl = document.getElementById("image");
const wrongGuessesEl = document.getElementById("wrong-guesses");
const chancesLeftEl = document.getElementById("chances-left");
const msgEl = document.getElementById("msg");
const timerEl = document.getElementById("timer");
const difBtnsEl = document.getElementById("difbuttons");
const imgMsgEl = document.getElementById("img-message");

//Maybe something like:
// const difBtnEls = {
//     "easy" : easybtnEl,
//     "medium" : medbtnEl,
//     "hard" : hardbtnEl

// }

//=========================================//
/*==>==>==>==> EVENT LISTENERS ==>==>==>==>*/

// Then here:
// difBtnsEl.addEventListener("click", (evt) => {
//     secretWord = difBtnsEl[evt.target.innerText.toLowerCase][Math.floor(Math.random() * difBtnsEl[evt.target.innerText.toLowerCase].length)];
//     setWordUp();
// });

easybtnEl.addEventListener("click", () => {
    if (isWinner === false) {
        secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
    setWordUp();
    }
   

});

medbtnEl.addEventListener("click", () => {
    if (isWinner === false) {
        secretWord = medWords[Math.floor(Math.random() * medWords.length)];
    setWordUp();

    }
});

hardbtnEl.addEventListener("click", () => {
    if (isWinner === false) {
        secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];
    setWordUp();
    }


});

letterBtnsElm.addEventListener("click", function(evt) {
    if (evt.target.className !== "letters" || wrongGuesses.includes(evt.target.innerText.toLowerCase())){
        return;
    }
    letterClicked = evt.target; //Added this for making wrong guess btn a different color
    checkLetter(evt.target.innerText.toLowerCase());

})

rstBtnEl.addEventListener ("click", init);
//====================================//    
/*==>==>==>==> FUNCTIONS ==>==>==>==>*/
init();
function init(){
    score = 0;
    chancesLeft = 3;
    wrongGuesses = [];
    isWinner = false;
    wrongGuessesEl.innerText = "";
    chancesLeftEl.innerText = "";
    secretWordEl.innerText = "";
    msgEl.innerText = "";
    difBtnsEl.style.display = "";
    imageEl.style.display = "none";
    imgMsgEl.innerText = "";
    timerEl.innerText = "";
    eachLetterEl.forEach(function(letter){
        letter.style.background = "salmon";
        letter.style.color = "black";

    })
    clearInterval(timerInterval);
    
};

//var timer = 

function setWordUp(){
    answerArr = secretWord.split(""); 
    for (var i = 0; i < answerArr.length; i++) {
        answerArr[i] = "?";
       }
    secretWordEl.innerText = answerArr.join(" ");
    difBtnsEl.style.display = "none";
    imageEl.style.display = "";
    imageEl.src = "images/surfer1.jpg";
    imgMsgEl.innerText = "Surf's Up Bro!";
    chancesLeftEl.innerText = "Chances Left: " + chancesLeft;

    timeLeft = 60;
    startTimer();
    function startTimer (){
    if (timerInterval){
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(function() {
        timerEl.textContent = timeLeft + ' seconds remaining.';
        timeLeft -= 1;
        if (timeLeft < 0) {
            timerEl.textContent = "Time's Up Dudes!"
        }
    
    }, 1000)
    }
};

function checkLetter(letter){
    if (isWinner || chancesLeft === 0){
        return;
    };
    if (secretWord.includes(letter)) {
        for (let j=0; j<secretWord.length; j++){
            if (secretWord[j] === letter) {
                answerArr[j] = letter;
                imageEl.src = "images/surfer2.jpg";
                imgMsgEl.innerText = "Dude, Rad Barrel!!"
                letterClicked.style.backgroundColor = "green"
                letterClicked.style.color = "white";


            }
        }
    } else {
        chancesLeft -= 1;
        wrongGuesses.push(letter);
        chancesLeftEl.innerText = chancesLeft;
        wrongGuessesEl.innerText = wrongGuesses.join(" ").toUpperCase();
        imageEl.src = "images/surfer3.jpg";
        imgMsgEl.innerText = "Wipeout!!"
        chancesLeftEl.innerText = "Chances Left: " + chancesLeft;
        letterClicked.style.backgroundColor = "black";
        letterClicked.style.color = "salmon";

        // * Access and display correspondent img from imageLookup obj
    }
        checkWinner();
        render();
};

function checkWinner(){
    if (chancesLeft === 0) {
        msgEl.innerText = "Bro, You lose! Try Again. The word was " + secretWord.toUpperCase();
        imageEl.src = "images/surfer4.jpg";

    }
    else if (answerArr.includes("?")) {
        return;
    }
    else {
        isWinner = true;
        msgEl.innerText = "Congratulations!! Dude, you WIN!!";
        imgMsgEl.innerText = "";
        imageEl.src = "images/surfer5.jpg";
        //confetti.start(1500);
    }
};

function render(){
    secretWordEl.innerText = answerArr.join(" ").toUpperCase();
    //if (winner === true) 
    //display selecWord() choice to secret-word HTML elem
    //update the secret-word HTML elem
    //update wrong-guesses HTML elem
    //update chances-left HTML elem
    //update score
    //update time left
};


