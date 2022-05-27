<?php
// 存储数据的文件
$file = 'musicid.txt';
if(!file_exists($file)) {
    die($file . ' 数据文件不存在');
}
// 读取整个数据文件
$data = file_get_contents($file);
// 按换行符分割成数组
$data = explode(PHP_EOL, $data);
// 随机获取一行索引
$id = $data[array_rand($data)];
// 去除多余的换行符（解决获取空值问题
$id = str_replace(array("\r","\n","\r\n"), '', $id);
$url = 'https://music.163.com/song/media/outer/url?id='.$id.'.mp3';
//返回指定格式
$type=$_GET['type'];
switch($type){
case 'json':
header('Content-type:text/json');
die(json_encode(['url'=>$url]));
default:
die(header("Location: $url"));
}
?>
