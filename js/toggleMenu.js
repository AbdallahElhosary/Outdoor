let firstColorList = ["#74a84a",
    "#2c541d",
    "#000000",
    "#585858",
    "#f6f8f5"];
let secondColorList = ["#8e43f0", "#6300e2", "#150e1f", "#584d66", "#f3f1f6"];
let thirdColorList = ["#ef4d48", "#d90700", "#150e1f", "#584d66", "#f3f1f6"];
let fourthColorList = ["#ff42b3", "#ff0099", "#150e1f", "#584d66", "#f3f1f6"];
let fiveColorList = ["#ff6a97", "#fa036b", "#150e1f", "#584d66", "#f3f1f6"];

let firstList = document.querySelector(".toggle-menu .default-color")
let secondList = document.querySelector(".toggle-menu .second-list");
let thirdList = document.querySelector(".toggle-menu .third-list");
let fourthList = document.querySelector(".toggle-menu .fourth-list");
let fiveList = document.querySelector(".toggle-menu .five-list");

let defaultColorsElemnetsList = document.querySelectorAll(".toggle-menu  .default-color ul li ");
let secondColorsElemnetsList = document.querySelectorAll(".toggle-menu  .second-list ul li ");
let thirdColorsElemnetsList = document.querySelectorAll(".toggle-menu  .third-list ul li ");
let fourColorsElemnetsList = document.querySelectorAll(".toggle-menu  .fourth-list ul li ");
let fiveColorsElemnetsList = document.querySelectorAll(".toggle-menu  .five-list ul li ");
let defaultButton = document.querySelector(".toggle-menu .try .defaultButton");

let togglerText = document.querySelector(".toggle-menu .toggler-text");
let iconCloseToggle = document.querySelector(".toggle-menu .close-toggle");
let toggleMenu = document.querySelector(".toggle-menu")
let allLists = document.querySelectorAll(".toggle-menu .colors .list");
let togglerIcon = document.querySelector(".toggle-menu .toggler-icon");
// create Functions
function toggleColors(arr, colorlist) {
    arr[0].style.backgroundColor = `${colorlist[0]}`;
    arr[1].style.backgroundColor = colorlist[1];
    arr[2].style.backgroundColor = colorlist[2];
    arr[3].style.backgroundColor = colorlist[3];
    arr[4].style.backgroundColor = colorlist[4];
}


function addRootColors(arr) {
    document.documentElement.style.setProperty('--main-color', arr[0]);
    document.documentElement.style.setProperty('--second-color', arr[1]);
    document.documentElement.style.setProperty('--third-color', arr[2]);
    document.documentElement.style.setProperty('--fourth-color', arr[3]);
    document.documentElement.style.setProperty('--five-color', arr[4]);
}

function clickOnElement(ele, list) {
    ele.onclick = function () {
        addRootColors(list)
    }
}


function ChangeFont(ele) {
    let font = window.getComputedStyle(ele, null).getPropertyValue("font-family");
    console.log(font);
    document.body.style.fontFamily = font;
}

// Call Toggle Function
toggleColors(defaultColorsElemnetsList, firstColorList);
toggleColors(secondColorsElemnetsList, secondColorList);
toggleColors(thirdColorsElemnetsList, thirdColorList);
toggleColors(fourColorsElemnetsList, fourthColorList);
toggleColors(fiveColorsElemnetsList, fiveColorList);


allLists.forEach(e => {
    e.onclick = function () {
        allLists.forEach(el => {
            el.classList.remove("active");
        })
        e.classList.add("active");
    }
})

// Call Cilck On Element Function

clickOnElement(firstList, firstColorList);
clickOnElement(secondList, secondColorList);
clickOnElement(thirdList, thirdColorList);
clickOnElement(fourthList, fourthColorList);
clickOnElement(fiveList, fiveColorList);

iconCloseToggle.onclick = function () {
    
    toggleMenu.classList.add("hide-toggle");
    // togglerText.classList.add("hide");
}



defaultButton.onclick = function () {
    addRootColors(firstColorList);
}


togglerText.onclick = function () {
    toggleMenu.classList.toggle("hide-toggle");
}

setTimeout(() => {
    togglerText.classList.add("toggler-text-pos");
}, 1000)


