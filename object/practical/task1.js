//  Определяем три числовые переменные, которые мы собираемся сравнивать.
//  Их занчения могут быть любыми, мы их задаем сами.
var x = 1;
var y = 2;
var z = 3;

//  Используем ранее изученный нами условный оператор if(...){...}else{...}
//  для того, чтобы отыскать наибольшее из трех чисел. В данном случае, мы в условии
//  использовали конструкцию &&(Логическое И), которое выполняется только если
//  выполнены оба условия слева и справа от неё.
//  В первом случае мы проверяем, что число X является наибольшим и выводим его. 
//  Если это не так, мы переходим к следующему условию (else if), в котором 
//  мы проверяем, является ли число Y наибольшим.
//  Если не выполняется даже это условие, то мы переходим к контрукции else,
//  код в которой будет выполнен в том случае, если не выполнилось ни одно из ранее
//  выставленных условий и выведем число Z (так как X и Y до этого не являлись наибольшими ваирантов у нас больше нет).
if (x >= y && x >= z){
    console.log(x);
}else if (y >= x && y >= z){
    console.log(y);
}else{
    console.log(z)
}