//背景
$(document).ready(function(){
var system ={};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "x11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.x11){
//if PC
  $('#chakra-ui-light').css('background',"url(https://iw233.cn/API/pc.php)");
  }else{
//if Phone
  $('#chakra-ui-light').css('background',"url(https://iw233.cn/API/mp.php)");
  }
});

//计时器
function secondToDate(second) {
if (!second) {
return 0;
}
var time = new Array(0, 0, 0, 0, 0);
if (second >= 365 * 24 * 3600) {
time[0] = parseInt(second / (365 * 24 * 3600));
second %= 365 * 24 * 3600;
}
if (second >= 24 * 3600) {
time[1] = parseInt(second / (24 * 3600));
second %= 24 * 3600;
}
if (second >= 3600) {
time[2] = parseInt(second / 3600);
second %= 3600;
}
if (second >= 60) {
time[3] = parseInt(second / 60);
second %= 60;
}
if (second > 0) {
time[4] = second;
}
return time;
}</script><script type="text/javascript" language="javascript">
function setTime() {
var create_time = Math.round(new Date(Date.UTC(2021, 11, 25, 23, 21, 0)).getTime() / 1000);
var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
currentTime = secondToDate((timestamp - create_time));
currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
+ currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
+ '秒';
document.getElementById("htmer_time").innerHTML = currentTimeHtml;
} setInterval(setTime, 1000);

//waline
Waline({
  el: '#waline',
  path: root,
  placeholder: '请写下你想说的话～',
  avatar: 'robohash',
  serverURL: 'https://msg-puce.vercel.app/',
});