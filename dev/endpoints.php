<?php
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

$app->run();
?>