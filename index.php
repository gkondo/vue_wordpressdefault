


<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <!-- style loading -->
  <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" media="screen">
  <?php wp_head(); ?>
</head>
 
<body <?php body_class(); ?>>
  <h1>my theme test</h1>
  <div id="app">
    <p>{{now}}</p>
  </div>
 
  <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/bundle.js"></script>
  <?php wp_footer();?>
</body>
</html>
