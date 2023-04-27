// С помозью ключевого слова function мы можем объявлять свои собственные функции, 
// которые будут делать то, что мы в них напишем.
// После ключевого слова function мы пишем имя нашей функции, 
// чтобы ее можно было потом вызывать по нему.

//  Задание А. Определите и вызовите в программном коде функцию SayHello(), 
//  которая выводит в веб-документ приветственное сообщение.
function SayHello(){
    // Вывод приветствия.
    console.log("Hello!");
}

//  Задание Б.  Определите функцию GetRandom(), возвращающую случайное число от 1 до 100. 
//  Вызвав данную функцию вывести в консоль квадрат данного числа. Использовать модуль Math
function GetRandom(){
    //  Объявляем с помозью переменных min и max наши границы случайных чисел - от 1 до 100.
    //  Это необходимо, потому как функция Math.random(), которую мы используем для получения случайного числа,
    //  может возвращать числа только в диапазоне от 0 до 1, при этом 1 не влючается.
    var min = 1;
    var max = 100;
    
    //  Возвращаем посчитанное значение с помощью опреатора return.
    //  При этом, мы также использовали функцию Math.floor(), чтобы округлить полученное случайное число в 
    //  меньшую сторону (например, если мы получили 45.5, то функция вернет 45).
    //  Максимум и минимум включаются в границы возвращаемого значения
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание В. Определите и вызовите в программном коде функцию Echo(), 
// которая принимает строку и выводит ее в веб-документ. 
function Echo(message){
    // Выводим в консоль сообщение message, которое было послано в функцию.
    console.log(message);
}


//  Задание Г. Определите и вызовите в программном коде функцию InvertString(), 
//  которая принимает строку и возвращает строку с обратным порядком символов. 
//  Использовать циклы и массивы. Результат вызова функции вывести в консоль.
function InvertString(input){
    //  Свойство length возвращает нам количество символов в строке (ее длину).
    //  Мы сохраняем длину строки в переменную len.
    var len = input.length;
    
    //  Инициализируем массив, в котором будем хранить символы строки в обратном порядке.
    var invertCharArray = [];

    //  Используем цикл for(...;...;...), в котором мы используем счетчик i от 0 до длинны
    //  строки (индексация массивов начинается с нуля, поэтому если в строке 10 символов,
    //  то i будет принимать значения от 0 до 9).
    for (var i = 0; i < len; i++){
        //  Метод массива push(X) ипользуется для того, чтобы добавить в его конец элемент X.
        //  Таким образом, перебирая i от 0 до 1 и отнимая его от len-1 (номер последнего элемента), 
        //  мы запишем символы строки в обратном порядке в наш новый массив.
        //  Так как у каждого элемента массива есть свой индекс, то к нему можно оращаться и получить его
        //  значение с помощью квадратных скобок (array[i] вернет элемент с индексом i).
        invertCharArray.push(input[len - 1 - i]);
    }

    //  Метод join(symbol) используется для того, чтобы объединить все элементы массива
    //  тем символом symbol, который мы сами укажем. В данном случае мы объединяем
    //  все эелементы моссива пустым символом, чтобы каждый элемент вывелся без пробелов.
    console.log(invertCharArray.join(''));
}


//  Во всем мире принято сначала объявлять все необходимые функции, а уже
//  потом их вызывать при необходимости. Мы так и поступим, и вызовем все реализованные
//  нами функции в самом конце.


//  Вызываем функции с помозью имен, которые мы им задали.
//  Если в функцию неоходимо послать параметр, не забываем это сделть.

//  Задание А.
//  Вывод приветственного сообщения.
SayHello();

//  Задание Б.
//  Вызов функции, которая возвращает случайное число.
//  Для того, чтобы вывести квадрат полученного числа, его надо заранее записать
//  в переменну, иначе ее один вызов функции выдаст совершенно другое значение.
var random_value = GetRandom()
console.log(random_value*random_value);

//  Задание В.
//  Вызов функции, выводящей сообщение, которое мы ей послали как параметр.
Echo("СООБЩЕНИЕ")

//  Задание Г.
//  Вызов функции, которая выведет на консоль строку, которую мы отправили в нее
//  как параметр, в обратном порядке
InvertString("СООБЩЕНИЕ")