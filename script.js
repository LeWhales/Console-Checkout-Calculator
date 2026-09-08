const UnitPrice = "30";
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

let ValidCheck =
    Number.isInteger(UnitPrice) &&
    Number.isInteger(UnitPrice);


console.log("can buy?: " + Calculate);
console.log("is it valid? " + ValidCheck)