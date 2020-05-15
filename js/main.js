//====================================//
/*==>==>==>==> CONSTANTS ==>==>==>==>*/

const easyWords = ["carp", "dirge", "dour", "extol", "inane", "inure", "knell", "maxim", "mores", "nadir", "pert", "pithy", "rife", "trite", "tread", "trash", "tased", "stead", "shear", "shard", "shade", "sherd", "sated", "rheas", "resat", "heart", "heard", "heaths", "hears", "hated", "hater", "haste", "haets", "earth", "derat", "drest", "drats", "darts", "tares", "ashed", "aster", "covet", "dear", "draw", "kind", "game", "grave", "hair", "half", "army", "agree", "angry", "away", "back", "block", "break", "cloudy", "county", "dance", "each", "enjoy", "false", "flour", "iron", "night", "obey", "prize", "quick", "radio", "sharp", "steam", "table", "teach", "trust", "think", "under", "voice", "week", "hurt", "beard", "sweet"];
const medWords = ["carouse", "caucus", "cavort", "clamor", "cogent", "connive", "consign", "dearth", "debacle", "debunk", "despot", "duress", "edict", "elegy", "elicit", "emend", "emulate", "evince", "exhort", "exigent", "expiate", "extant", "fatuous", "hapless", "impinge", "impute", "laconic", "maudlin", "mawkish", "morass", "noisome", "noxious", "onerous", "panacea", "pariah", "paucity", "plaudit", "presage", "probity", "protean", "puerile", "quaint", "rescind", "stolid", "swarthy", "vestige", "zephyr", "around", "bashful", "brother", "cogent", "dearth", "debauch", "cleave", "conduit", "cavort", "consign", "calumny", "caucus", "abscond", "compare", "decide", "enough", "except", "general", "heaven", "kitchen", "market", "mistake", "outside", "petrol", "receive", "shadow", "twice", "useful", "weight", "garbage", "computer", "villain", "docile", "picture", "example", "mattress"];
const hardWords = ["evanescent", "fortuitous", "phlegmatic", "predilection", "preponderance", "proclivity", "promulgate", "pugnacious", "recalcitrant", "requisition", "sanctimonious", "scurrilous", "serendipity", "solicitous", "trenchant", "truculent", "ubiquitous", "utilitarian", "vicissitude", "vituperate", "vociferous", "antithesis", "blandishment", "denigrate", "circumvent", "concomitant", "congruity", "corpulence", "contentious", "constituent", "conflagration", "commensurate", "cognizant", "circumscribe", "circumlocution", "capitulate", "camaraderie", "anathema", "anachronistic", "amorphous", "amenable", "ambivalent", "aggrandize", "adumbrate", "abstruse", "pronunciation", "handkerchief", "intelligence", "javascript", "magnanimous", "surveillance", "photograph", "successor", "reservoir", "miscellaneous", "neighborhood", "dashboard", "pharmacist"];

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

let music = new Audio("sounds/mainSong.mp3");
let rightSound = new Audio('sounds/rightGuess.wav');
let wrongSound = new Audio('sounds/crash.wav');
let loseSound = new Audio('sounds/loseSound2.wav');
let loseSound2 = new Audio('sounds/lose2.wav');
let winSound = new Audio("sounds/winSound.wav");
let winSound2 = new Audio("sounds/WinSound2.flac");
let readyGo = new Audio("sounds/readyGo.wav");



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
    answerArr = [];
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
    music.pause();
    music.currentTime = 0;
    winSound.pause();
    winSound.currentTime = 0;
    winSound2.pause();
    winSound2.currentTime = 0;
    render();
};

function setWordUp(){
    answerArr = secretWord.split(""); 
    for (var i = 0; i < answerArr.length; i++) {
        answerArr[i] = "🤙🏾";
       }
    music.volume = .1;
    music.play();
    readyGo.volume = .1;
    readyGo.play();
    timeLeft = 60;
    secretWordEl.innerText = answerArr.join(" ");
    difBtnsEl.style.display = "none";
    imageEl.style.display = "";
    imageEl.src = "images/surfer1.jpg";
    imgMsgEl.innerText = "Surf's Up Bro!";
    chancesLeftEl.innerText = "Chances Left: " + chancesLeft;
    scoreEl.style.display = "";
    letterBtnsElm.style.display = "";
    timerEl.style.display = "";
    rstBtnEl.style.display = "";
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
                score += 1175 + timeLeft * 100 + chancesLeft * 3379;
                rightSound.volume = .2;
                rightSound.play();
               render();
             }

        }
        
    } else {
        wrongSound.volume = .2;
        wrongSound.play();
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
    if (chancesLeft === 0 || timeLeft < 1) {
        music.pause();
        music.currentTime = 0;
        loseSound.volume = .1;
        loseSound.play();
        loseSound2.volume = .1;
        loseSound2.play();
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
        winSound2.volume = .1;
        winSound2.play();
        winSound.volume = .1;
        winSound.play();
        clearInterval(timerInterval);
        //confetti.start(1500);
    }
};

function render(){
    secretWordEl.innerText = answerArr.join(" ").toUpperCase();
    scoreEl.innerText = "Your Score Is: " + score;



    //if (winner === true) 
    //display selecWord() choice to secret-word HTML elem
    //update the secret-word HTML elem
    //update wrong-guesses HTML elem
    //update chances-left HTML elem
    //update score
    //update time left
};


