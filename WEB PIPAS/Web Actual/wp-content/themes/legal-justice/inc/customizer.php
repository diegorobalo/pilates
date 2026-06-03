<?php
/**
 * Add custom settings and controls to the WordPress Customizer
 */


//----------- Code to add the Upgrade to Pro button in the Customizer ----------

function legal_justice_customize_register_btn( $wp_customize ) {
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
    $wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

    include get_template_directory() . '/inc/customizer-button/upsell-section.php';

    if ( isset( $wp_customize->selective_refresh ) ) {
        $wp_customize->selective_refresh->add_partial( 'blogname', array(
            'selector'        => '.site-title a',
            'render_callback' => 'legal_justice_customize_partial_blogname',
        ) );
        $wp_customize->selective_refresh->add_partial( 'blogdescription', array(
            'selector'        => '.site-description',
            'render_callback' => 'legal_justice_customize_partial_blogdescription',
        ) );
    }

    $wp_customize->register_section_type( 'Legal_Justice_Customize_Upsell_Section' );

    // Register section.
    $wp_customize->add_section(
        new Legal_Justice_Customize_Upsell_Section(
            $wp_customize,
            'theme_upsell',
            array(
                'title'    => esc_html__( 'Legal Justice Pro', 'legal-justice' ),
                'pro_text' => esc_html__( 'Upgrade To Pro', 'legal-justice' ),
                'pro_url'  => 'https://cawpthemes.com/legal-justice-premium-wordpress-theme/',
                'priority' => 1,
            )
        )
    );
}
add_action( 'customize_register', 'legal_justice_customize_register_btn' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function legal_justice_customize_partial_blogname() {
    bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function legal_justice_customize_partial_blogdescription() {
    bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function legal_justice_customize_preview_js() {
    wp_enqueue_script( 'legal-justice-customizer', get_template_directory_uri() . '/inc/customizer-button/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'legal_justice_customize_preview_js' );

/**
 * Customizer control scripts and styles.
 *
 * @since 1.0.0
 */
function legal_justice_customizer_control_scripts() {

    wp_enqueue_style( 'legal-justice-customize-controls', get_template_directory_uri() . '/inc/customizer-button/customize-controls.css', '', '1.0.0' );

    wp_enqueue_script( 'legal-justice-customize-controls', get_template_directory_uri() . '/inc/customizer-button/customize-controls.js', array( 'customize-controls' ), '1.0.0', true );
}
add_action( 'customize_controls_enqueue_scripts', 'legal_justice_customizer_control_scripts', 0 );


//---------------------Code to add the Upgrade to Pro button in the Customizer End----------


//------------------Theme Information--------------------

function legal_justice_customize_register( $wp_customize ) {



      // Add a custom setting for the Site Identity color
  $wp_customize->add_setting( 'legal_justice_site_identity_color', array(
    'default' => '#000',
    'sanitize_callback' => 'sanitize_hex_color',
  ) );

  // Add a custom control for the primary color
  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'legal_justice_site_identity_color', array(
    'label' => __( 'Site Identity Color', 'legal-justice' ),
    'section' => 'title_tagline',
    'settings' => 'legal_justice_site_identity_color',
  ) ) );


  // Add a custom setting for the Site Identity color
  $wp_customize->add_setting( 'legal_justice_site_identity_tagline_color', array(
    'default' => '#000',
    'sanitize_callback' => 'sanitize_hex_color',
  ) );

  // Add a custom control for the primary color
  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'legal_justice_site_identity_tagline_color', array(
    'label' => __( 'Tagline Color', 'legal-justice' ),
    'section' => 'title_tagline',
    'settings' => 'legal_justice_site_identity_tagline_color',
  ) ) );

//------------------Site Identity Ends---------------------

  
  // Add a custom setting for the primary color
  $wp_customize->add_setting( 'legal_justice_primary_color', array(
    'default' => '#1f3044',
    'sanitize_callback' => 'sanitize_hex_color',
  ) );

  // Add a custom control for the primary color
  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'legal_justice_primary_color', array(
    'label' => __( 'Primary Color', 'legal-justice' ),
    'section' => 'colors',
    'settings' => 'legal_justice_primary_color',
  ) ) );

  //-----------------------------------Home Front Page-------------------------------

  $wp_customize->add_panel( 'legal_justice_panel', array(
    'title'    => __( 'Front Page Settings', 'legal-justice' ),
    'priority' => 6,
  ) );


  //-------------------------------------Banner Image Section--------------

      $wp_customize->add_section( 'legal_justice_section_banner', array(
        'title'    => __( 'Home First Section', 'legal-justice' ),
        'panel'    => 'legal_justice_panel',
    ) );


  //-----------------Enable Option banner-------------

  $wp_customize->add_setting('legal_justice_section_banner',array(
      'default' => 'Enable',
      'sanitize_callback' => 'legal_justice_sanitize_choices'
  ));
  $wp_customize->add_control('legal_justice_section_banner',array(
        'type' => 'radio',
        'label' => __('Do you want this section', 'legal-justice'),
        'section' => 'legal_justice_section_banner',
        'choices' => array(
            'Enable' => __('Enable', 'legal-justice'),
            'Disable' => __('Disable', 'legal-justice')
  )));

  $wp_customize->add_setting('legal_justice_section_bannerimage_section',array(
    'default' => '',
    'sanitize_callback' => 'esc_url_raw',
  ));
  $wp_customize->add_control(
    new WP_Customize_Image_Control( $wp_customize,'legal_justice_section_bannerimage_section',array(
    'label' => __('Section Side Image','legal-justice'),
    'description' => __('Dimention 500 * 500','legal-justice'),
    'section' => 'legal_justice_section_banner',
    'settings' => 'legal_justice_section_bannerimage_section'
  )));

    $wp_customize->add_setting('legal_justice_section_bannerimage_section_title',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_section_bannerimage_section_title',array(
      'label' => __('Section Title','legal-justice'),
      'section' => 'legal_justice_section_banner',
      'setting' => 'legal_justice_section_bannerimage_section_title',
      'type'    => 'text'
    )
  ); 

      $wp_customize->add_setting('legal_justice_section_bannerimage_section_text',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_section_bannerimage_section_text',array(
      'label' => __('Section Text','legal-justice'),
      'section' => 'legal_justice_section_banner',
      'setting' => 'legal_justice_section_bannerimage_section_text',
      'type'    => 'textarea'
    )
  );

    $wp_customize->add_setting('legal_justice_banner_btn_text',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_banner_btn_text',array(
      'label' => __('Button Text','legal-justice'),
      'section' => 'legal_justice_section_banner',
      'setting' => 'legal_justice_banner_btn_text',
      'type'    => 'text'
    )
  );


    $wp_customize->add_setting('legal_justice_banner_btn_text_url',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_banner_btn_text_url',array(
      'label' => __('Button URL','legal-justice'),
      'section' => 'legal_justice_section_banner',
      'setting' => 'legal_justice_banner_btn_text_url',
      'type'    => 'text'
    )
  );

// -------------------About Us-----------

  // Add the About Us Section to Customizer
    $wp_customize->add_section('legal_justice_about_section', array(
        'title'       => __('About Us Section', 'legal-justice'),
        'description' => __('Customize the About Us section displayed on the homepage.', 'legal-justice'),
        'panel'       => 'legal_justice_panel', // If you have a main panel for the theme
    ));

    // Enable/Disable About Us Section
    $wp_customize->add_setting('legal_justice_about_enable', array(
        'default'           => 'Enable',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_enable', array(
        'label'   => __('Enable About Us Section', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'radio',
        'choices' => array(
            'Enable'  => __('Enable', 'legal-justice'),
            'Disable' => __('Disable', 'legal-justice'),
        ),
    ));

    // Section Title
    $wp_customize->add_setting('legal_justice_about_title', array(
        'default'           => __('Expert Legal Solutions for Families', 'legal-justice'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_title', array(
        'label'   => __('Section Title', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));

    // Section Subtitle
    $wp_customize->add_setting('legal_justice_about_subtitle', array(
        'default'           => __('Delivering tailored legal services with professionalism and empathy.', 'legal-justice'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_subtitle', array(
        'label'   => __('Section Subtitle', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));

    // Section Description
    $wp_customize->add_setting('legal_justice_about_description', array(
        'default'           => __('Our team specializes in family law, offering solutions for a wide range of cases. With years of experience, we provide reliable guidance and support, ensuring your legal needs are met with dedication and care.', 'legal-justice'),
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('legal_justice_about_description', array(
        'label'   => __('Section Description', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'textarea',
    ));

    // "Contact Us" Label
    $wp_customize->add_setting('legal_justice_about_contact_label', array(
        'default'           => __('Contact Us:', 'legal-justice'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_contact_label', array(
        'label'   => __('Contact Us Label', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));

    // "Call Now" Button Text
    $wp_customize->add_setting('legal_justice_about_call_button_text', array(
        'default'           => __('Call Now', 'legal-justice'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_call_button_text', array(
        'label'   => __('Call Now Button Text', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));

  // Office Address Tiltle
  $wp_customize->add_setting('legal_justice_about_contact_detail_title3', array(
      'default'           => '',
      'sanitize_callback' => 'sanitize_text_field',
  ));
  $wp_customize->add_control('legal_justice_about_contact_detail_title3', array(
      'label'   => __('Phone Title', 'legal-justice'),
      'section' => 'legal_justice_pro_about_contact_section',
      'type'    => 'text',
  ));

    // Contact Phone Number
    $wp_customize->add_setting('legal_justice_about_phone', array(
        'default'           => '1-800-123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_phone', array(
        'label'   => __('Phone Number', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));

  // Office Address Tiltle
  $wp_customize->add_setting('legal_justice_about_contact_detail_title1', array(
      'default'           => '',
      'sanitize_callback' => 'sanitize_text_field',
  ));
  $wp_customize->add_control('legal_justice_about_contact_detail_title1', array(
      'label'   => __('Address Title', 'legal-justice'),
      'section' => 'legal_justice_pro_about_contact_section',
      'type'    => 'text',
  ));

    // Office Address
    $wp_customize->add_setting('legal_justice_about_office_address', array(
        'default'           => '123 Liberty Street, New York, NY',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_office_address', array(
        'label'   => __('Office Address', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));

  // Office Address Tiltle
  $wp_customize->add_setting('legal_justice_about_contact_detail_title2', array(
      'default'           => '',
      'sanitize_callback' => 'sanitize_text_field',
  ));
  $wp_customize->add_control('legal_justice_about_contact_detail_title2', array(
      'label'   => __('Email Title', 'legal-justice'),
      'section' => 'legal_justice_pro_about_contact_section',
      'type'    => 'text',
  ));

    // Email Address
    $wp_customize->add_setting('legal_justice_about_email', array(
        'default'           => 'contact@legaljustice.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('legal_justice_about_email', array(
        'label'   => __('Email Address', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'email',
    ));

  // Office Address Tiltle
  $wp_customize->add_setting('legal_justice_about_contact_detail_title4', array(
      'default'           => '',
      'sanitize_callback' => 'sanitize_text_field',
  ));
  $wp_customize->add_control('legal_justice_about_contact_detail_title4', array(
      'label'   => __('Timing Title', 'legal-justice'),
      'section' => 'legal_justice_pro_about_contact_section',
      'type'    => 'text',
  ));

    // Working Hours
    $wp_customize->add_setting('legal_justice_about_hours', array(
        'default'           => 'Mon-Fri: 9am – 6pm',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_about_hours', array(
        'label'   => __('Working Hours', 'legal-justice'),
        'section' => 'legal_justice_about_section',
        'type'    => 'text',
    ));


  //-------------------------------------Services Section--------------

      $wp_customize->add_section( 'legal_justice_services_section', array(
        'title'    => __( 'Services Section', 'legal-justice' ),
        'panel'    => 'legal_justice_panel',
    ) );


  //-----------------Enable Option banner-------------

  $wp_customize->add_setting('legal_justice_section_services_enable',array(
      'default' => 'Enable',
      'sanitize_callback' => 'legal_justice_sanitize_choices'
  ));
  $wp_customize->add_control('legal_justice_section_services_enable',array(
        'type' => 'radio',
        'label' => __('Do you want this section', 'legal-justice'),
        'section' => 'legal_justice_services_section',
        'choices' => array(
            'Enable' => __('Enable', 'legal-justice'),
            'Disable' => __('Disable', 'legal-justice')
  )));


    $wp_customize->add_setting('legal_justice_service_title',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_service_title',array(
      'label' => __('Section Title','legal-justice'),
      'section' => 'legal_justice_services_section',
      'setting' => 'legal_justice_service_title',
      'type'    => 'text'
    )
  );

    $wp_customize->add_setting('legal_justice_service_subtitle',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_service_subtitle',array(
      'label' => __('Section Sub Title','legal-justice'),
      'section' => 'legal_justice_services_section',
      'setting' => 'legal_justice_service_subtitle',
      'type'    => 'text'
    )
  );

$wp_customize->add_setting('legal_justice_service_count', array(
    'default' => 2,
    'sanitize_callback' => 'absint',
));

$wp_customize->add_control('legal_justice_service_count', array(
    'label' => __('Number of Services', 'legal-justice'),
    'section' => 'legal_justice_services_section',
    'type' => 'number',
    'input_attrs' => array('min' => 1, 'max' => 2),
));

for ($i = 1; $i <= 2; $i++) {
    // Service Title
    $wp_customize->add_setting('legal_justice_service_title_' . $i, array(
        'default' => sprintf(__('Service %d', 'legal-justice'), $i),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_service_title_' . $i, array(
        'label' => sprintf(__('Service Title %d', 'legal-justice'), $i),
        'section' => 'legal_justice_services_section',
        'setting' => 'legal_justice_service_title_' . $i,
        'type' => 'text',
    ));

    // Service Content
    $wp_customize->add_setting('legal_justice_service_content_' . $i, array(
        'default' => sprintf(__('Details about Service %d', 'legal-justice'), $i),
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('legal_justice_service_content_' . $i, array(
        'label' => sprintf(__('Service Content %d', 'legal-justice'), $i),
        'section' => 'legal_justice_services_section',
        'setting' => 'legal_justice_service_content_' . $i,
        'type' => 'textarea',
    ));

    // Service URL
    $wp_customize->add_setting('legal_justice_service_url_' . $i, array(
        'default' => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('legal_justice_service_url_' . $i, array(
        'label' => sprintf(__('Service URL %d', 'legal-justice'), $i),
        'section' => 'legal_justice_services_section',
        'setting' => 'legal_justice_service_url_' . $i,
        'type' => 'url',
    ));

    // Button Text
    $wp_customize->add_setting('legal_justice_service_button_text_' . $i, array(
        'default' => __('View Details', 'legal-justice'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('legal_justice_service_button_text_' . $i, array(
        'label' => sprintf(__('Button Text for Service %d', 'legal-justice'), $i),
        'section' => 'legal_justice_services_section',
        'setting' => 'legal_justice_service_button_text_' . $i,
        'type' => 'text',
    ));
}



  //-------------Section One (Featured Post)-------------------

  $wp_customize->add_section( 'legal_justice_section1', array(
        'title'    => __( 'Latest Post', 'legal-justice' ),
        'panel'    => 'legal_justice_panel',
    ) );


  //-----------------Enable Option Section One-------------

  $wp_customize->add_setting('legal_justice_section1_enable',array(
      'default' => 'Enable',
      'sanitize_callback' => 'legal_justice_sanitize_choices'
  ));
  $wp_customize->add_control('legal_justice_section1_enable',array(
        'type' => 'radio',
        'label' => __('Do you want this section', 'legal-justice'),
        'section' => 'legal_justice_section1',
        'choices' => array(
            'Enable' => __('Enable', 'legal-justice'),
            'Disable' => __('Disable', 'legal-justice')
  )));

    //--------------Section One Title-----------------------

    $wp_customize->add_setting('legal_justice_section1_title',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_section1_title',array(
      'label' => __('Section Title','legal-justice'),
      'section' => 'legal_justice_section1',
      'setting' => 'legal_justice_section1_title',
      'type'    => 'text'
    )
  ); 

  //-----------Category------------

  $categories = get_categories();
  $cats = array();
  $i = 0;
  foreach($categories as $category){
    if($i==0){
      $default = $category->name;
      $i++;
    }
    $cats[$category->name] = $category->name;
  }

  $wp_customize->add_setting('legal_justice_section1_category',array(
  'sanitize_callback' => 'sanitize_text_field',
  ));
  $wp_customize->add_control('legal_justice_section1_category',array(
    'type'    => 'select',
    'choices' => $cats,
    'label' => __('Select Category to Display Post','legal-justice'),
    'section' => 'legal_justice_section1',
    'sanitize_callback' => 'sanitize_text_field',
  ));



    $wp_customize->add_setting('legal_justice_section1_category_number_of_posts_setting',array(
    'default' => '6',
    'sanitize_callback' => 'sanitize_text_field'
  ));
  $wp_customize->add_control('legal_justice_section1_category_number_of_posts_setting',array(
    'label' => __('Number of Posts','legal-justice'),
    'section' => 'legal_justice_section1',
    'setting' => 'legal_justice_section1_category_number_of_posts_setting',
    'type'    => 'number'
  ));


  //------------------------Blog Page Settings--------------------------


  $wp_customize->add_section( 'legal_justice_blogpage_settings', array(
        'title'    => __( 'Blog Page Settings', 'legal-justice' ),
        'panel'    => 'legal_justice_panel',
    ) );

    //--------------Section One Title-----------------------

    $wp_customize->add_setting('legal_justice_blogpage_title',array(
      'default' => '',
      'sanitize_callback' => 'sanitize_text_field'
    )
  );
  $wp_customize->add_control('legal_justice_blogpage_title',array(
      'label' => __('Blog Page Title','legal-justice'),
      'section' => 'legal_justice_blogpage_settings',
      'setting' => 'legal_justice_blogpage_title',
      'type'    => 'text'
    )
  ); 

  //-----------Category------------

  $categories = get_categories();
  $cats = array();
  $i = 0;
  foreach($categories as $category){
    if($i==0){
      $default = $category->name;
      $i++;
    }
    $cats[$category->name] = $category->name;
  }

  $wp_customize->add_setting('legal_justice_blogpage_category',array(
  'sanitize_callback' => 'sanitize_text_field',
  ));
  $wp_customize->add_control('legal_justice_blogpage_category',array(
    'type'    => 'select',
    'choices' => $cats,
    'label' => __('Select Category to Display Post on Blog Page','legal-justice'),
    'section' => 'legal_justice_blogpage_settings',
    'sanitize_callback' => 'sanitize_text_field',
  ));

    $wp_customize->add_setting('legal_justiceblog_page_category_number_of_posts_setting',array(
    'default' => '18',
    'sanitize_callback' => 'sanitize_text_field'
  ));
  $wp_customize->add_control('legal_justiceblog_page_category_number_of_posts_setting',array(
    'label' => __('Number of Posts','legal-justice'),
    'section' => 'legal_justice_blogpage_settings',
    'setting' => 'legal_justiceblog_page_category_number_of_posts_setting',
    'type'    => 'number'
  )); 



  //-------------------------Footer Settings------------------------------


    $wp_customize->add_section( 'legal_justice_footer', array(
        'title'    => __( 'Footer Settings', 'legal-justice' ),
        'panel'    => 'legal_justice_panel',
    ) );


  // Add a custom setting for the footer text
  $wp_customize->add_setting( 'legal_justice_footer_text', array(
    'default' => 'Legal Justice WordPress Theme',
    'sanitize_callback' => 'sanitize_text_field',
  ) );

  // Add a custom control for the footer text
  $wp_customize->add_control( 'legal_justice_footer_text', array(
    'label' => __( 'Footer Text', 'legal-justice' ),
    'section' => 'legal_justice_footer',
    'type' => 'text',
  ) );


 //-------------------404 Page-----------

  $wp_customize->add_section( 'legal_justice_404page', array(
    'title'    => __( '404 Page Settings', 'legal-justice' ),
    'panel'    => 'legal_justice_panel',
    ) );


  // Add a custom setting for the footer text
  $wp_customize->add_setting( 'legal_justice_404page_title', array(
    'default' => '',
    'sanitize_callback' => 'sanitize_text_field',
  ) );

  // Add a custom control for the footer text
  $wp_customize->add_control( 'legal_justice_404page_title', array(
    'label' => __( 'Page Not Found Title', 'legal-justice' ),
    'section' => 'legal_justice_404page',
    'type' => 'text',
  ) );

  // Add a custom setting for the footer text
  $wp_customize->add_setting( 'legal_justice_404page_text', array(
    'default' => '',
    'sanitize_callback' => 'sanitize_text_field',
  ) );

  // Add a custom control for the footer text
  $wp_customize->add_control( 'legal_justice_404page_text', array(
    'label' => __( 'Page Not Found Text', 'legal-justice' ),
    'section' => 'legal_justice_404page',
    'type' => 'text',
  ) );

//------------------------General Settings------------------------------------------

  $wp_customize->add_section( 'legal_justice_general', array(
        'title'    => __( 'General Settings', 'legal-justice' ),
        'panel'    => 'legal_justice_panel',
    ) );

    $wp_customize->add_setting( 'legal_justice_post_meta_toggle_switch_control', array(
        'default'   => true,
        'sanitize_callback' => 'sanitize_text_field', // Use a suitable sanitization function based on your needs
        'transport' => 'refresh', // or 'postMessage' for instant preview without page refresh
    ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'legal_justice_post_meta_toggle_switch_control', array(
        'label'    => __( 'Display Time/Author', 'legal-justice' ),
        'section'  => 'legal_justice_general',
        'settings' => 'legal_justice_post_meta_toggle_switch_control',
        'type'     => 'checkbox',
    ) ) );

    $wp_customize->add_setting( 'legal_justice_post_meta_toggle_switch_control', array(
        'default'   => true,
        'sanitize_callback' => 'sanitize_text_field', // Use a suitable sanitization function based on your needs
        'transport' => 'refresh', // or 'postMessage' for instant preview without page refresh
    ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'legal_justice_post_meta_toggle_switch_control', array(
        'label'    => __( 'Display Read More Link', 'legal-justice' ),
        'section'  => 'legal_justice_general',
        'settings' => 'legal_justice_post_meta_toggle_switch_control',
        'type'     => 'checkbox',
    ) ) );


}
add_action( 'customize_register', 'legal_justice_customize_register' );



