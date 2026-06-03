<?php

namespace JupiterX_Core\Condition;

use Elementor\Plugin as Elementor;

/**
 * Apply all created condition in frontend.
 *
 * @return void
 * @since 2.0.0
 * @SuppressWarnings(PHPMD.UnusedPrivateMethod)
 * @SuppressWarnings(PHPMD.EvalExpression)
 * @SuppressWarnings(PHPMD.ExcessiveClassComplexity)
*/
class Apply_Condition {
	public function __construct() {
		$this->dependencies();
		$this->data();
		$this->actions();
	}

	/**
	 * Actions.
	 *
	 * @return void
	 * @since 2.0.0
	 */
	private function actions() {
		add_action( 'init', function() {
			if ( isset( $_GET['jupiterx-layout-builder-preview'] ) ) { // phpcs:ignore
				add_action( 'wp', [ $this, 'customize_layout_builder_preview_mode' ] );

				return;
			}

			add_action( 'wp', [ $this, 'run_conditions_check' ], 5 );
		} );

	}

	/**
	 * Load required classes.
	 *
	 * @return void
	 * @since 2.0.0
	 */
	private function dependencies() {
		jupiterx_core()->load_files(
			[
				'condition/classes/conditions',
			]
		);

		$this->checker      = new \Jupiterx_Conditions_Check();
		$this->meta_name    = \JupiterX_Core_Condition_Manager::JUPITERX_CONDITIONS_COMPONENT_META_NAME;
		$this->posts_option = \JupiterX_Core_Condition_Manager::JUPITERX_POSTS_WITH_CONDITIONS;
	}

	/**
	* Data.
	* Here we retrieve Posts that has condition meta from database.
	*
	* @return void
	*/
	private function data() {
		$posts       = get_option( $this->posts_option );
		$this->posts = [];

		if ( empty( $posts ) ) {
			return;
		}

		foreach ( $posts as $post ) {
			$conditions = get_post_meta( $post, $this->meta_name, true );

			if ( empty( $conditions ) ) {
				continue;
			}

			$item            = [];
			$item['id']      = $post;
			$item['include'] = $this->grab_include_and_excludes( 'include', $conditions );
			$item['exclude'] = $this->grab_include_and_excludes( 'exclude', $conditions );

			array_push( $this->posts, $item );
		}

		// TODO : to speed up apply conditions , each time that user add a condition to a post
		// TODO : we can run this method and save $this->posts as cache.
	}

	/**
	 * Grab include and exclude parts from condition. to be used later.
	 *
	 * @param string $type
	 * @param array $conditions
	 * @return array
	 * @since 2.0.0
	 */
	private function grab_include_and_excludes( $type, $conditions ) {
		$item = [];

		foreach ( $conditions as $key => $data ) {
			if ( $type === $data['conditionA'] ) {
				$condition = [ $data['conditionB'], $data['conditionC'], $data['conditionD'] ];
				array_push( $item, $condition );
			}
		}

		return $item;
	}

	public function run_conditions_check() {
		if ( is_admin() ) {
			return;
		}

		$data        = $this->posts;
		$this->query = get_queried_object();

		if ( empty( $data ) ) {
			return;
		}

		foreach ( $data as $post ) {
			// No include condition? just escape it.
			if ( empty( $post['include'] ) ) {
				continue;
			}

			$this->per_post( $post );
		}
	}

	/**
	 * Per_post.
	 * Checks each post that added to WP hook.
	 *
	 * @param [type] $post
	 * @return void
	 * @since 2.0.0
	 */
	private function per_post( $post ) {
		// Default priority
		$priority = 10;

		// Check if current page excluded. we check excludes first.
		// Because if this page is excluded there is no reason to check if it's included.
		if ( ! empty( $post['exclude'] ) ) {
			foreach ( $post['exclude'] as $condition ) {
				$result = $this->checker->conditions( $condition, $this->query, $post['id'] );

				if ( $result ) {
					// One exclude condition found. return.
					return;
				}
			}
		}

		// Now we check if current page included.
		$match = false;
		foreach ( $post['include'] as $condition ) {
			$result = $this->checker->conditions( $condition, $this->query, $post['id'] );

			if ( true === $result ) {
				// One condition match current page, break.
				$match = true;

				// Priority
				if ( 'maintenance' === $condition[0] ) {
					$priority = 20;
				}

				break;
			}
		}

		// There is no match, return.
		if ( ! $match ) {
			return;
		}

		// Finally : condition match found and there is no exclude issue. do something.
		// In case we need matched condition we can grab it before break.
		$this->apply( $post['id'], $priority );
	}

	/**
	 * Apply.
	 * Run when one of post conditions is match for current queried page.
	 *
	 * @param int $id
	 * @return void
	 * @since 2.0.0
	 */
	private function apply( $id, $priority ) {
		$meta_exists = metadata_exists( 'post', $id, '_elementor_template_type' );
		$post_status = get_post_status( $id );

		if ( 'publish' !== $post_status ) {
			return;
		}

		if ( $meta_exists ) {
			$this->render_layout_builder( $id, $priority );
			return;
		}

		$this->render_custom_snippets( $id );
	}

	/**
	 * Render layout builder post type.
	 *
	 * @param int $id
	 * @return void
	 * @since 2.0.0
	 */
	private function render_layout_builder( $id, $priority ) {
		if ( ! defined( 'ELEMENTOR_PATH' ) ) {
			return;
		}

		// Apply Header.
		if ( 'header' === get_post_meta( $id, '_elementor_template_type', true ) ) {
			$this->header( $id );

			return;
		}

		// Apply Footer.
		if ( 'footer' === get_post_meta( $id, '_elementor_template_type', true ) ) {
			$this->footer( $id );

			return;
		}

		// Apply page title bar
		if ( 'page-title-bar' === get_post_meta( $id, 'jx-layout-type', true ) ) {
			$this->page_title_bar( $id );

			return;
		}

		// TODO : Prevent to apply template_include ( body ) in Elementor editor mode.

		// Apply Template ( body ).

		add_filter( 'jupiterx-conditions-manager-template', function() use ( $id ) {
			ob_start();
			echo Elementor::instance()->frontend->get_builder_content_for_display( $id, true );

			return ob_get_clean();
		}, $priority );

		add_action( 'template_redirect', [ $this, 'template_redirect' ], 10 );
	}

	/**
	 * Render custom snippets post type.
	 *
	 * @param int $id
	 * @return void
	 * @since 2.0.0
	*/
	private function render_custom_snippets( $id ) {
		$location = get_post_meta( $id, 'jupiterx_location', true );
		$priority = get_post_meta( $id, 'jupiterx_priority', true );

		add_action( $location, function() use ( $id ) {
			$snippet = get_post_field( 'post_content', $id );

			// Since it is non-php snippet, we just need to echo that.
			// In case we need to parse snippets include php, we just need to eval what render_php_script method return.
			echo $snippet;
		}, $priority );
	}

	/**
	 * Render php snippets.
	 *
	 * @return string
	 * @param string $snippet code.
	 * @since 2.0.0
	 */
	private function render_php_script( $snippet ) {
		/* Remove ?> from end of snippet */
		$snippet = preg_replace( '|\?>[\s]*$|', '', $snippet );

		/* Insert ?> at begining of string to prevent eval errors. */
		$snippet = '?> ' . $snippet;

		return $snippet;
	}

	/**
	 * Header.
	 * Replace jupiter default header with user defined header template when condition match.
	 *
	 * @param int $id
	 * @return void
	 * @since 2.0.0
	 *
	 * @SuppressWarnings(PHPMD.CyclomaticComplexity)
	 * @SuppressWarnings(PHPMD.NPathComplexity)
	 */
	private function header( $id ) {
		// Remove Navbar section.
		jupiterx_remove_action( 'jupiterx_site_navbar' );

		// Remove all previously added hooks.
		remove_all_actions( 'jupiterx_header' );

		// Customizer integration.
		add_filter( 'theme_mod_jupiterx_header_type', function() {
			return '';
		} );

		// Get more priority than elementor pro theme builder.
		add_filter( 'jupiterx_header_partial_additional_parameter', '__return_false' );

		$settings = get_post_meta( $id, 'jx-layout-builder-header-behavior', true );

		if ( ! is_array( $settings ) ) {
			$settings = [];
		}

		// Sticky template.
		add_filter( 'jupiterx_header_template_sticky_id', function() use ( $settings ) {
			if (
					array_key_exists( 'sticky_template', $settings )
					&& count( $settings['sticky_template'] ) > 1
					&& array_key_exists( 'type', $settings )
					&& 'sticky' === $settings['type']
				) {
				return $settings['sticky_template'][1];
			}

			return false;
		} );

		// Default template.
		add_filter( 'jupiterx_header_template_id', function() use ( $id ) {
			return $id;
		} );

		add_filter( 'jupiterx_header_classes', function( $class ) use ( $settings ) {
			$class = array_filter( $class, function( $case ) {
				return ( 'jupiterx-header-sticky-custom' !== $case );
			} );

			if ( ! in_array( 'jupiterx-header-custom', $class, true ) ) {
				$class[] = 'jupiterx-header-custom';
			}

			// Orientation.
			if ( 'horizontal' !== jupiterx_get_field_mod( 'jupiterx_header_orientation', '', 'horizontal' ) ) {
				$class[] = 'jupiterx-header-vertical';
			}

			if ( ! array_key_exists( 'type', $settings ) ) {
				return $class;
			}

			if ( 'sticky' === $settings['type'] ) {
				$class[] = 'jupiterx-header-sticky-custom';
			}

			return $class;
		} );

		add_action( 'jupiterx_header', function() use ( $id ) {
			echo Elementor::instance()->frontend->get_builder_content_for_display( $id );
		} );

		if ( array_key_exists( 'type', $settings ) && 'sticky' === $settings['type'] ) {
			if ( '_custom' !== get_theme_mod( 'jupiterx_header_type' ) ) {
				add_action( 'jupiterx_header', function() use ( $settings ) {
					echo Elementor::instance()->frontend->get_builder_content_for_display( $settings['sticky_template'][1] );
				} );
			}
		}

		add_filter( 'jupiterx_header_settings', function( $data ) use ( $id ) {
			$settings = get_post_meta( $id, 'jx-layout-builder-header-behavior', true );

			if ( empty( $settings ) || ! is_array( $settings ) ) {
				return $data;
			}

			// Overlap settings.
			$data['overlap'] = '';
			$overlap         = [];

			if ( array_key_exists( 'overlap_desktop', $settings ) && 'on' === $settings['overlap_desktop'] ) {
				$overlap[] = 'desktop';
			}

			if ( array_key_exists( 'overlap_tablet', $settings ) && 'on' === $settings['overlap_tablet'] ) {
				$overlap[] = 'tablet';
			}

			if ( array_key_exists( 'overlap_mobile', $settings ) && 'on' === $settings['overlap_mobile'] ) {
				$overlap[] = 'mobile';
			}

			if ( count( $overlap ) > 0 ) {
				$data['overlap'] = implode( ',', $overlap );
			}

			$data['behavior'] = $settings['type'];

			if ( 'static' === $settings['type'] ) {
				return $data;
			}

			if ( 'fixed' === $settings['type'] ) {
				if ( array_key_exists( 'position', $settings ) ) {
					$data['position'] = $settings['position'];
				}

				return $data;
			}

			if ( 'sticky' === $settings['type'] ) {
				$data['offset']   = $settings['offset'];
				$data['template'] = $id;

				if ( empty( $data['offset'] ) ) {
					$data['offset'] = 500;
				}

				if ( array_key_exists( 'sticky_template', $settings ) && count( $settings['sticky_template'] ) > 1 ) {
					$data['stickyTemplate'] = $settings['sticky_template'][1];
				}

				return $data;
			}

			return $data;
		} );

		add_filter( 'jupiterx_body_header_classes', function( $class ) use ( $id ) {
			$settings = get_post_meta( $id, 'jx-layout-builder-header-behavior', true );

			if ( empty( $settings ) || ! is_array( $settings ) ) {
				return $class;
			}

			$class    = [];
			$border   = get_theme_mod( 'jupiterx_site_body_border_enabled' );
			$behavior = $settings['type'];

			// Body border.
			if ( $border ) {
				$class[] = 'jupiterx-has-border';
			}

			// Behavior.
			if ( ! empty( $behavior ) && 'static' !== $behavior ) {
				$class[] = esc_attr( 'jupiterx-header-' . $behavior );
			}

			// Position.
			if ( 'fixed' === $behavior && ( array_key_exists( 'position', $settings ) && 'bottom' === $settings['position'] ) ) {
				$class[] = esc_attr( 'jupiterx-header-' . $settings['position'] );
			}

			// Enable on tablet.
			if ( 'static' !== $behavior && ( array_key_exists( 'tablet', $settings ) && 'off' === $settings['tablet'] ) ) {
				$class[] = esc_attr( 'jupiterx-header-tablet-behavior-off' );
			}

			// Enable on mobile.
			if ( 'static' !== $behavior && ( array_key_exists( 'mobile', $settings ) && 'off' === $settings['mobile'] ) ) {
				$class[] = esc_attr( 'jupiterx-header-mobile-behavior-off' );
			}

			// Overlap settings desktop.
			if ( array_key_exists( 'overlap_desktop', $settings ) && 'on' === $settings['overlap_desktop'] ) {
				$class[] = esc_attr( 'jupiterx-header-overlapped' );
			}

			// overlap settings tablet.
			if ( array_key_exists( 'overlap_tablet', $settings ) && 'on' === $settings['overlap_tablet'] ) {
				$class[] = esc_attr( 'jupiterx-header-overlapped-tablet' );
			}

			// overlap settings mobile.
			if ( array_key_exists( 'overlap_mobile', $settings ) && 'on' === $settings['overlap_mobile'] ) {
				$class[] = esc_attr( 'jupiterx-header-overlapped-mobile' );
			}

			return $class;
		} );
	}

	/**
	 * Footer
	 * Replace jupiter default footer with user defined footer template when condition match.
	 *
	 * @param [type] $id
	 * @return void
	 * @since 2.0.0
	 */
	private function footer( $id ) {
		// Remove subfooter section.
		jupiterx_remove_action( 'jupiterx_subfooter' );

		// Remove all previously added hooks.
		remove_all_actions( 'jupiterx_footer' );

		// Integrate with customizer.
		add_filter( 'theme_mod_jupiterx_footer_type', function() {
			return '';
		} );

		// More priority than elementor pro theme builder.
		add_filter( 'jupiterx_footer_partial_additional_parameter', '__return_False' );

		add_action( 'jupiterx_footer', function() use ( $id ) {
			echo Elementor::instance()->frontend->get_builder_content_for_display( $id );
		} );

		add_filter( 'jupiterx_footer_behavior', function( $default ) use ( $id ) {
			$settings = get_post_meta( $id, 'jx-layout-builder-footer-behavior', true );

			if ( ! empty( $settings ) ) {
				return $settings;
			}

			return $default;
		} );
	}

	/**
	 * Apply page title bar.
	 *
	 * @param int $id template id
	 * @since 2.0.0
	 */
	private function page_title_bar( $id ) {
		jupiterx_remove_action( 'jupiterx_main_header', 'jupiterx_main_header' );

		add_action( 'jupiterx_main_header', function() use ( $id ) {
			echo Elementor::instance()->frontend->get_builder_content_for_display( $id );
		} );
	}

	/**
	 * Template redirect.
	 * Last step.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function template_redirect() {
		$run = apply_filters( 'jx-run-layout-condition', true );

		if ( ! $run ) {
			return;
		}

		jupiterx_add_filter( 'jupiterx_layout', 'c' );

		jupiterx_core()->load_files(
			[
				'condition/template',
			]
		);

		exit();
	}

	/**
	 * Customize preview.
	 * Customize preview for layout builder when everything is set.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function customize_layout_builder_preview_mode() {
		$jx_var = filter_input( INPUT_GET, 'jupiterx-layout-builder-preview', FILTER_SANITIZE_FULL_SPECIAL_CHARS );

		if ( ! empty( $jx_var ) ) {
			add_filter( 'show_admin_bar', '__return_false' );

			jupiterx_remove_action( 'jupiterx_main_header_partial_template' );
			jupiterx_remove_action( 'jupiterx_main_footer_partial_template' );
			jupiterx_remove_action( 'jupiterx_header_partial_template' );
			jupiterx_remove_action( 'jupiterx_footer_partial_template' );

			add_action( 'wp_head', function() {
				?>
					<style>
						body {
							-moz-transform: scale(0.5, 0.5); /* Moz-browsers */
							zoom: 0.5; /* Other non-webkit browsers */
							zoom: 50%; /* Webkit browsers */
						}
					</style>
				<?php
			} );
		}
	}
}

new Apply_Condition();
