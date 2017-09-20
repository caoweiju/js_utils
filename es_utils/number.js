/**
* @function isInteger 判定data是否是整数
* @param  {number} data {需要判定的}
* @return {boolean} {返回布尔值}
*/
function isInteger(data){
    return typeof data === 'number' && data%1 === 0;
}
/**
* @function randomInteger 产生随机整数
* @param  {number} min    {最小值}
* @param  {number} max    {最大值}
* @param  {boolean} max_in {是否包含最大值，true 是，flase 否}
* @return {number} {符合要求的随机数}
*/
function randomInteger(min = 0, max = 100, max_in = 0){
    let maxIn = max_in ? 1 : 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + maxIn)) + min;
}

export {
    isInteger,
    randomInteger
}