<?php
/**
 * Divine Word functions and definitions
 *
 * @package Divine Word
 * @since 1.0
 */

if ( ! function_exists( 'divine_word_support' ) ) :
	function divine_word_support() {
			
		add_theme_support( 'html5', array(
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );
		
		add_theme_support( 'wp-block-styles' );

		add_editor_style( 'style.css' );

	}
endif;
add_action( 'after_setup_theme', 'divine_word_support' );

/*-------------------------------------------------------------
 Enqueue Styles
--------------------------------------------------------------*/

if ( ! function_exists( 'divine_word_styles' ) ) :
	function divine_word_styles() {
		// Register theme stylesheet.
		wp_enqueue_style('divine-word-style', get_stylesheet_uri(), array(), wp_get_theme()->get('version') );
		wp_enqueue_style('divine-word-style-blocks', get_template_directory_uri(). '/assets/css/blocks.css');
		wp_enqueue_style('divine-word-style-responsive', get_template_directory_uri(). '/assets/css/responsive.css');
	}

endif;
add_action( 'wp_enqueue_scripts', 'divine_word_styles' );

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

?>