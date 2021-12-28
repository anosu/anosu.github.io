var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://alist.jitsu.top/d/阿里/Anime/[Azur_Lane][06][1080p][BDrip].mp4',
    poster: 'https://cdn.jsdelivr.net/gh/anosu/anosu.github.io@main/img/poster.jpg',
    autoSize: true,
    autoplay: true,
    light: true,
    backdrop: true,
    setting: true,
    playbackRate: true,
    theme: '#66CCFF',
    fullscreen: true,
    miniProgressBar: true,
    moreVideoAttr: {
        playsInline: true,
        'webkit-playsinline': true,
        'x5-video-player-type': 'h5',
        'x5-video-player-fullscreen': false,
        'x5-video-orientation': 'portraint',
    },
    icons: {
        loading: '<img src="https://artplayer.org/assets/img/ploading.gif">',
        state: '<img src="https://artplayer.org/assets/img/state.svg">',
    },
    whitelist: ['*'],
});

Artplayer.config.events.forEach(function (item) {
    art.on('video:' + item, function (event) {
        console.log('video: ' + event.type);
    });
});

if (Artplayer.utils.isWechat) {
    document.querySelector('.tip').textContent = '微信环境需手动触发播放';
}
