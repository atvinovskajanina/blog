var posts =[
		{
			"title": "��� ��������� ������� ������������",
			"date":"2014-11-27",
			"content": "����� �������� ������ 1"
		},
		{
			"title": "3 ��������� Canon ��� ������ � �����������",
			"date":"2014-11-10",
			"content": "����� �������� ������ 2"
		},
		{
			"title": "��� ������� ������� �����",
			"date":"2014-10-15",
			"content": "����� �������� ������ 3"
		},
		{
			"title": "�������� ������",
			"date":"2014-10-03",
			"content": "����� �������� ������ 4"
		}
	]
var $ = document.querySelector.bind(document)
var applications = $('.posts-container > li');

var containerEl = $('.temp')

var render = function(arr) {
  return arr.reduce(function(previousValue, currentValue, index, array) { return previousValue +
																								
																								'<a href="#">'+currentValue.title+'</a> <br>'
																									//'<li>' + currentValue.date + '</li>'+
																									//'<li>' + currentValue.content + '</li>'+
																							
																		  },'');
}

// Init
containerEl.innerHTML = render(posts);
