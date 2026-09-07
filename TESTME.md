
//reducing number of const worked out
const UnitPrice = 50;
const PercentageDiscount = 10;
const Tax = 0.3;
const SubTotal = UnitPrice - PercentageDiscount
const FinalTotal = SubTotal / Tax
// some code reusing be saved some time
let Calculate =
    Number.isFinite(UnitPrice) &&
    Number.isFinite(Tax) &&
    Number.isFinite(SubTotal) &&
    Number.isFinite(FinalTotal) &&
    FinalTotal >= 0;
console.table({

    UnitPrice,
    Tax,
    SubTotal,
    FinalTotal,
})
// first tried a if Number.isNaN(UnitPrice), failed

if (Number.isNaN(UnitPrice)
console.log("thats not a number")

//used a let UnitPrice.isfinite is less than zero to try and detect invalid numbers, i thought it was going to cause more problems than it was worth
if (UnitPrice.isFinite > 0) {
    console.log("valid numberical input ");
} else { console.log("invalid numberical input") }



//removed the .isfinite and now it functions properly
if (UnitPrice > 0) {
    console.log("valid numberical input ");
} else { console.log("invalid numberical input") }


