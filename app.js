function moneySaveCalculate(saveId) {
    const incomeInput = document.getElementById("income-input");
    const incomeInputValue = parseFloat(incomeInput.value);
    const foodInput = document.getElementById("food-input");
    const foodInputValue = parseFloat(foodInput.value);
    const rentInput = document.getElementById("rent-input");
    const rentInputValue = parseFloat(rentInput.value);
    const clothesInput = document.getElementById("clothes-input");
    const clothesInputValue = parseFloat(clothesInput.value);
    const totalExpensive = foodInputValue + rentInputValue + clothesInputValue;
    if (incomeInputValue < 0 || isNaN(incomeInputValue)) {
        document.getElementById("income-alert").style.display ="block";
    }
    else{
        // error handeling
        document.getElementById("income-alert").style.display ="none";
        let balance = incomeInputValue - totalExpensive;
     // Coommon Functionality end
        if (!isNaN(foodInputValue) && !isNaN(rentInputValue) && !isNaN(clothesInputValue)) {
            if ((foodInputValue > 0) && (rentInputValue > 0) && (clothesInputValue > 0)) {
                if (totalExpensive > incomeInputValue) {
                    document.getElementById("expensive-alert").style.display = "block";
                }else{
                document.getElementById("total-expensive").innerText = totalExpensive;
                    // total balance (income - Total Expensive = balance)
                const totalBalance = document.getElementById("total-balance");
                totalBalance.innerText = balance;
                //  Error handeling
                document.getElementById("string-alert").style.display = "none";
                document.getElementById("number-alert").style.display = "none";
                document.getElementById("expensive-alert").style.display = "none";

            }}else{
                document.getElementById("number-alert").style.display = "block";
            }
        }
        else{
            document.getElementById("string-alert").style.display = "block";
        };
            const savingInput = document.getElementById(saveId).value;
            const savingAmount = document.getElementById("saving-amount");
            const saveAmount =  incomeInputValue * (parseFloat(savingInput) / 100).toFixed(2);
        if (!isNaN(saveAmount)) {
            if (savingInput > 0) {
                if (saveAmount > balance) {
                    document.getElementById("saving-alert").style.display = "block";
                }else{
                savingAmount.innerText = saveAmount.toFixed(2);
                const remainingAmount = document.getElementById("remaining-amount");
                remainingAmount.innerText = (balance - saveAmount).toFixed(2);
                        //  Error handeling
                document.getElementById("saving-error").style.display = "none";
                document.getElementById("saving-amount").style.display = "block";
                document.getElementById("number-alert-save").style.display = "none";
                document.getElementById("saving-alert").style.display = "none";
            }
            }else{
                document.getElementById("number-alert-save").style.display = "block"
            }
        }
        else{
            document.getElementById("saving-error").style.display = "block";
            document.getElementById("saving-amount").style.display = "none";
        }
    }
};
document.getElementById("total-expensive-btn").addEventListener("click", function(){
moneySaveCalculate();
});

document.getElementById("save-btn").addEventListener("click", function(){
moneySaveCalculate("save-input");
});