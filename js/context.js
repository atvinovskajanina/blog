var posts =[
		{
			"title": "��� ��������� ������� ������������",
			"date":"27-11-2014",
			"content": "����� �������� ������ 1"
		},
		{
			"title": "3 ��������� Canon ��� ������ � �����������",
			"date":"10-11-2014",
			"content": "����� �������� ������ 2"
		},
		{
			"title": "��� ������� ������� �����",
			"date":"15-10-2014",
			"content": "����� �������� ������ 3"
		},
		{
			"title": "�������� ������",
			"date":"03-10-2014",
			"content": "����� �������� ������ 4"
		}
	]
var $ = document.querySelector.bind(document)
var containerEl = $('.posts-container')

var render = function(arr) {
  return arr.reduce(function(previousValue, currentValue, index, array) { return previousValue +
																							//	'<li>'+
																									'<h3>'+currentValue.title+'</h3>'+
																									'<p>' + currentValue.date + '</p>'+
																									'<p>' + currentValue.content + '</p>'//+
																								//'</li>'
																							
																		  },'');
}

// Init
containerEl.innerHTML = render(posts);

function loadbtn(event){
			var filterBegin = new Date(($('#filterBegin').value).replace(/(\d+)-(\d+)-(\d+)/, '$2/$1/$3')).getTime();
			var filterEnd =new Date(($('#filterEnd').value).replace(/(\d+)-(\d+)-(\d+)/, '$2/$1/$3')).getTime();
			var postslist = posts.slice()
			function isEnough(element) {
				return (new Date((element.date).replace(/(\d+)-(\d+)-(\d+)/, '$2/$1/$3')).getTime() >= filterBegin)&&(new Date((element.date).replace(/(\d+)-(\d+)-(\d+)/, '$2/$1/$3')).getTime() <= filterEnd)
			}
			var filterlist=postslist.filter(isEnough)
			containerEl.innerHTML = render(filterlist);
	}

 