var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://alist.jitsu.top/d/OneDrive/视频/原神_刻晴 - Good Night Kiss.mp4',
    autoSize: true,
    setting: true,
    screenshot: true,
    playbackRate: true,
    theme: '#ffad00',
    fullscreen: true,
    miniProgressBar: true,
    moreVideoAttr: {
        playsInline: true,
        'webkit-playsinline': true,
        'x5-video-player-type': 'h5',
        'x5-video-player-fullscreen': true,
        'x5-video-orientation': 'portraint',
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
