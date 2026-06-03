<?php
/**
 * This file is responsible for Woocommerce functions.
 *
 * @package JupiterX_Core\Woocommerce
 *
 * @since 2.0.0
 */

remove_action( 'template_redirect', 'wc_track_product_view', 20 );
add_action( 'template_redirect', 'jupiterx_wc_track_product_view', 20 );
/**
 * Always track viewed products.
 * It's a copy of WC functions with small modification to make sure viewed products are
 * always stored.
 *
 * @since 2.0.0
 *
 * @return void
 */
function jupiterx_wc_track_product_view() {
	if ( ! class_exists( 'WooCommerce' ) || ! is_singular( 'product' ) ) {
		return;
	}

	global $post;

	if ( empty( $_COOKIE['woocommerce_recently_viewed'] ) ) { // @codingStandardsIgnoreLine.
		$viewed_products = array();
	} else {
		$viewed_products = wp_parse_id_list( (array) explode( '|', wp_unslash( $_COOKIE['woocommerce_recently_viewed'] ) ) ); // @codingStandardsIgnoreLine.
	}

	// Unset if already in viewed products list.
	$keys = array_flip( $viewed_products );

	if ( isset( $keys[ $post->ID ] ) ) {
		unset( $viewed_products[ $keys[ $post->ID ] ] );
	}

	$viewed_products[] = $post->ID;

	if ( count( $viewed_products ) > 15 ) {
		array_shift( $viewed_products );
	}

	// Store for session only.
	wc_setcookie( 'woocommerce_recently_viewed', implode( '|', $viewed_products ) );
}
