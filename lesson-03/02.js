// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven() {
    let number = prompt('Введите число');
    if (number % 2 === 0) return true;
    else return false;
}