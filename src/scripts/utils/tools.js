/**
 * @file    Tools
 * @authors Kevin Chan (chj@8cuo.net)
 * @date    2016-06-17 18:48:26
 */

define(function(){
  var init = {};
  init.getQueryString = function (name){
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
          return unescape(r[2]);
      }
      return null;
  }
  init.isImageFile = function(fileName){
    if(typeof fileName == 'string'){
      var arr = fileName.split('.');
      var fileType = arr[arr.length-1].toLocaleLowerCase();
      if(fileType == 'jpg' || fileType == 'jpeg' || fileType == 'png' || fileType == 'bmp' || fileType == 'gif'){
        return true
      }else{
        return false
      }
    }
  }
  init.validPassword = function(pwd) {
    var reg = /^[a-z|A-Z|0-9]{6,}$/;
    if (!reg.exec(pwd)) {
        return false;
    }
    return true;
};
  return init;
});