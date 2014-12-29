jQuery(function(){
  $('.posts-container').html(render(posts));
  $('.sidebar-module ol').html(render2(posts));  
 });
var posts =[
		{
			"title": "��� ��������� ������� ������������",
			"date":"01-12-2014",
			"content": "������ ������� ������������ ������������ ����� �������� ������ � ���������� �������, ������� ������� �������� � ��������� �������� ��������� ������ ���������. ��������� ������ �����, � �������, ���������� Canon, ����� �������������� �������� �������� ���� ��������� ���������� ������� ������� �������, ���, �� ������� ����, �� �������� �� ��������� ���� ������."
		},
		{
			"title": "3 ��������� Canon ��� ������ � �����������",
			"date":"23-11-2014",
			"content": "������������ ��� ��������� Canon, ����������� ��� ������ �� ����� ����������� � ����� ����� ����, � ��� ������������������� �������� (������ ����/�����), 50mm � 135mm (��� ����������� ��������)."
		},
		{
			"title": "��� ������� ������� �����",
			"date":"11-11-2014",
			"content": "�������� � ���� ����� �������� �������� � ������� �������� �������� ����� ���� ���� ���������������, ���������������� � ������� �����. "
		},
		{
			"title": "�������� ������",
			"date":"23-10-2014",
			"content": "������ � ������ ������������� ��� ��� ��� ������ �����������. � ������ ���������� ������ ��� ���� �������� ����������, ��� ����� ��������������, � �������� ��� ����� �� ����, ��� �� ��������"
		},
		{
			"title": "������ ����-���������� ��� iPhone, ��������� ������ �����",
			"date":"03-10-2014",
			"content": "�������, ����� ����� ����������� ���������� ��������������� ������������ �������� ����������, �������� �� ������� ���������� �����, ��������� � ������� �� ������ ������� ����� ���������� ��������� � ����������. ���������� � ����� ������������ ������"
		}
	]
	var render = function(arr) {
  return arr.reduce(function(previousValue, currentValue, index, array) { return previousValue +
																								'<li id ='+index+'>'+
																									
																									'<h4>'+currentValue.title+'</h4>'+
																									'<p>' + currentValue.date + '</p>'+
																									'<p>' + currentValue.content + '</p>'+
																								'</li>'
																							
																		  },'');
}
var render2 = function(arr2) {
  return arr2.reduce(function(previousValue, currentValue, index, array) { return previousValue +
																								'<li><a onclick="loadpost('+index+')">'+currentValue.title+'</a></li>'
																								
																		  },'');
}
 function loadpost(index){

	$('.posts-container').html('<li id ='+index+'>'+
												'<h4>'+posts[index].title+'</h4>'+
												'<p>' + posts[index].date + '</p>'+
												'<p>' + posts[index].content + '</p>'+
											'</li>')
}
function loadbtn(){

			var filterBegin = parseDate($('#filterBegin').val());
			var filterEnd =parseDate($('#filterEnd').val());
			var postslist = posts.slice()
			function isEnough(element) {
				return (parseDate(element.date) >= filterBegin)&&(parseDate(element.date) <= filterEnd)
			}
			var filterlist=postslist.filter(isEnough)
			$('.posts-container').html(render(filterlist));
	}
function parseDate(dateString){

return  new Date (dateString.replace(/(\d+)-(\d+)-(\d+)/, '$2/$1/$3')).getTime();
}