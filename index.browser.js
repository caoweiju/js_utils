/*
 * Copyright (c) 2017 qunar
 *
 * Author: caoweiju
 */
;(function(){
    //公用函数的提取
    /**
     * @function checkType
     * @param  {@all} value {js变量}
     * @param  {string} type {js类型，string、array、date、number、object}
     * @return {boolean} {value是否和传进来的type对应，对应返回true，否则返回false}
     */
    checkType : function (value, type){
        if(Object.prototype.toString(type) !== "[object String]"){
                console.error('error: wrong type of param, need string');
                return false;
            }
        type = type.replace(/^(\w)/,function(v){
            return v.toUpperCase();
        });
        return Object.prototype.toString(val) === "[object " + type + "]";
    }
    //封装的全局工具函数
    window.utilsFn = {
        /**
        * @function {function searchToObject}
        * @param  {string} param {location.href之类的参数}
        * @param  {object} data  {需要把search追加到一个已存在的data对象里面}
        * @return {object} {返回含有search的参数的对象，search的参数名为键值，参数值为键值}
        */
        searchToObject : function (param, data) {
            if(Object.prototype.toString(val) !== "[object String]"){
                console.error('error: wrong type of param, need string');
                return null;
            }
            var reg = /([^\?|\&]\w+)=([^\?|\&]+)/ig;
            var v = {};
            if (!!data) {
                v = data;
            }
            if (param) {
                if (param.charAt(0) == "?") {
                    param = param.substr(1);
                }
                while (true) {
                    var r = reg.exec(param);
                    if (r) {
                        v[r[1]] = decodeURIComponent(r[2]);
                    } else {
                        break;
                    }
                }
            }
            return v;
        },
        /**
         * @function objectToSearch
         * @param  {object} param {js对象，需要}
         * @param  {string} splitKey {分隔符，默认是&}
         * @return {string} {合并成希望的格式的字符串}
         */
        objectToSearch : function (param, splitKey){
            if(!(Object.prototype.toString(param) === "[object Object]")){
                        console.error('error: wrong type of param, need object');
                        return null;
            }
            var arr = [],
                param = param || {},
                splitKey = splitKey || "&";
            for (var i in param) {
                if(i && param.hasOwnProperty(i)){
                    if(Object.prototype.toString(val) === "[object Object]" || 
                        Object.prototype.toString(val) === "[object Array]"){
                        arr.push(i + "=" + encodeURIComponent(JSON.stringify(val)));
                    }else{
                        arr.push(i + "=" + encodeURIComponent(val));
                    }
                }
            }
            return arr.join(splitKey);
        },
        /**
         * @function isInteger 判定data是否是整数
         * @param  {number} data {需要判定的}
         * @return {boolean} {返回布尔值}
         */
        isInteger : function (data){
            return typeof data === 'number' && data%1 === 0;
        },
        /**
         * @function randomInteger 产生随机整数
         * @param  {number} min    {最小值}
         * @param  {number} max    {最大值}
         * @param  {boolean} max_in {是否包含最大值，true 是，flase 否}
         * @return {number} {符合要求的随机数}
         */
        randomInteger : function (min, max, max_in){
            var maxIn = max_in ? 1 : 0;
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + maxIn)) + min;
        },
        /**
         * @function debounceBasic 简版函数防抖函数
         * @param  {function} fn    {需要进行防抖操作的函数}
         * @param  {number} wait    {延迟的时间}
         * @return {function} {进行防抖包装后的函数}
         */
        debounceBasic: function(fn, wait) {
            var timer;
            if (!wait) {
                wait = 250;
            }
            return function() {
                var self = this,
                    args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn.bind(self, args);
                }, wait);
            };
        },
        /**
         * @function debounce 基本防抖函数如果一直触发事件，将导致回调函数一直不执行，改进版防抖函数超过一定的时间，必须执行一次
         * @param  {function} fn    {需要进行防抖操作的函数}
         * @param  {number} wait    {延迟的时间}
         * @param  {number} interval    {上一次运行的时间和下一次运行的时间间隔}
         * @return {function} {进行防抖包装后的函数}
         */
        debounce: function(fn, wait, interval) {
            var timer,
                previousTime;
            if (!wait) {
                wait = 250;
                interval = 250;
            } else if (!interval) {
                interval = 250;
            }
            return function() {
                var self = this,
                    args = arguments,
                    now = Date.now();
                if (!previousTime) {
                    previousTime = now;
                }
                if (now - previousTime >= interval) {
                    clearTimeout(timer);
                    fn.bind(self, args);
                    previousTime = now;
                } else {
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        fn.bind(self, args);
                    }, wait);
                }
            };
        }
    }
})();






