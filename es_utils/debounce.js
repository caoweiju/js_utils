/**
 * @function debounceBasic 简版函数防抖函数
 * @param  {function} fn    {需要进行防抖操作的函数}
 * @param  {number} wait    {延迟的时间}
 * @return {function} {进行防抖包装后的函数}
 */
function debounceBasic(fn, wait) {
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
}
/**
 * @function debounce 基本防抖函数如果一直触发事件，将导致回调函数一直不执行，改进版防抖函数超过一定的时间，必须执行一次
 * @param  {function} fn    {需要进行防抖操作的函数}
 * @param  {number} wait    {延迟的时间}
 * @param  {number} interval    {上一次运行的时间和下一次运行的时间间隔}
 * @return {function} {进行防抖包装后的函数}
 */
function debounce(fn, wait, interval) {
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
export {
    debounceBasic,
    debounce
};