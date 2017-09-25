var _query = require('./commonjs_utils/query.js');
var _number = require('./commonjs_utils/number.js');
var _debounce = require('./commonjs_utils/debounce.js');
var _throttle = require('./commonjs_utils/throttle.js');
var _string = require('./commonjs_utils/string.js');
var _sniff = require('./commonjs_utils/sniff.js');


module.exports = {
    searchToObject : _query.searchToObject,
    objectToSearch : _query.objectToSearch,
    isInteger : _number.isInteger,
    randomInteger : _number.randomInteger,
    debounceBasic: _debounce.basic,
    debounce: _debounce.debounce,
    throttle: _throttle.throttle,
    trim : _string.trim,
    browser : _sniff.browser
}