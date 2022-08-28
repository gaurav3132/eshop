const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/cms/app.js', 'public/js/cms.js')
    .sass('resources/sass/cms/app.scss','public/css/cms.css')
    .options({
        processCssUrls: false
    });
