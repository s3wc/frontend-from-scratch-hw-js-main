// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest() {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');
    let c = +prompt('Введите третье число');

    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
