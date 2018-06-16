/**************************************************************
*                        Задание 3 							  *
*                   Разделение строки                         *
*      Разделить входную строку длины n на 3: глассные a,     *
*  согласные b, цифры c. На вход подается строка в формате    *
*  ASCII. 1 <= n <= 10000                                     *
**************************************************************/

/*Принимаеи на вход строку
В связи с неточностью задания, собираем строку из всех параметров*/

var inputString = process.argv.slice(2).join('');

/*Создаем 3 масива: глассные, согласные и цифры*/
var glas = inputString.match(/[aeiou]/ig);
var sogl = inputString.match(/[bcdfghjklmnpqrstvwxyz]/ig);
var digit = inputString.match(/[0-9]/g);

/*Собираем сообщение*/
var result = '';

if (glas != null) result += glas.join('');

if (sogl != null) 
	{
		if (glas != null ) result+=' ';
		result += sogl.join('');
	}
if (digit != null) 
	{
		if (glas != null || sogl != null) result+=' ';
		result += digit.join('');
	}
//process.stdout.write(result);
console.log(result);
