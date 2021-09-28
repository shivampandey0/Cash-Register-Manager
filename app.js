const billAmountInput = document.querySelector(".bill-amount")
const cashGivenInput = document.querySelector(".cash-given")
const checkButton = document.querySelector(".check-button")
const errorMessage = document.querySelector(".error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,200,100,50,20,10,5,2,1]

checkButton.addEventListener("click",checkReturns)

function checkReturns() {
    hideMessage();
    if (billAmountInput.value > 0) {
        if (cashGivenInput.value >= billAmountInput.value) {

         var amountToGive = cashGivenInput.value - billAmountInput.value;
         calculateNotes(amountToGive);
            
        } else {
            showMessage("Do you wanna clean the dishes?");
        }
        
    } else {
        showMessage("Invalid bill amount");
        
    }  
}

function calculateNotes(amountToGive) {

    for (const i in availableNotes) {

        var note = Math.trunc(amountToGive / availableNotes[i]);

        amountToGive -= note * availableNotes[i];

        noOfNotes[i].innerText = note;      

    }
    
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";

    errorMessage.innerText = message;
}

