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
<body class="Site">
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
	<?php include("img/svg-icons.min.svg");?>
	<header class="Site-banner" role="banner">
		<div class="Container">
			<!-- Menu Toggle -->
			<a href="#siteNav" aria-controls="siteNav" 
				 aria-expanded="false" 
				 aria-label="Toggle navigation" 
				 class="Button Button-secondary" 
				 role="button" 
				 type="button">
				<svg class="Icon">
					<use xlink:href="#Icon-menu" />
				</svg>  
			</a>
			<a class="Site-logo" href="">Thanos</a>
			
			<form action="#" class="SiteSearch Grid Grid--withGutter" method="POST">
				<fieldset class="FieldGroup FieldGroup--inline Grid-cell u-size6of12">
					<legend class="u-hiddenVisually">Search for Posts</legend>
					<ul class="Arrange Arrange--widthGutter">
						<li class="Arrange-sizeFill">
							<label for="siteSearch">            
								<input type="search" placeholder="Find Posts" name="find_posts" id="siteSearch" class="FieldGroup-" />
							</label>
						</li>
						<li class="Arrange-sizeFit">
							<button type="submit" class="Button u-alignTop">
								<svg class="Icon">
									<use xlink:href="#Icon-search" />
								</svg>
							</button>
						</li>
					</ul>
				</fieldset>  
			</form>
		</div>
	</header>
	<!-- Primary Page Layout
	================================================== -->
	<div class="Container">
		<main class="Grid Grid--withGutter Grid--alignCenter" id="viewPage" role="main">
			<div class="Grid-cell u-lg-size8of12" id="pageView">
				<!-- Page Views Here -->
			</div>
			<aside 
			class="SiteInfo Grid-cell u-lg-size4of12"
			id="siteNav" 
			role="complementary">    
			
			<nav class="SiteNav Grid-cell" role="nav">
				<hr class="u-hiddenVisually" />
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
		</aside>
	</main>
</div>
<div class="fb-like" data-href="http://thanos.pandora.dev/" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
<a href="https://twitter.com/dewalf" class="twitter-follow-button" data-show-count="false">Follow @dewalf</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<footer class="SiteFooter" role="contentinfo">
	<!-- Footer
	================================================ -->
</footer>
<script>

</script>
<script src="/js/app-bundle.js"></script> 
<!-- End Document
	================================================== -->
</body>
</html>