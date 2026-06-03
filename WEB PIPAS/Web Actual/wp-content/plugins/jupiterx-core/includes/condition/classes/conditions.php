<?php
/**
 * Jupiterx single condition manager.
 *
 * @since 2.0.0
 * @SuppressWarnings(PHPMD.NPathComplexity)
 * @SuppressWarnings(PHPMD.CyclomaticComplexity)
 */
class Jupiterx_Conditions_Check {

	public function __construct() {
		require_once __DIR__ . '/singulars.php';
		require_once __DIR__ . '/archives.php';
		require_once __DIR__ . '/woocommerce.php';
		require_once __DIR__ . '/users.php';

		$this->singulars   = new Jupiterx_Singular_Condition();
		$this->archives    = new Jupiterx_Archives_Condition();
		$this->woocommerce = new Jupiterx_Woocommerce_Condition();
		$this->users       = new Jupiterx_Users_Condition();
	}

	/**
	 * Handle each condition.
	 *
	 * @param array $condition
	 * @param array $query get_queried_object()
	 * @return boolean
	 * @since 2.0.0
	 */
	public function conditions( $condition, $query, $post ) {
		$result = false;

		if ( 'entire' === $condition[0] ) {
			$result = true;
		}

		if ( 'maintenance' === $condition[0] && true === get_theme_mod( 'jupiterx_maintenance' ) && ! is_user_logged_in() ) {
			$this->maintenance_mode_hooks();
			return true;
		}

		if ( 'singular' === $condition[0] && ( is_singular() || is_single() || is_home() || is_front_page() ) ) {
			// Woocommerce related conditions must be managed by woocommerce class itself.
			if ( function_exists( 'is_woocommerce' ) && ( is_woocommerce() || is_cart() || is_checkout() ) ) {
				return false;
			}

			$result = $this->singulars->sub_condition( $condition, $query, $post );
		}

		if ( 'archive' === $condition[0] ) {
			// Woocommerce related conditions must be managed by woocommerce class itself.
			if ( function_exists( 'is_woocommerce' ) && ( is_woocommerce() || is_cart() || is_checkout() ) ) {
				return false;
			}

			$result = $this->archives->sub_condition( $condition, $query, $post );
		}

		if ( 'woocommerce' === $condition[0] ) {
			$result = $this->woocommerce->sub_condition( $condition, $query, $post );
		}

		if ( 'users' === $condition[0] ) {
			$result = $this->users->sub_condition( $condition );
		}

		return $result;
	}

	/**
	 * Used hooks when maintenance mode is on.
	 *
	 * @since 2.0.0
	 */
	private function maintenance_mode_hooks() {
		jupiterx_remove_action( 'jupiterx_main_header_partial_template' );
		jupiterx_remove_action( 'jupiterx_main_footer_partial_template' );
		jupiterx_remove_action( 'jupiterx_header_partial_template' );
		jupiterx_remove_action( 'jupiterx_footer_partial_template' );
	}
}
