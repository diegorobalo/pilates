<?php
/**
 * Title: Hero
 * Slug: creativ-business-fse/home-hero
 * Categories: theme, banner
 *
 * @package creativ-business-fse
 * @since 1.0.0
 */

?>

<!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-banner-img.jpg' ) ); ?>","dimRatio":70,"customOverlayColor":"#151f50","isUserOverlayColor":true,"minHeight":680,"sizeSlug":"large","align":"full","style":{"spacing":{"margin":{"bottom":"0"},"padding":{"right":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull" style="margin-bottom:0;padding-right:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small);min-height:680px"><img class="wp-block-cover__image-background size-large" alt="" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-banner-img.jpg' ) ); ?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-70 has-background-dim" style="background-color:#151f50"></span><div class="wp-block-cover__inner-container"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"18%"} -->
<div class="wp-block-column" style="flex-basis:18%"></div>
<!-- /wp:column -->

<!-- wp:column {"width":"64%"} -->
<div class="wp-block-column" style="flex-basis:64%"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|small"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","style":{"typography":{"lineHeight":"1.3","fontStyle":"normal","fontWeight":"700"}},"fontSize":"xxxx-large"} -->
<h2 class="wp-block-heading has-text-align-center has-xxxx-large-font-size" style="font-style:normal;font-weight:700;line-height:1.3"><?php esc_html_e( 'We Create Amazing Digital Experiences', 'creativ-business-fse' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.8"}}} -->
<p class="has-text-align-center" style="line-height:1.8"><?php esc_html_e( 'We help businesses grow with innovative web solutions, creative design, and strategic marketing.', 'creativ-business-fse' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}},"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--large)"><!-- wp:button {"textColor":"base","className":"is-style-fill","style":{"border":{"radius":"30px"},"spacing":{"padding":{"left":"var:preset|spacing|medium","right":"var:preset|spacing|medium","top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}},"typography":{"textTransform":"uppercase"},"color":{"background":"#4c0ee9"},"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"fontSize":"x-small"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-base-color has-text-color has-background has-link-color has-x-small-font-size has-custom-font-size wp-element-button" style="border-radius:30px;background-color:#4c0ee9;padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--medium);text-transform:uppercase"><?php esc_html_e( 'Get Started', 'creativ-business-fse' ); ?></a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"transparent","textColor":"pure-white","className":"is-style-ct-button-secondary","style":{"border":{"radius":"30px","width":"2px"},"spacing":{"padding":{"left":"var:preset|spacing|medium","right":"var:preset|spacing|medium","top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}},"elements":{"link":{"color":{"text":"var:preset|color|pure-white"}}},"typography":{"textTransform":"uppercase"}},"fontSize":"x-small","borderColor":"pure-white"} -->
<div class="wp-block-button is-style-ct-button-secondary"><a class="wp-block-button__link has-pure-white-color has-transparent-background-color has-text-color has-background has-link-color has-border-color has-pure-white-border-color has-x-small-font-size has-custom-font-size wp-element-button" style="border-width:2px;border-radius:30px;padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--medium);text-transform:uppercase"><?php esc_html_e( 'Learn More', 'creativ-business-fse' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"18%"} -->
<div class="wp-block-column" style="flex-basis:18%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->