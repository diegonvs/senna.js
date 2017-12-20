'use strict';

import utils from './utils/utils';
import dataAttributeHandler from './app/dataAttributeHandler';
import App from './app/App';
import HtmlScreen from './screen/HtmlScreen';
import RequestScreen from './screen/RequestScreen';
import Route from './route/Route';
import Screen from './screen/Screen';
// import metal from '../node_modules/metal';
// import metalAjax from '../node_modules/metal-ajax';
// import metalDebounce from '../node_modules/metal-debounce';
// import metalDom from '../node_modules/metal-dom';
// import metalEvents from '../node_modules/metal-events';
// import metalStructs from '../node_modules/metal-structs';
// import metalPathParser from '../node_modules/metal-path-parser';
// import metalPromise from '../node_modules/metal-promise';
// import metalUri from '../node_modules/metal-uri';
// import metalUserAgent from '../node_modules/metal-useragent';

export default App;
export { dataAttributeHandler, utils, App, HtmlScreen, Route, RequestScreen, Screen };