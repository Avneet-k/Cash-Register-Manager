const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const cashInputBlock = document.querySelector(".second");
const tableInputBlock = document.querySelector(".change-return");

const btnNext = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");

const errorMsg = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".noOfNotes");

const arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1];

btnNext.addEventListener("click", () => { //next button click event
    hideError();
    if(Number(billAmount.value) > 0){
        btnNext.style.display = "none";
        cashInputBlock.style.display = "block";
    }else{
       showError("Enter valid bill amount");
    }
})
btnCheck.addEventListener("click", () =>{
    hideError();
    let billValue = Number(billAmount.value);
    let cashValue = Number(cashGiven.value);

    if(billValue>0 && cashValue>0){

        if(!Number.isInteger(cashValue)){
            showError("Enter valid amount in cash given field");
            return;
        }

        if(billValue > cashValue){
            showError("Cash entered is less than bill, please enter right amount");
            return;
        }
        const returnMoney = cashValue - billValue; //if all the condition are checked then cashgiven - bill amount
        // console.log(returnMoney);
        tableInputBlock.style.display = "block"; 
        calculateNotes(returnMoney); //function which have arg. returnMoney

    }else{
        showError("Enter valid bill amount and cash given to continue");
    }
})

function calculateNotes(returnMoney){
    // let returnMoney = cash - bill;
    // tableInputBlock.style.display = "block";
    for( let i = 0 ; i < arrayOfNotes.length; i++){  // loop to go through one by one each note and divide and modulus them with return money
        if(returnMoney >= arrayOfNotes[i]){
            let notes = Math.floor(returnMoney / arrayOfNotes[i]);
            noOfNotes[i].innerText = notes;
            returnMoney = returnMoney % arrayOfNotes[i];
        }
            
    }
}

function showError(text){
    errorMsg.style.display = "block";
    errorMsg.innerText = text;
}

function hideError(){
    errorMsg.style.display = "none";
}
