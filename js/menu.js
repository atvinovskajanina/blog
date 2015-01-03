jQuery(function(){
  $('.navigation li').click(function(){
    var linkname = $(this).attr('class')
    var link = 'pages/'+linkname+'.html'
    $('#loadcontent').load(link)
  });
});