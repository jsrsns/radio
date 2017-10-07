var archivePlayer = document.querySelectorAll('.archivePlayer');

for (var i = 0; i < archivePlayer.length; i++) {
  setUpPlayer(i);
}

function setUpPlayer(i) {
  var playBtn = archivePlayer[i].querySelector('.play-btn');
  var dlBtn = archivePlayer[i].querySelector('.dl-btn');
  var download = archivePlayer[i].querySelector('#download');

  playBtn.addEventListener('click', playArchive)

  function playArchive() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "120");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("src", "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=" + archivePlayer[i].dataset.embed);

    archivePlayer[i].innerHTML = "";
    archivePlayer[i].appendChild(iframe);
  }

  dlBtn.addEventListener('click', downloadFile)

  function downloadFile() {
    download.attributes.d.value = "M242.2 204.6l-84.7 54.9c-2.2 1.4-4.8 2.2-7.3 2.2 0 0 0 0-0.1 0 0 0 0 0-0.1 0 -0.1 0-0.2 0-0.3 0 -0.2 0-0.5 0-0.7 0 -2.7-0.2-5.3-1.2-7.3-2.8L58 204.6c-6.2-4-8-12.3-4-18.5 4-6.2 12.3-8 18.5-4l64.1 41.4v-19.5 -31.9 -68.9V51.7c0-7.4 6-13.4 13.4-13.4 7.4 0 13.4 6 13.4 13.4v51.4 69.1 32 19.5l64.1-41.6c6.2-4 14.5-2.3 18.6 4S248.5 200.6 242.2 204.6z";
  };

}
