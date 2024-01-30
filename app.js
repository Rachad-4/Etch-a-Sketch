const grid = document.querySelector(`.grid`);
const resizeBTN = document.querySelector(`#resize`);
const eraseBTN = document.querySelector(`#erase`);
const randomBTN = document.querySelector(`#rainbow`);
const resetBTN = document.querySelector(`#reset`);

let numOfBoxes = 75; 
let divs; //defines "divs" variable that will hold list of divs
let clear = false;
let randomColor = false;

createGraph();
draw();

randomBTN.addEventListener(`click`, ()=>{
    randomColor = !randomColor;
    clear = false;

    eraseBTN.classList.remove(`selected`);
    randomBTN.classList.toggle('selected');

    if (randomColor == true && clear == false) {
        randomizeColor();
    } else if (clear == false && randomColor == false) {
        draw();
    }else if (clear == true && randomColor == false) {
        erase();
    }    
})

eraseBTN.addEventListener(`click`, ()=>{
    clear = !clear; 
    randomColor = false;

    randomBTN.classList.remove(`selected`);
    eraseBTN.classList.toggle("selected");

    if (clear == true && randomColor == false) {
        erase();
    } else if (clear == false && randomColor == false) {
        draw();
    } else if (randomColor == true && clear == false) {
        randomizeColor();
    }
})

resetBTN.addEventListener(`click`, (button)=>{
    animateButton(button);
    reset(); 
})

resizeBTN.addEventListener(`click`, (button)=> {
    for(let i = 0; i < numOfBoxes; i++){
        const row = document.querySelector(`.row`); 
        row.parentNode.removeChild(row);
    }

    numOfBoxes = parseInt(prompt("Enter new number of boxes (1 - 100). The default value is 75.")); 
    if (isNaN(numOfBoxes) || numOfBoxes < 1 || numOfBoxes > 100) {
        numOfBoxes = 75; 
        alert(`A valid value was not entered. The default value will be applied.`);
    }
    createGraph();
    draw();
    animateButton(button);
})


function createGraph(){
    for (let j= 1; j <= numOfBoxes; j++) {
        const row = document.createElement(`section`);
        row.classList.add("row"); 
        grid.appendChild(row);
        for (let i = 1; i <= numOfBoxes; i++){
            const div = document.createElement(`div`);
            row.appendChild(div);
            div.classList.toggle("column");
        }
    }
}

function draw(){
    divs = document.querySelectorAll("div");

    for (let i = 0; i < divs.length; i++) {
        divs[i].onmouseenter = () => {
            divs[i].classList.add("black");
        }
    }
}

function erase(){
    divs = document.querySelectorAll("div");

    for (let i = 0; i < divs.length; i++) {
        divs[i].onmouseenter = () => {
            divs[i].classList.remove("black");
            divs[i].style.backgroundColor = null;
        }
    }
}

function reset(){
    clear = false;
    randomColor = false;

    eraseBTN.classList.remove("selected");
    randomBTN.classList.remove("selected");

    divs = document.querySelectorAll("div");

    for(let i = 0; i < numOfBoxes; i++){
        const row = document.querySelector(`.row`); 
        row.parentNode.removeChild(row);
    }

    createGraph();
    draw();
} 

function animateButton(button){
    button.target.classList.add(`selected`);
    setTimeout(function(){button.target.classList.remove(`selected`)},120);
}

function randomizeColor(){
    
    for (let i = 0; i < divs.length; i++) {
        let randomColor1 = Math.ceil(Math.random()*255); 
        let randomColor2 = Math.ceil(Math.random()*255); 
        let randomColor3 = Math.ceil(Math.random()*255); 

        divs[i].onmouseenter = () => {
            divs[i].setAttribute(`style`, `background-color: rgb(${randomColor1},${randomColor2},${randomColor3});`);
        }
    }
}