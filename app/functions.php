<?php

//This will be replaced by endpoints api, we might use it to write to API
 
require_once("lib/MysqliDb.php");


 // TODO move to class ^
 $db = new Mysqlidb();

 
 if(!$db) die("Database error");


// submit posts

if(isset($_POST['post']))
    { 
        //random username from colors
        $usr = rand(1, 31);
        $db->where ("id", $usr); 
        $u = $db->getOne("names"); 

        $data = array(
            'posts' => $_POST['post'], 
            'hashtag'=> gethashtags($_POST['post']),
            'category' => $_POST['category'], 
            'status'=> 1,
            'username'=> $u['name'],
            'createdat' => $db->now()
        );

//var_dump( $data);       
        $id = $db->insert('posts', $data);

        $dataX = array(
            'remote_address' => $_SERVER['REMOTE_ADDR'], 
            'post_id' => $id, 
            'httpx_forward'=> $_SERVER['HTTP_X_FORWARDED_FOR']
        );        

        $idx = $db->insert('users', $dataX);
      
           header ("Location: ../index.php");
            exit; 

    } 

//submit comment
if(isset($_POST['comment']))
{ 

            $data = array(
                'comment' => $_POST['comment'], 
                'postid'=> $_POST['postid'], 
                'remote_address' => $_SERVER['REMOTE_ADDR'], 
                'timestamp' => $db->now()
            );

            $commCount = array(
                'comments' => $db->inc()   
            );

            $id = $db->insert('comments', $data); 
            
            $t = intval($_POST['postid']);  
            $db->where("id", $t); 
            $db->update("posts",$commCount);
            
            echo  $_POST['postid'];
}
 
//Print Single Post
 
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

    echo "  <li>{$u['username']} Said : {$u['posts']}<span> -  - ID:{$u['id']}</span><span>Category:{$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p></li>";
   
   
}

//Print all comments


function printComments($Postid) {  
    global $db; 
    $t = intval($Postid);  
    $db->where ("postid", $t); 
    $comments = $db->get("comments");
    foreach ($comments as $u) { 
        echo "  <li>Tourist Said : {$u['comment']} </li>";
    }
}


//Print all posts


function printPosts() {  
    global $db;
    $db->where ("status", true);
    $posts = $db->get("posts");
    foreach ($posts as $u) {
        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost );
        echo "  <li>{$u['username']} Said : {$post} <a href=post.php?SingleId={$u['id']}><br><span>ID:{$u['id']}</span> - <span>Category: {$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p>comments({$u['comments']})<hr></li>";
    }
}

//Strip and store Hashtag function
 
function gethashtags($text)
{
      //Match the hashtags
      preg_match_all('/(^|[^a-z0-9_])#([a-z0-9_]+)/i', $text, $matchedHashtags);
      $hashtag = '';
      // For each hashtag, strip all characters but alpha numeric
      if(!empty($matchedHashtags[0])) {
          foreach($matchedHashtags[0] as $match) {
              $hashtag .= preg_replace("/[^a-z0-9]+/i", "", $match).',';
          }
      }
    //to remove last comma in a string
    return rtrim($hashtag, ',');
}

// Convert to hastag function
function convertHashtags($str){
    $regex = "/#+([a-zA-Z0-9_]+)/";
    $str = preg_replace($regex, '<a href="functions.php?tag=$1">$0</a>', $str);
    return($str);
}

//Pocess hashtags when user clicks on hashtag

if(isset($_GET['tag'])){
    $r = $_GET["tag"];
    $db->where("hashtag", Array ('LIKE' => '%'.$r.'%'));
    $posts = $db->get("posts");
    if ($db->count < 1) {
        echo "Invalid insert count in LIKE: ".$db->count;
        print_r ($posts);
        echo $db->getLastQuery();
        exit;
    }else { 
            foreach ($posts as $u) {
                $hashPost = convertHashtags($u['posts']);
                $post = truncate($hashPost );
                echo "  <li>{$u['username']} Said : {$post} <a href=post.php?SingleId={$u['id']}><br><span>ID:{$u['id']}</span> - <span>Category: {$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p></li>";
            }
    }

 
}
//  Flag Spam

if(isset($_POST['SpamId']))
    { 

      $xSpam = array(
            'user_ip' => $_SERVER['REMOTE_ADDR'], 
            'post_id' => $_POST['SpamId'], 
            'timestamp' => $db->now()
        );

        $id = $db->insert("spam" , $xSpam);

        $spamCount = array(
                'isSpam' => $db->inc()   
        );
 
            
        $t = intval($_POST['SpamId']);  
        $db->where("id", $t); 
        $db->update("posts",$spamCount);
        echo $_POST['SpamId'];
    
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