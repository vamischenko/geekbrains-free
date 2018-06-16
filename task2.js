/****************************************************************
*                         Задание 2 		                    *
*                      Числа фибоначчи                          *
*      Написать функцию расчета n-ного числа Фибоначчи.         *
*                    f0 = 0, f1 = 1, f2 = 1                     *
*       На вход подается число n. -10000 <= n <= 10000          *
*****************************************************************/
/*Получаем номер числа*/
var numbers = parseInt( process.argv[2]);
/*Для удобства будем считать положительные числа*/

var exp = Math.abs(numbers);

/*Высчитываем число Фибонначи линейнм способом*/
var result = 0;
if (exp == 0) result = 0;
else if (exp <= 2)  result = 1;
else {
	var first = 1;
	var second = 1;
	for ( var i = 2; i < exp ; i++)
	{
		result = first + second;
		first = second;
		second = result
	}
}
/*При не обходимости меняем знак*/
if (numbers >= 0) 
	console.log(String(result));
	//process.stdout.write(String(result));
else //process.stdout.write(String(Math.pow(-1,exp+1)*result));
	console.log(String(Math.pow(-1,exp+1)*result));