var App = (function () {

  var singlePostURL = "http://thanos.pandora.dev/app/endpoints.php/post/"
  ,allPostsCall 
  ,doSingleView
  ,doAllView
  ,getSinglePost;
  
   allPostsCall = function( req ) { $.when( $.ajax( req ) ).done(doAllView); };

   doAllView = function(jsonObj){ 
        var template = Handlebars.templates.postlist(jsonObj);
        $('#postList').html(template); 
  }

   getSinglePost = function( postID ) { $.when( $.ajax( singlePostURL+postID ) ).done(doSingleView); };

   doSingleView = function(jsonObj){ 
    console.log(jsonObj)
        $('#postList').empty();
        var template = Handlebars.templates.singlePost(jsonObj);
        $('#singlePost').html(template); console.log(template)
  }
 


  return {

    getAllPosts: function( req ) { allPostsCall(req);},
    getSinglePost:function(postID){ getSinglePost(postID);}
  };
 
})();

App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/posts");



$(document.body).on('click','a#singlePost',function(){ 
  
  App.getSinglePost( $(this).data("postid") );

});
 
