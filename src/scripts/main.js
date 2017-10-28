/**
 *@fileName main.js
 *@author   Like (978885880@qq.com)
 *@date     2017-10-28 22:16:17
 *@disc
 */
require.config({
    baseUrl:"scripts/lib",
    paths:{
        jQuery:"jquery.min",
        $:"jquery.min"
    }});
require(["jquery","scripts/js/test.js"],function($){
    $("h1").css("background","red")
});