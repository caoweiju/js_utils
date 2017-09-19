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

# 使用【可以使用browse、node、es三种方式】
1. 直接使用script 标签引用的方式来使用， 
    <script src="./index.browser.js">
2. 使用npm之类的管理包，可以直接使用遵循commonjs版本的index.commonjs.js，里面引用了commonjs_utils文件夹里面的所有的封装好的函数。
3. 使用npm之类的管理包，也可以直接使用遵循es版本的index.es.js，里面引用了es_utils文件夹里面的所有的封装好的函数。

# API列表
最后都封在了一个对象中，最好统一下名字，这里直接叫做 utilsFn ，
1. url的search参数相关的处理函数封装
    * searchToObject 可以把url的？后面的参数转换为对象，方便使用，
    //测试url： http://cn.bing.com/search?q=test&pq=test
    var search = utilsFn.searchToObject(location.search);
    //结果为类似 search = {q : 'test' , pq : 'test'}
    * objectToSearch 可以把一个对象变成一串字符串，通过特殊的连接符，默认是 & 
    //测试对象 objectTest = {q: 'test', pq : 'test',test : 'nothing'}
    var search = utilsFn.objectToSearch(objectTest, &);
    //结果为类似 search = 'q=test&pq=test&test=nothing'
