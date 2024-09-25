const str: string = "Node.js course";
console.log(str.length);

function multiplyByTwoBasedOnLength(num: number): number {
    const numStr = num.toString();
    const length = numStr.length;
    let result = num;

    for (let i = 0; i < length; i++) {
        result *= 2;
    }

    return result;
}


const number = 33;
const result = multiplyByTwoBasedOnLength(number);
console.log(result); // Вывод: 132