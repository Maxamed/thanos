 
<?php require_once("app/functions.php");?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
 
</head>
<body>



	<!-- Primary Page Layout
	================================================== -->

	<!-- Delete everything in this .container and get started on your own site! -->

	<div class="container">
		<a id="nav-toggle" href="#"><span></span></a>
		<div class="sixteen columns"> <h3>Add post</h3>


<form action="app/functions.php" method="post">
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
				<div id="postList">

				</div>

<!-- 
			<ul>
			<?php printPosts();  ?>

			</ul>
	       

	        -->
		</div>  

	</div><!-- container -->

<script src="/js/lib/handlebars.runtime.js"></script> 
<script src="/js/temptpl.js"></script> 
<script src="/js/vendor/jquery.js"></script> 
<script src="/js/app.js"></script> 
<!-- End Document
================================================== -->
</body>
</html>