<?php

function bravada_child_scripts() {
    wp_enqueue_script( 'extra js', get_stylesheet_directory_uri() . '/js/extra.js' );
}
add_action( 'wp_enqueue_scripts', 'bravada_child_scripts' );
