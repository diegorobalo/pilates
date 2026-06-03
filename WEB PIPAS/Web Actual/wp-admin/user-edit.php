<?php
/**
 * Edit user administration panel.
 *
 * @package WordPress
 * @subpackage Administration
 */

/** WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

/** WordPress Translation Installation API */
require_once ABSPATH . 'wp-admin/includes/translation-install.php';

wp_reset_vars( array( 'action', 'user_id', 'wp_http_referer' ) );

$user_id      = (int) $user_id;
$current_user = wp_get_current_user();

if ( ! defined( 'IS_PROFILE_PAGE' ) ) {
	define( 'IS_PROFILE_PAGE', ( $user_id === $current_user->ID ) );
}

if ( ! $user_id && IS_PROFILE_PAGE ) {
	$user_id = $current_user->ID;
} elseif ( ! $user_id && ! IS_PROFILE_PAGE ) {
	wp_die( __( 'Invalid user ID.' ) );
} elseif ( ! get_userdata( $user_id ) ) {
	wp_die( __( 'Invalid user ID.' ) );
}

wp_enqueue_script( 'user-profile' );

if ( wp_is_application_passwords_available_for_user( $user_id ) ) {
	wp_enqueue_script( 'application-passwords' );
}

if ( IS_PROFILE_PAGE ) {
	// Used in the HTML title tag.
	$title = __( 'Profile' );
} else {
	// Used in the HTML title tag.
	/* translators: %s: User's display name. */
	$title = __( 'Edit User %s' );
}

if ( current_user_can( 'edit_users' ) && ! IS_PROFILE_PAGE ) {
	$submenu_file = 'users.php';
} else {
	$submenu_file = 'profile.php';
}

if ( current_user_can( 'edit_users' ) && ! is_user_admin() ) {
	$parent_file = 'users.php';
} else {
	$parent_file = 'profile.php';
}

$profile_help = '<p>' . __( 'Your profile contains information about you (your &#8220;account&#8221;) as well as some personal options related to using WordPress.' ) . '</p>' .
	'<p>' . __( 'You can change your password, turn on keyboard shortcuts, change the color scheme of your WordPress administration screens, and turn off the WYSIWYG (Visual) editor, among other things. You can hide the Toolbar (formerly called the Admin Bar) from the front end of your site, however it cannot be disabled on the admin screens.' ) . '</p>' .
	'<p>' . __( 'You can select the language you wish to use while using the WordPress administration screen without affecting the language site visitors see.' ) . '</p>' .
	'<p>' . __( 'Your username cannot be changed, but you can use other fields to enter your real name or a nickname, and change which name to display on your posts.' ) . '</p>' .
	'<p>' . __( 'You can log out of other devices, such as your phone or a public computer, by clicking the Log Out Everywhere Else button.' ) . '</p>' .
	'<p>' . __( 'Required fields are indicated; the rest are optional. Profile information will only be displayed if your theme is set up to do so.' ) . '</p>' .
	'<p>' . __( 'Remember to click the Update Profile button when you are finished.' ) . '</p>';

get_current_screen()->add_help_tab(
	array(
		'id'      => 'overview',
		'title'   => __( 'Overview' ),
		'content' => $profile_help,
	)
);

get_current_screen()->set_help_sidebar(
	'<p><strong>' . __( 'For more information:' ) . '</strong></p>' .
	'<p>' . __( '<a href="https://wordpress.org/documentation/article/users-your-profile-screen/">Documentation on User Profiles</a>' ) . '</p>' .
	'<p>' . __( '<a href="https://wordpress.org/support/forums/">Support forums</a>' ) . '</p>'
);

$wp_http_referer = remove_query_arg( array( 'update', 'delete_count', 'user_id' ), $wp_http_referer );

$user_can_edit = current_user_can( 'edit_posts' ) || current_user_can( 'edit_pages' );

/**
 * Filters whether to allow administrators on Multisite to edit every user.
 *
 * Enabling the user editing form via this filter also hinges on the user holding
 * the 'manage_network_users' cap, and the logged-in user not matching the user
 * profile open for editing.
 *
 * The filter was introduced to replace the EDIT_ANY_USER constant.
 *
 * @since 3.0.0
 *
 * @param bool $allow Whether to allow editing of any user. Default true.
 */
if ( is_multisite()
	&& ! current_user_can( 'manage_network_users' )
	&& $user_id !== $current_user->ID
	&& ! apply_filters( 'enable_edit_any_user_configuration', true )
) {
	wp_die( __( 'Sorry, you are not allowed to edit this user.' ) );
}

// Execute confirmed email change. See send_confirmation_on_profile_email().
if ( IS_PROFILE_PAGE && isset( $_GET['newuseremail'] ) && $current_user->ID ) {
	$new_email = get_user_meta( $current_user->ID, '_new_email', true );
	if ( $new_email && hash_equals( $new_email['hash'], $_GET['newuseremail'] ) ) {
		$user             = new stdClass();
		$user->ID         = $current_user->ID;
		$user->user_email = esc_html( trim( $new_email['newemail'] ) );
		if ( is_multisite() && $wpdb->get_var( $wpdb->prepare( "SELECT user_login FROM {$wpdb->signups} WHERE user_login = %s", $current_user->user_login ) ) ) {
			$wpdb->query( $wpdb->prepare( "UPDATE {$wpdb->signups} SET user_email = %s WHERE user_login = %s", $user->user_email, $current_user->user_login ) );
		}
		wp_update_user( $user );
		delete_user_meta( $current_user->ID, '_new_email' );
		wp_redirect( add_query_arg( array( 'updated' => 'true' ), self_admin_url( 'profile.php' ) ) );
		die();
	} else {
		wp_redirect( add_query_arg( array( 'error' => 'new-email' ), self_admin_url( 'profile.php' ) ) );
	}
} elseif ( IS_PROFILE_PAGE && ! empty( $_GET['dismiss'] ) && $current_user->ID . '_new_email' === $_GET['dismiss'] ) {
	check_admin_referer( 'dismiss-' . $current_user->ID . '_new_email' );
	delete_user_meta( $current_user->ID, '_new_email' );
	wp_redirect( add_query_arg( array( 'updated' => 'true' ), self_admin_url( 'profile.php' ) ) );
	die();
}

switch ( $action ) {
	case 'update':
		check_admin_referer( 'update-user_' . $user_id );

		if ( ! current_user_can( 'edit_user', $user_id ) ) {
			wp_die( __( 'Sorry, you are not allowed to edit this user.' ) );
		}

		if ( IS_PROFILE_PAGE ) {
			/**
			 * Fires before the page loads on the 'Profile' editing screen.
			 *
			 * The action only fires if the current user is editing their own profile.
			 *
			 * @since 2.0.0
			 *
			 * @param int $user_id The user ID.
			 */
			do_action( 'personal_options_update', $user_id );
		} else {
			/**
			 * Fires before the page loads on the 'Edit User' screen.
			 *
			 * @since 2.7.0
			 *
			 * @param int $user_id The user ID.
			 */
			do_action( 'edit_user_profile_update', $user_id );
		}

		// Update the email address in signups, if present.
		if ( is_multisite() ) {
			$user = get_userdata( $user_id );

			if ( $user->user_login && isset( $_POST['email'] ) && is_email( $_POST['email'] ) && $wpdb->get_var( $wpdb->prepare( "SELECT user_login FROM {$wpdb->signups} WHERE user_login = %s", $user->user_login ) ) ) {
				$wpdb->query( $wpdb->prepare( "UPDATE {$wpdb->signups} SET user_email = %s WHERE user_login = %s", $_POST['email'], $user_login ) );
			}
		}

		// Update the user.
		$errors = edit_user( $user_id );

		// Grant or revoke super admin status if requested.
		if ( is_multisite() && is_network_admin()
			&& ! IS_PROFILE_PAGE && current_user_can( 'manage_network_options' )
			&& ! isset( $super_admins ) && empty( $_POST['super_admin'] ) === is_super_admin( $user_id )
		) {
			empty( $_POST['super_admin'] ) ? revoke_super_admin( $user_id ) : grant_super_admin( $user_id );
		}

		if ( ! is_wp_error( $errors ) ) {
			$redirect = add_query_arg( 'updated', true, get_edit_user_link( $user_id ) );
			if ( $wp_http_referer ) {
				$redirect = add_query_arg( 'wp_http_referer', urlencode( $wp_http_referer ), $redirect );
			}
			wp_redirect( $redirect );
			exit;
		}

		// Intentional fall-through to display $errors.
	default:
		$profile_user = get_user_to_edit( $user_id );

		if ( ! current_user_can( 'edit_user', $user_id ) ) {
			wp_die( __( 'Sorry, you are not allowed to edit this user.' ) );
		}

		$title    = sprintf( $title, $profile_user->display_name );
		$sessions = WP_Session_Tokens::get_instance( $profile_user->ID );

		require_once ABSPATH . 'wp-admin/admin-header.php';
		?>

		<?php
		if ( ! IS_PROFILE_PAGE && is_super_admin( $profile_user->ID ) && current_user_can( 'manage_network_options' ) ) :
			$message = '<strong>' . __( 'Important:' ) . '</strong> ' . __( 'This user has super admin privileges.' );
			wp_admin_notice(
				$message,
				array(
					'type' => 'info',
				)
			);
		endif;

		if ( isset( $_GET['updated'] ) ) :
			if ( IS_PROFILE_PAGE ) :
				$message = '<strong>' . __( 'Profile updated.' ) . '</strong>';
			else :
				$message = '<strong>' . __( 'User updated.' ) . '</strong>';
			endif;
			if ( $wp_http_referer && ! str_contains( $wp_http_referer, 'user-new.php' ) && ! IS_PROFILE_PAGE ) :
				$message .= '<a href="' . esc_url( wp_validate_redirect( sanitize_url( $wp_http_referer ), self_admin_url( 'users.php' ) ) ) . '">' . __( '&larr; Go to Users' ) . '</a>';
			endif;
			wp_admi