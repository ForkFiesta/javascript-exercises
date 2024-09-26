const sumAll = function(num1, num2) {
    let sum = 0;
    let largeNum;
    let smallNum;

    if (typeof(num1)!= "number" || typeof(num2)!= "number")
        {return "ERROR"};

    if (num1 % 1 != 0 || num2 % 1 != 0)
        {
        return "ERROR";
        }


    if (num1<0 || num2<0)
        {
            return "ERROR";
        }

    if (num1 > num2)
        {
            largeNum = num1;
            smallNum = num2;
        }
        else
        {
            smallNum = num1;
            largeNum = num2;
        }

    const largeArray = [...Array(largeNum+1).keys()];
    let index = largeArray.indexOf(smallNum)
    // dumpNum = largeArray.shift()
    // let index = smallNum + 1;
    const sumArray = largeArray.slice(index);

    for (i = 0; i <sumArray.length; i++)
    {
        sum+=sumArray[i];
    }

    return  sum;

        



};

// Do not edit below this line
module.exports = sumAll;
