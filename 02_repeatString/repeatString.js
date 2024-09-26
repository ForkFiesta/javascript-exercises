const repeatString = function(word, num) {

    
    wordSalad = [];
    if (num >= 0)
        {
            for (i = 0; i < num; i++)
                {
                    wordSalad.push(word);
                }
            
            let repeatedString = wordSalad.join('')
        
            return repeatedString
        
        }
        else {
            return 'ERROR';
        }
    
};

// Do not edit below this line
module.exports = repeatString;
