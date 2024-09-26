const removeFromArray = function(someArray, ...args) {

    originalArray = someArray;
    valuesToRemove = args;

    for (const value of valuesToRemove)
        {
            let index = originalArray.indexOf(value);
            while (index !== -1)
                {
                    originalArray.splice(index, 1);
                    index = originalArray.indexOf(value);
                }

        }


    return originalArray;





};



// Do not edit below this line
module.exports = removeFromArray;
