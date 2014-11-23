function print_todays_date() {
var d = new Date(); // Получаем текущую дату и время
document.write(d.toLocaleString()); // Вставляем это в документ
}

function print_array() {
var fruits = ["манго", "банан", "вишня", "персик"];
for(var i = 0; i < fruits.length; i++)
document.write(fruits[i].toLocaleString()); 
}
