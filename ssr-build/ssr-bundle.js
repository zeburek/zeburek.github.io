module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s="QfWi")}({GFNa:function(t,e,r){},HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,r){"use strict";r.r(e);r("GFNa"),r("ranI");var n=r("HteQ"),s=r("Y3FI"),i=r("ox/y"),o=function(){return Object(n.h)("nav",{class:"navbar navbar-expand-sm navbar-dark bg-dark"},Object(n.h)("a",{class:"navbar-brand",href:"/"},"zeburek.github.io"),Object(n.h)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-expanded":"false"},Object(n.h)("span",{class:"navbar-toggler-icon"})),Object(n.h)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},Object(n.h)("div",{class:"navbar-nav"},Object(n.h)(i.Link,{className:"nav-item nav-link",activeClassName:"active",href:"/"},"Home"))))},a=function(t){var e=t.title,r=t.badgesFunc,s=t.description,i=t.additionalText,o=t.href,a=t.color,c=void 0===a?null:a,p=t.className,u=void 0===p?null:p,h="list-group-item list-group-item-action ";return c&&(h+="list-group-item-"+c),u&&(h+=u),Object(n.h)("a",{className:h,href:o},Object(n.h)("div",{class:"d-flex w-100 justify-content-between"},Object(n.h)("h5",{class:"mb-1"},e),r&&Object(n.h)("small",null,r())),s&&Object(n.h)("p",{class:"mb-1"},s),i&&Object(n.h)("small",null,i))},c=[{name:"Maintained projects",list:[{title:"apitist",description:"Project which is pointed to minify code in python API testing.",href:"https://github.com/zeburek/python-apitist",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/zeburek/python-apitist/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/zeburek/python-apitist/Python%20package/master"}))," ",Object(n.h)("a",{href:"https://badge.fury.io/py/apitist"},Object(n.h)("img",{src:"https://badge.fury.io/py/apitist.svg"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/apitist/"},Object(n.h)("img",{src:"https://img.shields.io/pypi/dm/apitist"})))},color:"success"},{title:"zelenium",description:"New Selenium framework for Python with base pages and elements",href:"https://github.com/zeburek/zelenium",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/zeburek/zelenium/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/zeburek/zelenium/Python%20package/master"}))," ",Object(n.h)("a",{href:"https://badge.fury.io/py/zelenium"},Object(n.h)("img",{src:"https://badge.fury.io/py/zelenium.svg"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/zelenium/"},Object(n.h)("img",{src:"https://img.shields.io/pypi/dm/zelenium"})))},color:"success"},{title:"convclasses",description:"convclasses is an open source Python library for structuring and unstructuring data. convclasses works best with dataclasses classes and the usual Python collections, but other kinds of classes are supported by manually registering converters. Based on Tianche's cattrs project.",href:"https://github.com/zeburek/convclasses",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/zeburek/convclasses/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/zeburek/convclasses/Test%20package/master"}))," ",Object(n.h)("a",{href:"https://badge.fury.io/py/convclasses"},Object(n.h)("img",{src:"https://badge.fury.io/py/convclasses.svg"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/convclasses/"},Object(n.h)("img",{src:"https://img.shields.io/pypi/dm/convclasses"})))},color:"success"}]},{name:"Qase TMS projects",list:[{title:"qase-python",description:"Qase TMS Python Api Client",href:"https://github.com/qase-tms/qase-python",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/qase-tms/qase-python/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/qase-tms/qase-python/Python%20package/master"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/qaseio"},Object(n.h)("img",{src:"https://img.shields.io/pypi/v/qaseio"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/qaseio/"},Object(n.h)("img",{src:"https://img.shields.io/pypi/dm/qaseio"})))},color:"success"},{title:"qase-pytest",description:"Qase TMS Pytest Plugin",href:"https://github.com/qase-tms/qase-pytest",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/qase-tms/qase-pytest/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/qase-tms/qase-pytest/Python%20package/master"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/qase-pytest"},Object(n.h)("img",{src:"https://img.shields.io/pypi/v/qase-pytest"}))," ",Object(n.h)("a",{href:"https://pypi.python.org/pypi/qase-pytest/"},Object(n.h)("img",{src:"https://img.shields.io/pypi/dm/qase-pytest"})))},color:"success"},{title:"qase-javascript",description:"Qase TMS JavaScript Api Client",href:"https://github.com/qase-tms/qase-javascript",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/qase-tms/qase-javascript/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/qase-tms/qase-javascript/Node%20package/master"}))," ",Object(n.h)("a",{href:"https://www.npmjs.com/package/qaseio"},Object(n.h)("img",{src:"https://img.shields.io/npm/v/qaseio"}))," ",Object(n.h)("a",{href:"https://www.npmjs.com/package/qaseio"},Object(n.h)("img",{src:"https://img.shields.io/npm/dm/qaseio"})))},color:"success"},{title:"cypress-qase-reporter",description:"Qase TMS JavaScript Api Client",href:"https://github.com/qase-tms/qase-cypress",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://github.com/qase-tms/qase-cypress/actions"},Object(n.h)("img",{src:"https://img.shields.io/github/workflow/status/qase-tms/qase-cypress/Node%20package/master"}))," ",Object(n.h)("a",{href:"https://www.npmjs.com/package/cypress-qase-reporter"},Object(n.h)("img",{src:"https://img.shields.io/npm/v/cypress-qase-reporter"}))," ",Object(n.h)("a",{href:"https://www.npmjs.com/package/cypress-qase-reporter"},Object(n.h)("img",{src:"https://img.shields.io/npm/dm/cypress-qase-reporter"})))},color:"success"}]},{name:"Legacy projects",list:[{title:"cattrs-3.8",description:"Fork of Tianche's cattrs with Python 3.8 support - only upstream updates would be provided",href:"https://github.com/zeburek/cattrs-3.8",badgesFunc:function(){return Object(n.h)(n.Fragment,null,Object(n.h)("a",{href:"https://pypi.python.org/pypi/cattrs-3.8"},Object(n.h)("img",{src:"https://img.shields.io/pypi/v/cattrs-3.8.svg"}))," ",Object(n.h)("a",{href:"https://github.com/zeburek/cattrs-3.8"},Object(n.h)("img",{src:"https://img.shields.io/pypi/pyversions/cattrs-3.8.svg"})))},color:"warning"}]},{name:"Examples",list:[{title:"Python API tests example",description:"Simple examples of API tests in Python to the https://restful-booker.herokuapp.com.",href:"https://github.com/zeburek/python-api-tests-example",color:"info"},{title:"Python API tests examples with cattrs",description:"The same as the previous, except that this tests use cattrs to structure and unstructure data.",href:"https://github.com/zeburek/python-cattrs-example",color:"info"},{title:"Example of usage Flask, React.js and Mongoengine in one project",description:"Project created for writing tests: it has locators for elements on the screen, it has simple CRD methods in REST API. Project can be run using docker-compose file or from sources.",href:"https://github.com/zeburek/flask-mongoengine-example",color:"info"},{title:"Example usage of Gatling load testing tool",description:"A simple galing load testing scenario with some logic separation. Loaded project - http://jsonplaceholder.typicode.com.",href:"https://github.com/zeburek/gatling-example",color:"secondary"}]},{name:"Something other",list:[]}],p=function(){return Object(n.h)("div",{className:"mb-5"},c.map((function(t){var e=t.name,r=t.list;if(r.length>0)return Object(n.h)("div",{className:"row"},Object(n.h)("div",{className:"col"},Object(n.h)("h1",{className:"mt-3"},e),Object(n.h)("div",{class:"list-group"},r.map((function(t){return Object(n.h)(a,t)})))))})))},u=function(t){t.currentUrl;return Object(n.h)("div",{id:"app",className:"container"},Object(n.h)(o,null),Object(n.h)(s.Router,{onChange:function(t){t.url}},Object(n.h)(p,{path:"/"})))};e.default=u},Y3FI:function(t,e,r){"use strict";r.r(e),r.d(e,"subscribers",(function(){return f})),r.d(e,"getCurrentUrl",(function(){return b})),r.d(e,"route",(function(){return g})),r.d(e,"Router",(function(){return w})),r.d(e,"Route",(function(){return x})),r.d(e,"Link",(function(){return q})),r.d(e,"exec",(function(){return o}));var n=r("HteQ"),s={};function i(t,e){for(var r in e)t[r]=e[r];return t}function o(t,e,r){var n,i=/(?:\?([^#]*))?(#.*)?$/,o=t.match(i),a={};if(o&&o[1])for(var c=o[1].split("&"),u=0;u<c.length;u++){var h=c[u].split("=");a[decodeURIComponent(h[0])]=decodeURIComponent(h.slice(1).join("="))}t=p(t.replace(i,"")),e=p(e||"");for(var l=Math.max(t.length,e.length),f=0;f<l;f++)if(e[f]&&":"===e[f].charAt(0)){var m=e[f].replace(/(^:|[+*?]+$)/g,""),b=(e[f].match(/[+*?]+$/)||s)[0]||"",g=~b.indexOf("+"),d=~b.indexOf("*"),y=t[f]||"";if(!y&&!d&&(b.indexOf("?")<0||g)){n=!1;break}if(a[m]=decodeURIComponent(y),g||d){a[m]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){n=!1;break}return(!0===r.default||!1!==n)&&a}function a(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,p(e).map(u).join(""));var e}(t),t.props}function p(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function u(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var h=null,l=[],f=[],m={};function b(){var t;return""+((t=h&&h.location?h.location:h&&h.getCurrentLocation?h.getCurrentLocation():"undefined"!=typeof location?location:m).pathname||"")+(t.search||"")}function g(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=l.length;e--;)if(l[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),h&&h[e]?h[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),d(t)}function d(t){for(var e=!1,r=0;r<l.length;r++)!0===l[r].routeTo(t)&&(e=!0);for(var n=f.length;n--;)f[n](t);return e}function y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),r=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return g(e)}}function j(t){if(0==t.button)return y(t.currentTarget||t.target||this),v(t)}function v(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(y(e))return v(t)}}while(e=e.parentNode)}}var k=!1;var w=function(t){function e(e){t.call(this,e),e.history&&(h=e.history),this.state={url:e.url||b()},k||("function"==typeof addEventListener&&(h||addEventListener("popstate",(function(){d(b())})),addEventListener("click",O)),k=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(n.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){l.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;h&&(this.unlisten=h.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),l.splice(l.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,r){return t.filter(c).sort(a).map((function(t){var s=o(e,t.props.path,t.props);if(s){if(!1!==r){var a={url:e,matches:s};return i(a,s),delete a.ref,delete a.key,Object(n.cloneElement)(t,a)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var r=t.children,s=t.onChange,i=e.url,o=this.getMatchingChildren(Object(n.toChildArray)(r),i,!0),a=o[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof s&&s({router:this,url:i,previous:c,active:o,current:a})),a},e}(n.Component),q=function(t){return Object(n.createElement)("a",i({onClick:j},t))},x=function(t){return Object(n.createElement)(t.component,t)};w.subscribers=f,w.getCurrentUrl=b,w.route=g,w.Router=w,w.Route=x,w.Link=q,e.default=w},"ox/y":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s=r("HteQ"),i=r("Y3FI");function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var a=e.Match=function(t){function e(){var r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,i=Array(s),a=0;a<s;a++)i[a]=arguments[a];return r=n=o(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},o(n,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),r=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:r,matches:!1!==(0,i.exec)(r,t.path,{})})},e}(s.Component),c=function(t){var e=t.activeClassName,r=t.path,o=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["activeClassName","path"]);return(0,s.h)(a,{path:r||o.href},(function(t){var r=t.matches;return(0,s.h)(i.Link,n({},o,{class:[o.class||o.className,r&&e].filter(Boolean).join(" ")}))}))};e.Link=c,e.default=a,a.Link=c},ranI:function(t,e,r){}});
//# sourceMappingURL=ssr-bundle.js.map