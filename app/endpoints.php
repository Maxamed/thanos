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

// view view all posts split by category
$app->get("/categories", function () use ($app) {
    $s = categories(); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

//view single post
$app->get("/post/:id", function ($id) use ($app) {
    $s = sPost($id); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

//search posts
$app->get("/posts/search/:id", function ($id) use ($app) {
    $s = Search($id); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

//view comments
$app->get("/post/:id/comments", function ($id) use ($app) {
    $s = allComments($id); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

// view category
$app->get("/category/:id", function ($id) use ($app) {
    $s = categoryPosts($id); 
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($s);
});

 


$app->run();
?>