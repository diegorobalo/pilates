<?php   
/**
 * Block Patterns
 *
 * @package Divine Word
 * @since 1.0
 */

/**
 * Registers block patterns and categories.
 *
 * @since 1.0
 *
 * @return void
 */
function divine_word_register_block_patterns() {
	$block_pattern_categories = array(
		'divine-word' => array( 'label' => esc_html__( 'Divine Word Patterns', 'divine-word' ) ),
		'pages'    => array( 'label' => esc_html__( 'Pages', 'divine-word' ) ),
	);

	$block_pattern_categories = apply_filters( 'divine_word_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}

	$block_patterns = array(
		'header-default',
		'header-banner',
		'brands',
		'inner-banner',
		'latest-blog',
		'hidden-404',
		'sidebar',
		'footer-default',	
	);

	$block_patterns = apply_filters( 'divine_word_block_patterns', $block_patterns );

	foreach ( $block_patterns as $block_pattern ) {
		$pattern_file = get_parent_theme_file_path( '/inc/patterns/' . $block_pattern . '.php' );

		register_block_pattern(
			'divine-word/' . $block_pattern,
			require $pattern_file
		);
	}
}
add_action( 'init', 'divine_word_register_block_patterns', 9 );