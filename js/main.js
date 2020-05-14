//====================================//
/*==>==>==>==> CONSTANTS ==>==>==>==>*/

const easyWords = ["apple", "baloon", "circle", "beard", "sweet"];
const medWords = ["garbage", "computer", "mattress"];
const hardWords = ["javascript", "photograph", "neighborhood", "dashboard", "pharmacist"];

//================================================//
/*==>==>==>==> APP STATE (VARIABLES) ==>==>==>==>*/
let secretWord;
let score; 
let timeLeft;  
let timerInterval;
let chancesLeft;
let letterClicked; 
let answerArr;
let isWinner;
let wrongGuesses;

//=====================================================//
/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
const titleEl = document.getElementById("title");
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
const scoreEl = document.getElementById("score");
// const wrapperEl = document.getElementById("chances-left-timer-wrapper");
// const imgWrapperEl = document.getElementById("img-wrapper");

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
    imgMsgEl.innerText = "🏄🏾‍♂️ Pick a Level of Gnarly 🏄🏾‍♂️";
    timerEl.style.display = "none";
    scoreEl.style.display = "none";
    letterBtnsElm.style.display = "none";
    rstBtnEl.style.display = "none";
    eachLetterEl.forEach(function(letter){
        letter.style.background = "salmon";
        letter.style.color = "black";
    })
    clearInterval(timerInterval);
    
};

function setWordUp(){
    answerArr = secretWord.split(""); 
    for (var i = 0; i < answerArr.length; i++) {
        answerArr[i] = "🤙🏾";
       }
    secretWordEl.innerText = answerArr.join(" ");
    difBtnsEl.style.display = "none";
    imageEl.style.display = "";
    imageEl.src = "images/surfer1.jpg";
    imgMsgEl.innerText = "Surf's Up Bro!";
    chancesLeftEl.innerText = "Chances Left: " + chancesLeft;
    scoreEl.style.display = "";
    // scoreEl.innerText = "Your Score Is: " + score;
    letterBtnsElm.style.display = "";
    timerEl.style.display = "";
    rstBtnEl.style.display = "";

    // wrapperEl.style.display = "";
    // imgWrapperEl.style.display = "";
    
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
    if (isWinner || chancesLeft === 0 || timeLeft < 1){
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
                //score = (parseInt(answerArr.length) * 100) + parseInt(timeLeft) * 100) + (parseInt(chancesLeft) * 1000);    
            //     // made score change here
             }

        }
        
    } else {
        chancesLeft -= 1;
        wrongGuesses.push(letter);
        chancesLeftEl.innerText = chancesLeft;
        wrongGuessesEl.innerText = "Wrong Guesses: " + wrongGuesses.join(" ").toUpperCase();
        imageEl.src = "images/surfer3.jpg";
        imgMsgEl.innerText = "Wipeout!!"
        chancesLeftEl.innerText = "Chances Left: " + chancesLeft;
        letterClicked.style.backgroundColor = "black";
        letterClicked.style.color = "salmon";
    }
        checkWinner();
        render();
};

function checkWinner(){
    if (chancesLeft === 0) {
        msgEl.innerText = "Bro, You lose! Try Again. The word was " + secretWord.toUpperCase();
        imageEl.src = "images/surfer4.jpg";
        clearInterval(timerInterval);
    }
    else if (answerArr.includes("🤙🏾")) {
        return;
    }
    else {
        isWinner = true;
        msgEl.innerText = "Congratulations!! Dude, you WIN!!";
        imgMsgEl.innerText = "";
        imageEl.src = "images/surfer5.jpg";
        clearInterval(timerInterval);
        //confetti.start(1500);
    }
};

function render(){
    secretWordEl.innerText = answerArr.join(" ").toUpperCase();
    //scoreEl.innerText = "Your Score Is: " + score;
    // made score change here


    //titleEl.classList.add("animate__animated animate__backInUp");

    //if (winner === true) 
    //display selecWord() choice to secret-word HTML elem
    //update the secret-word HTML elem
    //update wrong-guesses HTML elem
    //update chances-left HTML elem
    //update score
    //update time left
};


