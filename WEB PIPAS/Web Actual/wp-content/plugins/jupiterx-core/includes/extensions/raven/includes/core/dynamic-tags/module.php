<?php
/**
 * Dynamic tags.
 *
 * @package JupiterX_Core\Raven
 * @since 1.5.0
 */

namespace JupiterX_Core\Raven\Core\Dynamic_Tags;

use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module {

	public static $instance;

	public function __construct() {
		if ( defined( 'ELEMENTOR_PRO_PATH' ) && License_API::is_license_active() ) {
			return;
		}

		add_action( 'elementor/dynamic_tags/register', [ $this, 'register_tags' ], 999 );
	}

	public function get_tag_classes_names() {
		return [
			'Archive_Description',
			'Archive_Meta',
			'Archive_Title',
			'Author_Info',
			'Author_Meta',
			'Author_Name',
			'Featured_Image_Data',
			'Author_Info',
			'Post_Custom_Field',
			'Post_Date',
			'Post_Excerpt',
			'Post_ID',
			'Post_Terms',
			'Post_Time',
			'Post_Title',
			'Post_Featured_Image',
			'Shortcode',
			'Request_Parameter',
		];
	}

	public function get_groups() {
		return [
			'site' => [
				'title' => __( 'Site', 'jupiterx-core' ),
			],
			'post' => [
				'title' => __( 'Post', 'jupiterx-core' ),
			],
			'archive' => [
				'title' => __( 'Archive', 'jupiterx-core' ),
			],
			'media' => [
				'title' => __( 'Media', 'jupiterx-core' ),
			],
			'author' => [
				'title' => __( 'Author', 'jupiterx-core' ),
			],
		];
	}

	/**
	 * Register tags.
	 *
	 * Add all the available dynamic tags.
	 *
	 * @since  1.5.0
	 * @access public
	 *
	 * @param Manager $dynamic_tags
	 */
	public function register_tags( $dynamic_tags ) {

		foreach ( $this->get_groups() as $group_name => $group_title ) {
			$dynamic_tags->register_group( $group_name, [
				'title' => $group_title['title'],
			] );
		}

		// Files already included by autoload.
		foreach ( $this->get_tag_classes_names() as $tag_class ) {
			$class_name = __NAMESPACE__ . '\Tags\\' . $tag_class;

			if ( class_exists( $class_name ) ) {
				$dynamic_tags->register( new $class_name() );
			}
		}
	}
}
