// kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return "Negative values are not allowed.";
    }
    return meter;
}



// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Negative numbers are not allowed";
    }
    return total;
}




// Hotel Cost
function hotelCost(days) {
    if (days < 0) {
        return "Negative values are not allowed.";
    }
    else if (days <= 10) {
        return days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        var total = firstPart + secondPart;
        return total;
    }
    else {
        firstPart = 10 * 100;
        secondPart = 10 * 80;
        remaining = days - 20;
        thirdPart = remaining * 50;
        total = firstPart + secondPart + thirdPart;
        return total;
    }
}



// megaFriend
function megaFriend(names) {
    var longestWord = "";
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord;
}


