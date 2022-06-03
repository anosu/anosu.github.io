<?php
header('Content-type: text/json;charset=utf-8');
require 'Meting.php';
use Metowolf\Meting;
$api = new Meting('netease');
$mid=$_GET['mid'];
if($mid==''){
    $mid='6795264750';
}
$type=$_GET['type'];
$post_data = array('s'=>'0','id' =>$mid,'n'=>'1000','t'=>'0');
$url = "http://music.163.com/api/v6/playlist/detail";
$echo=Post($post_data,$url);
$arr = json_decode($echo,true)['playlist']['tracks'];
$arr_music = json_decode($echo,true);
$music = $arr[array_rand($arr,1)];
$url_id = json_decode($api->format(true)->url($music['id']),true)['url'];
$url_id = str_replace(['http://'],['https://'], $url_id);
$post = str_replace(['http://'],['https://'], $music['al']['picUrl']);
if($music['alia'][0]==''){
  $alianame='';
}else{
  $alianame=$music['alia'];
  $alianame=implode("-",$alianame);
}
if($music['al']['name']==''){
  $album=' ';
}else{
  $album=$music['al']['name'];
}
if($arr_music['playlist']['tags'][0]==''){
  $tags='当前歌单无标签！';
}else{
  $json=$arr_music['playlist']['tags'];
  $tags=implode(",",$json);
  $tags=array($tags);
}
if($arr_music['playlist']['tags'][0]==''){
  $tags='当前歌单无标签！';
}else{
  $json=$arr_music['playlist']['tags'];
  $tags_text=implode(",",$json);
  $tags=array($tags_text);
}
if($url_id==''){
    $url_id='http://music.163.com/song/media/outer/url?id='.$music['id'].'.mp3';
}
if($alianame==''){
    $name=$music['name'];
}else{
    $name=$music['name'].' - ('.$alianame.')';
}
$data = array('playlist'=>$name,'album'=>$album,'id'=>$music['id'],'url'=>$url_id,'post'=>$post,'artists'=>$music['ar'][0]['name']);
if($type == 'text') {
    $result .=  '歌曲名：'. $name.PHP_EOL;
    $result .=  '专辑：'.$album.PHP_EOL;
    $result .=  '歌曲ID：'. $music['id'].PHP_EOL;
    $result .=  '歌手：'. $music['ar'][0]['name'].PHP_EOL;
    $result .=  '歌曲图片：'.$post.PHP_EOL;
    $result .=  '歌曲链接：'.$url_id.PHP_EOL;    
    $result .=  '当前歌单：'.$arr_music['playlist']['name'].PHP_EOL;
    $result .=  '歌单标签：'.$tags_text.PHP_EOL; 
    print_r($result);
}else{
    $result=json_encode(array('code'=>1,'name'=>$arr_music['playlist']['name'],'cover'=>$arr_music['playlist']['coverImgUrl'],'tags'=>$tags,'data'=>$data),480);
    print_r($result);
}
function Post($curlPost, $url) {
    $curlPost=http_build_query($curlPost);//多维数组最好开启,一维数据可以注释掉
    $curl = curl_init ();
    curl_setopt ($curl, CURLOPT_URL, $url );
    curl_setopt ($curl, CURLOPT_HEADER, false );
    curl_setopt ($curl, CURLOPT_RETURNTRANSFER, true );
    curl_setopt ($curl, CURLOPT_NOBODY, true );
    curl_setopt ($curl, CURLOPT_POST, true );
    curl_setopt ($curl, CURLOPT_POSTFIELDS, $curlPost );
    $return = curl_exec ($curl);
    curl_close ($curl);
    return $return;
}
