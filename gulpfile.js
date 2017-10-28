/**
 *@file:   gulp配置文件
 *@author: Like(978885880@qq.com)
 *@time:   2017-10-27 09:41:07
 *@disc:
 */
var gulp = require('gulp');
var requireDir = require('require-dir');
var config = require('./config');
requireDir('./tasks', {recurse: true});
