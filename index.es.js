import {searchToObject, objectToSearch} from './es_utils/query.js';
import {isInteger, randomInteger} from './es_utils/number.js';
import {debounce, debounceBasic} from './es_utils/debounce.js';
import {throttle} from './es_utils/throttle.js';
import {trim} from './es_utils/string.js';
import {browser} from './es_utils/sniff.js';


export{
    searchToObject,
    objectToSearch,
    isInteger,
    randomInteger,
    debounce,
    debounceBasic,
    throttle,
    trim,
    browser
}