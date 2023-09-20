const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialChar = ["%", "*" , "/" , "-" , "+" , "="];

let output = "";

//Define function to calculate based on button clicked
const calculate =(btnValue)=>{
    if(btnValue === "=" && btnValue !== ""){
        //if output has % replace with "/100" before evaluating.
        output = eval(output.replace("%", "/100"))
    }
    else if (btnValue === "AC"){
        output = "";
    }
    else if (btnValue === "DC"){
        //if DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    }
    else{
        // if output is empty and button is specialChars then return
        if(output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output
}



//Add event linsners to buttons call calculate() and click.
buttons.forEach(button => {
    //button click listners call calculate() with dataset value as argument
    button.addEventListener("click", (e)=>{
        calculate(e.target.dataset.value);
    })
})
