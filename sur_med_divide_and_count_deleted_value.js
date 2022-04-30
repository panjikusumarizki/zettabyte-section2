/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9]

function result(originalData, numbersOne, numbersTwo) {
    // Your Code Here
    const mergeNumber = numbersOne.concat(numbersTwo);
    
    let sum = 0;
    let unMatch = 0;
    let unMatchVal = [];
    for (let i = 0; i < originalData.length; i++) {
        if (!mergeNumber.includes(originalData[i])) {
            unMatchVal.push(originalData[i])
        }
        sum += mergeNumber[i];
    }

    for (let i in unMatchVal) {
        unMatch += unMatchVal[i];
    }

    const result = sum / unMatch;
    return result
}

console.log(result(originalData, numbersOne, numbersTwo));
