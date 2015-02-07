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

this["Handlebars"]["templates"]["categoryIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "              <li class=\"Panel-body Panel-content LayoutFlex LayoutFlex--withGutter\">\n                <strong class=\"LayoutFlex-cell\" id=\"postHeading"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " </strong>\n                <span class=\"u-textTruncate\">";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n                <time   datetime=\""
    + escapeExpression(((helper = (helper = helpers.machinetimestamp || (depth0 != null ? depth0.machinetimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"machinetimestamp","hash":{},"data":data}) : helper)))
    + "\">\n                  <span class=\"u-hiddenVisually LayoutFlex-cell\">Posted </span>"
    + escapeExpression(((helper = (helper = helpers.humantimestamp || (depth0 != null ? depth0.humantimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"humantimestamp","hash":{},"data":data}) : helper)))
    + "</time>\n                  <svg class=\"Icon\">\n                    <use xlink:href=\"#Icon-comments\" />\n                  </svg>\n                  <a href=\"/#/post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"Panel-link\"><span class=\"u-hiddenVisually\">Got ot postname</span></a>\n              </li>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "              <li class=\"Panel-body Panel-content LayoutFlex LayoutFlex--withGutter\">\n                <strong class=\"LayoutFlex-cell\" id=\"postHeading"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " </strong>\n                <span class=\"u-textTruncate\">";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n                <time   datetime=\""
    + escapeExpression(((helper = (helper = helpers.machinetimestamp || (depth0 != null ? depth0.machinetimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"machinetimestamp","hash":{},"data":data}) : helper)))
    + "\">\n                  <span class=\"u-hiddenVisually LayoutFlex-cell\">Posted </span>"
    + escapeExpression(((helper = (helper = helpers.humantimestamp || (depth0 != null ? depth0.humantimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"humantimestamp","hash":{},"data":data}) : helper)))
    + "</time>\n                  <svg class=\"Icon\">\n                    <use xlink:href=\"#Icon-comments\" />\n                  </svg>\n                  <a  href=\"/#/post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"  class=\"Panel-link\"><span class=\"u-hiddenVisually\">Got ot postname</span></a>\n              </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <section>\n          <header>\n            <h2>Latest Posts</h2>\n          </header>\n          <!-- Each Block of Posts by category -->\n          <section>\n            <h3>Category 1</h3> <a href=\"#/category/1\">Link to posts in category 1</a>\n            <ul class=\"Panel Panel--withPadding \">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.cat1 : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </ul>\n          </section> \n        <!-- Each Block of Posts by category -->\n\n        <!-- Each Block of Posts by category -->\n          <section>\n            <h3>Category 2</h3><a href=\"#/category/2\">Link to posts in category 2</a>\n            <ul class=\"Panel Panel--withPadding \">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.cat2 : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </ul>\n          </section>\n        <!-- Each Block of Posts by category -->\n\n                <!-- Each Block of Posts by category -->\n          <section>\n            <h3>Category 3</h3><a href=\"#/category/3\">Link to posts in category 3</a>\n            <ul class=\"Panel Panel--withPadding \">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.cat3 : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </ul>\n          </section>\n        <!-- Each Block of Posts by category -->\n\n\n        </section>\n \n</section>\n";
  stack1 = this.invokePartial(partials.compose, '', 'compose', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});



this["Handlebars"]["templates"]["compose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<section role=\"region\" class=\"Sheet Sheet--postionBottomRight Panel\">\n  <form action=\"#/gaunlet\" method=\"post\">\n    <fieldset>\n      <legend id=\"createPostHeading\" class=\"H3\">Create New Post</legend> \n              \n      <label for=\"post\" class=\"Input\">\n        <span class=\"Input-label\">What's on Your Mind?</span>\n        <textarea cols=\"40\" rows=\"8\" name=\"post\" id=\"post\" required></textarea>\n      </label>\n      <label for=\"select-choice\" class=\"Input\"> \n        <span class=\"Input-label\">Post Category</span>\n        <select name=\"category\" id=\"category\">\n          <option value=\"1\">F MY LIFE</option>\n          <option value=\"2\">First World Problems</option>\n          <option value=\"3\">Just Because</option>\n        </select>\n      </label>\n      \n      <button type=\"submit\" name=\"submit\" id=\"submit\" class=\"Button u-sm-sizeFull\">Publish Post</button>\n      \n    </fieldset>\n  </form>\n</section>";
  },"useData":true});



this["Handlebars"]["templates"]["postComment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<form action=\"#\" method=\"post\"> \n  <fieldset>\n    <legend>Post Comment</legend>\n    <label for=\"\" class=\"Input\">\n      <span class=\"Input-label\"></span>\n      <textarea name=\"post\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n    </label>\n  </fieldset>\n  <fieldset>\n    <label for=\"\" class=\"Input\">\n      <span class=\"Input-label\"></span>\n      <select name=\"category\" id=\"category\">\n        <option value=\"FMYLIFE\">F MY LIFE</option>\n        <option value=\"stwrldprbl\">First World Problems</option>\n        <option value=\"justcase\">Just Because</option>\n      </select>\n    </label> \n  </fieldset>\n  <button type=\"submit\" name=\"post\" id=\"post\" class=\"Button\">Save Comment</button>\n\n</form>";
},"useData":true});



this["Handlebars"]["templates"]["postlist"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <article class=\"Panel Panel--withPadding u-shapeRounded\" aria-labeledby=\"postHeading"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"> \n    <header class=\"Panel-content Panel-heading\">\n      <h3 class=\"Post-title u-textNoWrap H5\" id=\"postHeading"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " Said:</h3>\n      <time \n        class=\"Post-date Copy--small\" \n        datetime=\""
    + escapeExpression(((helper = (helper = helpers.machinetimestamp || (depth0 != null ? depth0.machinetimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"machinetimestamp","hash":{},"data":data}) : helper)))
    + "\"\n        id=\"postDate\">\n        <span class=\"u-hiddenVisually\">Posted:</span>"
    + escapeExpression(((helper = (helper = helpers.humantimestamp || (depth0 != null ? depth0.humantimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"humantimestamp","hash":{},"data":data}) : helper)))
    + "\n      </time>\n    </header>\n    <div class=\"Panel-content Panel-body u-posRelative\">\n      <p aria-labelledby=\"postDate\">";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>\n      <div class=\"Post-comments u-posAbsolute\">\n        <svg class=\"Icon Icon-comments Post-commentsCountIcon\">\n          <use xlink:href=\"#Icon-comments\" />\n        </svg>\n        <span class=\"Post-commentsCount\">"
    + escapeExpression(((helper = (helper = helpers.commcount || (depth0 != null ? depth0.commcount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"commcount","hash":{},"data":data}) : helper)))
    + "<span class=\"u-hiddenVisually\"> comments in this post</span></span>\n      </div>\n      <a href=\"/#/post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"Post-link u-posAbsolute u-block\">\n        <span class=\"u-hiddenVisually\">View Entire Post</span>\n      </a>\n    </div>\n    <footer class=\"Panel-content Panel-footer\">\n      <ul class=\"u-alignMiddle Arrange\">\n        <li class=\"Arrange-sizeFit\">\n          <a href=\"#\" class=\"Copy--small Tag Tag--default\">"
    + escapeExpression(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"category","hash":{},"data":data}) : helper)))
    + "</a>\n        </li>\n        <li class=\"Post-metaShareLinks Copy--small u-textRight\">\n          <a href=\"#\" \n            data-share=\"FB\"\n            data-posturl=\"thanos.pandora.dev/#/post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" \n            data-post=\""
    + escapeExpression(((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper)))
    + "\">\n            <svg class=\"Icon Icon-facebook\">\n              <use xlink:href=\"#Icon-facebook\" />\n            </svg>\n            <span class=\"u-hiddenVisually\">Share on Facebook</span>\n          </a>\n          <a href=\"#\"\n            data-share=\"twitter\"\n            data-posturl=\"thanos.pandora.dev/#/post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" \n            data-post=\""
    + escapeExpression(((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper)))
    + "\">\n            <svg class=\"Icon Icon-twitter\">\n              <use xlink:href=\"#Icon-twitter\" />\n            </svg>\n            <span class=\"u-hiddenVisually\">Share on Twitter</span>\n          </a>\n        </li>\n      </ul>  \n    </footer>\n  </article> \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<section role=\"region\" class=\"Posts\">\n  <header class=\"PageTitle\">\n    <h3 class=\"PageTitle-heading\">List category 1</h3>\n  </header>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section> \n";
},"useData":true});



this["Handlebars"]["templates"]["searchResults"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "  <div class=\"Panel Panel-outline Panel--alertError\">\n    Oh Shit!\n  </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "  <h2 class=\"SearchResults-title\">Found "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.resultCount : stack1), depth0))
    + " results matching: <strong>\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.searchTerm : stack1), depth0))
    + "\"</strong></h2>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.results : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <article class=\"Post\" aria-labeledby=\"postHeading"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"> \n    <h3 class=\"Post-title H5\" id=\"postHeading"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + " Said:</h3>\n    <div class=\"Post-content\">\n      <p>";
  stack1 = ((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"post","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>\n      <p class=\"Post-comments u-posAbsolute\">\n        <svg class=\"Icon Icon-comments\">\n          <use xlink:href=\"#Icon-comments\" />\n        </svg>\n        <span class=\"Post-commentsCount\">"
    + escapeExpression(((helper = (helper = helpers.commcount || (depth0 != null ? depth0.commcount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"commcount","hash":{},"data":data}) : helper)))
    + "<span class=\"u-hiddenVisually\"> comments in this post</span></span>\n      </p>\n      <a href=\"/#/post/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-PostId=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"Post-link u-posAbsolute u-block\">\n        <span class=\"u-hiddenVisually\">View Entire Post</span>\n      </a>\n    </div>\n  </article>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<section role=\"region\" class=\"Posts SearchResults\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.error : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>";
},"useData":true});



this["Handlebars"]["templates"]["singlePost"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <img src='"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.image : stack1), depth0))
    + "'> \n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <article class=\"Panel\">\n    <svg class=\"Icon Icon-person\">\n      <use xlink:href=\"#Icon-person\" />\n    </svg>\n   ";
  stack1 = ((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comment","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " on "
    + escapeExpression(((helper = (helper = helpers.commhumantimestamp || (depth0 != null ? depth0.commhumantimestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"commhumantimestamp","hash":{},"data":data}) : helper)))
    + "\n </article>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<article class=\"Panel Panel--withPaddingSm\">\n  <header class=\"Panel-header Panel-content\">\n    <h2 class=\"Post-title H5\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.username : stack1), depth0))
    + " Said:</h2>\n  </header>\n  <div class=\"Panel-body Panel-content\">\n    ";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.post : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    <p><strong>Category:</strong> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.category : stack1), depth0))
    + "</p>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.image : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n  <footer class=\"Panel-footer Panel-content\">\n    <form action=\"#/titan\" method=\"post\" id='commentSubmit' class=\"Arrange Arrange--withGutter\">\n      <fieldset class=\"Arrange-sizeFill\">    \n        <label for=\"\" class=\"Input\">\n          <span class=\"Input-label u-hiddenVisually\">Add Comment</span>\n          <textarea class=\"Input-control Input-controlMultiline\" placeholder=\"Comment\" name=\"comment\" required></textarea>\n        </label>\n        <input type=\"hidden\" name=\"postid\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.posts : stack1)) != null ? stack1.id : stack1), depth0))
    + "\">\n      </fieldset>\n      <fieldeset class=\"Arrange-sizeFit\">\n        <button class=\"Button\" type=\"submit\" name=\"commentSubmit\" id=\"submitComment\">\n          <span class=\"Button-content\" aria-label=\"Publish Comment\">\n           <svg class=\"Icon\">\n             <use xlink:href=\"#Icon-add\" />\n           </svg> \n          </span>\n        </button>\n      </fieldeset>\n  </form>  \n  </footer> \n</article>\n<section role=\"region\" class=\"Comments\">\n  <header class=\"Comments-header\">\n    <h3>Comments</h3>\n    <a href=\"\">Add Comment</a>\n  </header>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.comments : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>\n";
},"useData":true});
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


