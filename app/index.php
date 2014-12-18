 
<?php require_once("functions.php");?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>Thanos</title>
	<meta name="description" content="">
	<meta name="author" content="">

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- CSS
  ================================================== -->
	<link rel="stylesheet" href="stylesheets/base.css">
	<link rel="stylesheet" href="stylesheets/skeleton.css">
	<link rel="stylesheet" href="stylesheets/layout.css">

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

</head>
<body>



	<!-- Primary Page Layout
	================================================== -->

	<!-- Delete everything in this .container and get started on your own site! -->

	<div class="container">
		<a id="nav-toggle" href="#"><span></span></a>
		<div class="sixteen columns"> <h3>Add post</h3>


<form action="functions.php" method="post">
	<input type="hidden" name="_METHOD" value="PUT">
	<div>
		<label for="textarea">Post:</label>
		<textarea cols="40" rows="8" name="post" id="post"></textarea>
	</div>
	 
 	<div>
		<label for="select-choice">Select Category:</label>
		<select name="category" id="category">
			<option value="FMYLIFE">F MY LIFE</option>
			<option value="stwrldprbl">First World Problems</option>
			<option value="justcase">Just Because</option>
		</select>
	</div> 
	<div>
	    <input type="submit" value="submit" name="submit"/>
    </div>
</form>

 
	       

	       
		</div> <hr>
		<div class="sixteen columns"> <h3>List of posts</h3>


			<ul>
			<?php printPosts();  ?>

			</ul>
	       

	       
		</div>  

	</div><!-- container -->

<script src="/js/jquery.js"></script>
<script src="/js/app.js"></script>
<!-- End Document
================================================== -->
</body>
</html>