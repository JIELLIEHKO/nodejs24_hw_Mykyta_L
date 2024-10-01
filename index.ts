const str: string = "Node.js course";
console.log(str.length);

function multiplyByTwoBasedOnLength(num: number): number {
    const numStr = num.toString(); // Преобразуем число в строку
    const length = numStr.length;   // Получаем длину строки
    let result = num;                // Инициализируем результат исходным числом

    // Умножаем число на 2 столько раз, сколько символов в нем
    for (let i = 0; i < length; i++) {
        result *= 2;
    }

    return result; // Возвращаем результат
}

// Пример использования
const number = 33;
const result = multiplyByTwoBasedOnLength(number);
console.log(result); // Вывод: 132
