import Vimeo from "@vimeo/player"

const iframe = document.getElementById('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });
