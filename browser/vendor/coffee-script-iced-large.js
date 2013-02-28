/**
 * IcedCoffeeScript Compiler v1.4.0c
 * http://maxtaco.github.com/coffee-script
 *
 * Copyright 2013, Jeremy Ashkenas, Maxwell Krohn
 * Released under the MIT License
 */
(function(e){var t=function(){function e(t){return e[t]}return e["./iced"]=new function(){var e=this;(function(){var t,n=[].slice;e.generator=t=function(e,t,i){var r,s,o,a,c,u;return t.transform=function(e){return e.icedTransform()},t["const"]=r={k:"__iced_k",k_noop:"__iced_k_noop",param:"__iced_p_",ns:"iced",runtime:"runtime",Deferrals:"Deferrals",deferrals:"__iced_deferrals",fulfill:"_fulfill",b_while:"_break",t_while:"_while",c_while:"_continue",n_while:"_next",n_arg:"__iced_next_arg",defer_method:"defer",slot:"__slot",assign_fn:"assign_fn",autocb:"autocb",retslot:"ret",trace:"__iced_trace",passed_deferral:"__iced_passed_deferral",findDeferral:"findDeferral",lineno:"lineno",parent:"parent",filename:"filename",funcname:"funcname",catchExceptions:"catchExceptions",runtime_modes:["node","inline","window","none","browserify"],trampoline:"trampoline"},e.makeDeferReturn=function(t,i,s,o,a){var c,u,l,h;l={};for(c in o)h=o[c],l[c]=h;return l[r.lineno]=null!=i?i[r.lineno]:void 0,u=function(){var r,o,c;return r=arguments.length>=1?n.call(arguments,0):[],null!=i&&null!=(c=i.assign_fn)&&c.apply(null,r),t?(o=t,a||(t=null),o._fulfill(s,l)):e._warn("overused deferral at "+e._trace_to_string(l))},u[r.trace]=l,u},e.__c=0,e.tickCounter=function(t){return e.__c++,0===e.__c%t?(e.__c=0,!0):!1},e.__active_trace=null,e._trace_to_string=function(e){var t;return t=e[r.funcname]||"<anonymous>",""+t+" ("+e[r.filename]+":"+(e[r.lineno]+1)+")"},e._warn=function(e){return"undefined"!=typeof console&&null!==console?console.log("ICED warning: "+e):void 0},i.trampoline=function(t){return e.tickCounter(500)?"undefined"!=typeof process&&null!==process?process.nextTick(t):setTimeout(t):t()},i.Deferrals=s=function(){function t(e,t){this.trace=t,this.continuation=e,this.count=1,this.ret=null}return t.prototype._call=function(t){var n;return this.continuation?(e.__active_trace=t,n=this.continuation,this.continuation=null,n(this.ret)):e._warn("Entered dead await at "+e._trace_to_string(t))},t.prototype._fulfill=function(e,t){var n=this;return--this.count>0?void 0:i.trampoline(function(){return n._call(t)})},t.prototype.defer=function(t){var n;return this.count++,n=this,e.makeDeferReturn(n,t,null,this.trace)},t}(),i.findDeferral=c=function(e){var t,n,i;for(n=0,i=e.length;i>n;n++)if(t=e[n],null!=t?t[r.trace]:void 0)return t;return null},i.Rendezvous=o=function(){function t(){this.completed=[],this.waiters=[],this.defer_id=0,this[r.deferrals]=this}var n;return n=function(){function e(e,t,n){this.rv=e,this.id=t,this.multi=n}return e.prototype.defer=function(e){return this.rv._deferWithId(this.id,e,this.multi)},e}(),t.prototype.wait=function(e){var t;return this.completed.length?(t=this.completed.shift(),e(t)):this.waiters.push(e)},t.prototype.defer=function(e){var t;return t=this.defer_id++,this.deferWithId(t,e)},t.prototype.id=function(e,t){var i;return null==t&&(t=!1),i={},i[r.deferrals]=new n(this,e,t),i},t.prototype._fulfill=function(e){var t;return this.waiters.length?(t=this.waiters.shift(),t(e)):this.completed.push(e)},t.prototype._deferWithId=function(t,n,i){return this.count++,e.makeDeferReturn(this,n,t,{},i)},t}(),i.stackWalk=u=function(t){var n,i,s,o;for(i=[],s=t?t[r.trace]:e.__active_trace;s;)n="   at "+e._trace_to_string(s),i.push(n),s=null!=s?null!=(o=s[r.parent])?o[r.trace]:void 0:void 0;return i},i.exceptionHandler=a=function(e,t){var n;return t||(t=console.log),t(e.stack),n=u(),n.length?(t("Iced 'stack' trace (w/ real line numbers):"),t(n.join("\n"))):void 0},i.catchExceptions=function(e){return"undefined"!=typeof process&&null!==process?process.on("uncaughtException",function(t){return a(t,e),process.exit(1)}):void 0}},e.runtime={},t(this,e,e.runtime)}).call(this)},e["./icedlib"]=new function(){var t=this;(function(){var n,i,r,s,o,a,c,u,l=[].slice;s=o=function(){},r=e("./iced"),t.iced=i=r.runtime,u=function(e,t,n,r){var s,a,c,u,h,p;p=o,u=i.findDeferral(arguments),a=new i.Rendezvous,r[0]=a.id(!0).__iced_deferrals.defer({assign_fn:function(){return function(){return s=l.call(arguments,0)}}(),lineno:17}),setTimeout(a.id(!1).__iced_deferrals.defer({lineno:18}),t),function(e){h=new i.Deferrals(e,{parent:u,filename:"src/icedlib.coffee",funcname:"_timeout"}),a.wait(h.defer({assign_fn:function(){return function(){return c=arguments[0]}}(),lineno:20})),h._fulfill()}(function(){return n&&(n[0]=c),e.apply(null,s)})},t.timeout=function(e,t,n){var i;return i=[],u(e,t,n,i),i[0]},a=function(e,t,n){var r,s,a,c;c=o,s=i.findDeferral(arguments),function(e){a=new i.Deferrals(e,{parent:s,filename:"src/icedlib.coffee",funcname:"_iand"}),n[0]=a.defer({assign_fn:function(){return function(){return r=arguments[0]}}(),lineno:35}),a._fulfill()}(function(){return r||(t[0]=!1),e()})},t.iand=function(e,t){var n;return n=[],a(e,t,n),n[0]},c=function(e,t,n){var r,s,a,c;c=o,s=i.findDeferral(arguments),function(e){a=new i.Deferrals(e,{parent:s,filename:"src/icedlib.coffee",funcname:"_ior"}),n[0]=a.defer({assign_fn:function(){return function(){return r=arguments[0]}}(),lineno:52}),a._fulfill()}(function(){return r&&(t[0]=!0),e()})},t.ior=function(e,t){var n;return n=[],c(e,t,n),n[0]},t.Pipeliner=n=function(){function e(e,t){this.window=e||1,this.delay=t||0,this.queue=[],this.n_out=0,this.cb=null,this[r["const"].deferrals]=this,this.defer=this._defer}return e.prototype.waitInQueue=function(e){var t,n,r,s=this;r=o,t=i.findDeferral(arguments),function(e){var r,o;r=[],o=function(e){var a,c,u;return a=function(){return e(r)},c=function(){return i.trampoline(function(){return o(e)})},u=function(e){return r.push(e),c()},s.n_out>=s.window?(function(e){n=new i.Deferrals(e,{parent:t,filename:"src/icedlib.coffee",funcname:"Pipeliner.waitInQueue"}),s.cb=n.defer({lineno:88}),n._fulfill()}(u),void 0):a()},o(e)}(function(){s.n_out++,function(e){return s.delay?(function(e){n=new i.Deferrals(e,{parent:t,filename:"src/icedlib.coffee",funcname:"Pipeliner.waitInQueue"}),setTimeout(n.defer({lineno:96}),s.delay),n._fulfill()}(e),void 0):e()}(function(){return e()})})},e.prototype.__defer=function(e,t){var n,r,s,a,c,u=this;c=o,s=i.findDeferral(arguments),function(n){a=new i.Deferrals(n,{parent:s,filename:"src/icedlib.coffee",funcname:"Pipeliner.__defer"}),r=a.defer({lineno:109}),e[0]=function(){var e,n;return e=arguments.length>=1?l.call(arguments,0):[],null!=(n=t.assign_fn)&&n.apply(null,e),r()},a._fulfill()}(function(){return u.n_out--,u.cb?(n=u.cb,u.cb=null,n()):void 0})},e.prototype._defer=function(e){var t;return t=[],this.__defer(t,e),t[0]},e.prototype.flush=function(e){var t,n,r,s,o,a=this;r=e,t=i.findDeferral(arguments),s=[],o=function(e){var r,c,u;return r=function(){return e(s)},c=function(){return i.trampoline(function(){return o(e)})},u=function(e){return s.push(e),c()},a.n_out?(function(e){n=new i.Deferrals(e,{parent:t,filename:"src/icedlib.coffee",funcname:"Pipeliner.flush"}),a.cb=n.defer({lineno:136}),n._fulfill()}(u),void 0):r()},o(r)},e}()}).call(this)},e["./icedlib"]}();"function"==typeof define&&define.amd?(define(function(){return t}),define(function(){return t.iced})):(e.icedlib=t,e.iced=t.iced)})(this);