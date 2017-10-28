/**
 *@fileName test.js
 *@author   Like(978885880@qq.com)
 *@time     2017/10/27
 *@disc     测试js的压缩
 */
function add(n) {
    var a = 0;
    n.forEach(function(val,key){
        a += val;
    });
    return a;
}
console.log(add(10));