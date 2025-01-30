const themeButton = document.querySelector("#modeSwitch");

themeButton.addEventListener("click", clickHandler);

function clickHandler() {
    console.log('connected');
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";

};

let count = 0;

document.getElementById('counter-button').addEventListener('click', () => {
  count++;
  document.getElementById('counter-display').innerText = count;
});
