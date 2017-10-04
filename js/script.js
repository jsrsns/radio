/* Page load in */
{
setTimeout(() => document.body.classList.add('render'), 60);
};

/* Scrolling */

/* Archive player */
var archivePlayer = document.querySelector('.archivePlayer');
var playBtn = archivePlayer.querySelector('.play-btn');

for (var i = 0; i < archivePlayer.length; i++) {

  playBtn[i].addEventListener('click', function() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute( "frameborder", "0");
    iframe.setAttribute("src", "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=" + this.dataset.embed);

    this.innerHTML = "";
    this.appendChild( iframe );
  });
}
/*
$('.load-btn').click(function(){
        archive = '<iframe src="'+ $(this).attr('data-id') +'"></iframe>';
        $(".archivePreview").replaceWith(archive);
    });
*/
