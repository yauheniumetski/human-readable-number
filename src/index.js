module.exports = function toReadable(number) {
    const oneToNineNumbers = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    const tenToNineteenNumbers = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    };

    const twentyToNinetyNumbers = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    };

    function twoDigitToReadable(num) {
        if (num < 10) return oneToNineNumbers[num];
        if (num < 20) return tenToNineteenNumbers[num];
        const [tens, ones] = num.toString().split('');
        if (ones === '0') return twentyToNinetyNumbers[tens];
        return `${twentyToNinetyNumbers[tens]} ${oneToNineNumbers[ones]}`;
    }

    if (number === 0) return 'zero';
    if (number < 10) return oneToNineNumbers[number];
    if (number < 100) return twoDigitToReadable(number);

    const [hundreds, ...rest] = number.toString().split('');
    const tensAndOnes = parseInt(rest.join(''));

    let readableNumber = `${oneToNineNumbers[hundreds]} hundred`;
    if (tensAndOnes > 0) {
        readableNumber += ` ${twoDigitToReadable(tensAndOnes)}`;
    }

    return readableNumber.trim();
};
