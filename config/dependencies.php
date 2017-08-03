<?php
/**
 * GenKit InTheme dependency runtime configuration paramters.
 *
 * This configuration handles which files to load and when
 * based upon the layout of the configuration below.
 *
 * @package     GenKit\InTheme
 * @since       1.0.0
 * @author      hellofromTonya
 * @link        https://ConfigPress.io/genkit
 * @license     GNU-2.0+
 */
namespace GenKit\InTheme;

return array(
	/*=============================================================
	 * Early load files, i.e. when the theme loads up
	 *============================================================*/
	/**
	 * These files will load when WordPress first calls the
	 * child theme, i.e. meaning they load _before_ Genesis
	 * loads.
	 */
	'early_load_files' => array(
		'src/assets/Assets.php',
		'src/config/ConfigStore.php',
	),

	/*=============================================================
	 * Load after Genesis loads, i.e. when `genesis_init` fires
	 *============================================================*/

	/**
	 * Load regardless if the user is viewing the public facing
	 * (front end) or admin area (back end) pages
	 */
	'theme_files'      => array(),

	/**
	 * Load these files only when the user is viewing the admin
	 * area (back end) interfaces
	 *
	 * Don't load when user is viewing the public facing
	 * (front end) web pages.
	 */
	'backend_only_files' => array(),

	/**
	 * Load these files only when the user is viewing one of the
	 * public facing (front end) web pages.
	 *
	 * Don't load when user is viewing the admin (back end) interfaces.
	 */
	'frontend_only_files' => array(),
);
