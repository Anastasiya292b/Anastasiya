// Объявляем две переменные: 
//  первая - число num, которое необходимо возводить в степень;
//  Второе - степень exp, до которой нам необходимо возводить наше число. 
// Значения задаем мы савми перед запуском программы.
var num = 2.5
var exp = 5

//  Так как у нас процесс умножения, нам необходимо объявить заранее
//  переменну, равную единице, которую мы будем умножать на num exp раз.
//  Таким образом мы получим число num в степени exp, которое будет хранится в переменной result.
var result = 1
for (var i = 1; i <= exp; i++){
    // Умножение result на num. Конструкция x *= y эквивалентна конструкции x = x * y.
    result *= num;
    // Нам необходимо выводить каждую степень числа num от 1 до exp.
    console.log(result);
}