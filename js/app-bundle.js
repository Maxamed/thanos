
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["postComment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<form action=\"#\" method=\"post\"> \n  <fieldset>\n    <legend>Post Comment</legend>\n    <label for=\"\" class=\"Input\">\n      <span class=\"Input-label\"></span>\n      <textarea name=\"post\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n    </label>\n  </fieldset>\n  <fieldset>\n    <label for=\"\" class=\"Input\">\n      <span class=\"Input-label\"></span>\n      <select name=\"category\" id=\"category\">\n        <option value=\"FMYLIFE\">F MY LIFE</option>\n        <option value=\"stwrldprbl\">First World Problems</option>\n        <option value=\"justcase\">Just Because</option>\n      </select>\n    </label>\n  </fieldset>\n  <button type=\"submit\" name=\"post\" id=\"post\" class=\"Button\">Save Comment</button>\n\n</form>";
},"useData":true});



this["Handlebars"]["templates"]["postlist"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<li> "
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " Said : ";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " <a id=\"singlePost\" herf=\"#\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"><br><span>"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "</span> - <span>Category: "
    + escapeExpression(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"category","hash":{},"data":data}) : helper)))
    + "</span><p><a href=functions.php?SpamId="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + ">Report Spam</a></p>comments("
    + escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comments","hash":{},"data":data}) : helper)))
    + ")<hr></li>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul> \n\n";
},"useData":true});



this["Handlebars"]["templates"]["singlePost"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<article class=\"Post\">\n  <header class=\"Post-header\">\n    <h3 class=\"Post-title H5\">"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " Said:</h3>\n  </header>\n  <div class=\"Post-content\">\n    ";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    <hr/>\n    <p><strong>Category:</strong> "
    + escapeExpression(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"category","hash":{},"data":data}) : helper)))
    + "</p>\n    <a href=\"post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"Post-link u-posAbsolute\"><span class=\"u-hiddenVisually\"></span></a>\n  </div>\n  <footer class=\"Post-footer\">\n    Posted on <time datetime=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.machineDate : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.humanDate : stack1), depth0))
    + "</time>.\n    <ul>\n      <li><a href=\"\">\n        \n      </a></li>\n      <li><a href=\"\">\n        \n      </a></li>\n      <li><a href=\"\">\n        \n      </a></li>\n      <li><a href=\"functions.php?SpamId="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">Report Spam</a></li>\n    </ul>  \n  </footer>\n</article>\n";
},"useData":true});
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
 
