<?php
/**
 * The file class that handles condition manager component.
 *
 * @package JupiterX_Core\Condition\
 *
 * @since 2.0.0
*/

/**
 * Conditions manager class.
 *
 * @since 2.0.0
 * @SuppressWarnings(PHPMD.UnusedPrivateMethod)
 * @SuppressWarnings(PHPMD.ExcessiveClassComplexity)
 * @SuppressWarnings(PHPMD.TooManyMethods)
*/
class JupiterX_Core_Condition_Manager {

	// Posts meta to save conditions of post.
	const JUPITERX_CONDITIONS_COMPONENT_META_NAME = 'jupiterx-condition-rules';
	// Option to save posts IDs that admin defined some conditions for them.
	const JUPITERX_POSTS_WITH_CONDITIONS = 'jupiterx-posts-with-conditions';

	/**
	 * Class instance.
	 *
	 * @since 2.0.0
	 * @var JupiterX_Core_Condition_Manager Class instance.
	*/
	private static $instance = null;

	/**
	 * Get a class instance.
	 *
	 * @since 2.0.0
	 * @return JupiterX_Core_Condition_Manager Class instance.
	*/
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Class construct.
	 *
	 * @since 2.0.0
	*/
	public function __construct() {
		add_action( 'wp_ajax_jupiterx_conditional_manager', [ $this, 'ajax_handle' ] );

		jupiterx_core()->load_files(
			[
				'condition/classes/apply-condition',
			]
		);
	}

	public function ajax_handle() {
		check_ajax_referer( 'jupiterx_control_panel', 'nonce' );

		if ( ! current_user_can( 'edit_others_posts' ) || ! current_user_can( 'edit_others_pages' ) ) {
			wp_send_json_error( 'You do not have access to this section', 'jupiterx-core' );
		}

		$action = filter_input( INPUT_POST, 'sub_action', FILTER_SANITIZE_FULL_SPECIAL_CHARS );

		call_user_func( [ $this, $action ] );
	}

	/**
	 * Gets singular and archive list.
	 *
	 * @return array
	 * @since 2.0.0
	 * @SuppressWarnings(PHPMD.UnusedPrivateMethod)
	*/
	private function get_list_singular() {
		$type    = filter_input( INPUT_POST, 'list', FILTER_SANITIZE_FULL_SPECIAL_CHARS );
		$section = filter_input( INPUT_POST, 'section', FILTER_SANITIZE_FULL_SPECIAL_CHARS );

		if ( 'woocommerce' === $type ) {
			$data = [
				'list' => $this->get_woocommerce_options( $section ),
				'type' => 'woocommerce',
			];

			wp_send_json_success( $data );
		}

		if ( 'users' === $type ) {
			$data = [
				'list' => $this->get_user_status_options(),
				'type' => $type,
			];

			wp_send_json_success( $data );
		}

		// First we get default WordPress singulars.
		$list = [
			'all'          => esc_html__( 'All Singulars', 'jupiterx-core' ),
			'front_page'   => esc_html__( 'Front Page', 'jupiterx-core' ),
			'error_404'    => esc_html__( 'Not Found 404', 'jupiterx-core' ),
			'by_author'    => ( 'archive' === $type ) ? esc_html__( 'Author Archive', 'jupiterx-core' ) : esc_html__( 'By Author', 'jupiterx-core' ),
			'any_child_of' => esc_html__( 'Any Child Of', 'jupiterx-core' ),
			'child_of'     => esc_html__( 'Direct Child Of', 'jupiterx-core' ),
			'date'         => esc_html__( 'Date Archive', 'jupiterx-core' ),
			'search'       => esc_html__( 'Search Results', 'jupiterx-core' ),
			'post'         => [
				'single_post'               => ( 'archive' === $type ) ? esc_html__( 'Post Archive', 'jupiterx-core' ) : esc_html__( 'Post', 'jupiterx-core' ),
				'post_in_category'          => esc_html__( 'In Category', 'jupiterx-core' ),
				'post_in_category_children' => esc_html__( 'In Category Children', 'jupiterx-core' ),
				'post_in_post_tag'          => esc_html__( 'In Post Tag', 'jupiterx-core' ),
				'post_by_author'            => esc_html__( 'Post By Author', 'jupiterx-core' ),
			],
			'page'         => [
				'single_page'    => esc_html__( 'Pages', 'jupiterx-core' ),
				'page_by_author' => esc_html__( 'Page By Author', 'jupiterx-core' ),
			],
			'attachment'        => [
				'single_attachment'    => esc_html__( 'Media', 'jupiterx-core' ),
				'attachment_by_author' => esc_html__( 'Media By Author', 'jupiterx-core' ),
			],
		];

		// Unset unnecessary values for each type.
		$list = $this->unset_unnecessary_values_of_options( $list, $type );

		// Now we find custom post types.
		$args = array(
			'public'            => true,
			'_builtin'          => false,
			'show_in_nav_menus' => true,
		);

		$post_types = get_post_types( $args, 'objects', 'and' );

		// If there is no post type, return default list.
		if ( ! $post_types ) {
			$data = [
				'list' => $list,
				'type' => $type,
			];

			wp_send_json_success( $data );
		}

		// If there is some post types, attach them and their taxonomies to list.
		$list = $this->attach_post_types_to_list( $post_types, $type, $list );

		$data = [
			'list' => $list,
			'type' => $type,
		];

		wp_send_json_success( $data );
	}

	/**
	 * Woocommerce options for frontend UI selection.
	 *
	 * @param string $section layout builder section.
	 * @return array
	 * @since 2.0.0
	 */
	private function get_woocommerce_options( $section ) {
		if ( 'product' === $section ) {
			return [
				'entire-shop'      => __( 'Entire Shop', 'jupiterx-core' ),
				'checkout-page'    => __( 'Checkout Page', 'jupiterx-core' ),
				'cart-page'        => __( 'Cart Page', 'jupiterx-core' ),
				'empty-cart-page'  => __( 'Empty Cart Page', 'jupiterx-core' ),
				'thankyou-page'    => __( 'Order Received Page', 'jupiterx-core' ),
				'my-account-user'  => __( 'My Account Page', 'jupiterx-core' ),
				'my-account-guest' => __( 'My Account Login Page', 'jupiterx-core' ),
				'Products'        => [
					'single_product'          => __( 'Products', 'jupiterx-core' ),
					'in_product_cat'          => __( 'In Product Category', 'jupiterx-core' ),
					'in_product_cat_children' => __( 'In Child Product categories', 'jupiterx-core' ),
					'in_product_tag'          => __( 'In Product Tags', 'jupiterx-core' ),
					'product_by_author'       => __( 'Products By Author', 'jupiterx-core' ),
				],
			];
		}

		if ( 'product-archive' === $section ) {
			return [
				'Products Archive' => [
					'all_product_archive' => __( 'All Products Archive', 'jupiterx-core' ),
					'shop_archive'        => __( 'Shop Page', 'jupiterx-core' ),
					'woo_search'          => __( 'Search Results', 'jupiterx-core' ),
					'product_cat_archive' => __( 'Products Categories', 'jupiterx-core' ),
					'product_tag_archive' => __( 'Products Tags', 'jupiterx-core' ),
				],
			];
		}

		$global_types = [ 'header', 'footer', 'page-title-bar' ];

		if ( in_array( $section, $global_types, true ) ) {
			return [
				'entire-shop'      => __( 'Entire Shop', 'jupiterx-core' ),
				'checkout-page'    => __( 'Checkout Page', 'jupiterx-core' ),
				'cart-page'        => __( 'Cart Page', 'jupiterx-core' ),
				'empty-cart-page'  => __( 'Empty Cart Page', 'jupiterx-core' ),
				'thankyou-page'    => __( 'Order Received Page', 'jupiterx-core' ),
				'my-account-user'  => __( 'My Account Page', 'jupiterx-core' ),
				'my-account-guest' => __( 'My Account Login Page', 'jupiterx-core' ),
				'Products Archive' => [
					'all_product_archive' => __( 'All Products Archive', 'jupiterx-core' ),
					'shop_archive'        => __( 'Shop Page', 'jupiterx-core' ),
					'woo_search'          => __( 'Search Results', 'jupiterx-core' ),
					'product_cat_archive' => __( 'Products Categories', 'jupiterx-core' ),
					'product_tag_archive' => __( 'Products Tags', 'jupiterx-core' ),
				],
				'Products'        => [
					'single_product'          => __( 'Products', 'jupiterx-core' ),
					'in_product_cat'          => __( 'In Product Category', 'jupiterx-core' ),
					'in_product_cat_children' => __( 'In Child Product categories', 'jupiterx-core' ),
					'in_product_tag'          => __( 'In Product Tags', 'jupiterx-core' ),
					'product_by_author'       => __( 'Products By Author', 'jupiterx-core' ),
				],
			];
		}
	}

	/**
	 * User related options for frontend UI selection.
	 *
	 * @return array
	 * @since 2.0.0
	 */
	private function get_user_status_options() {
		return [
			'all'                                    => __( 'All users', 'jupiterx-core' ),
			'guests-users'                           => __( 'Non-logged in users', 'jupiterx-core' ),
			__( 'Logged in users', 'jupiterx-core' ) => $this->list_user_role(),
		];
	}

	/**
	 * Retrieve users roles.
	 *
	 * @return array
	 * @since 2.0.0
	 */
	private function list_user_role() {
		global $wp_roles;

		$all_roles      = $wp_roles->roles;
		$editable_roles = apply_filters( 'editable_roles', $all_roles );
		$roles          = [];

		$roles['all-users'] = __( 'All logged in users', 'jupiterx-core' );

		foreach ( $editable_roles as $key => $details ) {
			$roles[ $key ] = $details['name'];
		}

		return $roles;
	}

	/**
	 * Remove unnecessary array values for each type.
	 * also reduce class complexity.
	 *
	 * @param array $list
	 * @param string $type
	 * @return array
	 * @since 2.0.0
	 */
	private function unset_unnecessary_values_of_options( $list, $type ) {
		// Remove singular specific when type = archive.
		if ( 'archive' === $type ) {
			$list['all'] = __( 'All Archives', 'jupiterx-core' );

			unset( $list['error_404'] );
			unset( $list['front_page'] );
			unset( $list['any_child_of'] );
			unset( $list['child_of'] );
			unset( $list['page'] );
			unset( $list['attachment'] );
			unset( $list['post']['post_by_author'] );
		}

		// Remove date & search archive from singular list.
		if ( 'singular' === $type ) {
			unset( $list['date'] );
			unset( $list['search'] );
		}

		return $list;
	}

	/**
	 * Attach post types and their taxonomies to list for frontend uses.
	 *
	 * @param array $post_types
	 * @param string $type
	 * @param array $list
	 * @return array
	 * @since 2.0.0
	 */
	private function attach_post_types_to_list( $post_types, $type, $list ) {
		$excluded = [ 'product', 'jupiterx-codes' ];

		foreach ( $post_types as $post ) {
			// Escape post without archive.
			if ( false === $post->has_archive && 'archive' === $type ) {
				continue;
			}

			// Escape woocommerce product post type also, it will be managed by woocommerce section.
			if ( in_array( $post->name, $excluded, true ) ) {
				continue;
			}

			if ( 'singular' === $type ) {
				$list[ $post->name ][ "single_$post->name" ] = $post->label;
			} else {
				$list[ $post->name ][ $post->name ] = "$post->label Archive";
			}

			// Attach taxonomies as options.
			$list = $this->add_taxonomies( $list, $post->name, $type );

			// Attach by author as option to each custom post type for singulars.
			if ( 'archive' !== $type ) {
				$list[ $post->name ][ $post->name . '@by_author' ] = "$post->label By Author";
			}
		}

		return $list;
	}

	/**
	 * Add taxonomies to list of singular array.
	 *
	 * @param array $taxonomies
	 * @return array
	 * @since 2.0.0
	*/
	private function add_taxonomies( $list, $name, $type ) {
		$taxonomies = get_object_taxonomies( $name, 'object' );

		if ( empty( $taxonomies ) ) {
			return $list;
		}

		// Attach post type's taxonomies to array.
		// Add a @ sign between post type and its taxonomy to split and use them later.
		foreach ( $taxonomies as $taxonomy ) {
			$list[ $name ][ $name . '@' . $taxonomy->name ] = $taxonomy->label;

			if ( true === $taxonomy->hierarchical && 'archive' === $type ) {
				$list[ $name ][ $name . '@direct_child_of_' . $taxonomy->name ] = "Direct child $taxonomy->label of";
				$list[ $name ][ $name . '@any_child_of_' . $taxonomy->name ]    = "Any child $taxonomy->label of";
			}
		}

		return $list;
	}

	/**
	 * Save conditions as meta for post.
	 *
	 * @return void
	 * @since 2.0.0
	 */
	private function save_post_conditions() {
		$post       = filter_input( INPUT_POST, 'post', FILTER_SANITIZE_NUMBER_INT );
		$conditions = filter_input( INPUT_POST, 'conditions', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );

		$result = update_post_meta( $post, self::JUPITERX_CONDITIONS_COMPONENT_META_NAME, $conditions );

		if ( ! $result ) {
			wp_send_json_error( __( 'Conditions has been set successfully.', 'jupiterx-core' ) );
		}

		$this->add_posts_id_with_conditions( $post, $conditions );

		wp_send_json_success( __( 'Conditions has been set successfully.', 'jupiterx-core' ) );
	}

	/**
	 * Load user saved conditions.
	 *
	 * @return array
	 * @since 2.0.0
	 */
	private function load_post_conditions() {
		$post = filter_input( INPUT_POST, 'post', FILTER_SANITIZE_NUMBER_INT );

		$result = get_post_meta( $post, self::JUPITERX_CONDITIONS_COMPONENT_META_NAME, true );

		if ( empty( $result ) ) {
			wp_send_json_error();
		}

		wp_send_json_success( $result );
	}

	/**
	 * Save posts that has conditions as an array to be used later.
	 *
	 * @param int $id
	 * @return void
	 * @since 2.0.0
	 */
	public function add_posts_id_with_conditions( $id, $conditions ) {
		$option = get_option( self::JUPITERX_POSTS_WITH_CONDITIONS );

		if ( ! is_array( $option ) ) {
			$option = [];
		}

		// IF user deleted all conditions for post and/or empty condition array.
		if ( empty( $conditions ) ) {
			$new_options = array_diff( $option, array( $id ) );

			update_option( self::JUPITERX_POSTS_WITH_CONDITIONS, $new_options );

			return;
		}

		// Post already added.
		if ( in_array( $id, $option, true ) ) {
			return;
		}

		array_push( $option, $id );

		update_option( self::JUPITERX_POSTS_WITH_CONDITIONS, $option );
	}

	/**
	 * Main Ajax handler.
	 *
	 * @return void
	 * @since 2.0.0
	 */
	private function retrieve_select_options() {
		$type  = filter_input( INPUT_POST, 'type', FILTER_SANITIZE_STRING );
		$sub   = filter_input( INPUT_POST, 'sub', FILTER_SANITIZE_STRING );
		$value = filter_input( INPUT_POST, 'value', FILTER_SANITIZE_STRING );

		if ( 'singular' === $type ) {
			$sub = str_replace( 'single_', '', $sub );

			$this->manage_singulars( $sub, $value );
		}

		if ( 'archive' === $type ) {
			$this->manage_archives( $sub, $value );
		}

		if ( 'woocommerce' === $type ) {
			$this->manage_woocommerce( $sub, $value );
		}
	}

	/**
	 * We know some of WordPress post type. And usually user has some custom post type in his site.
	 * Known WordPress post type managed by methods. And custom Post types will be managed by following function.
	 * And in manage_unknown_wp_post_types method.
	 *
	 * @since 2.0.0
	 */
	private function manage_singulars( $sub, $value ) {
		// Manage unknown WordPress post types
		if ( ! method_exists( $this, "singular_$sub" ) ) {
			$this->manage_unknown_wp_post_types( $sub, $value );
		}

		// Manage known WordPress post types.
		call_user_func_array( [ $this, "singular_$sub" ], [ $value ] );
	}

	/**
	 * Manage unknown WordPress post types return.
	 *
	 * @param string $sub
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function manage_unknown_wp_post_types( $sub, $value ) {
		// 1. User selected post type taxonomies or by_author.
		if ( strpos( $sub, '@' ) !== false ) {
			$sub       = explode( '@', $sub, 2 );
			$post_type = $sub[0];
			$rest      = $sub[1];

			if ( strpos( $rest, 'author' ) !== false ) {
				// User looking for authors.
				$this->get_authors( $value );
			} else {
				// User looking for terms.
				$this->get_terms( $rest, $value );
			}
		}

		//2. User selected Post type.
		$args = [
			'post_type' => $sub,
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Manage archives response when user is typing 4th parameter.
	 *
	 * @param string $sub
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	 */
	private function manage_archives( $sub, $value ) {
		// Manage unknown WordPress post types.
		if ( ! method_exists( $this, "archive_$sub" ) ) {
			$this->manage_unknown_archives( $sub, $value );
		}

		// Manage known WordPress post types.
		call_user_func_array( [ $this, "archive_$sub" ], [ $value ] );
	}

	/**
	 * Manage archive for unknowns post types.
	 *
	 * @return array
	 * @since 2.0.0
	*/
	private function manage_unknown_archives( $sub, $value ) {
		$sub       = explode( '@', $sub, 2 );
		$post_type = $sub[0];
		$taxonomy  = $sub[1];

		// Get get exact taxonomy slug by removing extra text.
		$taxonomy = str_replace( 'direct_child_of_', '', $taxonomy );
		$taxonomy = str_replace( 'any_child_of_', '', $taxonomy );

		// $taxonomy is now taxonomy slug. we can retrieve requested terms of taxonomy based on user search.
		$this->get_terms( $taxonomy, $value );
	}

	/**
	 * Manage woocommerce response when user is typing 4th parameter.
	 *
	 * @param string $sub
	 * @param string $value
	 * @since 2.0.0
	 */
	private function manage_woocommerce( $sub, $value ) {
		call_user_func_array( [ $this, "woocommerce_$sub" ], [ $value ] );
	}

	/**
	 * Get and return terms of taxonomy based on user selection and search.
	 *
	 * @param string $tax -> taxonomy.
	 * @param string $value -> user input.
	 * @return array
	 * @since 2.0.0
	 */
	private function get_terms( $tax, $value ) {
		$terms = get_terms( $tax,
			[
				'hide_empty' => false,
				'name__like' => $value,
			]
		);
		$items = [];

		if ( empty( $terms ) ) {
			wp_send_json_success( [] );
		}

		foreach ( $terms as $term ) {
			$items[] = [
				'value' => $term->term_id,
				'label' => $term->name,
			];
		}

		wp_send_json_success( $items );
	}

	/**
	 * Return posts of a post type based on arguments.
	 *
	 * @param array $args
	 * @return array
	 * @since 2.0.0
	 */
	private function get_posts( $args ) {
		$post_type = $args['post_type'];
		$title     = $args['s'];
		$items     = [];

		global $wpdb;

		$posts = $wpdb->get_results( // phpcs:ignore
			$wpdb->prepare(
				"SELECT * FROM $wpdb->posts WHERE `post_type` = %s AND post_title LIKE %s",
				$post_type,
				'%' . $wpdb->esc_like( $title ) . '%'
			)
		);

		if ( empty( $posts ) ) {
			wp_send_json_success( [] );
		}

		foreach ( $posts as $post ) {
			$items[] = [
				'value' => $post->ID,
				'label' => $post->post_title,
			];
		}

		wp_send_json_success( $items );
	}

	/**
	 * Get and return authors based on user input.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function get_authors( $value ) {
		$users = get_users(
			[
				'search'   => '*' . $value . '*',
				'role__in' => [ 'author', 'administrator' ],
			]
		);
		$items = [];

		if ( empty( $users ) ) {
			wp_send_json_success( $items );
		}

		foreach ( $users as $user ) {
			$items[] = [
				'value' => $user->ID,
				'label' => $user->display_name,
			];
		}

		wp_send_json_success( $items );
	}

	/**
	 * Return post.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_post( $value ) {
		$args = [
			'post_type' => 'post',
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Return authors for all singulars.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_by_author( $value ) {
		$this->get_authors( $value );
	}

	/**
	 * Return authors for posts.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_post_by_author( $value ) {
		$this->get_authors( $value );
	}

	/**
	 * Return terms of category.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_post_in_category( $value ) {
		$this->get_terms( 'category', $value );
	}

	/**
	 * Return terms of category.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_post_in_category_children( $value ) {
		$this->get_terms( 'category', $value );
	}

	/**
	 * Return terms of tags.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_post_in_post_tag( $value ) {
		$this->get_terms( 'post_tag', $value );
	}

	/**
	 * Return list of pages.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_page( $value ) {
		$args = [
			'post_type' => 'page',
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Return authors.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_page_by_author( $value ) {
		$this->get_authors( $value );
	}

	/**
	 * Return attachments list.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_attachment( $value ) {
		$args = [
			'post_type' => 'attachment',
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Return authors.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_attachment_by_author( $value ) {
		$this->get_authors( $value );
	}

	/**
	 * Search for posts.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_any_child_of( $value ) {
		$args = [
			'post_type' => 'any',
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Search for posts.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function singular_child_of( $value ) {
		$args = [
			'post_type' => 'any',
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Return authors for archive.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	 */
	private function archive_by_author( $value ) {
		$this->get_authors( $value );
	}

	/**
	 * Return terms of category for archive in_category.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function archive_post_in_category( $value ) {
		$this->get_terms( 'category', $value );
	}

	/**
	 * Return terms of category for archive in_category_children.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function archive_post_in_category_children( $value ) {
		$this->get_terms( 'category', $value );
	}

	/**
	 * Return terms of category for archive in_post_tag.
	 *
	 * @param string $value
	 * @return array
	 * @since 2.0.0
	 */
	private function archive_post_in_post_tag( $value ) {
		$this->get_terms( 'post_tag', $value );
	}

	/**
	 * Return authors for woocommerce.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_product_by_author( $value ) {
		$this->get_authors( $value );
	}

	/**
	 * Return tags of products.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_in_product_tag( $value ) {
		$this->get_terms( 'product_tag', $value );
	}

	/**
	 * Return categories of products.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_in_product_cat_children( $value ) {
		$this->get_terms( 'product_cat', $value );
	}

	/**
	 * Return categories of products.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_in_product_cat( $value ) {
		$this->get_terms( 'product_cat', $value );
	}

	/**
	 * Return Products.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_single_product( $value ) {
		$args = [
			'post_type' => 'product',
			's'         => $value,
		];

		$this->get_posts( $args );
	}

	/**
	 * Return categories of products.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_product_cat_archive( $value ) {
		$this->get_terms( 'product_cat', $value );
	}

	/**
	 * Return tags of products.
	 *
	 * @param string $value
	 * @return void
	 * @since 2.0.0
	*/
	private function woocommerce_product_tag_archive( $value ) {
		$this->get_terms( 'product_tag', $value );
	}
}

JupiterX_Core_Condition_Manager::get_instance();
