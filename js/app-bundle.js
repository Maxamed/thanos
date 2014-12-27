/*! ******************************
  Handlebars helpers
  *******************************/

// debug helper
// usage: {{debug}} or {{debug someValue}}
// from: @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});


//  return the first item of a list only
// usage: {{#first items}}{{name}}{{/first}}
Handlebars.registerHelper('first', function(context, block) {
  return block(context[0]);
});



// a iterate over a specific portion of a list.
// usage: {{#slice items offset="1" limit="5"}}{{name}}{{/slice}} : items 1 thru 6
// usage: {{#slice items limit="10"}}{{name}}{{/slice}} : items 0 thru 9
// usage: {{#slice items offset="3"}}{{name}}{{/slice}} : items 3 thru context.length
// defaults are offset=0, limit=5
// todo: combine parameters into single string like python or ruby slice ("start:length" or "start,length")
Handlebars.registerHelper('slice', function(context, block) {
  var ret = "",
      offset = parseInt(block.hash.offset) || 0,
      limit = parseInt(block.hash.limit) || 5,
      i = (offset < context.length) ? offset : 0,
      j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

  for(i,j; i<j; i++) {
    ret += block(context[i]);
  }

  return ret;
});




//  return a comma-serperated list from an iterable object
// usage: {{#toSentence tags}}{{name}}{{/toSentence}}
Handlebars.registerHelper('toSentence', function(context, block) {
  var ret = "";
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + block(context[i]);
    if (i<j-1) {
      ret = ret + ", ";
    };
  }
  return ret;
});



//  format an ISO date using Moment.js
//  http://momentjs.com/
//  moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
//  usage: {{dateFormat creation_date format="MMMM YYYY"}}
Handlebars.registerHelper('dateFormat', function(context, block) {
  if (window.moment) {
    var f = block.hash.format || "MMM Do, YYYY";
    return moment(Date(context)).format(f);
  }else{
    return context;   //  moment plugin not available. return data as is.
  };
});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["postComment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<form action=\"#\" method=\"post\"> \n  <fieldset>\n    <legend>Post Comment</legend>\n    <label for=\"\" class=\"Input\">\n      <span class=\"Input-label\"></span>\n      <textarea name=\"post\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n    </label>\n  </fieldset>\n  <fieldset>\n    <label for=\"\" class=\"Input\">\n      <span class=\"Input-label\"></span>\n      <select name=\"category\" id=\"category\">\n        <option value=\"FMYLIFE\">F MY LIFE</option>\n        <option value=\"stwrldprbl\">First World Problems</option>\n        <option value=\"justcase\">Just Because</option>\n      </select>\n    </label>\n  </fieldset>\n  <button type=\"submit\" name=\"post\" id=\"post\" class=\"Button\">Save Comment</button>\n\n</form>";
},"useData":true});



this["Handlebars"]["templates"]["postlist"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <article class=\"Post\"> \n    "
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " Said : \n    <div class=\"Post-content\">\n      ";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n      <a href=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"Post-link u-posAbsolute\">\n        <span class=\"u-hiddenVisually\">View Post</span>\n      </a>\n    </div>\n    <span>Category: "
    + escapeExpression(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"category","hash":{},"data":data}) : helper)))
    + "</span><p>\n    <footer class=\"Post-meta\">\n      <ul class=\"Copy--small\">\n        <li class=\"u-inline\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.commcount : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </li>\n        <li class=\"u-inline\">\n          <a href=\"#\">\n            <svg class=\"Icon Icon-facebook\">\n              <use xlink:href=\"#Icon-facebook\" />\n            </svg>\n            <span class=\"u-hiddenVisually\">Share on Facebook</span>\n          </a>\n        </li>\n        <li class=\"u-inline\">\n          <a href=\"#\">\n            <svg class=\"Icon Icon-twitter\">\n              <use xlink:href=\"#Icon-twitter\" />\n            </svg>\n            <span class=\"u-hiddenVisually\">Share on Twitter</span>\n          </a>\n        </li>\n        <li class=\"u-inline\">\n          <time>  "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, (depth0 != null ? depth0.timestamp : depth0), {"name":"dateFormat","hash":{
    'format': ("MMMM YYYY")
  },"data":data})))
    + "</time>\n        </li>\n      </ul>  \n    </footer>\n  </article>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <svg class=\"Icon Icon-comments\">\n            <use xlink:href=\"#Icon-comments\" />\n          </svg>\n          "
    + escapeExpression(((helper = (helper = helpers.commcount || (depth0 != null ? depth0.commcount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"commcount","hash":{},"data":data}) : helper)))
    + "<span class=\"u-hiddenVisually\"> comments in this post</span>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          No Comments,<a class=\"PostId\" href=\"\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"> add one</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<section role=\"region\" class=\"Posts u-columnsHalf u-md-columnsFull\">\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>\n<section role=\"region\">\n  <form action=\"app/functions.php\" method=\"post\">\n    <fieldset class=\"Panel Panel-outline\">\n      <legend>Create New Post</legend>\n      <input type=\"hidden\" name=\"_METHOD\" value=\"PUT\">\n              \n      <label for=\"post\" class=\"Input\">\n        <span class=\"Input-label\">What's on Your Mind?</span>\n        <textarea cols=\"40\" rows=\"8\" name=\"post\" id=\"post\"></textarea>\n      </label>\n      <label for=\"select-choice\" class=\"Input\">\n        <san class=\"Input-label\">Post Category</san>\n        <select name=\"category\" id=\"category\">\n          <option value=\"FMYLIFE\">F MY LIFE</option>\n          <option value=\"stwrldprbl\">First World Problems</option>\n          <option value=\"justcase\">Just Because</option>\n        </select>\n      </label>\n      \n      <button type=\"submit\" name=\"submit\" id=\"submit\" class=\"Button u-sm-sizeFull\">Publish Post</button>\n      \n    </fieldset>\n  </form>\n</section>\n\n";
},"useData":true});



this["Handlebars"]["templates"]["singlePost"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <article class=\"Post-Comment\">\n    <svg class=\"Icon Icon-person\">\n      <use xlink:href=\"#Icon-person\" />\n    </svg>\n   ";
  stack1 = ((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comment","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " on "
    + escapeExpression(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timestamp","hash":{},"data":data}) : helper)))
    + "\n </article>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<article class=\"Post\">\n  <header class=\"Post-header\">\n    <h2 class=\"Post-title H5\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.username : stack1), depth0))
    + " Said:</h2>\n  </header>\n  <div class=\"Post-content\">\n    ";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.post : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    <p><strong>Category:</strong> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.category : stack1), depth0))
    + "</p>\n  </div>\n  <footer class=\"Post-meta\">\n    Posted on <time datetime=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.post : stack1)) != null ? stack1.posts : stack1)) != null ? stack1.timestamp : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.date : stack1), depth0))
    + "</time>.\n    <ul>\n      <li>\n        <a href=\"\">\n          <svg class=\"Icon Icon-favorite\">\n            <use xlink:href=\"#Icon-favorite\" />\n          </svg>\n      </a></li>\n      <li><a href=\"functions.php?SpamId="
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.id : stack1), depth0))
    + "\">Report Spam</a></li>\n    </ul>  \n  </footer>\n</article>\n<section role=\"region\" class=\"Comments\">\n  <header class=\"Comments-header\">\n    <h3>Comments</h3>\n    <a href=\"\">Add Comment</a>\n  </header>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>\n<section role=\"region\">\n  <form action=\"#\" method=\"post\" id='commentSubmit'>\n    <fieldset>\n      <legend>Add a Comment</legend>\n      <label for=\"exampleMessage\">Comment</label>\n      <textarea class=\"u-full-width\" placeholder=\"Hi Dave …\" name=\"comment\"></textarea>\n      <input type=\"hidden\" name=\"postid\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.id : stack1), depth0))
    + "\">\n      <input class=\"button-primary\" type=\"submit\" id=\"submitComment\" value=\"Submit\"  name=\"commentSubmit\">\n    </fieldset>\n  </form>\n</section>";
},"useData":true});
var App = (function () {

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
//submit post
$(document).ready(function(){
  $("#submitPost").click(function(e){
      e.preventDefault();
    $.ajax({type: "POST",
            url: "app/functions.php",
            data: { post: $("#post").val(),category: $("#category").val()  },
            success:function(result){
              console.log('done'); // do nice animation
    }});
  });
});

//submit comment
$(document).ready(function(){
  $("#submitComment").click(function(e){
      e.preventDefault();
    $.ajax({type: "POST",
            url: "app/functions.php",
            data: { comment: $("#comment").val(),postid: $("#postid").val()  },
            success:function(result){
              console.log('done'); // do nice animation
    }});
  });
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



