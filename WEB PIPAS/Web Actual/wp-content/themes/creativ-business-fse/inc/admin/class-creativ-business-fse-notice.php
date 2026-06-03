<?php
/**
 * Creativ Business FSE main admin class
 *
 * @package Creativ Business FSE
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class creativ_business_fse_Admin_Main
 */
class creativ_business_fse_Notice {
    public $theme_name;

    /**
     * Creativ Business FSE Notice constructor.
     */
    public function __construct() {

        global $admin_main_class;

        add_action( 'admin_enqueue_scripts', array( $this, 'creativ_business_fse_enqueue_scripts' ) );

        add_action( 'wp_loaded', array( $this, 'creativ_business_fse_hide_welcome_notices' ) );
        add_action( 'wp_loaded', array( $this, 'creativ_business_fse_welcome_notice' ) );


        add_action( 'wp_ajax_creativ_business_fse_activate_plugin', array( $admin_main_class, 'creativ_business_fse_activate_demo_importer_plugin' ) );
        add_action( 'wp_ajax_creativ_business_fse_install_plugin', array( $admin_main_class, 'creativ_business_fse_install_demo_importer_plugin' ) );

        add_action( 'wp_ajax_creativ_business_fse_install_free_plugin', array( $admin_main_class, 'creativ_business_fse_install_free_plugin' ) );
        add_action( 'wp_ajax_creativ_business_fse_activate_free_plugin', array( $admin_main_class, 'creativ_business_fse_activate_free_plugin' ) );

        //theme details
        $theme = wp_get_theme();
        $this->theme_name = $theme->get( 'Name' );
    }

    /**
     * Localize array for import button AJAX request.
     */
    public function creativ_business_fse_enqueue_scripts() {
        wp_enqueue_style( 'creativ-business-fse-admin-style', get_template_directory_uri() . '/inc/admin/assets/css/admin.css', array(), 20151215 );

        wp_enqueue_script( 'creativ-business-fse-plugin-install-helper', get_template_directory_uri() . '/inc/admin/assets/js/plugin-handle.js', array( 'jquery' ), 20151215 );

        $demo_importer_plugin = WP_PLUGIN_DIR . '/creativ-demo-importer/creativ-demo-importer.php';
        if ( ! file_exists( $demo_importer_plugin ) ) {
            $action = 'install';
        } elseif ( file_exists( $demo_importer_plugin ) && !is_plugin_active( 'creativ-demo-importer/creativ-demo-importer.php' ) ) {
            $action = 'activate';
        } else {
            $action = 'redirect';
        }

        wp_localize_script( 'creativ-business-fse-plugin-install-helper', 'ogAdminObject',
            array(
                'ajax_url'      => esc_url( admin_url( 'admin-ajax.php' ) ),
                '_wpnonce'      => wp_create_nonce( 'creativ_business_fse_plugin_install_nonce' ),
                'buttonStatus'  => esc_html( $action )
            )
        );
    }

    /**
     * Add admin welcome notice.
     */
    public function creativ_business_fse_welcome_notice() {

        if ( isset( $_GET['activated'] ) ) {
            update_option( 'creativ_business_fse_admin_notice_welcome', true );
        }

        $welcome_notice_option = get_option( 'creativ_business_fse_admin_notice_welcome' );

        // Let's bail on theme activation.
        if ( $welcome_notice_option ) {
            add_action( 'admin_notices', array( $this, 'creativ_business_fse_welcome_notice_html' ) );
        }
    }

    /**
     * Hide a notice if the GET variable is set.
     */
    public static function creativ_business_fse_hide_welcome_notices() {
        if ( isset( $_GET['creativ-business-fse-hide-welcome-notice'] ) && isset( $_GET['_creativ_business_fse_welcome_notice_nonce'] ) ) {
            if ( ! wp_verify_nonce( $_GET['_creativ_business_fse_welcome_notice_nonce'], 'creativ_business_fse_hide_welcome_notices_nonce' ) ) {
                wp_die( esc_html__( 'Action failed. Please refresh the page and retry.', 'creativ-business-fse' ) );
            }

            if ( ! current_user_can( 'manage_options' ) ) {
                wp_die( esc_html__( 'Cheat in &#8217; huh?', 'creativ-business-fse' ) );
            }

            $hide_notice = sanitize_text_field( $_GET['creativ-business-fse-hide-welcome-notice'] );
            update_option( 'creativ_business_fse_admin_notice_' . $hide_notice, false );
        }
    }

    /**
     * function to display welcome notice section
     */
    public function creativ_business_fse_welcome_notice_html() {
        $current_screen = get_current_screen();

        if ( $current_screen->id !== 'dashboard' && $current_screen->id !== 'themes' ) {
            return;
        }
        ?>
        <div id="creativ-business-fse-welcome-notice" class="creativ-business-fse-welcome-notice-wrapper updated notice">
            <a class="creativ-business-fse-message-close notice-dismiss" href="<?php echo esc_url( wp_nonce_url( remove_query_arg( array( 'activated' ), add_query_arg( 'creativ-business-fse-hide-welcome-notice', 'welcome' ) ), 'creativ_business_fse_hide_welcome_notices_nonce', '_creativ_business_fse_welcome_notice_nonce' ) ); ?>">
                <span class="screen-reader-text"><?php esc_html_e( 'Dismiss this notice.', 'creativ-business-fse' ); ?>
            </a>
            <div class="creativ-business-fse-welcome-title-wrapper">
                <h2 class="notice-title"><?php esc_html_e( 'Congratulations!', 'creativ-business-fse' ); ?></h2>
                <p class="notice-description">
                    <?php
                        printf( esc_html__( '%1$s is now installed and ready to use. Clicking on Get started with Creativ Business FSE will install and activate Creativ Demo Importer Plugin.', 'creativ-business-fse' ), $this->theme_name );
                    ?>
                </p>
            </div><!-- .creativ-business-fse-welcome-title-wrapper -->
            <div class="welcome-notice-details-wrapper">

                <div class="notice-detail-wrap general">
                    
                    <div class="general-info-links">
                        <div class="buttons-wrap">
                            <button class="creativ-business-fse-get-started button button-primary button-hero" data-done="<?php esc_attr_e( 'Done!', 'creativ-business-fse' ); ?>" data-process="<?php esc_attr_e( 'Processing', 'creativ-business-fse' ); ?>" data-redirect="<?php echo esc_url( wp_nonce_url( add_query_arg( 'creativ-business-fse-hide-welcome-notice', 'welcome', admin_url( 'admin.php' ).'?page=ct-options' ) , 'creativ_business_fse_hide_welcome_notices_nonce', '_creativ_business_fse_welcome_notice_nonce' ) ); ?>">
                                <?php printf( esc_html__( 'Get started with %1$s', 'creativ-business-fse' ), esc_html( $this->theme_name ) ); ?>
                            </button>
                        </div><!-- .buttons-wrap -->
                    </div><!-- .general-info-links -->
                </div><!-- .notice-detail-wrap.general -->

            </div><!-- .welcome-notice-details-wrapper -->
        </div><!-- .creativ-business-fse-welcome-notice-wrapper -->
<?php
    }
}
new creativ_business_fse_Notice();