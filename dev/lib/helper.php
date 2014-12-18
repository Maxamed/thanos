<?php
function truncate($string,$length=200,$append="&hellip;") {
  $string = trim($string);
 
  if(strlen($string) > $length) {
    $string = wordwrap($string, $length);
    $string = explode("\n", $string, 2);
    $string = $string[0] . $append;
  }
 
  return $string;
}
// Convert to hastag function
function convertHashtags($str){
    $regex = "/#+([a-zA-Z0-9_]+)/";
    $str = preg_replace($regex, '<a href="functions.php?tag=$1">$0</a>', $str);
    return($str);
}

?>