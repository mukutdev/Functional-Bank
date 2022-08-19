// get the input field value
function getInputFieldValue(inputField){

    const inputFieldValue = document.getElementById(inputField)
    const inputFieldNum = parseFloat(inputFieldValue.value)
    inputFieldValue.value = '';
    return inputFieldNum;
    
}

// get innerText from deposit - withdraw - balance 
function getInnerTextValue(innerId){
    const innerTextValue = document.getElementById(innerId)
    const innerTextNum = parseFloat(innerTextValue.innerText)
    return innerTextNum
}

// update deposit- withdraw - balance 
function updateBalance(id, value){
    const updateValue = document.getElementById(id)
    updateValue.innerText = value; 
}

// Deposit button handler
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositAmount = getInputFieldValue('deposit-field')
    const previousDepositAmount = getInnerTextValue('deposit-value')
    const previousTotalBalance = getInnerTextValue('total-field')
    if((depositAmount >= 1)){
        const newDepositTotal = previousDepositAmount + depositAmount
        const newTotalBalance = previousTotalBalance + depositAmount
        updateBalance('deposit-value', newDepositTotal)
        updateBalance('total-field', newTotalBalance)
    }else{
        alert('Please Enter a valid Number')
    }
    
})

// withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputFieldValue('withdraw-field')
    const previousWithdrawAmount = getInnerTextValue('withdraw-value')
    const previousTotalBalance = getInnerTextValue('total-field')
    if((withdrawAmount <= previousTotalBalance)){
        const newWithdrawTotal = previousWithdrawAmount + withdrawAmount;
        const afterWithdrawNewBalance = previousTotalBalance - withdrawAmount;
        updateBalance('withdraw-value', newWithdrawTotal)
        updateBalance('total-field', afterWithdrawNewBalance)
    }else{
        alert('You do not have enough funds to withdraw')
    }
})