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

        $dataX = array(
            'remote_address' => $_SERVER['REMOTE_ADDR'], 
            'post_id' => $id, 
            'httpx_forward'=> $_SERVER['HTTP_X_FORWARDED_FOR']
        );        

        $idx = $db->insert('users', $dataX);
      
        header ("Location: index.php");
        exit;

    } 


 
//Print Signle Post
 
function SinglePost($Postid) { 

    global $db;
    //TODO sort out number of views
    // $data = array(
    //     'views' => 13
    // );
    // $db->update("posts",$data);
    $t = intval($Postid);  
    $db->where ("id", $t); 
    $u = $db->getOne("posts"); 

    echo "  <li>Post: {$u['posts']}<span> -  - ID:{$u['id']}</span><span>Category:{$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p></li>";
   
   
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

if(isset($_GET['SpamId']))
    { 

      $xSpam = array(
            'user_ip' => $_SERVER['REMOTE_ADDR'], 
            'post_id' => $_GET['SpamId'], 
            'timestamp' => $db->now()
        );

        $id = $db->insert("spam" , $xSpam);
      
       header ("Location: index.php");
       exit;
    
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