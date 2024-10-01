var str = "Node.js course";
console.log(str.length);
function multiplyByTwoBasedOnLength(num) {
    var numStr = num.toString(); // Преобразуем число в строку
    var length = numStr.length; // Получаем длину строки
    var result = num; // Инициализируем результат исходным числом
    // Умножаем число на 2 столько раз, сколько символов в нем
    for (var i = 0; i < length; i++) {
        result *= 2;
    }
    return result; // Возвращаем результат
}
// Пример использования
var number = 33;
var result = multiplyByTwoBasedOnLength(number);
console.log(result); // Вывод: 132
