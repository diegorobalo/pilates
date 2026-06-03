<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', false);
define( 'WPCACHEHOME', '/var/www/html/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'pipas_site' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'Aa1@d688fd771e49cd50' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'IP QyOMh]+bINitR(f x-$S`z=HpD!bqNK$~d))3EX_{~H:m;V[mMo@+K_,@zrAn' );
define( 'SECURE_AUTH_KEY',  'sEli(Cd`;H/Q6_UcF<DM]iT2s[F#%~mD/yLpiI*MsIUmg.oq`=Bn4  3wpl![zhV' );
define( 'LOGGED_IN_KEY',    '1FlS9P)WZ6REYkBYVJ{yjQpC X~JC~qOx2Yhol]}/F@?GmeX!<76rx{rd#Fd}Sa/' );
define( 'NONCE_KEY',        '$rzRYfQ6Lv@#1_G5NQj*,9do(6?&_8xfsTgomlxbp<$v*4E}U{5OKQ>yK@Ugj(IB' );
define( 'AUTH_SALT',        ' sw4L1Cv$$=e8>PhgD@66q-6t.@lkQQa`m4l@AA1qjQwn>ze[!XW*S7XfX+--(Sy' );
define( 'SECURE_AUTH_SALT', 'm7/jNd&Qk)rJ])z7xt_<=]}60 4o%K$veE_BUe+-?hm+W6y|;x;JFyCo;hRg[;|[' );
define( 'LOGGED_IN_SALT',   ' mC[cP3S7%:lNJ(_c)UIluEVmu}DuAO0ibHV hFW3fzR2CmlxDf7R^IDD6 ^*L>&' );
define( 'NONCE_SALT',       'zfaY%&JVNpAo;Pt~-K!#_.Uu1 w^*Iu nRsgLsSdTjxhucYpn[9ll_0F[Zk7wyG/' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'pi_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_DEBUG_LOG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'FS_METHOD', 'direct' );


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
