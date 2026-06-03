<?php 
/**
 * Default Header
 */
return array(
	'title'      => esc_html__( 'Default Header', 'divine-word' ),
	'categories' => array( 'divine-word', 'header' ),
	'content'    => '<!-- wp:group {"className":"top-area","style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}},"layout":{"type":"constrained","contentSize":"80%"}} -->
<div class="wp-block-group top-area" style="padding-top:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30)"><!-- wp:columns {"verticalAlignment":"center","className":"header-area","style":{"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}},"backgroundColor":"secondary"} -->
<div class="wp-block-columns are-vertically-aligned-center header-area has-secondary-background-color has-background" style="padding-top:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20)"><!-- wp:column {"verticalAlignment":"center","width":"25%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:25%"><!-- wp:site-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|background"}}}},"textColor":"background","fontSize":"regular"} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"75%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:75%"><!-- wp:navigation {"textColor":"foreground","overlayBackgroundColor":"primary","overlayTextColor":"primary","fontSize":"small","fontFamily":"divine-word-Poppins","layout":{"type":"flex","justifyContent":"right"}} -->
<!-- wp:navigation-link {"label":"Home","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"About Us","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Blog","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Services","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Contact Us","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->
<!-- /wp:navigation --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
);