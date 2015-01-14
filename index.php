<?php require_once("app/functions.php");?>
<!doctype html>
<html lang="en_GB">
<head>
	<meta charset="UTF-8">
	<title>Index</title>
  <!-- Mobile Specific Metas
  ================================================== -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <script src="/js/vendor.js"></script>
  <link rel="stylesheet" href="css/thanos-suit.dev.css">
  <!-- Favicons
  ================================================== -->
  <link rel="shortcut icon" href="images/favicon.ico">
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png"> 
</head>
<body class="Site OffCanvas">
	<?php include("img/svg-icons.min.svg");?>
	<header class="Site-banner" role="banner">
		<div class="Container">
			<!-- Menu Toggle -->
			<a href="#siteNav" aria-controls="siteNav" 
				aria-expanded="false" 
				aria-label="Toggle Navigation" 
				class="Button" 
				role="button" 
				type="button">
				<svg class="Icon">
					<use xlink:href="#Icon-menu" />
				</svg>  
			</a>
			<a class="Site-logo" href="">Thanos</a>
			<form action="#/search" class="SiteSearch Panel Panel--withPaddingSmall Panel--raised u-shapeRounded" method="POST">
				<fieldset class="FieldGroup FieldGroup--inline Panel-content">
					<legend class="u-hiddenVisually">Search for Posts</legend>
					<ul class="Arrange Arrange--widthGutter">
						<li class="Arrange-sizeFill">
							<label for="siteSearch" class="Input">
								<span class="Input-label u-hiddenVisually">Find Posts</span>            
								<input type="search" placeholder="Find Posts" name="find_posts" id="siteSearch"  class="Input-control" />
							</label>
						</li>
						<li class="Arrange-sizeFit">
							<button type="submit" class="Button u-alignTop">
								<span class="Button-content">
									<svg class="Icon">
										<use xlink:href="#Icon-search" />
									</svg>
								</span>
							</button>
						</li>
					</ul>
				</fieldset>  
			</form>
			<!-- <nav>
				Add icons and links for Latest, Most Favourited and Most Commeted Post
			</nav> -->
		</div>
	</header>
	<aside 
		class="Panel Panel--withPaddingMedium OffCanvas-panel u-posFixed u-size3of12 u-md-size8of12 u-sm-size10of12"
		id="siteNav" 
		role="complementary">    

		<nav class="SiteNav Panel-content" role="nav">
			<dl class="SiteNav-groups">
				<dt class="SiteNav-categoryTitle">All Shouts</dt>
				<dd class="SiteNav-categoryList">
					<ul class="NavList">
						<li class="Grid-cell"><a href="">Latest</a></li>
						<li class="Grid-cell"><a href="">Random</a></li>
						<li class="Grid-cell"><a href="">Best</a></li>
						<li class="Grid-cell"><a href="">By Category</a>
							<ul class="NavList ToggleContent">
								<li><a href="">Category 1</a></li>
								<li><a href="">Category 2</a></li>
								<li><a href="">Category 3</a></li>
								<li><a href="">Category 4</a></li>
							</ul>
						</li>
					</ul>
				</dd>
				<dt class="SiteNav-categoryTitle">Category Name</dt>
				<dd class="SiteNav-categoryList">
					<ul>
						<li class="Grid-cell"><a href="">Link</a></li>
						<li class="Grid-cell"><a href="">Link</a></li>
						<li class="Grid-cell"><a href="">Link</a></li>
					</ul>
				</dd>
				<dt class="SiteNav-categoryTitle">Category Name</dt>
				<dd class="SiteNav-categoryList">
					<ul>
						<li class="Grid-cell"><a href="">Link</a></li>
						<li class="Grid-cell"><a href="">Link</a></li>
						<li class="Grid-cell"><a href="">Link</a></li>
					</ul>
				</dd>
			</dl>
		</nav>
		<a href="" class="Panel-content">Test Link</a>
	</aside>
	<!-- Primary Page Layout
	================================================== -->
	<div class="Container">
		<main class="Grid Grid--withGutter Grid--alignCenter" id="viewPage" role="main">
			<div class="Grid-cell" id="pageView">
				<!-- Page Views Here -->
			</div>
		</main>
	</div>
	<div
		class="fb-like"
		data-share="true"
		data-width="450"
		data-show-faces="true">
	</div><a href="https://twitter.com/dewalf" class="twitter-follow-button" data-show-count="false">Follow @dewalf</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
	<footer class="SiteFooter" role="contentinfo">
		<!-- Footer
		================================================ -->
	</footer>
	<div class="OffCanvas-overlay"></div>
	<script src="/js/app-bundle.js"></script> 
	<script type="text/javascript">
	  //facebook crap

	  $.ajaxSetup({ cache: true });
	  $.getScript('//connect.facebook.net/en_UK/all.js', function(){

	  	FB.init({appId: "823743447688023", status: true, cookie: true});
	  	$('body').on('click','.posttofeed', function(){
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
	</script>
	<!-- End Document
	================================================== -->
</body>
</html>