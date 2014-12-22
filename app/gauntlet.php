<?php
require_once("MysqliDb.php");
require_once("lib/helper.php");

$db = new Mysqlidb();
if(!$db) die("Database error");

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
                "category"  => $u['category']
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

function allPosts() {  
    global $db;
    $db->where ("status", true);
    $posts = $db->get("posts");
    $allPosts = array();

    foreach ($posts as $u) {
        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost); 
        $allPosts[] = array(

            "id" => $u['id'],
            "username" => $u['username'],
            "comments" => $u['comments'],
            "post" => $post,
            "category" => $u['category']


            );

    }
    return $allPosts;
}

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
 ?>