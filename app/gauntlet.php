<?php
require_once("MysqliDb.php");
require_once("lib/helper.php");

$db = new Mysqlidb();
if(!$db) die("Database error");


//print single post

function sPost($id){
    $arrPosts =array();  
    $posts = array();
    global $db;
    $t = intval($id);

    $db->where ("id", $t); 
    $u = $db->getOne("posts"); 

    $arrPosts[] = array(
        "posts" => array(
                "id"        => $u['id'],
                "username"  => $u['username'],
                "post"      => $u['posts'],
                "category"  => $u['category'],
                "timestamp"  => $u['createdat']
                ),
        "comments"  => array()
    );

    $db->where ("postid", $t); 
    $comments = $db->get("comments"); 

    foreach ($comments as $x) {

        $arrPosts['comments'][] = array( 
            "id"        => $x['id'], 
            "comment"   => $x['comment'],
            "timestamp" => $x['timestamp']
        );

    }; 

    return $arrPosts;

 
}

//print all posts

function allPosts() {  
    global $db;
    $db->where ("status", true);
    $db->orderBy("id","Desc");
    $posts = $db->get("posts");
    $allPosts = array();

    foreach ($posts as $u) {
        
        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost); 
        $allPosts[] = array(

            "id" => $u['id'],
            "username" => $u['username'],
            "commcount" => $u['comments'],
            "post" => $post,
            "category" => $u['category'],
            "timestamp"  => $u['createdat']


            );

    }
    return $allPosts;
}

//print all comments

function allComments($id) {

    global $db;
    $t = intval($id);  
    $db->where ("postid", $t); 
    $comments = $db->get("comments");

    $allComms = array();

    foreach ($comments as $u) {

        $allComms[] = array(

            "id" => $u['id'], 
            "comment" => $u['comment'],
            "timestamp" => $u['timestamp']


            );

    }
    return $allComms;

}

// search

 function Search($r){
    $results = array();
    global $db;
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
                $results[] = array(
                    "id"        =>  $u['id'],
                    "username"  =>  $u['username'], 
                    "post"      =>  $post,
                    "category"  =>  $u['category'],
                    "timestamp" =>  $u['createdat'],
                    "commcount" => $u['comments']
                );
            }

            return $results;
    }

     
     
 }
 

 ?>