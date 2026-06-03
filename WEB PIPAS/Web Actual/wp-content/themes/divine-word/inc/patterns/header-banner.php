<?php 
/**
 * Default Header Banner
 */
return array(
	'title'      => esc_html__( 'Header Banner', 'divine-word' ),
	'categories' => array( 'divine-word', 'Header Banner' ),
	'content'    => '<!-- wp:cover {"url":"' . esc_url( get_theme_file_uri( '/assets/images/banner.jpg' ) ) . '","id":8,"dimRatio":80,"overlayColor":"primary","isUserOverlayColor":true,"minHeight":850,"minHeightUnit":"px","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"0","bottom":"0","right":"0","left":"0"}}}} -->
<div class="wp-block-cover" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;min-height:850px"><span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-80 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-8" alt="" src="' . esc_url( get_theme_file_uri( '/assets/images/banner.jpg' ) ) . '" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"constrained","contentSize":"80%"}} -->
<div class="wp-block-group"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"20%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:20%"></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"60%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:60%"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"22px","textTransform":"uppercase","letterSpacing":"10px"},"color":{"text":"#f14f44"},"elements":{"link":{"color":{"text":"#f14f44"}}}}} -->
<p class="has-text-align-center has-text-color has-link-color" style="color:#f14f44;font-size:22px;letter-spacing:10px;text-transform:uppercase">Contrary to popular belief</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|foreground"}}},"typography":{"fontSize":"52px","lineHeight":"1.5"}},"textColor":"foreground","fontFamily":"divine-word-Poppins"} -->
<h2 class="wp-block-heading has-text-align-center has-foreground-color has-text-color has-link-color has-divine-word-poppins-font-family" style="font-size:52px;line-height:1.5">"All The Lorem <span class="word-color-wrap">Generators<br>On The</span> Internet."</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"18px"}}} -->
<p class="has-text-align-center" style="font-size:18px">Lorem Ipsum has been the industrys standard dummy<br>text ever since the 1500s, when an unknown printer took a galley<br>of type and scrambled it to make a type specimen book.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"textAlign":"center","backgroundColor":"foreground","style":{"typography":{"fontSize":"15px","fontStyle":"normal","fontWeight":"400"},"border":{"radius":"0px"},"color":{"text":"#f14f44"},"elements":{"link":{"color":{"text":"#f14f44"}}},"spacing":{"padding":{"left":"var:preset|spacing|70","right":"var:preset|spacing|70"}}},"fontFamily":"divine-word-Poppins"} -->
<div class="wp-block-button has-custom-font-size has-divine-word-poppins-font-family" style="font-size:15px;font-style:normal;font-weight:400"><a class="wp-block-button__link has-foreground-background-color has-text-color has-background has-link-color has-text-align-center wp-element-button" style="border-radius:0px;color:#f14f44;padding-right:var(--wp--preset--spacing--70);padding-left:var(--wp--preset--spacing--70)">Read More</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"20%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:20%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->',
);