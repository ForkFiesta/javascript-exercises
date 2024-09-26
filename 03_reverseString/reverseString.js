const reverseString = function(word) {

    const wordArray = word.split("")
    const reverseArray = []
    for (i = wordArray.length-1; i>=0; i--)
        {
            reverseArray.push(wordArray[i]);
        }

    let reverseWord = reverseArray.join("");

    return reverseWord;
    


};


// Do not edit below this line
module.exports = reverseString;
