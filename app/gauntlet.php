<?php
require_once("lib/MysqliDb.php");
require_once("lib/helper.php");
date_default_timezone_set('Europe/London');
$db = new Mysqlidb();
if(!$db) die("Database error");


//print single post

function sPost($id){
    global $db;
    $arrPosts   = array();  
    $posts      = array();
    $t          = intval($id); 
    $db->where ("id", $t); 
    $u = $db->getOne("posts"); 

    $dateee     = date('jS \of F Y h:i:s A',strtotime($u['createdat']));


    preg_match('#(www\.|https?://)?[a-z0-9]+\.[a-z0-9]{2,4}\S*#i', $u['posts'], $matches);
    $cleanPost =  preg_replace('|https?://www\.[a-z\.0-9]+|i', '', $u['posts']);
 // "image"             => $matches[0],
    $arrPosts[] = array(
        "posts" => array(
                "id"                => $u['id'],
                "username"          => $u['username'],
                "post"              => $cleanPost ,
                "category"          => $u['category'],
                "spamCount"         => $u['isSpam'],
                "humantimestamp"    => $dateee,
                "machinetimestamp"  => $u['createdat']
                ),
        "comments"  => array()
    );

    $db->where ("postid", $t); 
    $comments   = $db->get("comments"); 

    foreach ($comments as $x) {

        $datee  = date('jS \of F Y h:i:s A',strtotime($u['createdat']));
        $arrPosts['comments'][] = array( 
            "comid"                =>  $x['id'], 
            "comment"           =>  $x['comment'],
            "commhumantimestamp"    =>  $datee,
            "commmachinetimestamp"  =>  $u['createdat']
        );

    }; 

    return $arrPosts;

 
}

//print single category

function categoryPosts($id){

    global $db;
    $arrPosts   = array();   
    $t          = intval($id); 
    $db->where ("category", $t); 
    $posts = $db->get("posts"); 

    foreach ($posts as $u) {

        $dateee     = date('jS \of F Y h:i:s A',strtotime($u['createdat']));

     
        $arrPosts[] = array( 
                    "id"                => $u['id'],
                    "username"          => $u['username'],
                    "post"              => $u['posts'] ,
                    "category"          => $u['category'],
                    "spamCount"         => $u['isSpam'],
                    "humantimestamp"    => $dateee,
                    "machinetimestamp"  => $u['createdat']
                    );

    }
    return $arrPosts;



}

//print all posts

function allPosts() {  
    global $db;
    $db->where ("status", true);
    $db->orderBy("id","Desc");
    $posts = $db->get("posts");
    $allPosts = array();
    $timeAgo = new TimeAgo();

    foreach ($posts as $u) {
        
        $datee =  $timeAgo->inWords($u['createdat']); 

        //date('jS \of F Y h:i:s A',strtotime($u['createdat']));
        preg_match('#(www\.|https?://)?[a-z0-9]+\.[a-z0-9]{2,4}\S*#i', $u['posts'], $matches);
        $hashPost = convertHashtags($u['posts']);
        $post = truncate($hashPost); 
        $allPosts[] = array(

            "id" => $u['id'],
            "username" => $u['username'],
            "commcount" => $u['comments'],
            "post" => $post, 
            "category" => $u['category'],
            "spamCount" => $u['isSpam'],
            "humantimestamp" => $datee,
            "machinetimestamp"  => $u['createdat']


            );

    }
    return $allPosts;
}


//print all posts sorted by catgeory [for homepage]
function categories(){

    global $db;
    
    $cat1 = array();
    $cat2 = array();
    $cat3 = array();
    $allPosts = array(
            "cat1"  => array(),
            "cat2"  => array(),
            "cat3"  => array()        

    );



    $db->where ("category", 1); 
    $cat1posts = $db->get("posts");

    $timeAgo = new TimeAgo();

    foreach ($cat1posts as $u) {
        
        $datee =  $timeAgo->inWords($u['createdat']); 
        $hashPost = convertHashtags($u['posts']);

        $allPosts['cat1'][] = array( 
                    "id"                => $u['id'],
                    "username"          => $u['username'],
                    "post"              =>  $u['posts'] ,
                    "category"          => $u['category'],
                    "spamCount"         => $u['isSpam'],
                    "humantimestamp"    => $datee,
                    "machinetimestamp"  => $u['createdat'] 
        );

    }

    $db->where ("category", 2); 
    $cat2posts = $db->get("posts");
    foreach ($cat2posts as $x) {
        
        $datee =  $timeAgo->inWords($x['createdat']);  
        $hashPost = convertHashtags($x['posts']);

        $allPosts['cat2'][] = array( 
                    "id"                => $x['id'],
                    "username"          => $x['username'],
                    "post"              => $x['posts'] ,
                    "category"          => $x['category'],
                    "spamCount"         => $x['isSpam'],
                    "humantimestamp"    => $datee,
                    "machinetimestamp"  => $x['createdat'] 
        );

    }
    $db->where ("category", 3); 
    $cat3posts = $db->get("posts");

    foreach ($cat3posts as $w) {
        
        $datee =  $timeAgo->inWords($w['createdat']);  
        $hashPost = convertHashtags($w['posts']);

        $allPosts['cat3'][] = array( 
                    "id"                => $w['id'],
                    "username"          => $w['username'],
                    "post"              => $w['posts'] ,
                    "category"          => $w['category'],
                    "spamCount"         => $w['isSpam'],
                    "humantimestamp"    => $datee,
                    "machinetimestamp"  => $w['createdat'] 
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
        $datee = date('jS \of F Y h:i:s A',strtotime($u['timestamp']));

        $allComms[] = array(

            "id" => $u['id'], 
            "comment" => $u['comment'],
            "commhumantimestamp" => $datee,
            "commmachinetimestamp"  => $u['timestamp']


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

            $datee = date('jS \of F Y h:i:s A',strtotime($u['createdat']));

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