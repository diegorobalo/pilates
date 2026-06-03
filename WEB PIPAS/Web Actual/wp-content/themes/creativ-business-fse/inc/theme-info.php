<?php
/**
 * Custom Menu Page.
 *
 * @since 1.0.0
 *
 * @return void
 */
function creativ_business_fse_menu_page() {
    add_submenu_page(
        'themes.php', // Parent slug: 'themes.php' is for Appearance menu
        'Theme Page', // Page title
        'Creativ Business FSE', // Menu title
        'manage_options', // Capability
        'theme-menu-page', // Menu slug
        'creativ_business_fse_menu_page_callback' // Callback function
    );
}
add_action('admin_menu', 'creativ_business_fse_menu_page');

function creativ_business_fse_menu_page_callback() {
    $theme         = wp_get_theme();
    $theme_name    = $theme->get('Name');
    $theme_version = $theme->get( 'Version' );
    $theme_slug    = $theme->get_template();
    ?>
    <div class="theme-wrap">
        <div class="theme-image theme-column">
            <?php echo '<img src="' . esc_url( get_stylesheet_directory_uri() . '/screenshot.png' ) . '" alt="Theme screenshot image">'; ?>
        </div>
        <div class="theme-wrap-inner theme-column">
            <h1><?php echo esc_html__( 'Welcome to the', 'creativ-business-fse' ) . ' ' . esc_html( $theme_name ) . ' ' . esc_html( $theme_version ); ?></h1>
            <p><?php echo esc_html( $theme_name ) . ' ' . esc_html__( 'is now installed and ready to use.', 'creativ-business-fse' ); ?></p>
            <div class="quick-links">
                <?php
                echo '<a href="' . esc_url( 'https://www.creativthemes.com/' ) . esc_html__( 'creativ-fse-pro', 'creativ-business-fse' ) . '" target="_blank" class="button button-hero button-primary">' . esc_html__( 'Buy Pro', 'creativ-business-fse' ).'</a>';
                echo '<a href="' . esc_url( 'https://creativthemes.com/downloads/' . esc_html( $theme_slug ) ) . '" target="_blank" class="button button-hero button-secondary">' . esc_html__( 'Theme Info', 'creativ-business-fse' ).'</a>';
                ?>
            </div>
        </div>
    </div>
    <?php
}