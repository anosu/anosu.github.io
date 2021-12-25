var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://alist.jitsu.top/d/OneDrive/视频/FSDSS-289 昔から好きだった幼馴染はNo_1風俗嬢に… オプション全乢せ発射無制限で本番セックスしまくった同棲生活3日間 橋本ありな.mp4',
    autoSize: true,
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
