<?php
require_once("MysqliDb.php");


 $db = new Mysqlidb('localhost', 'root', 'bingo', 'thanos');

 
 if(!$db) die("Database error");


// submit posts

if(isset($_POST['submit']))
    { 
 
         $data = array(
            'posts' => $_POST['post'], 
            'hashtag'=> gethashtags($_POST['post']),
            'category' => $_POST['category'], 
            'status'=> 1,
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
        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost );
        echo "  <li>Post: {$post} <a href=post.php?SingleId={$u['id']}><br><span>ID:{$u['id']}</span> - <span>Category: {$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p></li>";
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

//Pocess hashtags

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
                echo "  <li>Post: {$post} <a href=post.php?SingleId={$u['id']}><br><span>ID:{$u['id']}</span> - <span>Category: {$u['category']}</span><p><a href=functions.php?SpamId={$u['id']}>Report Spam</a></p></li>";
            }
    }

 
}
//  Spam

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