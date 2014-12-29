jQuery(function(){
  $('.posts-container').html(render(posts));
  $('.sidebar-module ol').html(render2(posts));  
 });
var posts =[
		{
			"title": "Как почистить матрицу фотоаппарата",
			"date":"01-12-2014",
			"content": "Чистка матрицы фотоаппарата представляет собой довольно тонкое и деликатное занятие, которое требует терпения и понимания уязвимой структуры самого механизма. Некоторые модели камер, к примеру, устройства Canon, могут самостоятельно провести удаление пыли благодаря встроенной функции очистки матрицы, или, по крайней мере, не позволят ей испортить ваши снимки."
		},
		{
			"title": "3 объектива Canon для съемки в путешествии",
			"date":"23-11-2014",
			"content": "Единственные три объектива Canon, необходимые для съемки во время путешествий в любую точку мира, – это сверхширокоугольный объектив (“рыбий глаз”/фишай), 50mm и 135mm (или аналогичный телефото)."
		},
		{
			"title": "Как сделать удачное селфи",
			"date":"11-11-2014",
			"content": "Вошедшее в моду селфи является отличным и веселым способом показать всему миру свою самоуверенность, индивидуальность и чувство стиля. "
		},
		{
			"title": "Полезные советы",
			"date":"23-10-2014",
			"content": "Обычно в камере предусмотрено два или три режима фокусировки. В каждом конкретном случае они дают аппарату инструкцию, как нужно фокусироваться, а зависеть это будет от того, что вы снимаете"
		},
		{
			"title": "Лучшие фото-приложения для iPhone, создающие эффект ретро",
			"date":"03-10-2014",
			"content": "Сегодня, когда рынок фототехники переполнен мегапиксельными фотокамерами высокого разрешения, человеку не хватает излучающих тепло, зернистых и далеких от идеала снимков эпохи аналоговых фотокамер и фотопленок. Ностальгия – часть человеческой натуры"
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