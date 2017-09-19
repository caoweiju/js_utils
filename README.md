# js_utils
JavaScript的一些工具函数的封装
工程结构如下：
1. commonjs_utils  这是符合commonjs规范的源码，主要是 exports require
    * 里面每个文件夹对应不同部分的工具函数【包括了日期、query参数等】
2. es_utils 符合es5 6的规范的源码 import export
    * 里面每个文件夹对应不同部分的工具函数【包括了日期、query参数等】
3. index.browser.js 对应的是直接通过 script 标签引用的方式来使用
4. index.commonjs.js 这个是把前面的commonjs_utils的内容集合在一起来使用的入口文件
5. index.es.js 这个是把前面的es_utils的内容集合在一起来使用的入口文件
