module.exports = function toReadable(number) {

    let h;
    let units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let secondDozen = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let dozens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number === 0) {
        h = "zero";
    } else if (number < 20) {
        h = units[number - 1];
        console.log('[hrn]', h);
    } else if (number < 100) {
        let str = number.toString();
        if (str[1] === "0") {
            h = dozens[str[0] - 1];
        } else {
            h = dozens[str[0] - 1] + " " + units[str[1] - 1];
        }
    } else if (number < 1000) {
        let str = number.toString();
        if (str[1] === "0") {
            if (str[2] === "0") {
                h = units[str[0] - 1] + " hundred";
            } else {
                h = units[str[0] - 1] + " hundred " + units[str[2] - 1];
            }



        } else if (str[1] === "1") {
            if (str[2] === "0") {
                h = units[str[0] - 1] + " hundred " + dozens[str[1] - 1];
            } else {
                h = units[str[0] - 1] + " hundred " + secondDozen[str[2] - 1];
            }


        } else if (str[2] === "0") {
            h = units[str[0] - 1] + " hundred " + dozens[str[1] - 1];
        } else {
            h = units[str[0] - 1] + " hundred " + dozens[str[1] - 1] + " " + units[str[2] - 1];
        }
    }
    console.log('[hrn]', h);
    return h;
}
