var d=this,f=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c},g=function(a,c,b){return a.call.apply(a.bind,arguments)},h=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,e);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},k=function(a,c,b){k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
g:h;return k.apply(null,arguments)},l=function(a,c){a=a.split(".");var b=d;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===c?b=b[e]?b[e]:b[e]={}:b[e]=c};var m=function(a,c){var b,e=f(c),e=(b="array"==e||"object"==e&&"number"==typeof c.length)?c:arguments;for(b=b?0:1;b<e.length&&(a=a[e[b]],void 0!==a);b++);return a};var n=function(a,c){a=a&&m(a,"google_template_data","adData",0,"exit_label_map");a=null==a?"":String(a);if(/^[\s\xa0]*$/.test(a))return c;try{var b=JSON.parse(a);return b&&b[c]||c}catch(e){return c}};var p=function(){this.a=this.c=null};p.b=function(){return p.f?p.f:p.f=new p};p.prototype.exit=function(a){null!=this.a&&(a&&"string"==typeof a&&!/^[\s\xa0]*$/.test(a)?this.a.exit(n(this.c,a)):this.a.exit())};p.prototype.close=function(){null!=this.a&&this.a.exit(void 0,this.a.RedirectType.CLOSE)};p.prototype.h=function(a){null!=this.a&&this.a.configureCloseButton(a)};p.prototype.g=function(a,c){this.c=a;this.a=c};l("ExitApi.exit",k(p.prototype.exit,p.b()));l("ExitApi.close",k(p.prototype.close,p.b()));
l("ExitApi.delayCloseButton",k(p.prototype.h,p.b()));l("onAdData",k(p.prototype.g,p.b()));