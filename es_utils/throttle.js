/**
 * @function throttle 节流函数
 * @param  {function} fn    {需要进行防抖操作的函数}
 * @param  {number} wait    {延迟的时间}
 * @return {function} {进行节流包装后的函数}
 */
function throttle(fn, wait) {
    var timer,
        isFirstIn = true; // 是否是第一次执行这个回调
    if (!wait) {
        wait = 250;
    }
    return function() {
        var self = this,
            args = arguments;
        if (isFirstIn) {
            fn.apply(self, args);
            return;
        }
        if (timer) {
            return;
        }
        timer = setTimeout(function() {
            fn.apply(self, args);
        }, wait);
    };
}
export {
    throttle
};