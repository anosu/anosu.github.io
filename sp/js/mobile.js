var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://alist.jitsu.top/d/OneDrive/视频/里番 リアルエロゲシチュエーション！/[ピンクパイナップル]リアルエロゲシチュエーション！2 THE ANIMATION 第1巻/[GB][ピンクパイナップル]リアルエロゲシチュエーション！2 THE ANIMATION 第1巻[AVC-1080P].mp4',
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
        'x5-video-player-fullscreen': false,
        'x5-video-orientation': 'portraint',
    },
    plugins: [
        artplayerPluginDanmuku({
            danmuku: '/assets/sample/danmuku.xml',
            speed: 5,
            maxlength: 100,
            margin: [10, 70],
            opacity: 1,
            fontSize: 14,
            synchronousPlayback: false,
        }),
    ],
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
