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
		}
	]
var $ = document.querySelector.bind(document)

var containerEl = $('.posts-container')

// Render Fn
var render = function(arr) {
  return arr.reduce(function(previousValue, currentValue, index, array) { return previousValue +
																								
																								'<ul>'+
																									//insertEl('.blog-post-title',currentValue.title)+
																									'<li>' + currentValue.title + '</li>'+
																									'<li>' + currentValue.date + '</li>'+
																									'<li>' + currentValue.content + '</li>'+
																								'</ul>'
																		  },'');
}
//var insertEl = function(el,value){
	//return $(el).innerHTML = value;
//}

// Init
//containerEl.innerHTML = render(posts)