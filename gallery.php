<!DOCTYPE html>
<html>

<head>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>IEEE 2016 - Gallery</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="assets/img/ico.png">
	<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/theme.css" />
		<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="assets/css/default.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/yamm.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/camera.css"/>





<script type="text/javascript" src="assets/js/jquery.js"></script>
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.js"></script>
<script type="text/javascript" src="assets/js/jquery.countdown.min.js"></script>
<script type="text/javascript" src="assets/js/wow.min.js"></script>
<script type="text/javascript" src="assets/js/progressbars.js"></script>
<script type="text/javascript" src="assets/js/isotope.pkgd.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.classyloader.js"></script>
<script type="text/javascript" src="assets/js/main.js"></script>
<script type="text/javascript" src="assets/js/camera.min.js"></script>
<script type='text/javascript' src='assets/js/jquery.mobile.customized.min.js'></script>
<script type='text/javascript' src='assets/js/jquery.easing.1.3.js'></script>



	<!--[if lt IE 9]>
			<script src="assets/js/html5shiv.js"></script>
			<script src="assets/js/respond.min.js"></script>
			<![endif]-->
	<!-- Favicon -->
</head>
	<body data-spy="scroll" data-target=".navbar-collapse" data-offset="100">
	<!-- Navigation -->
 <?php
  	$gallery = "active";
  	$about = "";
	$chapters = "";
	$branch = "";
	$faq = "";
	$contact = "";
  	include('nav.php');
  ?>
<section class="title-section main-color">
	<div class="container">
		<h4>Gallery</h4>
	</div>
</section>






<section class="container wow slideInDown delay-1" >





		<div class="row">
				<!-- <div class="col-md-4"></div> -->
			<div class="col-md-12 wow shake">
				<h2 style="font-size: 50px; font-style: bold; text-align: center;color: #6699CC">Gallery</h2>

					<div class="camera_wrap camera_azure_skin" id="camera_wrap">
								<div data-thumb="assets/img/gallery/2.jpg" data-src="assets/img/gallery/2.jpg">

								</div>
			            <div data-thumb="assets/img/gallery/IEEE_IFEST1.jpg" data-src="assets/img/gallery/IEEE_IFEST1.jpg.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_IFEST2jpg" data-src="assets/img/gallery/IEEE_IFEST2.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_ManualRobotics1.jpg" data-src="assets/img/gallery/IEEE_ManualRobotics1.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_ManualRobotics2.jpg" data-src="assets/img/gallery/IEEE_ManualRobotics2.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_Photoshop.jpg" data-src="assets/img/gallery/IEEE_Photoshop.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_Sampark.jpg" data-src="assets/img/gallery/IEEE_Sampark.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_SummerSchool1.jpg" data-src="assets/img/gallery/IEEE_SummerSchool1.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/IEEE_SummerSchool2.jpg" data-src="assets/img/gallery/IEEE_SummerSchool1.jpg">

			            </div>

			            <div data-thumb="assets/img/gallery/10.jpg" data-src="assets/img/gallery/10.jpg">

			            </div>
			            <div data-thumb="assets/img/gallery/11.jpg" data-src="assets/img/gallery/11.jpg">

			            </div>
			        </div>

			</div>

		</div>




</section>




								<hr>
								<br>




<?php include('footer.php'); ?>


<script>
		jQuery(function(){

			// jQuery('#camera_wrap_1').camera({
			// 	thumbnails: true
			// });

			jQuery('#camera_wrap').camera({
				// height: '400px',
				loader: 'bar',
				// navigation: true,
				// navigationHover: false,
				// pagination: false,
				thumbnails: false
			});
		});
</script>


</body>

</html>
