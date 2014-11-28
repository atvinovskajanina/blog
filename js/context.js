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