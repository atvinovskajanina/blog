function print_todays_date() {
var d = new Date(); // �������� ������� ���� � �����
document.write(d.toLocaleString()); // ��������� ��� � ��������
}

function print_array() {
var fruits = ["�����", "�����", "�����", "������"];
for(var i = 0; i < fruits.length; i++)
document.write(fruits[i].toLocaleString()); 
}
