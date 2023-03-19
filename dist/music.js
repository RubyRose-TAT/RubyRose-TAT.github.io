const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FDA39B', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.5, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    listMaxHeight: 60, //列表最大高度
    lrcType: 0, //歌词传递方式
    audio: [
        {
            name: 'ヒカリ',
            artist: '樹海',
            url: '/music/ヒカリ.mp3',
            cover: '/img/fate.jpg',
            lrc: '/music/ヒカリ.lrc', //音频歌词，配合上面的lrcType使用
        },
        {
            name: 'Avid',
            artist: 'mizuki',
            url: '/music/Avid.mp3',
            cover: '/img/86.jpg',
            lrc: '/music/Avid.lrc', 
        },
    ]
});