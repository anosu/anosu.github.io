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
