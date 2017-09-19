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
         * @param  {type} param {location.href之类的参数}
         * @param  {type} data  {需要把search追加到一个已存在的data对象里面}
         * @return {type} {返回含有search的参数的对象，search的参数名为键值，参数值为键值}
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
            if(!(Object.prototype.toString(param) === "[object Object]" || 
                    Object.prototype.toString(param) === "[object Array]")){
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
        }
    }
})();






