const qs = (e) => document.querySelector(e);

const price = qs("#price");
const people = qs("#people");
const tip = qs("#tip");
const errorInfo = qs(".error");
const costInfo = qs(".cost-info");
const countButton = qs(".count");
const cost = qs(".cost");

//function
const showBill = () => {
    if (price.value == "" && people.value == "") {
        errorInfo.textContent = "Uzupełnij ilość osób oraz kwotę do zapłaty";
        costInfo.style.display = "none";
    } else if (price.value == "") {
        errorInfo.textContent = "Uzupełnij kwotę do zapłaty";
        costInfo.style.display = "none";
    } else if (people.value == "") {
        errorInfo.textContent = "Uzupełnij ilość osób";
        costInfo.style.display = "none";
    } else {
        errorInfo.textContent = "";
        countBill();
    }
};

const countBill = (e) => {
    costInfo.style.display = "block";
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + newPrice * newTip) / newPeople;
    cost.textContent = sum.toFixed(2);
};

//eventListener
countButton.addEventListener("click", showBill);
