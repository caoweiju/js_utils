/**
* @function trim
* @param  {string} str {需要请求两端空格的字符串}
* @return {string} {清除两端空格的字符串结果}
*/
function trim(str){
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }
    return str.trim();
}

export {
    trim
}