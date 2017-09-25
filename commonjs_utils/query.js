/**
* @function {function searchToObject}
* @param  {string} param {location.href之类的参数}
* @param  {object} data  {需要把search追加到一个已存在的data对象里面}
* @return {object} {返回含有search的参数的对象，search的参数名为键值，参数值为键值}
*/
function searchToObject(param, data) {
    if(Object.prototype.toString.call(val) !== "[object String]"){
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
}
/**
* @function objectToSearch
* @param  {object} param {js对象，需要}
* @param  {string} splitKey {分隔符，默认是&}
* @return {string} {合并成希望的格式的字符串}
*/
function objectToSearch(param, splitKey){
    if(!(Object.prototype.toString.call(param) === "[object Object]" || 
            Object.prototype.toString.call(param) === "[object Array]")){
                console.error('error: wrong type of param, need object');
                return null;
    }
    var arr = [],
        param = param || {},
        splitKey = splitKey || "&";
    for (var i in param) {
        if(i && param.hasOwnProperty(i)){
            if(Object.prototype.toString.call(val) === "[object Object]" || 
                Object.prototype.toString.call(val) === "[object Array]"){
                arr.push(i + "=" + encodeURIComponent(JSON.stringify(val)));
            }else{
                arr.push(i + "=" + encodeURIComponent(val));
            }
        }
    }
    return arr.join(splitKey);
}
module.exports = {
    searchToObject : searchToObject,
    objectToSearch : objectToSearch
}