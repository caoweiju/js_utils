function browser(){
    var browser = {},
        ua = navigator.userAgent,
        platform = navigator.platform;
    browser.isIos = /iPhone|iPod|iPad/.test(ua);
    browser.isAndroid = /Android/.test(ua);
    browser.isMobile = /Mac|Win|linux/.test(platform) && !browser.isAndroid;
    return browser;
}

module.exports = {
    browser : browser
}