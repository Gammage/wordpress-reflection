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
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jasmins_site' );

/** MySQL database username */
define( 'DB_USER', 'wordpress_jas' );

/** MySQL database password */
define( 'DB_PASSWORD', 'b202003195502' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

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
define( 'AUTH_KEY',         '5}%.IXSGN`GcXcys$-NVWty} -ErdW?fVvni(BQuX`$*Q/CE*Vf9msj`14gR/<m$' );
define( 'SECURE_AUTH_KEY',  'l6Ssc=k+O&> *T=+Vw?afBfjcB|!o4w%SCh$9^[2ecw93nu|a<,xWP1yr7#)KC1E' );
define( 'LOGGED_IN_KEY',    'cjh*~rcW r&$po458aX^pmnT`[Bj99W] T%IgoKLxfW=xKqErKI~ncQovcxO&J<d' );
define( 'NONCE_KEY',        'Q_Q]Z}_LX^6 sshG+:Jib-gY>S<JtBzlEi+$$%TUz5+?)lJwl8^B>t*[iAZ*&d0~' );
define( 'AUTH_SALT',        '<B5P,RX-!trB)D|,zmac1AUeAai34.|HgId4DD5mK(UY;IalEIk?5a)>k]b4|kj.' );
define( 'SECURE_AUTH_SALT', 'cfIc>wyekOSX}gCI fbl1*jaGs#&rB_Q>u|B~mppw(4$xR#<9>hxueQ!f?<7aTKP' );
define( 'LOGGED_IN_SALT',   'MU%_+jo.(<H-wOjj2BHFSG3saguGkP~,a$`ORvQHPmb.{+*U F_HT:Ce)wJ8Lp&}' );
define( 'NONCE_SALT',       '~Wjn9Oo;F:=JF5M7]NB#?H,d6gvm{|tB2K}(tEgJ&nJTciTyw|zis.;yk0<GC/:7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
