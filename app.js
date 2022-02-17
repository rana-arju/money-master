
// function moneySaveCalculate() {


//     // uncommon functionality

    

// }
document.getElementById("total-expensive-btn").addEventListener("click", function(){
       // Coommon Functionality start
    const incomeInput = document.getElementById("income-input");
    const incomeInputValue = parseFloat(incomeInput.value);
    const foodInput = document.getElementById("food-input");
    const foodInputValue = parseFloat(foodInput.value);
    const rentInput = document.getElementById("rent-input");
    const rentInputValue = parseFloat(rentInput.value);
    const clothesInput = document.getElementById("clothes-input");
    const clothesInputValue = parseFloat(clothesInput.value);
     // Coommon Functionality end
     //Total Expensive

     if (!isNaN(foodInputValue) && !isNaN(rentInputValue) && !isNaN(clothesInputValue)) {
        const totalExpensive = foodInputValue + rentInputValue + clothesInputValue;
        document.getElementById("total-expensive").innerText = totalExpensive;
                // total balance (income - Total Expensive = balance)
        const totalBalance = document.getElementById("total-balance").innerText = incomeInputValue - totalExpensive;
     }
     else if (isNaN(foodInputValue) || isNaN(rentInputValue) || isNaN(clothesInputValue)) {
        document.getElementById("alert").style.display = "block";
     };
});
document.getElementById("save-btn").addEventListener("click", function(){
    const incomeInput = document.getElementById("income-input");
    const incomeInputValue = parseFloat(incomeInput.value);
    const foodInput = document.getElementById("food-input");
    const foodInputValue = parseFloat(foodInput.value);
    const rentInput = document.getElementById("rent-input");
    const rentInputValue = parseFloat(rentInput.value);
    const clothesInput = document.getElementById("clothes-input");
    const clothesInputValue = parseFloat(clothesInput.value);
     // Coommon Functionality end
     //Total Expensive
    const totalExpensive = foodInputValue + rentInputValue + clothesInputValue;
    // document.getElementById("total-expensive").innerText = totalExpensive;
    // total balance (income - Total Expensive = balance)
    const totalBalance = document.getElementById("total-balance");
    const balance = incomeInputValue - totalExpensive;
    // uncommon functionality
    const savingInput = document.getElementById("save-input");
    const saveInputvalue = parseFloat(savingInput.value);
    const savingAmount = document.getElementById("saving-amount");
    const saveAmount = savingAmount.innerText = incomeInputValue * (saveInputvalue / 100).toFixed(2);
    const remainingAmount = document.getElementById("remaining-amount");
    remainingAmount.innerText = balance - saveAmount;
});
