<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);
require_once("gauntlet.php");
require 'lib/Slim/Slim.php';
\Slim\Slim::registerAutoloader(); 
$app = new \Slim\Slim(); 
//view all posts 
$app->get("/posts", function () use ($app) {
    $posts = allPosts();
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($posts);
});

//view single post
$app->get("/post/:id", function ($id) use ($app) {
    $s = sPost($id); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

//view comments
$app->get("/post/:id/comments", function ($id) use ($app) {
    $s = allComments($id); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

 


$app->run();
?>