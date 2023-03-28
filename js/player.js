let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'vB0U4ziDwCs',
    events: {
      //      'onReady': onPlayerReady,
       //     'onStateChange': onPlayerStateChange
        }
    });
}
