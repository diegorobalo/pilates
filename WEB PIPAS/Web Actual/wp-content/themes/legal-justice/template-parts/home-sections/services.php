<?php
/**
 * Home Section 1 Template
 *
 * @package Legal Justice
 */

// All section-specific code goes here...

$legal_justice_section_one = get_theme_mod('legal_justice_section_services_enable');
if ('Disable' == $legal_justice_section_one) {
    return;
}

// Retrieve number of services from Customizer
$number_of_services = get_theme_mod('legal_justice_service_count', 2);

// Section header and sub-header from Customizer
$section_title = get_theme_mod('legal_justice_service_title', 'We Expertise in Finding Solutions for Legal Cases');
$subsection_title = get_theme_mod('legal_justice_service_subtitle', 'We Provide Legal Services Like Supreme Court Matters, Bail, Appeals, and More Services');
?>

<section id="services" class="services-section py-5">
    <div class="container">
        <!-- Section Title -->
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-title"><?php echo esc_html($section_title); ?></h2>
                <p class="section-subtitle mb-4"><?php echo esc_html($subsection_title); ?></p>
            </div>
        </div>

        <!-- Bootstrap Tabs for Services -->
        <ul class="nav nav-tabs justify-content-center" id="serviceTabs" role="tablist">
            <?php for ($i = 1; $i <= $number_of_services; $i++) : ?>
                <?php
                $service_title = get_theme_mod('legal_justice_service_title_' . $i, 'Service ' . $i);
                ?>
                <li class="nav-item" role="presentation">
                    <a class="nav-link <?php echo $i === 1 ? 'active' : ''; ?>" id="tab-<?php echo $i; ?>" data-bs-toggle="tab" href="#content-<?php echo $i; ?>" role="tab" aria-controls="content-<?php echo $i; ?>" aria-selected="<?php echo $i === 1 ? 'true' : 'false'; ?>">
                        <?php echo esc_html($service_title); ?>
                    </a>
                </li>
            <?php endfor; ?>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content mt-4" id="serviceTabsContent">
            <?php for ($i = 1; $i <= $number_of_services; $i++) : ?>
                <?php
                $service_content = get_theme_mod('legal_justice_service_content_' . $i, 'Details about Service ' . $i);
                $service_url = get_theme_mod('legal_justice_service_url_' . $i, '#'); // Get the URL for each service
                $view_details_text = get_theme_mod('legal_justice_service_button_text_' . $i, 'View Details'); // Get the button text for each service
                ?>
                <div class="tab-pane fade <?php echo $i === 1 ? 'show active' : ''; ?>" id="content-<?php echo $i; ?>" role="tabpanel" aria-labelledby="tab-<?php echo $i; ?>">
                    <div class="service-details">
                        <p><?php echo esc_html($service_content); ?></p>
                        <a href="<?php echo esc_url($service_url); ?>" class="btn btn-primary view-details"><?php echo esc_html($view_details_text); ?></a>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
    </div>
</section>
