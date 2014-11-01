<?php
require_once("MysqliDb.php");


 $db = new Mysqlidb('localhost', 'root', 'bingo', 'thanos');

 
 if(!$db) die("Database error");


// submit posts

if(isset($_POST['submit']))
    { 
 
         $data = array(
            'posts' => $_POST['post'], 
            'category' => $_POST['category'], 
            'status'=> 1,
            'createdat' => $db->now()
        );
  
       
        $id = $db->insert('posts', $data);
        header ("Location: index.php");


    } 


 
//Print Signle Post
 
function SinglePost($Postid) { 
    $t = intval($Postid);  
    global $db;
    $db->where ("id", $t); 
    $u = $db->getOne("posts"); 
    echo "  <li>Post: {$u['posts']}<span> -  - ID:{$u['id']}</span><span>Category:{$u['category']}</span></li>";
    
}
 
//Print all posts


function printPosts() {  
    global $db;
    $db->where ("status", true);
    $posts = $db->get("posts");
    foreach ($posts as $u) {
        
        $post = truncate($u['posts']);
        echo "  <li><a href=post.php?SingleId={$u['id']}>Post: {$post}<span> -  - ID:{$u['id']}</span><span>Category:{$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p></li>";
    }
}

//  TODO  Spam

if(isset($_SERVER['SpamId']))
    { 
echo "eee";
        // function spam($Postid){
        //     $x = intval($Postid);  
        //     global $db;
        //     $db->where ("id", $x); 
        // }
}
// Truncate Posts

function truncate($string,$length=200,$append="&hellip;") {
  $string = trim($string);
 
  if(strlen($string) > $length) {
    $string = wordwrap($string, $length);
    $string = explode("\n", $string, 2);
    $string = $string[0] . $append;
  }
 
  return $string;
}



?>