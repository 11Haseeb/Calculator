const input = document.querySelector("input");
const buttons = document.querySelectorAll(".buttons button");
const clearInput = document.querySelector(".clear");
const equalButton = document.querySelector(".equal-btn button");

for(let button of buttons){
    button.addEventListener("click", () => {
        input.value += button.value;
    });
}

clearInput.addEventListener("click", () => {
    input.value = "";
});


equalButton.addEventListener("click", () => {
    if(input.value == ""){
        alert("Please enter any number to evaluate!");
    }else{
        input.value = eval(input.value);
    }
});

const credits = document.querySelector(".credits");



window.addEventListener("load", () => {
    setTimeout(()=>{
        credits.style.opacity = "1";
    }, 3000);
});