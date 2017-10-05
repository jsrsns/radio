var archivePlayer = document.querySelectorAll('.archivePlayer');

for (var i = 0; i < archivePlayer.length; i++) {

  archivePlayer[i].addEventListener('click', function() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "120");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("src", "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=" + this.dataset.embed);

    this.innerHTML = "";
    this.appendChild(iframe);
  });
}
