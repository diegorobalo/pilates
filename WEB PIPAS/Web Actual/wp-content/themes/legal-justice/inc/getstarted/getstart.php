<?php

// about theme info
add_action( 'admin_menu', 'legal_justice_gettingstarted_page' );
function legal_justice_gettingstarted_page() {      
    add_theme_page( esc_html__('Legal Justice', 'legal-justice'), esc_html__('All About Legal Justice', 'legal-justice'), 'edit_theme_options', 'legal_justice_mainpage', 'legal_justice_main_content');   
}

function legal_justice_notice(){
    global $pagenow;
    if ( is_admin() && ('themes.php' == $pagenow) && isset( $_GET['activated'] ) ) {?>
    <div class="notice notice-success is-dismissible getting_started">
        <div class="notice-content">
            <p><?php esc_html_e('Thanks For Choosing CA WP Themes', 'legal-justice'); ?></p>
            <h2><?php esc_html_e('Thanks for installing Legal Justice Free Theme!', 'legal-justice'); ?></h2>
            <p><?php esc_html_e('Please Click on the link below to Check The Full Theme Edit Documentation', 'legal-justice'); ?></p>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_DOCUMENTATION ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Documentation', 'legal-justice'); ?></a>
            </div>
            <h2><?php esc_html_e('Now the Premium Version is only at $39.99 with Lifetime Access!Grab the deal now!', 'legal-justice'); ?></h2>
            <h2><?php esc_html_e('Check The Pro Version: Legal Justice Premium WordPress Theme for Amazing Features for Unlimited Site', 'legal-justice'); ?></h2>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_URL ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Upgrade to Pro', 'legal-justice'); ?></a>
            </div>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_DEMO ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Premium Demo', 'legal-justice'); ?></a>
            </div>

        </div>
    </div>
    <?php }
}
add_action('admin_notices', 'legal_justice_notice');

// Add a Custom CSS file to WP Admin Area
function legal_justice_admin_page_theme_style() {
   wp_enqueue_style('legal-justice-custom-admin-style', esc_url(get_template_directory_uri()) . '/inc/getstarted/getstarted.css');
}
add_action('admin_enqueue_scripts', 'legal_justice_admin_page_theme_style');

// About Theme Info
function legal_justice_main_content() { 

    // Custom function about theme customizer

    $return = add_query_arg( array()) ;
    $theme = wp_get_theme( 'legal-justice' );
?>

<div class="admin-main-box">
    <div class="admin-left-box">
        <h2><?php esc_html_e('Welcome to Legal Justice Theme', 'legal-justice'); ?> <span class="version"><?php $theme_info = wp_get_theme();
echo $theme_info->get( 'Version' );?></span></h2>
        <p><?php esc_html_e('CA WP Themes is a premium WordPress theme development company that provides high-quality themes for various types of websites. They specialize in creating themes for businesses, eCommerce, portfolios, blogs, and many more. Their themes are easy to use and customize, making them perfect for those who want to create a professional-looking website without any coding skills.', 'legal-justice'); ?></p>
        <p><?php esc_html_e('CA WP Themes offers a wide range of themes that are designed to be responsive and compatible with the latest versions of WordPress. Our themes are also SEO optimized, ensuring that your website will rank well on search engines. They come with a variety of features such as customizable widgets, social media integration, and custom page templates.', 'legal-justice'); ?></p>
        <p><?php esc_html_e('One of the unique things about CA WP Themes is their focus on providing excellent customer support. They have a dedicated team of support staff who are available 24/7 to help customers with any issues they may encounter. Their support team is knowledgeable and friendly, ensuring that customers receive the best possible experience.', 'legal-justice'); ?></p>
    </div>
    <div class="admin-right-box">
        <div class="admin_text-btn">
            <h4><?php esc_html_e('Buy Legal Justice Premium Theme', 'legal-justice'); ?></h4>
            <p><?php esc_html_e('Now the Premium Version is only at $39.99 with Lifetime Access!Grab the deal now!', 'legal-justice'); ?></p>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_URL ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Upgrade to Pro', 'legal-justice'); ?></a>
            </div>
        </div>
        <hr>
        <div class="admin_text-btn">
            <h4><?php esc_html_e('Premium Theme Demo', 'legal-justice'); ?></h4>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_DEMO ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Demo', 'legal-justice'); ?></a>
            </div>
        </div>
        <hr>
        <div class="admin_text-btn">
            <h4><?php esc_html_e('Need Support? / Contact Us', 'legal-justice'); ?></h4>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_SUPPORT ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Contact Us', 'legal-justice'); ?></a>
            </div>
        </div>
        <hr>
        <div class="admin_text-btn">
            <h4><?php esc_html_e('Documentation', 'legal-justice'); ?></h4>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_PRO_DOCUMENTATION ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Docs', 'legal-justice'); ?></a>
            </div>
        </div>
        <hr>
        <div class="admin_text-btn">
            <h4><?php esc_html_e('Free Theme', 'legal-justice'); ?></h4>
            <div class="info-link">
                <a href="<?php echo esc_url( LEGAL_JUSTICE_FREE_URL ); ?>" target="_blank" class="button button-primary"> <?php esc_html_e('Demo', 'legal-justice'); ?></a>
            </div>
        </div>

    </div>
</div>

<?php } ?>