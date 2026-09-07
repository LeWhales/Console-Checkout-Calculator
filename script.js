const UnitPrice = 50;
const PercentageDiscount = 10;
const Tax = 0.3;
const SubTotal = UnitPrice - PercentageDiscount
const FinalTotal = SubTotal / Tax

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
if (UnitPrice > 0) {
    console.log("valid numberical input ");
} else { console.log("invalid numberical input") }


console.log("====== ");
console.log("Recipt")
console.log("=======");
console.log("can buy?: " + Calculate);