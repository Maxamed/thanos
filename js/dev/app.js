;var App = (function () {
Handlebars.partials = Handlebars.templates;
  var singlePostURL = "http://thanos.pandora.dev/app/endpoints.php/post/"
  , $viewContainer   = $('#pageView')
  , allPostsCall 
  , doSingleView
  , doAllView
  , getSinglePost;
  
  allPostsCall    = function( req ) { $.when( $.ajax( req ) ).done(doAllView); };
  getSinglePost   = function( postID ) { $.when( $.ajax( singlePostURL+postID ) ).done(doSingleView); };
  getSearch       = function(reqURL,searchTerm){ $.when( $.ajax( reqURL+searchTerm ) ).done(doSRPView); };
  getCategoryView = function(reqURL,CatID){  
        $.when( $.ajax( reqURL+CatID ) ).done( doCatList);  
      }

  doAllView       = function(jsonObj){  
    $viewContainer.empty();
    var template  = Handlebars.templates.categoryIndex(jsonObj);
    $viewContainer.html(template); 
  }

  doCatList       = function(jsonObj){  
    console.log(jsonObj);
    $viewContainer.empty();
    var template  = Handlebars.templates.postlist(jsonObj);
    $viewContainer.html(template); 
  }

  doSRPView       = function(jsonObj){ 
    $viewContainer.empty();
    var template  = Handlebars.templates.searchResults(jsonObj);
    $viewContainer.html(template);   
  }
  doSingleView    = function(jsonObj){ 
    $viewContainer.empty();
    var template  = Handlebars.templates.singlePost(jsonObj);
    $viewContainer.html(template); console.log(template)
  }
 
  return {
    getAllPosts     : function( reqURL ) { allPostsCall(reqURL);},
    getSinglePost   : function(postID){ getSinglePost(postID);},
    searchPosts     : function(reqURL,searchTerm){ getSearch(reqURL,searchTerm);},
    getCategoryList : function(reqURL,CatID){ getCategoryView(reqURL,CatID);  }
  };
 
})();

App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/categories");

//navigation
$( "body" ).on( "click", ".toggleNav", function() { 
  
   $( "body" ).toggleClass('is-active');
});
$( "body" ).on( "click", ".OffCanvas-overlay", function() {
   $( "body" ).toggleClass('is-active');
});


 
// handle routing

(function() {
 
    var app = Sammy('body');
 
    app.run('#/posts');
    app.run('#/post/:id');
    app.run('#/isSpam/:id'); 
    app.run('#/category/:id'); 

    var app = Sammy.apps.body;
 
 
    //post story
    app.post('#/gaunlet', function(context) {
      
      $.ajax({type: "POST",
            url: "../app/functions.php",
            data: { post: this.params['post'],category: this.params['category'] },
            success:function(result){
              App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/categories");
            }
          });

    });

    //post comment
    app.post('#/titan', function(context) { 

      $.ajax({type: "POST",
            url: "../app/functions.php",
            data: { comment: this.params['comment'],postid: this.params['postid'] },
            success:function(result){
              App.getSinglePost( result );
            }
          });

    });

    app.get('#/posts', function(context) {
        App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/categories");
    });
    app.get('#/post/:id', function() { 
        App.getSinglePost( this.params['id'] );
    });
    app.get('#/category/:id', function() { 
        App.getCategoryList( "http://thanos.pandora.dev/app/endpoints.php/category/",this.params['id'] );  
    });


    app.post('#/search', function() {   
        App.searchPosts("http://thanos.pandora.dev/app/endpoints.php/posts/search/",  this.params['find_posts'] );
        return false;
    }); 
    app.get('#/isSpam/:id', function() { 
          $.ajax({type: "POST",
            url: "../app/functions.php",
            data: { SpamId: this.params['id'] },
            success:function(result){
              App.getSinglePost( result );
            }
          });
    });

    app.get(/.*/, function() {  
        App.getAllPosts("http://thanos.pandora.dev/app/endpoints.php/categories");

    });
 
})();




//ugly facebook crap

$(document).ready(function(){

  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({appId: "823743447688023", status: true, cookie: true});
    $(document.body).on('click',"a[data-share='FB']", function(){
      console.log('facebook feed');
        var obj = {
            method: 'feed',
            link: $(this).data( "posturl" ),
            picture: 'http://fbrell.com/f8.jpg',
            name: 'test Dialogs',
            caption: 'blah',
            description: $(this).data( "post" )
          };

        function callback(response) {
          document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }

          FB.ui(obj, callback);
      }); 
    

  });
});


