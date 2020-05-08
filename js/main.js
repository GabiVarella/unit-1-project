/*----- constants -----*/



/*----- app's state (variables) -----*/

let names = [];

/*----- cached element references -----*/
let input = document.getElementById("inputbox");
let message = document.getElementById("message");
let enterbtn  = document.getElementById("enterbtn");
let resertbtn = document.getElementById("resetbtn");
let listEl = document.getElementById("list");

/*----- event listeners -----*/
enterbtn.addEventListener("click", function(){
    message.innerText = `Hello, My name is ${input.value}!!`
    
    // names.push(input.value);
    // listEl.innerText = names;

    let div = document.createElement("listofnames");
    listEl.appendChild(div);


})

resertbtn.addEventListener("click", init);


/*----- functions -----*/
init();
function init(){
    input.value = "";
    message.innerText = "";
    listEl.innerText = "";

};



