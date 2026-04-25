// 外部独立配置，想改昵称/头像/数字内容只改这个文件
window.customConfig = {
    nickname: "你要的新昵称",
    avatar: "你的新头像链接",
    time: "17:11:33",
    date: "2026年4月25日",
    title: "自定义聊天记录标题",
    content: `08-16-38-24各10米
-14-42-06-28各20米
-18-32-26-04-36各35米
-12-34-22各100米`
};

// 覆盖页面内容
document.addEventListener('DOMContentLoaded', function() {
    const cfg = window.customConfig;
    if(!cfg) return;

    if(cfg.title) document.querySelector('.nav-title').innerText = cfg.title;
    if(cfg.date) document.querySelector('.nav-date').innerText = cfg.date;
    if(cfg.nickname) document.querySelector('.nickname').innerText = cfg.nickname;
    if(cfg.time) document.querySelector('.time').innerText = cfg.time;
    if(cfg.content) document.querySelector('.message-text').innerText = cfg.content;
    if(cfg.avatar) document.querySelector('.avatar').style.backgroundImage = `url(${cfg.avatar})`;

    if(cfg.title) document.title = cfg.title;
});
