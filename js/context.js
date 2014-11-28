var posts =[
		{
			"title": "Как почистить матрицу фотоаппарата",
			"date":"2014-11-27",
			"content": "Здесь контекст статьи 1"
		},
		{
			"title": "3 объектива Canon для съемки в путешествии",
			"date":"2014-11-10",
			"content": "Здесь контекст статьи 2"
		},
		{
			"title": "Как сделать удачное селфи",
			"date":"2014-10-15",
			"content": "Здесь контекст статьи 3"
		},
		{
			"title": "Полезные советы",
			"date":"2014-10-03",
			"content": "Здесь контекст статьи 4"
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
