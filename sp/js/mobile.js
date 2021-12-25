var art = new Artplayer({
    container: '.artplayer-app',
    url: 'http://1.117.8.54:5244/d/K/视频/里番 リアルエロゲシチュエーション！/[ピンクパイナップル]リアルエロゲシチュエーション！2 THE ANIMATION 第2巻/[GB][ピンクパイナップル]リアルエロゲシチュエーション！2 THE ANIMATION 第2巻[AVC-1080P].mp4',
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
