/*! Built with http://stenciljs.com */
component1.loadComponents("7ga5yg38",function(t,e,n,o,r){function i(t,e){for(var n,o=[],r=0,i=0,a="",c=e&&e.delimiter||"/";null!=(n=_.exec(t));){var u=n[0],p=n[1],f=n.index;if(a+=t.slice(i,f),i=f+u.length,p)a+=p[1];else{var l=t[i],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],w=n[7];a&&(o.push(a),a="");var R=null!=d&&null!=l&&l!==d,E="+"===y||"*"===y,b="?"===y||"*"===y,x=n[2]||c,T=m||g;o.push({name:v||r++,prefix:d||"",delimiter:x,optional:b,repeat:E,partial:R,asterisk:!!w,pattern:T?h(T):w?".*":"[^"+s(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&o.push(a),o}function a(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function c(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function u(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,o){for(var r="",i=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var h=t[s];if("string"!=typeof h){var p,f=i[h.name];if(null==f){if(h.optional){h.partial&&(r+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(M(f)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var l=0;l<f.length;l++){if(p=u(f[l]),!e[s].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");r+=(0===l?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(f):u(f),!e[s].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');r+=h.prefix+p}}else r+=h}return r}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function l(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(t,e)}function d(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(g(t[r],e,n).source);return p(new RegExp("(?:"+o.join("|")+")",f(n)),e)}function v(t,e,n){return m(i(t,n),e,n)}function m(t,e,n){M(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,r=!1!==n.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=s(c);else{var u=s(c.prefix),h="(?:"+c.pattern+")";e.push(c),c.repeat&&(h+="(?:"+u+h+")*"),i+=h=c.optional?c.partial?u+"("+h+")?":"(?:"+u+"("+h+"))?":u+"("+h+")"}}var l=s(n.delimiter||"/"),d=i.slice(-l.length)===l;return o||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=r?"$":o&&d?"":"(?="+l+"|$)",p(new RegExp("^"+i,f(n)),e)}function g(t,e,n){return M(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?l(t,e):M(t)?d(t,e,n):v(t,e,n)}function y(t,e){var n=""+e.end+e.strict,o=W[n]||(W[n]={}),r=JSON.stringify(t);if(o[r])return o[r];var i=[],a={re:P(t,i,e),keys:i};return B<H&&(o[r]=a,B+=1),a}function w(t,e){void 0===e&&(e={}),"string"==typeof e&&(e={path:e});var n=e.path,o=void 0===n?"/":n,r=e.exact,i=void 0!==r&&r,a=e.strict,c=y(o,{end:i,strict:void 0!==a&&a}),u=c.re,s=c.keys,h=u.exec(t);if(!h)return null;var p=h[0],f=h.slice(1),l=t===p;return i&&!l?null:{path:o,url:"/"===o&&""===p?"/":p,isExact:l,params:s.reduce(function(t,e,n){return t[e.name]=f[n],t},{})}}function R(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function E(t,e){return R(t,e)?t.substr(e.length):t}function b(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function x(t){return"/"===t.charAt(0)?t:"/"+t}function T(t){var e=t||"/",n="",o="",r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}function C(t){var e=t.pathname,n=t.search,o=t.hash,r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function L(t){return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce(function(t,e){var n=e.split("="),o=n[0],r=n[1];return t[o]=r?decodeURIComponent(r.replace(/\+/g," ")):"",t},{}):{}}function O(t){return"/"===t.charAt(0)}function S(t,e){for(var n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function k(t,e){void 0===e&&(e="");var n=t&&t.split("/")||[],o=e&&e.split("/")||[],r=t&&O(t),i=e&&O(e),a=r||i;if(t&&O(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";var c;if(o.length){var u=o[o.length-1];c="."===u||".."===u||""===u}else c=!1;for(var s=0,h=o.length;h>=0;h--){var p=o[h];"."===p?S(o,h):".."===p?(S(o,h),s++):s&&(S(o,h),s--)}if(!a)for(;s--;s)o.unshift("..");!a||""===o[0]||o[0]&&O(o[0])||o.unshift("");var f=o.join("/");return c&&"/"!==f.substr(-1)&&(f+="/"),f}function N(t,e,n,o){var r;"string"==typeof t?(r=T(t)).state=e:(void 0===(r=K({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(r.key=n),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=k(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r.query=L(r.search),r}function U(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function I(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}var A=function(){function t(){}return t.prototype.componentWillLoad=function(){return this.fetchNewContent()},t.prototype.fetchNewContent=function(){var t=this;return fetch(this.documentLocation).then(function(t){return t.text()}).then(function(e){t.content=e})},t.prototype.render=function(){return e("div",{p:{innerHTML:this.content}})},t}(),M=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},P=g,j=i,D=u,$=m,_=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");P.parse=j,P.compile=function(t,e){return u(i(t,e))},P.tokensToFunction=D,P.tokensToRegExp=$;var W={},H=1e4,B=0,Y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},G=function(){function t(){this.unsubscribe=function(){},this.componentProps={},this.exact=!1,this.group=null,this.routeRender=null,this.match=null}return t.prototype.computeMatch=function(t){t||(t=this.activeRouter.get("location").pathname);var e=w(t,{path:this.url,exact:this.exact,strict:!0});if(e){if(this.group&&this.activeRouter.didGroupAlreadyMatch(this.group))return null;this.group&&this.activeRouter.setGroupMatched(this.group)}return e},t.prototype.componentWillLoad=function(){var t=this;this.group&&this.activeRouter.addToGroup(this,this.group),this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.activeRouter.removeFromGroups(this),this.unsubscribe()},t.prototype.render=function(){if(!this.activeRouter||!this.match)return null;var t=Y({},this.componentProps,{history:this.activeRouter.get("history"),match:this.match});if(this.routeRender)return this.routeRender(Y({},t,{component:this.component}));if(this.component){var n=this.component;return e(n,{p:t})}},t}(),F=function(){function t(){this.unsubscribe=function(){},this.exact=!1,this.custom=!1,this.activeClass="link-active",this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),w(t,{path:this.urlMatch||this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.handleClick=function(t){t.preventDefault();if(this.activeRouter)return this.activeRouter.get("history").push(this.url,{});console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')},t.prototype.render=function(){var t=(n={},n[this.activeClass]=null!==this.match,n);return this.custom?e("span",{c:t,o:{click:this.handleClick.bind(this)}},e(0,0)):e("a",{c:t,o:{click:this.handleClick.bind(this)},p:{href:this.url}},e(0,0));var n},t}(),J=function(){function t(){}return t.prototype.componentWillLoad=function(){var t=this.activeRouter&&this.activeRouter.get("titleSuffix")||"";document.title=""+this.title+t},t.prototype.render=function(){return null},t}(),K=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},q=function(){var t=null,e=[];return{setPrompt:function(e){return I(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(I(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:function(t){var n=!0,o=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n&&t.apply(void 0,e)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},z=!("undefined"==typeof window||!window.document||!window.document.createElement),Q=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},V=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},X=function(t,e){return e(window.confirm(t))},Z=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},tt=function(){return-1===window.navigator.userAgent.indexOf("Trident")},et=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")},nt=function(){try{return window.history.state||{}}catch(t){return{}}},ot=function(t){void 0===t&&(t={}),U(z,"Browser history needs a DOM");var e=window.history,n=Z(),o=!tt(),r=t.forceRefresh,i=void 0!==r&&r,a=t.getUserConfirmation,c=void 0===a?X:a,u=t.keyLength,s=void 0===u?6:u,h=t.basename?b(x(t.basename)):"",p=function(t){var e=(t=t||{}).key,n=t.state,o=window.location,r=o.pathname+o.search+o.hash;return I(!h||R(r,h),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+h+'".'),h&&(r=E(r,h)),N(r,n,e)},f=function(){return Math.random().toString(36).substr(2,s)},l=q(),d=function(t){Object.assign(P,t),P.length=e.length,l.notifyListeners(P.location,P.action)},v=function(t){et(t)||y(p(t.state))},m=function(){y(p(nt()))},g=!1,y=function(t){if(g)g=!1,d();else{l.confirmTransitionTo(t,"POP",c,function(e){e?d({action:"POP",location:t}):w(t)})}},w=function(t){var e=P.location,n=L.indexOf(e.key);-1===n&&(n=0);var o=L.indexOf(t.key);-1===o&&(o=0);var r=n-o;r&&(g=!0,S(r))},T=p(nt()),L=[T.key],O=function(t){return h+C(t)},S=function(t){e.go(t)},k=0,A=function(t){1===(k+=t)?(Q(window,"popstate",v),o&&Q(window,"hashchange",m)):0===k&&(V(window,"popstate",v),o&&V(window,"hashchange",m))},M=!1,P={length:e.length,action:"POP",location:T,createHref:O,push:function(t,o){I(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r=N(t,o,f(),P.location);l.confirmTransitionTo(r,"PUSH",c,function(t){if(t){var o=O(r),a=r.key,c=r.state;if(n)if(e.pushState({key:a,state:c},null,o),i)window.location.href=o;else{var u=L.indexOf(P.location.key),s=L.slice(0,-1===u?0:u+1);s.push(r.key),L=s,d({action:"PUSH",location:r})}else I(void 0===c,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o}})},replace:function(t,o){I(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r=N(t,o,f(),P.location);l.confirmTransitionTo(r,"REPLACE",c,function(t){if(t){var o=O(r),a=r.key,c=r.state;if(n)if(e.replaceState({key:a,state:c},null,o),i)window.location.replace(o);else{var u=L.indexOf(P.location.key);-1!==u&&(L[u]=r.key),d({action:"REPLACE",location:r})}else I(void 0===c,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)}})},go:S,goBack:function(){return S(-1)},goForward:function(){return S(1)},block:function(t){void 0===t&&(t="");var e=l.setPrompt(t);return M||(A(1),M=!0),function(){return M&&(M=!1,A(-1)),e()}},listen:function(t){var e=l.appendListener(t);return A(1),function(){A(-1),e()}}};return P},rt=function(){function t(){this.root="/",this.titleSuffix="",this.unsubscribe=function(){},this.match=null}return t.prototype.titleSuffixChanged=function(t){console.log("title suffix changed"),this.activeRouter.set({titleSuffix:t})},t.prototype.computeMatch=function(t){return{path:this.root,url:this.root,isExact:t===this.root,params:{}}},t.prototype.componentWillLoad=function(){var t=this,e=ot();e.listen(function(e){t.activeRouter.set({location:e})}),this.activeRouter.set({location:e.location,titleSuffix:this.titleSuffix,history:e}),this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.render=function(){return e(0,0)},t}(),it=function(){function t(){}return t.prototype.componentWillLoad=function(){var t=this.activeRouter.get("history");if(t)return t.replace(this.url,{})},t}();t["STENCIL-ASYNC-CONTENT"]=A,t["STENCIL-ROUTE"]=G,t["STENCIL-ROUTE-LINK"]=F,t["STENCIL-ROUTE-TITLE"]=J,t["STENCIL-ROUTER"]=rt,t["STENCIL-ROUTER-REDIRECT"]=it},["STENCIL-ASYNC-CONTENT",[["content",5],["documentLocation",1]],0,0,0,[["doc","fetchNewContent"]]],["STENCIL-ROUTE",[["activeRouter",3,0,"activeRouter"],["component",1],["componentProps",1],["exact",1,1],["group",1],["location",3,0,"location"],["match",5],["routeRender",1],["url",1]]],["STENCIL-ROUTE-LINK",[["activeClass",1],["activeRouter",3,0,"activeRouter"],["custom",1,1],["exact",1,1],["location",3,0,"location"],["match",5],["url",1],["urlMatch",1]]],["STENCIL-ROUTE-TITLE",[["activeRouter",3,0,"activeRouter"],["title",1]]],["STENCIL-ROUTER",[["activeRouter",3,0,"activeRouter"],["match",5],["root",1],["titleSuffix",1]],0,0,0,[["titleSuffix","titleSuffixChanged"]]],["STENCIL-ROUTER-REDIRECT",[["activeRouter",3,0,"activeRouter"],["url",1]]]);