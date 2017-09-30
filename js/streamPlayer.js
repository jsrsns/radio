function setOffline()
{
  $('#streamStateLabel > span').text("OFFLINE");
  $('#streamPlayer').css('background-color','#fb0e1f');
  $('#streamPlayerControls').css('display','none');
}
