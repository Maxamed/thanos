;var App = (function () {

  var singlePostURL = "http://thanos.pandora.dev/app/endpoints.php/post/"
  ,$viewContainer = $('#pageView')
  ,allPostsCall 
  ,doSingleView
  ,doAllView
  ,getSinglePost;
  
  allPostsCall  = function( req ) { $.when( $.ajax( req ) ).done(doAllView); };
  getSinglePost = function( postID ) { $.when( $.ajax( singlePostURL+postID ) ).done(doSingleView); };
  getSearch     = function(reqURL,searchTerm){ $.when( $.ajax( reqURL+searchTerm ) ).done(doAllView); }

  doAllView     = function(jsonObj){ 
        var template = Handlebars.templates.postlist(jsonObj);
        $viewContainer.html(template); 
  }
  doSingleView  = function(jsonObj){ 
    console.log(jsonObj)
        $viewContainer.empty();
        var template = Handlebars.templates.singlePost(jsonObj);
        $viewContainer.html(template); console.log(template)
  }
 


  return {

    getAllPosts   : function( reqURL ) { allPostsCall(reqURL);},
    getSinglePost : function(postID){ getSinglePost(postID);},
    searchPosts   : function(reqURL,searchTerm){ getSearch(reqURL,searchTerm);}
  };
 
})();

App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/posts");

//view single post
$(document.body).on('click','.PostId',function(e){ 
  e.preventDefault();
  App.getSinglePost( $(this).data("postid") );

});

$(document).ready(function(){
  //submit post
  $("#submitPost").click(function(e){
      e.preventDefault();
    $.ajax({type: "POST",
            url: "app/functions.php",
            data: { post: $("#post").val(),category: $("#category").val()  },
            success:function(result){
              console.log('done'); // do nice animation
    }});
  });

  //submit comment
  $("#submitComment").click(function(e){
      e.preventDefault();
    $.ajax({type: "POST",
            url: "app/functions.php",
            data: { comment: $("#comment").val(),postid: $("#postid").val()  },
            success:function(result){
              console.log('done'); // do nice animation
    }});
  });

  //submit search
  $( ".SiteSearch" ).submit(function( e ) {
    e.preventDefault();

    App.searchPosts("http://thanos.pandora.dev/app/endpoints.php/posts/search/",  $("#siteSearch").val() );

    

    $.ajax({type: "POST",
            url: "http://thanos.pandora.dev/app/endpoints.php/posts/search/",
            data: { post: $("#siteSearch").val() },
            success:function(result){
              console.log(result); // do nice animation
    }});

  });




});




// handle routing

(function() {
 
    var app = Sammy('body');
 
    $(document).ready(function() {
        app.run('#/posts');
        app.run('#/post/:id');
    });

    var app = Sammy.apps.body;
 
    app.get('#/posts', function(context) {
        console.log("You're in the Main route");
        App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/posts");
    });
    app.get('#/post/:id', function() { 
        App.getSinglePost( this.params['id'] );
      });
 
})();




