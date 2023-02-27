module.exports = function toReadable(number) {
    const oneDigit = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const twoDigitException = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const twoDigit = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    const numberToString = number.toString();

    if (numberToString.length === 3) {
        const firstPart = `${oneDigit[numberToString[0]]} hundred`;
        let emptyString = '';

        if (numberToString[1] === '0' && numberToString[2] !== '0' ) { // 101
            return `${firstPart} ${oneDigit[numberToString[2]]}`;
        } else if (numberToString[1] === '1') { // 111
            const key = `${numberToString[1]}${numberToString[2]}`;
            return `${firstPart} ${twoDigitException[key]}`;
        } else if (numberToString[1] === '0' && numberToString[2] === '0') { // 100
            return firstPart;
        } else if (numberToString[1] > '1' && numberToString[2] === '0') { // 120
            return `${firstPart} ${twoDigit[numberToString[1]]}`;
        }

        return `${firstPart} ${twoDigit[numberToString[1]]} ${oneDigit[numberToString[2]]}`; // 121
    }

    if (numberToString.length === 2) {

        if (twoDigitException[number]) { // 10
            return twoDigitException[numberToString];
        } else if (numberToString[1] === '0') { // 20
            return twoDigit[numberToString[0]];
        }

        return `${twoDigit[numberToString[0]]} ${oneDigit[numberToString[1]]}` // 21

    }

    return oneDigit[numberToString[0]];
}
