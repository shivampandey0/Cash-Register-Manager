const billAmountInput = document.querySelector(".bill-amount")
const cashGivenInput = document.querySelector(".cash-given")
const notesTable = document.querySelector(".notes-table")
const checkButton = document.querySelector(".check-button")
const nextButton = document.querySelector(".next-button")
const errorMessage = document.querySelector(".message")
const cashBlock = document.querySelector("#cash-block")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

const showFields = () => {
    hideMessage();
    if (billAmountInput.value) {
        cashBlock.style.display = "block";
        checkButton.style.display = "block";
        nextButton.style.display = "none";
    } else {
        showMessage("Invalid bill amount entered.");
    }
}


const checkReturns = () => {

    const billAmount = Number(billAmountInput.value);
    const cashGiven = Number(cashGivenInput.value);

    hideMessage();
    if (billAmount > 0 && cashGiven > 0) {
        if (cashGiven >= billAmount) {
            const amountToGive = cashGiven - billAmount;
            calculateNotes(amountToGive);
        } else {
            showMessage("Do you wanna clean the dishes?");
        }
    } else {
        showMessage("Invalid cash amount");

    }
}


const calculateNotes = amountToGive => {
    showMessage(`You have to give the customer ${amountToGive} INR`)

    for (const i in availableNotes) {
        const note = Math.trunc(amountToGive / availableNotes[i]);
        amountToGive -= note * availableNotes[i];
        noOfNotes[i].innerText = note;
    }
    notesTable.style.display = "table";
}

const hideMessage = () => errorMessage.style.display = "none";

const showMessage = message => {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

nextButton.addEventListener("click", showFields);
checkButton.addEventListener("click", checkReturns)
