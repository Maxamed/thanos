Handlebars.registerPartial("categories", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<select name=\"new_post_category\" id=\"postCategory\">\n  <option value=\"1\">Category 1</option>\n  <option value=\"2\">Category 2</option>\n  <option value=\"3\">Category 3</option>\n  <option value=\"4\">Category 4</option>\n</select>";
  },"useData":true}));

this["JST"] = this["JST"] || {};

this["JST"]["templates/clientside/all_posts.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.post, '  ', 'post', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<section class=\"Posts\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.posts : depth0)) != null ? stack1.post : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>";
},"usePartial":true,"useData":true});



this["JST"]["templates/clientside/create_post.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<form action=\"/create-post\" method=\"POST\" class=\"NewPost\">\n  <fieldset>\n    <legend>Speak Your Mind</legend>\n    <label for=\"postTitle\" class=\"Label\">\n      <span class=\"Label-text\"></span>\n      <input \n       type=\"text\" \n       name=\"postTitle\" \n       id=\"postTitle\" \n       value=\"";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.newPost : depth0)) != null ? stack1.title : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"\n       />\n    </label>\n    <label for=\"postContent\" class=\"Label\">\n      <span class=\"Label-text\">Post</span>\n      <textarea name=\"postContent\" id=\"postContent\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.newPost : depth0)) != null ? stack1.content : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</textarea>\n    </label>\n    <label class=\"Label\">\n      <span class=\"Label-text\" for=\"postCategory\">Select Category</span>\n";
  stack1 = this.invokePartial(partials['post.category'], '      ', 'post.category', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </label>\n    <button type=\"submit\" class=\"Button Button\">Share Some Shit</button>\n  </fieldset>\n</form>";
},"usePartial":true,"useData":true});



this["JST"]["templates/clientside/post.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "";
},"3":function(depth0,helpers,partials,data) {
  return "h3";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "Posted on <time datetime=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.machineDate : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.humanDate : stack1), depth0))
    + "</time>.";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.categories, '      ', 'categories', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.commentsCount : stack1), depth0))
    + "\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<section role=\"region\" class=\"PostComments\">\n";
  stack1 = this.invokePartial(partials['post.comments'], '  ', 'post.comments', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<article class=\"Post\">\n  <";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.headingLevel : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " class=\"Post-title H5\">\n    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.author : stack1), depth0))
    + " said:\n  </";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.headingLevel : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">  \n  <div class=\"Post-content\">\n    ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.content : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </div>\n  <footer class=\"Post-footer\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.timestamp : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.categories : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.commentCount : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </footer>\n</article>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showComments : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});