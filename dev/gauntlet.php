<?php
require_once("MysqliDb.php");
require_once("lib/helper.php");

$db = new Mysqlidb();
if(!$db) die("Database error");

function sPost($id){

    global $db;
    $t = intval($id);  
    $db->where ("id", $t); 
    $u = $db->getOne("posts"); 
        $arrPosts[] = array(
            "id" => $u['id'],
            "username" => $u['username'],
            "post" => $u['posts'],
            "category" => $u['category']
            );

        return $arrPosts;
}

function allPosts() {  
    global $db;
    $db->where ("status", true);
    $posts = $db->get("posts");
    $allPosts = array();

    foreach ($posts as $u) {
        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost ); 
        $allPosts[] = array(

            "id" => $u['id'],
            "username" => $u['username'],
            "post" => $post,
            "category" => $u['category']


            );

    }
    return $allPosts;
}


 ?>