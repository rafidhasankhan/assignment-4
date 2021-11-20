/*--------------------First problem solving-------------------------- */
function seerToMon(seer) {

    if (seer < 0) {
        return "please give a positive number";
    } else if (typeof seer == "string") {
        return "please give a number as a input value";
    } else if (typeof seer == "boolean") {
        return "please give a number as a input value";
    }

    const mon = seer / 40;
    return "the result is " + mon;
}

const mySeers = -1;
const mon = seerToMon(mySeers);
console.log('mySeers in mon', mon);


/*--------------------------Second problem solving------------------------- */
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // calculate
    const countShirtQuantity = shirtQuantity * perShirtPrice;
    const countPantQuantity = pantQuantity * perPantPrice;
    const countShoeQuantity = shoeQuantity * perShoePrice;

    const totalSalesQuantity = countShirtQuantity + countPantQuantity + countShoeQuantity;
    return totalSalesQuantity;
}
const firstdeliveryQuantitySale = totalSales(2, 3, 1);
console.log(firstdeliveryQuantitySale);

/*-------------------------Third problem solving------------------------- */
function deliveryCost(deliveryQuantity) {

    var shirtDeliveryCost = 0;

    if (deliveryQuantity < 0) {
        return "please give a positive number";
    }

    else if (deliveryQuantity <= 100) {
        var shirtDeliveryCost = deliveryQuantity * 100;

    }

    else if (deliveryQuantity <= 200) {
        var firstDeliveryPart = 100 * 100;
        var remaining = deliveryQuantity - 100;
        var secondDeliveryPart = remaining * 80;
        shirtDeliveryCost = firstDeliveryPart + secondDeliveryPart;
    }


    else {
        var firstDeliveryPart = 100 * 100;
        var secondDeliveryPart = 100 * 80;
        var remaining = deliveryQuantity - 200;
        var thirdDeliveryPart = remaining * 50;
        shirtDeliveryCost = firstDeliveryPart + secondDeliveryPart + thirdDeliveryPart;
    }
    return shirtDeliveryCost;

}
var deliveryQuantityCount = deliveryCost(-1);
console.log(deliveryQuantityCount);

/*------------------------- Fourth problem solving ------------------------- */

function perfectFriend(names){
    for(let i= 0; i<names.length; i++)
    {
        if(names[i].length ==5){
            return names[i];
        }
    }
}
const FriendNames= ["Hasibul", "Nurislam", "Rafid", "Sohan"] ;
var FinalFriend= perfectFriend(FriendNames);

console.log(FinalFriend) ;