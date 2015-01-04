<?php
require_once("MysqliDb.php");
require_once("lib/helper.php");
date_default_timezone_set('Europe/London');
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

    $dateee = date('d/m/Y H:i:s',strtotime($u['createdat']));
    $arrPosts[] = array(
        "posts" => array(
                "id"        => $u['id'],
                "username"  => $u['username'],
                "post"      => $u['posts'],
                "category"  => $u['category'],
                "humantimestamp" => $dateee,
                "machinetimestamp"  => $u['createdat']
                ),
        "comments"  => array()
    );

    $db->where ("postid", $t); 
    $comments = $db->get("comments"); 

    foreach ($comments as $x) {

        $datee = date('d/m/Y H:i:s',strtotime($u['createdat']));
        $arrPosts['comments'][] = array( 
            "id"        => $x['id'], 
            "comment"   => $x['comment'],
            "humantimestamp" => $datee,
            "machinetimestamp"  => $u['createdat']
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
        
        $datee = date('d/m/Y H:i:s',strtotime($u['createdat']));

        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost); 
        $allPosts[] = array(

            "id" => $u['id'],
            "username" => $u['username'],
            "commcount" => $u['comments'],
            "post" => $post,
            "category" => $u['category'],
            "humantimestamp" => $datee,
            "machinetimestamp"  => $u['createdat']


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
        $datee = date('d/m/Y H:i:s',strtotime($u['createdat']));

        $allComms[] = array(

            "id" => $u['id'], 
            "comment" => $u['comment'],
            "humantimestamp" => $datee,
            "machinetimestamp"  => $u['createdat']


            );

    }
    return $allComms;

}

// search

 function Search($r){
    $results = array();
    $allPosts =array(); 
    global $db;
    $db->where("posts", Array ('LIKE' => '%'.$r.'%'));
    if ($db->count = 0) {
         $results[] = array(
                "error"        =>  "null",
                "error_detail"  =>  "couldn't find any results"
            ); 
    }else { 


        $posts = $db->get("posts");
        $resultCount =  $db->count;
        $allPosts[] = array(
            "resultCount" => $resultCount,
            "searchTerm" => $r,
            "results" => array()
        );
        foreach ($posts as $u) {

            $datee = date('d/m/Y H:i:s',strtotime($u['createdat']));

            $hashPost = convertHashtags($u['posts']);
            $post = truncate($hashPost); 
            $allPosts['results'][] = array(

                "id" => $u['id'],
                "username" => $u['username'],
                "commcount" => $u['comments'],
                "post" => $post,
                "category" => $u['category'],
                "humantimestamp" => $datee,
                "machinetimestamp"  => $u['createdat']


                );



            }
        }

     return $allPosts;
     
 }
 

 ?>