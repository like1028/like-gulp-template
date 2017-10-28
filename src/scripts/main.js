/**
 *@fileName main.js
 *@author   Like(978885880@qq.com)
 *@time     2017/10/27
 *@disc
 */
require.config({
    baseUrl: 'lib',
    paths: {
        jQuery: 'jquery.min',
        $: 'jquery.min'
    }
});
require(['jquery'],function($){
    $('h1').css('background','red');
});