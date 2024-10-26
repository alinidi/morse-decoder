const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function sliceTheExpr(expr){
        const result = [];
        for (let i = 0; i < expr.length; i+=10){
            let block = expr.slice(i, i+10);
            result.push(block);
        }
        return result;
    }
    
    function convert (block){
        if(block === '**********'){
            return ' '
        }
        let morseCode = '';
        for (let i = 0; i<block.length; i+=2){
            const couple = block.slice(i, i+2);
            if(couple === '10'){
                morseCode += '.';
            } else if (couple === '11'){
                morseCode += '-';
            }
        }
        return morseCode;
    }

    const blocks = sliceTheExpr(expr);
    const decoded = blocks.map(block => {
        const morseCode = convert (block);
        return morseCode === ' ' ? ' ':MORSE_TABLE[morseCode];
    }).join('');

    return decoded
}

module.exports = {
    decode
}