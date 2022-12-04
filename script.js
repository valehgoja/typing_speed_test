let allText = document.querySelector("p");
let arr = allText.innerText.split("");
let timer = document.querySelector("#timer");
let mistakesCounter = document.querySelector("#mistakes");
let cpmCounter = document.querySelector("#cpm");
let wpmCounter = document.querySelector("#wpm");

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  location.reload();
});

let counter = 0;
let counter1 = 0;
let wordSpace = 1;
let starter = true;
document.addEventListener("keyup", function (e) {
  if (starter) {
    timerCounter();
    wpm();
    starter = false;
  }
  let range = new Range();
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);

  if (e.key != "Shift") {
    if (e.key == arr[counter1]) {
      range.setStart(allText.firstChild, counter);
      counter++;
      range.setEnd(allText.firstChild, counter);
      const addCSS = (css) =>
        (document.head.appendChild(document.createElement("style")).innerHTML =
          css);
      addCSS(" ::selection{ background-color : green;} ");
      counter1++;
      cpmCounter.innerText++;
      if (e.key == " ") {
        wordSpace++;
      }
    } else {
      range.setStart(allText.firstChild, counter);
      counter++;
      range.setEnd(allText.firstChild, counter);
      const addCSS = (css) =>
        (document.head.appendChild(document.createElement("style")).innerHTML =
          css);
      addCSS(" ::selection{ background-color : red;} ");
      counter1++;
      mistakesCounter.innerText++;
    }
  }
});

function timerCounter() {
  setInterval(function () {
    timer.innerText--;
    if (timer.innerText == 0) {
      alert("yeter aq oglu");
      location.reload();
    }
  }, 1000);
}

function wpm() {
  setInterval(function () {
    wpmCounter.innerText = Math.ceil((60 - timer.innerText) / wordSpace);
  }, 1000);
}

console.log(Math.ceil(2.3));