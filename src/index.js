module.exports = function toReadable (number) {

const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const third = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (number<10){
    return first[number];
}
if (number>=10 && number<20){
    return second[number - 10];
}
if (number>=20 && number<100){
    if (number%10===0){
        return third[number/10];
    }
    else {
    return third[Math.trunc(number/10)] + ' ' + first[Math.trunc(number%10)];
    }
}
if (number>=100 && number<1000){
    if (number%100===0){
        return first[number/100] + ' hundred'; 
    }
    else if (Math.trunc(number%100/10)===1){
        return first[Math.trunc(number/100)] + ' hundred ' + second[number%100 - 10];
    }
    else if (Math.trunc(number%100/10)===0){
        return first[Math.trunc(number/100)] + ' hundred ' + first[Math.trunc(number%10)];
    }
    else if (number%10===0){
        return first[Math.trunc(number/100)] + ' hundred ' + third[Math.trunc(number%100/10)];
    }
    return first[Math.trunc(number/100)] + ' hundred ' + third[Math.trunc(number%100/10)] + ' ' + first[Math.trunc(number%10)];
}
}