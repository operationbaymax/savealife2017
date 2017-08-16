/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*//*jslint unparam: true, browser: true, indent: 2 */// Accommodate running jQuery or Zepto in noConflict() mode by
// using an anonymous function to redefine the $ shorthand name.
// See http://docs.jquery.com/Using_jQuery_with_Other_Libraries
// and http://zeptojs.com/
var libFuncName=null;if(typeof jQuery=="undefined"&&typeof Zepto=="undefined"&&typeof $=="function")libFuncName=$;else if(typeof jQuery=="function")libFuncName=jQuery;else{if(typeof Zepto!="function")throw new TypeError;libFuncName=Zepto}(function(e){(function(){if(!Array.prototype.filter){Array.prototype.filter=function(e){"use strict";if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")try{throw new TypeError}catch(r){return}var i=[],s=arguments[1];for(var o=0;o<n;o++)if(o in t){var u=t[o];e&&e.call(s,u,o,t)&&i.push(u)}return i};Function.prototype.bind||(Function.prototype.bind=function(e){if(typeof this!="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};r.prototype=this.prototype;i.prototype=new r;return i})}e.fn.stop=e.fn.stop||function(){return this}})();(function(t,n,r){"use strict";t.Foundation={name:"Foundation",version:"4.0.8",cache:{},init:function(e,t,n,r,i,s){var o,u=[e,n,r,i],a=[],s=s||!1;s&&(this.nc=s);this.scope=e||this.scope;if(t&&typeof t=="string"){if(/off/i.test(t))return this.off();o=t.split(" ");if(o.length>0)for(var f=o.length-1;f>=0;f--)a.push(this.init_lib(o[f],u))}else for(var l in this.libs)a.push(this.init_lib(l,u));typeof t=="function"&&u.unshift(t);return this.response_obj(a,u)},response_obj:function(e,t){for(var n in t)if(typeof t[n]=="function")return t[n]({errors:e.filter(function(e){if(typeof e=="string")return e})});return e},init_lib:function(e,t){return this.trap(function(){if(this.libs.hasOwnProperty(e)){this.patch(this.libs[e]);return this.libs[e].init.apply(this.libs[e],t)}}.bind(this),e)},trap:function(e,t){if(!this.nc)try{return e()}catch(n){return this.error({name:t,message:"could not be initialized",more:n.name+" "+n.message})}return e()},patch:function(e){this.fix_outer(e)},inherit:function(e,t){var n=t.split(" ");for(var r=n.length-1;r>=0;r--)this.lib_methods.hasOwnProperty(n[r])&&(this.libs[e.name][n[r]]=this.lib_methods[n[r]])},random_str:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));var n="";for(var r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n},libs:{},lib_methods:{set_data:function(e,t){var n=[this.name,+(new Date),Foundation.random_str(5)].join("-");Foundation.cache[n]=t;e.attr("data-"+this.name+"-id",n);return t},get_data:function(e){return Foundation.cache[e.attr("data-"+this.name+"-id")]},remove_data:function(t){if(t){delete Foundation.cache[t.attr("data-"+this.name+"-id")];t.attr("data-"+this.name+"-id","")}else e("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[e(this).attr("data-"+this.name+"-id")];e(this).attr("data-"+this.name+"-id","")})},throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;clearTimeout(n);n=setTimeout(function(){e.apply(r,i)},t)}},data_options:function(t){function u(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==!1&&e!==!0}function a(t){return typeof t=="string"?e.trim(t):t}var n={},r,i,s=(t.attr("data-options")||":").split(";"),o=s.length;for(r=o-1;r>=0;r--){i=s[r].split(":");/true/i.test(i[1])&&(i[1]=!0);/false/i.test(i[1])&&(i[1]=!1);u(i[1])&&(i[1]=parseInt(i[1],10));i.length===2&&i[0].length>0&&(n[a(i[0])]=a(i[1]))}return n},delay:function(e,t){return setTimeout(e,t)},scrollTo:function(n,r,i){if(i<0)return;var s=r-e(t).scrollTop(),o=s/i*10;this.scrollToTimerCache=setTimeout(function(){if(!isNaN(parseInt(o,10))){t.scrollTo(0,e(t).scrollTop()+o);this.scrollTo(n,r,i-10)}}.bind(this),10)},scrollLeft:function(e){if(!e.length)return;return"scrollLeft"in e[0]?e[0].scrollLeft:e[0].pageXOffset},empty:function(e){if(e.length&&e.length>0)return!1;if(e.length&&e.length===0)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}},fix_outer:function(e){e.outerHeight=function(e,t){return typeof Zepto=="function"?e.height():typeof t!="undefined"?e.outerHeight(t):e.outerHeight()};e.outerWidth=function(e){return typeof Zepto=="function"?e.width():typeof bool!="undefined"?e.outerWidth(bool):e.outerWidth()}},error:function(e){return e.name+" "+e.message+"; "+e.more},off:function(){e(this.scope).off(".fndtn");e(t).off(".fndtn");return!0},zj:function(){try{return Zepto}catch(e){return jQuery}}()},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){Foundation.init.apply(Foundation,[this].concat(e));return this})}})(this,this.document)})(libFuncName);