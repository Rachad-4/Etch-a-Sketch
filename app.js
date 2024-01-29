const grid = document.querySelector(`.grid`);
const resizeBTN = document.querySelector(`#resize`);
const eraseBTN = document.querySelector(`#erase`);
const rainbowBTN = document.querySelector(`#rainbow`);
const resetBTN = document.querySelector(`#reset`);

let numOfBoxes = 75; 
let divs; //defines "divs" variable that will hold list of divs
let clear = false;

createGraph();
draw();

resetBTN.addEventListener(`click`, ()=>{
    resetBTN.classList.add("selected");
    reset();
    setTimeout(function(){resetBTN.classList.remove(`selected`)},120);
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
        }
    }
}

function reset(){
    divs = document.querySelectorAll("div");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("black");
    }
} 