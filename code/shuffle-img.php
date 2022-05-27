<?php
//获取类型
$sort = !empty($_GET['sort']) ? $_GET['sort'] : 'all' ;
// 存储数据的文件
$filename = ''.$sort.'.txt';
if(!file_exists($filename)) {
    die('指定sort为空或不存在');
}
// 读取整个数据文件
$data = file_get_contents($filename);
// 按换行符分割成数组
$data = explode(PHP_EOL, $data);
// 随机获取一行索引
$result = $data[array_rand($data)];
// 去除多余的换行符（解决获取空值问题
$result = str_replace(array("\r","\n","\r\n"), '', $result);
$size_arr = array('large', 'mw2048', 'mw1024', 'mw690', 'bmiddle', 'small', 'thumb150', 'thumb180', 'thumbnail', 'orj360', 'orj480', 'square');
$size = !empty($_GET['size']) ? $_GET['size'] : 'large' ;
$server = rand(1,4);
if(!in_array($size, $size_arr)){
	$size = 'large';
}
$url = 'https://tva'.$server.'.sinaimg.cn/'.$size.'/'.$result.'.jpg';
//返回指定格式
$type = $_GET['type'];
switch($type){
case 'json':
header('Content-type:text/json');
die(json_encode(['pic'=>$url]));
default:
die(header("Location: $url"));
}
?>
