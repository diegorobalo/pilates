<?php
/**
 * Home About Us Section Template
 *
 * @package Legal Justice
 */

$legal_justice_about_enable = get_theme_mod('legal_justice_about_enable', 'Enable');
if ('Disable' == $legal_justice_about_enable) {
    return;
}

// Section titles and descriptions from Customizer
$about_section_title = get_theme_mod('legal_justice_about_title', 'Expert Legal Solutions for Families');
$about_section_subtitle = get_theme_mod('legal_justice_about_subtitle', 'Delivering tailored legal services with professionalism and empathy.');
$about_section_description = get_theme_mod('legal_justice_about_description', 'Our team specializes in family law, offering solutions for a wide range of cases. With years of experience, we provide reliable guidance and support, ensuring your legal needs are met with dedication and care.');
$phone_number = get_theme_mod('legal_justice_about_phone', '1-800-123-4567');

// Customizable labels for "Contact Us" and "Call Now"
$contact_label = get_theme_mod('legal_justice_about_contact_label', 'Contact Us:');
$call_button_text = get_theme_mod('legal_justice_about_call_button_text', 'Call Now');

$contact_title1 = get_theme_mod('legal_justice_about_contact_detail_title1');
$contact_title2 = get_theme_mod('legal_justice_about_contact_detail_title2');
$contact_title3 = get_theme_mod('legal_justice_about_contact_detail_title3');
$contact_title4 = get_theme_mod('legal_justice_about_contact_detail_title4');

// Office Information
$office_address = get_theme_mod('legal_justice_about_office_address', '123 Liberty Street, New York, NY');
$email_address = get_theme_mod('legal_justice_about_email', 'contact@legaljustice.com');
$working_hours = get_theme_mod('legal_justice_about_hours', 'Mon-Fri: 9am – 6pm');
?>

<section id="about-us" class="about-us-section py-5">
    <div class="container">
        <div class="row align-items-center">
            <!-- Left Column: Text Content -->
            <div class="col-lg-6">
                <!-- Section Title and Description -->
                <h2 class="section-title"><?php echo esc_html($about_section_title); ?></h2>
                <p class="section-subtitle mb-4"><?php echo esc_html($about_section_subtitle); ?></p>
                <p class="section-description"><?php echo esc_html($about_section_description); ?></p>
                <p class="contact-info"><strong><?php echo esc_html($contact_label); ?></strong> <?php echo esc_html($phone_number); ?></p>
                <a href="tel:<?php echo esc_attr($phone_number); ?>" class="btn btn-primary mt-3"><?php echo esc_html($call_button_text); ?></a>
            </div>

            <!-- Right Column: Contact Info -->
            <div class="col-lg-6">
                <div class="contact-details">
                    <h4><?php echo esc_html($contact_title1); ?></h4>
                    <p><?php echo esc_html($office_address); ?></p>

                    <h4><?php echo esc_html($contact_title2); ?></h4>
                    <p><?php echo esc_html($email_address); ?></p>

                    <h4><?php echo esc_html($contact_title3); ?></h4>
                    <p><?php echo esc_html($phone_number); ?></p>

                    <h4><?php echo esc_html($contact_title4); ?></h4>
                    <p><?php echo esc_html($working_hours); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>
