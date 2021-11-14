const num_range = document.getElementById("js-range")
const num_guess = document.getElementById("js-guess")
const printForm = document.getElementById("guess")
const display = document.getElementById("js-result")
const handlePrint = (e) => {
    e.preventDefault();
    const nr = num_range.value
    const ng = num_guess.value
    const displaySpan = display.querySelector("span");
    
    if (ng == nr){
        displaySpan.innerHTML = `
        You choose: ${ng}, the machine choose: ${nr}<br>
        <b>You won!</b>`
    }
    else{
        displaySpan.innerHTML = `
        You choose: ${ng}, the machine choose: ${nr}<br>
        <b>You lost!</b>`
    }
};
printForm.addEventListener("submit", handlePrint);