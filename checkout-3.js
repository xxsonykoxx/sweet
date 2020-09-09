$('.eGUI').click(function () { 
  $('.eGUI').css('background-color','#EAF0ED');
  $('.eGUI').css('color','#3F5D45');
  $('.paper').css('background-color','#3F5D45');
  $('.paper').css('color','#EAF0ED');
  $('.eGUI_content').show();
  $('.paper_content').hide();
});

$('.paper').click(function () { 
  $('.paper').css('background-color','#EAF0ED');
  $('.paper').css('color','#3F5D45');
  $('.eGUI').css('background-color','#3F5D45');
  $('.eGUI').css('color','#EAF0ED');
  $('.eGUI_content').hide();
  $('.paper_content').show();
});
