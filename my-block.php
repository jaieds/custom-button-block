<?php
/**
 * Plugin Name:       My Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_my_block_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_my_block_block_init' );


function register_my_block_image_size() {
	add_image_size('myBlockFeatureImage', 250, 250, array('center', 'center'));
}
add_action('init', 'register_my_block_image_size');
