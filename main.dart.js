{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.lv(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iv(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={ic:function ic(){},
kE:function(a,b,c,d){P.ja(b,"start")
return new H.f5(a,b,c,[d])},
kt:function(a,b,c,d){if(!!a.$ia1)return new H.e1(a,b,[c,d])
return new H.d_(a,b,[c,d])},
ko:function(){return new P.bN("No element")},
a1:function a1(){},
be:function be(){},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d_:function d_(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a,b,c){this.a=a
this.b=b
this.$ti=c},
en:function en(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eo:function eo(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
bt:function(a){var u,t=H.lx(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
li:function(a){return v.types[H.ac(a)]},
mg:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.F(a).$icY},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aV(a)
if(typeof u!=="string")throw H.f(H.is(a))
return u},
bF:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
kx:function(a){var u,t
if(typeof a!=="string")H.a0(H.is(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.k9(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ck:function(a){return H.ku(a)+H.h7(H.br(a),0,null)},
ku:function(a){var u,t,s,r,q,p,o,n=J.F(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Y||!!n.$ibQ){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bt(t.length>1&&C.d.aM(t,0)===36?C.d.c3(t,1):t)},
kv:function(){return Date.now()},
kw:function(){var u,t
if($.ex!=null)return
$.ex=1000
$.ey=H.kZ()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.ex=1e6
$.ey=new H.ew(t)},
a2:function(a){throw H.f(H.is(a))},
c:function(a,b){if(a==null)J.bv(a)
throw H.f(H.cG(a,b))},
cG:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,s,null)
u=H.ac(J.bv(a))
if(!(b<0)){if(typeof u!=="number")return H.a2(u)
t=b>=u}else t=!0
if(t)return P.e9(b,a,s,null,u)
return P.d6(b,s)},
is:function(a){return new P.aH(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.bE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jN})
u.name=""}else u.toString=H.jN
return u},
jN:function(){return J.aV(this.dartException)},
a0:function(a){throw H.f(a)},
i0:function(a){throw H.f(P.bw(a))},
aQ:function(a){var u,t,s,r,q,p
a=H.lu(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.h([],[P.v])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fb(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
je:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j8:function(a,b){return new H.et(a,b==null?null:b.method)},
id:function(a,b){var u=b==null,t=u?null:b.method
return new H.ee(a,t,u?null:b.receiver)},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.i2(a)
if(a==null)return
if(a instanceof H.cd)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.a.es(t,16)&8191)===10)switch(s){case 438:return f.$1(H.id(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j8(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jS()
q=$.jT()
p=$.jU()
o=$.jV()
n=$.jY()
m=$.jZ()
l=$.jX()
$.jW()
k=$.k0()
j=$.k_()
i=r.a3(u)
if(i!=null)return f.$1(H.id(H.av(u),i))
else{i=q.a3(u)
if(i!=null){i.method="call"
return f.$1(H.id(H.av(u),i))}else{i=p.a3(u)
if(i==null){i=o.a3(u)
if(i==null){i=n.a3(u)
if(i==null){i=m.a3(u)
if(i==null){i=l.a3(u)
if(i==null){i=o.a3(u)
if(i==null){i=k.a3(u)
if(i==null){i=j.a3(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j8(H.av(u),i))}}return f.$1(new H.fe(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dc()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aH(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dc()
return a},
bs:function(a){var u
if(a instanceof H.cd)return a.b
if(a==null)return new H.du(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.du(a)},
lg:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.D(0,a[u],a[t])}return b},
lm:function(a,b,c,d,e,f){H.d(a,"$ii8")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.fC("Unsupported number of arguments for wrapped closure"))},
bZ:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lm)
a.$identity=u
return u},
kh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.f_().constructor.prototype):Object.create(new H.c8(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aJ
if(typeof t!=="number")return t.X()
$.aJ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iZ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kd(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iZ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kd:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.li,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iW:H.i4
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
ke:function(a,b,c,d){var u=H.i4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kg(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ke(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.X()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c9
return new Function(r+H.j(q==null?$.c9=H.dR("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.X()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.c9
return new Function(r+H.j(q==null?$.c9=H.dR("self"):q)+"."+H.j(u)+"("+o+");}")()},
kf:function(a,b,c,d){var u=H.i4,t=H.iW
switch(b?-1:a){case 0:throw H.f(H.kC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kg:function(a,b){var u,t,s,r,q,p,o,n=$.c9
if(n==null)n=$.c9=H.dR("self")
u=$.iV
if(u==null)u=$.iV=H.dR("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kf(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aJ
if(typeof u!=="number")return u.X()
$.aJ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aJ
if(typeof u!=="number")return u.X()
$.aJ=u+1
return new Function(n+u+"}")()},
iv:function(a,b,c,d,e,f,g){return H.kh(a,b,c,d,!!e,!!f,g)},
i4:function(a){return a.a},
iW:function(a){return a.c},
dR:function(a){var u,t,s,r=new H.c8("self","target","receiver","name"),q=J.j1(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
b3:function(a){if(a==null)H.l5("boolean expression must not be null")
return a},
av:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aD(a,"String"))},
me:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aD(a,"double"))},
hX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aD(a,"num"))},
m8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aD(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aD(a,"int"))},
iD:function(a,b){throw H.f(H.aD(a,H.bt(H.av(b).substring(2))))},
lt:function(a,b){throw H.f(H.iY(a,H.bt(H.av(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.F(a)[b])return a
H.iD(a,b)},
at:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.F(a)[b]
else u=!0
if(u)return a
H.lt(a,b)},
mk:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.F(a)[b])return a
H.iD(a,b)},
mi:function(a){if(a==null)return a
if(!!J.F(a).$iI)return a
throw H.f(H.aD(a,"List<dynamic>"))},
ln:function(a,b){var u
if(a==null)return a
u=J.F(a)
if(!!u.$iI)return a
if(u[b])return a
H.iD(a,b)},
jE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
c_:function(a,b){var u
if(typeof a=="function")return!0
u=H.jE(J.F(a))
if(u==null)return!1
return H.jo(u,null,b,null)},
b:function(a,b){var u,t
if(a==null)return a
if($.io)return a
$.io=!0
try{if(H.c_(a,b))return a
u=H.c6(b)
t=H.aD(a,u)
throw H.f(t)}finally{$.io=!1}},
c0:function(a,b){if(a!=null&&!H.iu(a,b))H.a0(H.aD(a,H.c6(b)))
return a},
aD:function(a,b){return new H.dh("TypeError: "+P.cP(a)+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")},
iY:function(a,b){return new H.dT("CastError: "+P.cP(a)+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")},
ju:function(a){var u,t=J.F(a)
if(!!t.$ica){u=H.jE(t)
if(u!=null)return H.c6(u)
return"Closure"}return H.ck(a)},
l5:function(a){throw H.f(new H.fk(a))},
lv:function(a){throw H.f(new P.dY(a))},
kC:function(a){return new H.eT(a)},
jH:function(a){return v.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
br:function(a){if(a==null)return
return a.$ti},
mf:function(a,b,c){return H.c7(a["$a"+H.j(c)],H.br(b))},
jI:function(a,b,c,d){var u=H.c7(a["$a"+H.j(c)],H.br(b))
return u==null?null:u[d]},
cH:function(a,b,c){var u=H.c7(a["$a"+H.j(b)],H.br(a))
return u==null?null:u[c]},
a:function(a,b){var u=H.br(a)
return u==null?null:u[b]},
c6:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bt(a[0].name)+H.h7(a,1,b)
if(typeof a=="function")return H.bt(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.j(b[t])}if('func' in a)return H.kW(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kW:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.h([],[P.v])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.b.i(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.d.X(p,a0[m])
l=u[q]
if(l!=null&&l!==P.w)p+=" extends "+H.bo(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bo(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bo(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bo(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lf(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.av(n[g])
i=i+h+H.bo(d[c],a0)+(" "+H.j(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
h7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.cp("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.h(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aT:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.br(a)
t=J.F(a)
if(t[b]==null)return!1
return H.jy(H.c7(t[d],u),null,c,null)},
iG:function(a,b,c,d){if(a==null)return a
if(H.aT(a,b,c,d))return a
throw H.f(H.iY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bt(b.substring(2))+H.h7(c,0,null),v.mangledGlobalNames)))},
E:function(a,b,c,d){if(a==null)return a
if(H.aT(a,b,c,d))return a
throw H.f(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bt(b.substring(2))+H.h7(c,0,null),v.mangledGlobalNames)))},
jz:function(a,b,c,d,e){if(!H.ag(a,null,b,null))H.lw("TypeError: "+H.j(c)+H.c6(a)+H.j(d)+H.c6(b)+H.j(e))},
lw:function(a){throw H.f(new H.dh(H.av(a)))},
jy:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ag(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ag(a[t],b,c[t],d))return!1
return!0},
mb:function(a,b,c){return a.apply(b,H.c7(J.F(b)["$a"+H.j(c)],H.br(b)))},
jK:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="w"||a.name==="u"||a===-1||a===-2||H.jK(u)}return!1},
iu:function(a,b){var u,t
if(a==null)return b==null||b.name==="w"||b.name==="u"||b===-1||b===-2||H.jK(b)
if(b==null||b===-1||b.name==="w"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c_(a,b)}u=J.F(a).constructor
t=H.br(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ag(u,null,b,null)},
l:function(a,b){if(a!=null&&!H.iu(a,b))throw H.f(H.aD(a,H.c6(b)))
return a},
ag:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="w"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="w"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ag(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="u")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ag("type" in a?a.type:l,b,s,d)
else if(H.ag(a,b,s,d))return!0
else{if(!('$i'+"Q" in t.prototype))return!1
r=t.prototype["$a"+"Q"]
q=H.c7(r,u?a.slice(1):l)
return H.ag(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.jo(a,b,c,d)
if('func' in a)return c.name==="i8"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.jy(H.c7(m,u),b,p,d)},
jo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ag(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.ag(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ag(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ag(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lr(h,b,g,d)},
lr:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ag(c[s],d,a[s],b))return!1}return!0},
j4:function(a,b){return new H.H([a,b])},
mc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lo:function(a){var u,t,s,r,q=H.av($.jJ.$1(a)),p=$.hP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.av($.jw.$2(a,q))
if(q!=null){p=$.hP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.hW(u)
$.hP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.hV[q]=u
return u}if(s==="-"){r=H.hW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jL(a,u)
if(s==="*")throw H.f(P.jf(q))
if(v.leafTags[q]===true){r=H.hW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jL(a,u)},
jL:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hW:function(a){return J.iC(a,!1,null,!!a.$icY)},
lp:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hW(u)
else return J.iC(u,c,null,null)},
lk:function(){if(!0===$.iz)return
$.iz=!0
H.ll()},
ll:function(){var u,t,s,r,q,p,o,n
$.hP=Object.create(null)
$.hV=Object.create(null)
H.lj()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jM.$1(q)
if(p!=null){o=H.lp(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lj:function(){var u,t,s,r,q,p,o=C.M()
o=H.bY(C.N,H.bY(C.O,H.bY(C.t,H.bY(C.t,H.bY(C.P,H.bY(C.Q,H.bY(C.R(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jJ=new H.hS(r)
$.jw=new H.hT(q)
$.jM=new H.hU(p)},
bY:function(a,b){return a(b)||b},
ia:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(P.j0("Illegal RegExp pattern ("+String(p)+")",a))},
lu:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ew:function ew(a){this.a=a},
fb:function fb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
et:function et(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a){this.a=a},
cd:function cd(a,b){this.a=a
this.b=b},
i2:function i2(a){this.a=a},
du:function du(a){this.a=a
this.b=null},
ca:function ca(){},
f6:function f6(){},
f_:function f_(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a){this.a=a},
dT:function dT(a){this.a=a},
eT:function eT(a){this.a=a},
fk:function fk(a){this.a=a},
cq:function cq(a){this.a=a
this.d=this.b=null},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ed:function ed(a){this.a=a},
eg:function eg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eh:function eh(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ds:function ds(a){this.b=a},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
f4:function f4(a,b){this.a=a
this.c=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jl:function(a,b,c){},
jk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cG(b,a))},
d4:function d4(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
er:function er(){},
es:function es(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
lf:function(a){return J.kp(a?Object.keys(a):[],null)},
lx:function(a){return v.mangledGlobalNames[a]},
ls:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hR:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iz==null){H.lk()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jf("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iH()]
if(r!=null)return r
r=H.lo(a)
if(r!=null)return r
if(typeof a=="function")return C.a_
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.iH(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
kp:function(a,b){return J.j1(H.h(a,[b]))},
j1:function(a){a.fixed$length=Array
return a},
j2:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kq:function(a,b){var u,t
for(u=a.length;b<u;){t=C.d.aM(a,b)
if(t!==32&&t!==13&&!J.j2(t))break;++b}return b},
kr:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.d.aW(a,u)
if(t!==32&&t!==13&&!J.j2(t))break}return b},
F:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.cU.prototype}if(typeof a=="string")return J.bC.prototype
if(a==null)return J.cW.prototype
if(typeof a=="boolean")return J.ec.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.w)return a
return J.hR(a)},
jF:function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.w)return a
return J.hR(a)},
jG:function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.w)return a
return J.hR(a)},
lh:function(a){if(typeof a=="number")return J.cg.prototype
if(a==null)return a
if(!(a instanceof P.w))return J.bQ.prototype
return a},
iy:function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.w))return J.bQ.prototype
return a},
hQ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.w)return a
return J.hR(a)},
dG:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.F(a).N(a,b)},
k4:function(a,b,c,d){return J.hQ(a).dn(a,b,c,d)},
k5:function(a,b){return J.hQ(a).ej(a,b)},
k6:function(a,b,c,d){return J.hQ(a).ek(a,b,c,d)},
k7:function(a,b){return J.iy(a).cv(a,b)},
iQ:function(a,b){return J.hQ(a).cw(a,b)},
iR:function(a,b){return J.jG(a).a8(a,b)},
bu:function(a){return J.F(a).gj(a)},
iS:function(a){return J.jG(a).gH(a)},
bv:function(a){return J.jF(a).gl(a)},
aV:function(a){return J.F(a).h(a)},
k8:function(a,b){return J.lh(a).fh(a,b)},
k9:function(a){return J.iy(a).fi(a)},
M:function M(){},
ec:function ec(){},
cW:function cW(){},
cZ:function cZ(){},
ev:function ev(){},
bQ:function bQ(){},
bd:function bd(){},
bc:function bc(a){this.$ti=a},
ib:function ib(a){this.$ti=a},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cg:function cg(){},
cV:function cV(){},
cU:function cU(){},
bC:function bC(){}},P={
kO:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.l6()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bZ(new P.fq(s),1)).observe(u,{childList:true})
return new P.fp(s,u,t)}else if(self.setImmediate!=null)return P.l7()
return P.l8()},
kP:function(a){self.scheduleImmediate(H.bZ(new P.fr(H.b(a,{func:1,ret:-1})),0))},
kQ:function(a){self.setImmediate(H.bZ(new P.fs(H.b(a,{func:1,ret:-1})),0))},
kR:function(a){P.ii(C.U,H.b(a,{func:1,ret:-1}))},
ii:function(a,b){var u=C.a.ae(a.a,1000)
return P.kT(u<0?0:u,b)},
kT:function(a,b){var u=new P.h0()
u.dl(a,b)
return u},
C:function(a){return new P.fl(new P.dv(new P.L($.x,[a]),[a]),[a])},
B:function(a,b){a.$2(0,null)
b.b=!0
return b.a.a},
r:function(a,b){P.kU(a,b)},
A:function(a,b){b.a6(0,a)},
z:function(a,b){b.ap(H.ax(a),H.bs(a))},
kU:function(a,b){var u,t=null,s=new P.h3(b),r=new P.h4(b),q=J.F(a)
if(!!q.$iL)a.br(s,r,t)
else if(!!q.$iQ)a.aG(s,r,t)
else{u=new P.L($.x,[null])
H.l(a,null)
u.a=4
u.c=a
u.br(s,t,t)}},
D:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.x.bL(new P.h9(u),P.u,P.G,null)},
bb:function(a,b){var u=new P.L($.x,[b])
P.kF(a,new P.e5(null,u))
return u},
kk:function(a,b){var u,t,s,r,q,p,o,n,m={},l=null,k=!1,j=[[P.I,b]],i=new P.L($.x,j)
m.a=null
m.b=0
m.c=m.d=null
u=new P.e7(m,l,k,i)
try{for(p=new H.ci(a,a.gl(a),[H.cH(a,"be",0)]);p.B();){t=p.d
s=m.b
t.aG(new P.e6(m,s,i,l,k,b),u,null);++m.b}p=m.b
if(p===0){p=new P.L($.x,j)
p.c8(C.a0)
return p}p=new Array(p)
p.fixed$length=Array
m.a=H.h(p,[b])}catch(o){r=H.ax(o)
q=H.bs(o)
if(m.b===0||H.b3(k)){n=r
if(n==null)n=new P.bE()
p=$.x
p!==C.e
j=new P.L(p,j)
j.c9(n,q)
return j}else{m.d=r
m.c=q}}return i},
jg:function(a,b){var u,t,s
b.a=1
try{a.aG(new P.fH(b),new P.fI(b),null)}catch(s){u=H.ax(s)
t=H.bs(s)
P.i_(new P.fJ(b,u,t))}},
fG:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iL")
if(u>=4){t=b.aR()
b.a=a.a
b.c=a.c
P.bT(b,t)}else{t=H.d(b.c,"$iar")
b.a=2
b.c=a
a.ck(t)}},
bT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.d(g.c,"$ia3")
P.dy(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bT(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.d(q,"$ia3")
P.dy(i,i,g.b,q.a,q.b)
return}l=$.x
if(l!==n)$.x=n
else l=i
g=b.c
if(g===8)new P.fO(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.fN(u,b,q).$0()}else if((g&2)!==0)new P.fM(h,u,b).$0()
if(l!=null)$.x=l
g=u.b
if(!!J.F(g).$iQ){if(g.a>=4){k=H.d(o.c,"$iar")
o.c=null
b=o.aS(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.fG(g,o)
return}}j=b.b
k=H.d(j.c,"$iar")
j.c=null
b=j.aS(k)
g=u.a
p=u.b
if(!g){H.l(p,H.a(j,0))
j.a=4
j.c=p}else{H.d(p,"$ia3")
j.a=8
j.c=p}h.a=j
g=j}},
jq:function(a,b){if(H.c_(a,{func:1,args:[P.w,P.N]}))return b.bL(a,null,P.w,P.N)
if(H.c_(a,{func:1,args:[P.w]}))return H.b(a,{func:1,ret:null,args:[P.w]})
throw H.f(P.iT(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l_:function(){var u,t
for(;u=$.bW,u!=null;){$.cB=null
t=u.b
$.bW=t
if(t==null)$.cA=null
u.a.$0()}},
l4:function(){$.ip=!0
try{P.l_()}finally{$.cB=null
$.ip=!1
if($.bW!=null)$.iJ().$1(P.jB())}},
jt:function(a){var u=new P.dj(a)
if($.bW==null){$.bW=$.cA=u
if(!$.ip)$.iJ().$1(P.jB())}else $.cA=$.cA.b=u},
l3:function(a){var u,t,s=$.bW
if(s==null){P.jt(a)
$.cB=$.cA
return}u=new P.dj(a)
t=$.cB
if(t==null){u.b=s
$.bW=$.cB=u}else{u.b=t.b
$.cB=t.b=u
if(u.b==null)$.cA=u}},
i_:function(a){var u=null,t=$.x
if(C.e===t){P.bn(u,u,C.e,a)
return}P.bn(u,u,t,H.b(t.bt(a),{func:1,ret:-1}))},
lJ:function(a,b){if(a==null)H.a0(P.kb("stream"))
return new P.fY([b])},
X:function(a){return new P.fo(null,null,[a])},
l2:function(a){return},
jp:function(a,b){P.dy(null,null,$.x,a,b)},
l0:function(){},
kF:function(a,b){var u=$.x
if(u===C.e)return P.ii(a,H.b(b,{func:1,ret:-1}))
return P.ii(a,H.b(u.bt(b),{func:1,ret:-1}))},
dy:function(a,b,c,d,e){var u={}
u.a=d
P.l3(new P.h8(u,e))},
jr:function(a,b,c,d,e){var u,t=$.x
if(t===c)return d.$0()
$.x=c
u=t
try{t=d.$0()
return t}finally{$.x=u}},
js:function(a,b,c,d,e,f,g){var u,t=$.x
if(t===c)return d.$1(e)
$.x=c
u=t
try{t=d.$1(e)
return t}finally{$.x=u}},
l1:function(a,b,c,d,e,f,g,h,i){var u,t=$.x
if(t===c)return d.$2(e,f)
$.x=c
u=t
try{t=d.$2(e,f)
return t}finally{$.x=u}},
bn:function(a,b,c,d){var u
H.b(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.bt(d):c.eD(d,-1)
P.jt(d)},
fq:function fq(a){this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
h0:function h0(){},
h1:function h1(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=!1
this.$ti=b},
fn:function fn(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
h9:function h9(a){this.a=a},
ft:function ft(a,b){this.a=a
this.$ti=b},
aa:function aa(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
fu:function fu(){},
fo:function fo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
Q:function Q(){},
e5:function e5(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dl:function dl(){},
dk:function dk(a,b){this.a=a
this.$ti=b},
dv:function dv(a,b){this.a=a
this.$ti=b},
ar:function ar(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
L:function L(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
fD:function fD(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.b=b},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b){this.a=a
this.b=b},
fK:function fK(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a){this.a=a},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a){this.a=a
this.b=null},
f1:function f1(){},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
aP:function aP(){},
dm:function dm(){},
fw:function fw(){},
fv:function fv(){},
fX:function fX(){},
fy:function fy(){},
fx:function fx(a,b){this.b=a
this.a=null
this.$ti=b},
cy:function cy(){},
fS:function fS(a,b){this.a=a
this.b=b},
cz:function cz(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
fY:function fY(a){this.$ti=a},
a3:function a3(a,b){this.a=a
this.b=b},
h2:function h2(){},
h8:function h8(a,b){this.a=a
this.b=b},
fT:function fT(){},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function(a,b,c){return H.E(H.lg(a,new H.H([b,c])),"$ij6",[b,c],"$aj6")},
kn:function(a,b,c){var u,t
if(P.iq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.h([],[P.v])
C.b.i($.ab,a)
try{P.kY(a,u)}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}t=P.jd(b,H.ln(u,"$iU"),", ")+c
return t.charCodeAt(0)==0?t:t},
i9:function(a,b,c){var u,t
if(P.iq(a))return b+"..."+c
u=new P.cp(b)
C.b.i($.ab,a)
try{t=u
t.a=P.jd(t.a,a,", ")}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
kY:function(a,b){var u,t,s,r,q,p,o,n=a.gH(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.j(n.gC())
C.b.i(b,u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gC();++l
if(!n.B()){if(l<=4){C.b.i(b,H.j(r))
return}t=H.j(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC();++l
for(;n.B();r=q,q=p){p=n.gC();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.b.i(b,"...")
return}}s=H.j(r)
t=H.j(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.b.i(b,o)
C.b.i(b,s)
C.b.i(b,t)},
j7:function(a){var u,t={}
if(P.iq(a))return"{...}"
u=new P.cp("")
try{C.b.i($.ab,a)
u.a+="{"
t.a=!0
a.ag(0,new P.el(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
eb:function eb(){},
aL:function aL(){},
ek:function ek(){},
el:function el(a,b){this.a=a
this.b=b},
em:function em(){},
le:function(a){var u=H.kx(a)
if(u!=null)return u
throw H.f(P.j0("Invalid double",a))},
kj:function(a){if(a instanceof H.ca)return a.h(0)
return"Instance of '"+H.ck(a)+"'"},
ie:function(a,b,c){var u,t=H.h([],[c])
for(u=a.gH(a);u.B();)C.b.i(t,H.l(u.gC(),c))
return t},
jb:function(a){return new H.cX(a,H.ia(a,!1,!0,!1,!1,!1))},
jd:function(a,b,c){var u=J.iS(b)
if(!u.B())return a
if(c.length===0){do a+=H.j(u.gC())
while(u.B())}else{a+=H.j(u.gC())
for(;u.B();)a=a+c+H.j(u.gC())}return a},
b8:function(a){return new P.by(1e6*a)},
i7:function(){return new P.aY()},
cP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aV(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kj(a)},
aW:function(a){return new P.aH(!1,null,null,a)},
iT:function(a,b,c){return new P.aH(!0,a,b,c)},
kb:function(a){return new P.aH(!1,null,a,"Must not be null")},
ky:function(a){var u=null
return new P.cl(u,u,!1,u,u,a)},
d6:function(a,b){return new P.cl(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.cl(b,c,!0,a,d,"Invalid value")},
kz:function(a,b,c){if(0>a||a>c)throw H.f(P.bG(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.bG(b,a,c,"end",null))
return b}return c},
ja:function(a,b){if(typeof a!=="number")return a.bY()
if(a<0)throw H.f(P.bG(a,0,null,b,null))},
e9:function(a,b,c,d,e){var u=H.ac(e==null?J.bv(b):e)
return new P.e8(u,!0,a,c,"Index out of range")},
af:function(a){return new P.ff(a)},
jf:function(a){return new P.fd(a)},
a9:function(a){return new P.bN(a)},
bw:function(a){return new P.dW(a)},
j0:function(a,b){return new P.e4(a,b)},
dB:function(a){H.ls(a)},
a_:function a_(){},
aE:function aE(){},
by:function by(a){this.a=a},
e_:function e_(){},
e0:function e0(){},
aY:function aY(){},
dK:function dK(){},
bE:function bE(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e8:function e8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ff:function ff(a){this.a=a},
fd:function fd(a){this.a=a},
bN:function bN(a){this.a=a},
dW:function dW(a){this.a=a},
eu:function eu(){},
dc:function dc(){},
dY:function dY(a){this.a=a},
fC:function fC(a){this.a=a},
e4:function e4(a,b){this.a=a
this.b=b},
G:function G(){},
U:function U(){},
ad:function ad(){},
I:function I(){},
u:function u(){},
m:function m(){},
w:function w(){},
bf:function bf(){},
cm:function cm(){},
N:function N(){},
f0:function f0(){this.b=this.a=0},
v:function v(){},
cp:function cp(a){this.a=a},
lc:function(a,b){var u
H.d(a,"$iig")
H.b(b,{func:1,ret:-1,args:[P.w]})
if(a==null)return
u={}
if(b!=null)b.$1(u)
a.ag(0,new P.hj(u))
return u},
hj:function hj(a){this.a=a},
jh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fQ:function fQ(){},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cL:function cL(){},
aK:function aK(){},
cR:function cR(){},
d5:function d5(){},
db:function db(){},
bj:function bj(){},
df:function df(){},
bP:function bP(){}},W={
ly:function(){return window},
cM:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
j_:function(a){H.d(a,"$iba")
return"wheel"},
ik:function(a,b){return document.createElement(a)},
km:function(){var u=document.createElement("img")
return u},
kG:function(a){return new TouchEvent(a)},
kH:function(){var u
try{W.kG("touches")
return!0}catch(u){H.ax(u)}return!1},
fR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ji:function(a,b,c,d){var u=W.fR(W.fR(W.fR(W.fR(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d,e){var u=W.jv(new W.fB(c),W.e),t=u!=null
if(t&&!0){H.b(u,{func:1,args:[W.e]})
if(t)J.k4(a,b,u,!1)}return new W.fA(a,b,u,!1,[e])},
jv:function(a,b){var u=$.x
if(u===C.e)return a
return u.eE(a,b)},
k:function k(){},
dH:function dH(){},
dI:function dI(){},
cK:function cK(){},
aX:function aX(){},
cN:function cN(){},
b6:function b6(){},
cb:function cb(){},
dX:function dX(){},
dZ:function dZ(){},
cO:function cO(){},
i:function i(){},
e:function e(){},
ba:function ba(){},
e3:function e3(){},
aA:function aA(){},
aZ:function aZ(){},
cj:function cj(){},
ap:function ap(){},
ae:function ae(){},
eU:function eU(){},
aC:function aC(){},
b1:function b1(){},
f8:function f8(){},
bl:function bl(){},
fg:function fg(){},
aR:function aR(){},
cs:function cs(){},
dp:function dp(){},
fz:function fz(){},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fA:function fA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fB:function fB(a){this.a=a},
ce:function ce(){},
e2:function e2(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dn:function dn(){},
dw:function dw(){},
dx:function dx(){}},K={
j5:function(){var u=new K.ef(P.X(P.m))
u.b=u.a=new K.di()
return u},
kL:function(a){return a},
kJ:function(a){a*=2
return a<1?0.5*(1-Math.cos(a*1.5707963267948966)):0.5*Math.sin((a-1)*1.5707963267948966)+0.5},
kI:function(a){if(a===0||a===1)return a;--a
return-Math.pow(2,10*a)*Math.sin((a-0.075)*6.283185307179586/0.3)},
kK:function(a){if(a<0.36363636363636365)return 7.5625*a*a
else if(a<0.7272727272727273){a-=0.5454545454545454
return 7.5625*a*a+0.75}else if(a<0.9090909090909091){a-=0.8181818181818182
return 7.5625*a*a+0.9375}else{a-=0.9545454545454546
return 7.5625*a*a+0.984375}},
di:function di(){this.b=this.a=null},
ef:function ef(a){var _=this
_.b=_.a=null
_.c=0
_.d=a},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.x=_.r=0
_.Q=!1},
dg:function dg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fa:function fa(a,b){this.a=a
this.b=b}},A={
iU:function(a,b){var u,t,s,r,q,p,o,n
b=$.jO()
u=A.kc(a,b.d)
t=u.b
s=u.c
b.toString
r=W.km()
q=W.aA
p=new P.L($.x,[q])
o=new N.cS(r,new P.dk(p,[q]),t)
q=W.e
n={func:1,ret:-1,args:[q]}
o.d=W.V(r,"load",H.b(o.ge3(),n),!1,q)
o.e=W.V(r,"error",H.b(o.ge1(),n),!1,q)
r.src=t
return p.aF(new A.dP(s),A.S)},
kc:function(a,b){var u=new A.dM()
u.df(a,b)
return u},
kD:function(a,b,c,d){var u="middleClick",t="rightClick",s=P.m,r=T.y(),q=T.y(),p=T.y(),o=H.h([],[A.bm]),n=H.h([new A.bU("mouseDown","mouseUp","click","doubleClick"),new A.bU("middleMouseDown","middleMouseUp",u,u),new A.bU("rightMouseDown","rightMouseUp",t,t)],[A.bU]),m=K.j5(),l=H.h([],[A.K]),k=$.o
$.o=k+1
k=new A.a8(new U.O(0,0,0,0,[s]),r,q,p,new R.bI("render",!1),C.k,C.o,C.p,C.i,new U.T(0,0,[s]),o,new H.H([P.G,A.bV]),n,m,l,k,H.h([],[A.Y]),T.y())
k.di(a,b,c,d)
return k},
a6:function a6(a,b,c,d){var _=this
_.k3=a
_.b=b
_.f=_.e=_.d=_.c=0
_.x=_.r=1
_.Q=_.z=_.y=0
_.ch=1
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a){this.a=a},
dM:function dM(){this.c=this.b=this.a=null},
dN:function dN(a){this.a=a},
dO:function dO(a){this.d=a},
Y:function Y(){},
K:function K(){},
bx:function bx(){},
cT:function cT(){},
eC:function eC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=!1},
eD:function eD(a){this.a=a},
eE:function eE(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c,d){var _=this
_.a1=a
_.b=b
_.f=_.e=_.d=_.c=0
_.x=_.r=1
_.Q=_.z=_.y=0
_.ch=1
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
co:function co(a){this.b=a},
bM:function bM(a){this.b=a},
aq:function aq(a){this.b=a},
a8:function a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.af=_.bC=_.ar=_.aa=null
_.cN=_.cM=_.cL=_.cK=0
_.b0=1
_.eW=!1
_.bG=_.bF=_.bE=_.bD=0
_.eX=a
_.b1=b
_.cO=c
_.cC=d
_.eQ=e
_.a9=null
_.bx=f
_.aZ=g
_.cD=h
_.cE=i
_.cF="default"
_.cG=j
_.by=null
_.cH=k
_.cI=l
_.eR=m
_.O=n
_.bz=4294967295
_.eT=_.eS=!0
_.eV=_.eU=!1
_.a1=o
_.b=p
_.f=_.e=_.d=_.c=0
_.x=_.r=1
_.Q=_.z=_.y=0
_.ch=1
_.cx=!0
_.dy=q
_.fy=null
_.go=r
_.id=!0
_.a=null},
eZ:function eZ(a){this.a=a},
eW:function eW(a){this.a=a},
eX:function eX(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c,d,e,f){var _=this
_.k4=a
_.r1=b
_.r2=c
_.ry=_.rx=0
_.b=d
_.f=_.e=_.d=_.c=0
_.x=_.r=1
_.Q=_.z=_.y=0
_.ch=1
_.cx=!0
_.dy=e
_.fy=null
_.go=f
_.id=!0
_.a=null},
eV:function eV(a){this.a=a
this.f=4294967295},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(){}},L={
jm:function(){var u,t
if($.im===-1){u=window
t=H.b(new L.h6(),{func:1,ret:-1,args:[P.m]})
C.K.dI(u)
$.im=C.K.en(u,W.jv(t,P.m))}},
jc:function(a){var u=T.y(),t=new T.b_(new Float32Array(16))
t.ak()
t=new L.ct(C.f,u,t,null)
u=new L.bK(a,t)
u.e=t
return u},
eJ:function(a,b,c,d,e){var u,t,s,r,q,p=new Int16Array(6),o=new Float32Array(16),n=new L.aO(a,b,c,d,e,p,o),m=d===0
if(m||d===2){u=0-c.a
t=u/e
o[12]=t
o[0]=t
t=0-c.b
s=t/e
o[5]=s
o[1]=s
u=(u+b.c)/e
o[4]=u
o[8]=u
t=(t+b.d)/e
o[13]=t
o[9]=t}else if(d===1||d===3){u=0-c.a
t=u/e
o[12]=t
o[0]=t
t=0-c.b
s=t/e
o[5]=s
o[1]=s
u=(u+b.d)/e
o[4]=u
o[8]=u
t=(t+b.c)/e
o[13]=t
o[9]=t}else H.a0(P.i7())
if(m){m=b.a
u=a.a
t=m/u
o[14]=t
o[2]=t
t=b.b
s=a.b
r=t/s
o[7]=r
o[3]=r
r=H.a(b,0)
u=H.l(m+b.c,r)/u
o[6]=u
o[10]=u
s=H.l(t+b.d,r)/s
o[15]=s
o[11]=s}else if(d===1){m=b.a
u=H.a(b,0)
t=H.l(m+b.c,u)
s=a.a
t/=s
o[6]=t
o[2]=t
t=b.b
r=a.b
q=t/r
o[15]=q
o[3]=q
s=m/s
o[14]=s
o[10]=s
r=H.l(t+b.d,u)/r
o[7]=r
o[11]=r}else if(d===2){m=b.a
u=H.a(b,0)
t=H.l(m+b.c,u)
s=a.a
t/=s
o[14]=t
o[2]=t
t=b.b
u=H.l(t+b.d,u)
r=a.b
u/=r
o[7]=u
o[3]=u
s=m/s
o[6]=s
o[10]=s
r=t/r
o[15]=r
o[11]=r}else if(d===3){m=b.a
u=a.a
t=m/u
o[6]=t
o[2]=t
t=b.b
s=H.a(b,0)
r=H.l(t+b.d,s)
q=a.b
r/=q
o[15]=r
o[3]=r
u=H.l(m+b.c,s)/u
o[14]=u
o[10]=u
q=t/q
o[7]=q
o[11]=q}else H.a0(P.i7())
p[0]=0
p[1]=1
p[2]=2
p[3]=0
p[4]=2
p[5]=3
n.y=o
n.x=p
return n},
dQ:function dQ(){},
bg:function bg(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
bh:function bh(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
d8:function d8(a){this.b=a},
bi:function bi(){},
ez:function ez(){},
d7:function d7(a,b,c,d,e,f,g){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=1
_.a=e
_.b=f
_.c=g},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=a
_.e=null
_.f=b
_.r=c
_.Q=_.z=_.y=_.x=null
_.cx=0
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h
_.fx=i
_.fy=j
_.go=k
_.a=l
_.b=m
_.c=n},
eB:function eB(a){this.a=a},
aM:function aM(){},
b0:function b0(a){var _=this
_.c=_.b=_.a=null
_.d=-1
_.f=_.e=null
_.r=a},
h6:function h6(){},
d9:function d9(){},
dr:function dr(){},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(){},
eF:function eF(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
eG:function eG(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
eH:function eH(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
ct:function ct(a,b,c,d){var _=this
_.a=1
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
bK:function bK(a,b){var _=this
_.b=0
_.c=a
_.d=b
_.e=null},
aN:function aN(){this.c=this.b=this.a=0},
eI:function eI(){var _=this
_.b=_.a=0
_.c=null
_.d=-1
_.f=_.e=null},
bL:function bL(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.x=null
_.y=-1
_.z=!1
_.ch=_.Q=null},
da:function da(a){this.a=a},
aO:function aO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
eK:function eK(){}},T={ej:function ej(a){this.a=a},
ep:function(a,b,c,d,e,f){var u=new Float32Array(6)
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f
return new T.d0(u)},
y:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.d0(u)},
d0:function d0(a){this.a=a},
b_:function b_(a){this.a=a}},R={
il:function(a,b,c){var u,t,s,r=b.length
for(u={func:1,ret:-1,args:[c]},t=0;t<r;++t){if(t<0||t>=b.length)return H.c(b,t)
s=b[t]
if(!s.c){a.r=a.f=!1
H.b(s.f,u).$1(H.l(a,c))}else{C.b.as(b,t);--r;--t}}},
dS:function dS(){},
bz:function bz(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bA:function bA(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bI:function bI(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
cQ:function cQ(){},
cc:function cc(a){this.b=a},
b9:function b9(a,b,c){var _=this
_.a=a
_.c=b
_.d=0
_.$ti=c},
W:function W(a,b,c,d,e){var _=this
_.a=a
_.c=!1
_.d=b
_.e=c
_.f=d
_.$ti=e},
cf:function cf(a){this.b=a},
ea:function ea(){},
bD:function bD(){},
p:function p(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1},
bO:function bO(){},
b2:function b2(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1}},D={
i5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=[P.m],h=H.h([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i),g=H.h([0,0,0,0],i),f=new Float32Array(16),e=new D.dU(f,new Float32Array(4))
e.dg(h,g)
u=Math.min(Math.max(a,-1),1)*3.141592653589793
t=Math.cos(u)
s=Math.sin(u)
h=0.213-t*0.213
g=s*0.213
f=0.715-t*0.715
r=s*0.715
q=0.072-t*0.072
p=s*0.072
e.aO(H.h([h-g+t,f-r,q-p+s,0,h+s*0.143,f+s*0.14+t,q-s*0.283,0,h+g-s,f+r,q+p+t,0,0,0,0,1],i),H.h([0,0,0,0],i))
p=Math.min(Math.max(0,-1),1)
u=p+1
o=1-u
n=o*0.213
m=o*0.715
l=o*0.072
e.aO(H.h([n+u,m,l,0,n,m+u,l,0,n,m,l+u,0,0,0,0,1],i),H.h([0,0,0,0],i))
k=255*p
e.aO(H.h([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i),H.h([k,k,k,0],i))
j=128*o
e.aO(H.h([u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1],i),H.h([j,j,j,0],i))
return e},
dU:function dU(a,b){this.a=a
this.b=b},
dV:function dV(){},
b7:function b7(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e}},U={T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},O:function O(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},N={cS:function cS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},O={
kB:function(a,b,c,d){var u=new O.P(a,b,c,new P.dk(new P.L($.x,[null]),[null]))
u.dh(a,b,c,d)
return u},
a5:function a5(a,b){this.a=a
this.b=b},
eR:function eR(){},
eQ:function eQ(){},
eS:function eS(){},
eP:function eP(){},
eO:function eO(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null
_.f=d},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
dL:function dL(){this.b=this.a=null},
ch:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},Y={
kX:function(a){var u=a.gaP()
return $.k2().bJ(u,new Y.h5(a))},
kS:function(a){var u=new Y.bS()
u.dk(a)
return u},
Z:function(){var u=H.h([],[Y.bk]),t=$.o
$.o=t+1
t=new Y.de(u,t,H.h([],[A.Y]),T.y())
t.sat(0,"")
u=Y.R("Arial",12,0,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400)
t.sA(u)
u=t.n(0,"keyDown",R.bD)
u.m(H.b(t.ge5(),{func:1,ret:-1,args:[H.a(u,0)]}),!1,0)
u=t.n(0,"textInput",R.bO)
u.m(H.b(t.gef(),{func:1,ret:-1,args:[H.a(u,0)]}),!1,0)
u=t.n(0,"mouseDown",R.p)
u.m(H.b(t.ge9(),{func:1,ret:-1,args:[H.a(u,0)]}),!1,0)
return t},
R:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new Y.f7(a,b,c,n,m,g,r,e,i,p,d,q,o,f,k,l,h,j)},
h5:function h5(a){this.a=a},
bS:function bS(){this.c=this.b=this.a=0},
de:function de(a,b,c,d){var _=this
_.a1=""
_.t=null
_.fv=_.fu=_.ft=_.fs=_.bA=_.fq=_.cJ=0
_.bB=!1
_.V=_.J=100
_.aq=_.az=0
_.b_=a
_.W=3
_.aB=_.aA=null
_.b=b
_.f=_.e=_.d=_.c=0
_.x=_.r=1
_.Q=_.z=_.y=0
_.ch=1
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
f7:function f7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r},
bk:function bk(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.e=_.d=_.c=0}},Q={eq:function eq(){},
kV:function(){var u,t
try{u=W.kH()
return u}catch(t){H.ax(t)
return!1}}},V={
aI:function(a,b,c,d,e,f){var u=new V.b5()
u.a=a
u.b=b
u.c=c
u.d=d
u.e=e
return u},
b5:function b5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iw:function(a){return"rgb("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+")"},
jC:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.j((a>>>24&255)/255)+")"},
lq:function(a,b){if(typeof b!=="number")return H.a2(b)
if(a<=b)return a
else return b},
hi:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
aU:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.f(P.aW("The supplied value ("+H.j(a)+") is not an int."))},
as:function(a){return a},
jD:function(a){return a}},X={ao:function ao(){this.c=this.b=this.a=null}},F={
dA:function(){var u=0,t=P.C(-1),s,r,q,p,o,n,m,l
var $async$dA=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:l=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
l.a_("dart","images/intro.png")
u=3
return P.r(l.L(0),$async$dA)
case 3:r=H.at(l.Z("BitmapData","dart"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
n=new A.a7(q,p,H.h([],o),T.y())
p=$.o
$.o=p+1
n.q(new A.a6(r,p,H.h([],o),T.y()))
n.e=r.a/2
n.id=!0
n.f=r.b/2
n.c=640
n.d=0
$.q.q(n)
m=$.q.O.S(n,3,K.ir())
q=m.gT(m)
q.a.R(q,1).d=350
s=P.bb(P.b8(3),-1)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$dA,t)},
hc:function(){var u=0,t=P.C(null),s,r,q,p,o,n,m
var $async$hc=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:m=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
m.a_("dart","images/logo.png")
u=3
return P.r(m.L(0),$async$hc)
case 3:r=H.at(m.Z("BitmapData","dart"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
p=new A.a7(q,p,H.h([],o),T.y())
$.c1=p
q=$.o
$.o=q+1
p.q(new A.a6(r,q,H.h([],o),T.y()))
o=$.c1
o.e=r.a/2
o.id=!0
o.f=r.b/2
o.c=640
o.d=-200
$.q.q(o)
n=$.q.O.S($.c1,3,K.ir())
q=n.gT(n)
q.a.R(q,1).d=200
s=P.bb(P.b8(2),null)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$hc,t)},
hd:function(){var u=0,t=P.C(null),s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$hd=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:f=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
f.a_("dart","images/play.png")
u=3
return P.r(f.L(0),$async$hd)
case 3:r=H.at(f.Z("BitmapData","dart"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
p=new A.a7(q,p,H.h([],o),T.y())
$.au=p
q=$.o
$.o=q+1
p.q(new A.a6(r,q,H.h([],o),T.y()))
o=$.au
n=o.ga0()
m=o.gad()
l=200/m.bS(n,n).c
q=isFinite(l)
k=q?m.a[0]*l:1
j=q?m.a[2]*l:0
q=m.a
o.cn(k,q[1],j,q[3])
q=$.au
n=q.ga0()
m=q.gad()
l=200/m.bS(n,n).d
p=isFinite(l)
i=p?m.a[1]*l:0
h=p?m.a[3]*l:1
p=m.a
q.cn(p[0],i,p[2],h)
p=$.au
p.c=545
p.id=!0
p.d=-200
$.q.q(p)
g=$.q.O.S($.au,3,K.ir())
q=g.gT(g)
q.a.R(q,1).d=400
q=R.p
p=$.au.n(0,"mouseOver",q)
p.m(H.b(new F.he(),{func:1,ret:-1,args:[H.a(p,0)]}),!1,0)
p=$.au.n(0,"mouseOut",q)
p.m(H.b(new F.hf(),{func:1,ret:-1,args:[H.a(p,0)]}),!1,0)
q=$.au.n(0,"click",q)
q.m(H.b(new F.hg(new F.hh()),{func:1,ret:-1,args:[H.a(q,0)]}),!1,0)
s=P.bb(P.b8(2),null)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$hd,t)},
J:function(a,b,c,d,e,f,g){var u=a.t
u.c=b
u.Q="center"
a.sat(0,c)
a.c=d
a.id=!0
a.d=e
a.sM(0,f)
a.sK(0,g)
a.saH(0,!0)
$.q.q(a)},
cE:function(a){var u=0,t=P.C(null),s,r,q,p,o,n,m,l,k,j,i
var $async$cE=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:n=a.a
m=a.b
l=a.c
k=a.d
j=a.e
i=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
i.a_("logoCarta","images/"+n+".png")
u=2
return P.r(i.L(0),$async$cE)
case 2:s=H.at(i.Z("BitmapData","logoCarta"),"$iS")
r=H.h([],[A.K])
q=$.o
$.o=q+1
p=[A.Y]
q=new A.a7(r,q,H.h([],p),T.y())
$.iA=q
r=$.o
$.o=r+1
q.q(new A.a6(s,r,H.h([],p),T.y()))
p=$.iA
p.e=s.a/2
p.id=!0
p.f=s.b/2
p.x=0.4
p.r=0.4
p.c=370
p.d=270
$.q.q(p)
$.an.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
$.am.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
$.ai.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
$.aj.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
$.ak.sA(Y.R("Roboto",17,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
$.al.sA(Y.R("Roboto",17,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
r=$.aF
if(r===1){r=$.an.t
r.z=r.y=r.x=!0}else if(r===2){r=$.am.t
r.z=r.y=r.x=!0}else if(r===3){r=$.ai.t
r.z=r.y=r.x=!0}else if(r===4){r=$.aj.t
r.z=r.y=r.x=!0}r=$.aw
if(r===1){r=$.ak.t
r.z=r.y=r.x=!0}else if(r===2){r=$.al.t
r.z=r.y=r.x=!0}r=new F.hK(m,l,k,j)
q=new F.hL()
F.J($.an,4278222976,"Velocidade "+C.a.h(m),270,375,200,50)
p=R.p
o=$.an.n(0,"mouseOver",p)
o.m(H.b(new F.hs(m),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.an.n(0,"mouseOut",p)
o.m(H.b(new F.ht(m),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.an.n(0,"click",p)
o.m(H.b(new F.hu(r),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
F.J($.am,4278222976,"Usabilidade "+C.a.h(l),270,415,200,50)
o=$.am.n(0,"mouseOver",p)
o.m(H.b(new F.hC(l),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.am.n(0,"mouseOut",p)
o.m(H.b(new F.hD(l),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.am.n(0,"click",p)
o.m(H.b(new F.hE(r),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
F.J($.ai,4278222976,"Aprendizado "+C.a.h(k),270,455,200,50)
o=$.ai.n(0,"mouseOver",p)
o.m(H.b(new F.hF(k),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.ai.n(0,"mouseOut",p)
o.m(H.b(new F.hG(k),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.ai.n(0,"click",p)
o.m(H.b(new F.hH(r),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
F.J($.aj,4278222976,"Confiabilidade "+C.a.h(j),270,495,200,50)
o=$.aj.n(0,"mouseOver",p)
o.m(H.b(new F.hI(j),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.aj.n(0,"mouseOut",p)
o.m(H.b(new F.hJ(j),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.aj.n(0,"click",p)
o.m(H.b(new F.hv(r),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
F.J($.ak,4278222976,"O maior valor ganha!",240,557,190,50)
o=$.ak.n(0,"mouseOver",p)
o.m(H.b(new F.hw(),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.ak.n(0,"mouseOut",p)
o.m(H.b(new F.hx(),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.ak.n(0,"click",p)
o.m(H.b(new F.hy(q),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
F.J($.al,4278222976,"O menor valor ganha!",240,597,190,50)
o=$.al.n(0,"mouseOver",p)
o.m(H.b(new F.hz(),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=$.al.n(0,"mouseOut",p)
o.m(H.b(new F.hA(),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
p=$.al.n(0,"click",p)
p.m(H.b(new F.hB(q),{func:1,ret:-1,args:[H.a(p,0)]}),!1,0)
return P.A(null,t)}})
return P.B($async$cE,t)},
cF:function(a,b){var u=0,t=P.C(null),s,r,q,p,o,n,m,l,k,j
var $async$cF=P.D(function(c,d){if(c===1)return P.z(d,t)
while(true)switch(u){case 0:o=a.a
n=a.b
m=a.c
l=a.d
k=a.e
j=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
j.a_("logoCarta","images/"+o+".png")
u=2
return P.r(j.L(0),$async$cF)
case 2:s=H.at(j.Z("BitmapData","logoCarta"),"$iS")
r=H.h([],[A.K])
q=$.o
$.o=q+1
p=[A.Y]
q=new A.a7(r,q,H.h([],p),T.y())
$.iB=q
r=$.o
$.o=r+1
q.q(new A.a6(s,r,H.h([],p),T.y()))
p=$.iB
p.e=s.a/2
p.id=!0
p.f=s.b/2
p.x=0.4
p.r=0.4
p.c=905
p.d=270
$.q.q(p)
r=Y.Z()
$.dF=r
r.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
r=Y.Z()
$.dE=r
r.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
r=Y.Z()
$.dC=r
r.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
r=Y.Z()
$.dD=r
r.sA(Y.R("Roboto",23,4278222976,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
F.J($.dF,4278222976,"Velocidade "+C.a.h(n),270,375,1260,50)
F.J($.dE,4278222976,"Usabilidade "+C.a.h(m),270,415,1260,50)
F.J($.dC,4278222976,"Aprendizado "+C.a.h(l),270,455,1260,50)
F.J($.dD,4278222976,"Confiabilidade "+C.a.h(k),270,495,1260,50)
if(b===1){r=$.dF.t
r.z=r.y=r.x=!0}else if(b===2){r=$.dE.t
r.z=r.y=r.x=!0}else if(b===3){r=$.dC.t
r.z=r.y=r.x=!0}else if(b===4){r=$.dD.t
r.z=r.y=r.x=!0}return P.A(null,t)}})
return P.B($async$cF,t)},
hO:function(){var u=0,t=P.C(null),s,r,q,p,o,n
var $async$hO=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:n=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
n.a_("dart","images/placar.png")
u=3
return P.r(n.L(0),$async$hO)
case 3:r=H.at(n.Z("BitmapData","dart"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
p=new A.a7(q,p,H.h([],o),T.y())
$.c1=p
q=$.o
$.o=q+1
p.q(new A.a6(r,q,H.h([],o),T.y()))
o=$.c1
o.c=330
o.id=!0
o.d=50
$.q.q(o)
s=!0
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$hO,t)},
hN:function(){var u=0,t=P.C(null),s,r
var $async$hN=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:r=Y.Z()
$.c5=r
r.sA(Y.R("Roboto",30,4278215680,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
r=$.c5
s=r.t
s.c=4278215680
s.Q="center"
r.sat(0,C.a.h($.az().length))
r=$.c5
r.c=580
r.id=!0
r.d=71
r.sM(0,50)
$.c5.sK(0,50)
$.c5.saH(0,!0)
$.q.q($.c5)
r=Y.Z()
$.c4=r
r.sA(Y.R("Roboto",30,4278215680,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
r=$.c4
s=r.t
s.c=4278215680
s.Q="center"
r.sat(0,C.a.h($.ay().length))
r=$.c4
r.c=630
r.id=!0
r.d=71
r.sM(0,50)
$.c4.sK(0,50)
$.c4.saH(0,!0)
$.q.q($.c4)
return P.A(null,t)}})
return P.B($async$hN,t)},
hk:function(){return F.ld()},
ld:function(){var u=0,t=P.C(null),s,r,q,p,o,n,m,l
var $async$hk=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:l={}
l.a=null
r=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
r.a_("dart","images/playround.png")
u=3
return P.r(r.L(0),$async$hk)
case 3:q=H.at(r.Z("BitmapData","dart"),"$iS")
p=H.h([],[A.K])
o=$.o
$.o=o+1
n=[A.Y]
m=l.a=new A.a7(p,o,H.h([],n),T.y())
o=$.o
$.o=o+1
m.q(new A.a6(q,o,H.h([],n),T.y()))
m.c=425
m.id=!0
m.d=550
$.q.q(m)
p=R.p
o=m.n(0,"mouseOver",p)
o.m(H.b(new F.hp(l),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
o=l.a.n(0,"mouseOut",p)
o.m(H.b(new F.hq(l),{func:1,ret:-1,args:[H.a(o,0)]}),!1,0)
p=l.a.n(0,"click",p)
p.m(H.b(new F.hr(),{func:1,ret:-1,args:[H.a(p,0)]}),!1,0)
s=!0
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$hk,t)},
cD:function(){var u=0,t=P.C(null),s,r,q,p,o,n
var $async$cD=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:n=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
n.a_("dart","images/bloqueio.png")
u=3
return P.r(n.L(0),$async$cD)
case 3:r=H.at(n.Z("BitmapData","dart"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
p=new A.a7(q,p,H.h([],o),T.y())
$.it=p
q=$.o
$.o=q+1
p.q(new A.a6(r,q,H.h([],o),T.y()))
o=$.it
o.c=200
o.id=!0
o.d=430
$.q.q(o)
s=!0
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$cD,t)},
hl:function(){var u=0,t=P.C(null),s,r,q,p,o,n,m
var $async$hl=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:m=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
m.a_("btConinuar","images/continuar.png")
u=3
return P.r(m.L(0),$async$hl)
case 3:r=H.at(m.Z("BitmapData","btConinuar"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
p=new A.a7(q,p,H.h([],o),T.y())
$.b4=p
q=$.o
$.o=q+1
p.q(new A.a6(r,q,H.h([],o),T.y()))
o=$.b4
o.c=595
o.id=!0
o.d=800
$.q.q(o)
q=R.p
p=$.b4.n(0,"mouseOver",q)
p.m(H.b(new F.hm(),{func:1,ret:-1,args:[H.a(p,0)]}),!1,0)
p=$.b4.n(0,"mouseOut",q)
p.m(H.b(new F.hn(),{func:1,ret:-1,args:[H.a(p,0)]}),!1,0)
q=$.b4.n(0,"click",q)
q.m(H.b(new F.ho(),{func:1,ret:-1,args:[H.a(q,0)]}),!1,0)
n=$.q.O.S($.b4,1,K.bX())
q=n.gT(n)
q.a.R(q,1).d=430
s=!0
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$hl,t)},
iE:function(){var u=0,t=P.C(null),s,r,q
var $async$iE=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:r=$.q.O.S($.b4,3,K.bX())
q=r.gT(r)
q.a.R(q,1).d=1900
s=P.bb(P.b8(2),null)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$iE,t)},
hM:function(){var u=0,t=P.C(null),s,r,q,p,o,n,m
var $async$hM=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:m=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
m.a_("tample","images/tamplate.png")
u=3
return P.r(m.L(0),$async$hM)
case 3:r=H.at(m.Z("BitmapData","tample"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
n=new A.a7(q,p,H.h([],o),T.y())
p=$.o
$.o=p+1
n.q(new A.a6(r,p,H.h([],o),T.y()))
n.e=r.a/2
n.id=!0
n.f=r.b/2
n.x=0.6
n.r=0.6
n.c=640
n.d=400
$.q.q(n)
s=!0
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$hM,t)},
dz:function(){var u=0,t=P.C(null),s,r,q,p,o,n,m,l
var $async$dz=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:l=new O.a5(new H.H([P.v,O.P]),P.X(P.m))
l.a_("dart","images/fundo.png")
u=3
return P.r(l.L(0),$async$dz)
case 3:r=H.at(l.Z("BitmapData","dart"),"$iS")
q=H.h([],[A.K])
p=$.o
$.o=p+1
o=[A.Y]
n=new A.a7(q,p,H.h([],o),T.y())
p=$.o
$.o=p+1
n.q(new A.a6(r,p,H.h([],o),T.y()))
n.e=r.a/2
n.id=!0
n.f=r.b/2
n.c=640
n.d=-800
n.x=0.9
n.r=0.9
$.q.q(n)
m=$.q.O.S(n,3,K.bX())
q=m.gT(m)
q.a.R(q,1).d=350
s=P.bb(P.b8(2),null)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$dz,t)},
cC:function(){var u=0,t=P.C(null)
var $async$cC=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:u=2
return P.r(F.hM(),$async$cC)
case 2:u=3
return P.r(F.hO(),$async$cC)
case 3:u=4
return P.r(F.hN(),$async$cC)
case 4:F.cI()
return P.A(null,t)}})
return P.B($async$cC,t)},
cI:function(){var u=0,t=P.C(null),s,r,q
var $async$cI=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:u=3
return P.r(F.cF(V.aI("interrogacao",0,0,0,0,0),0),$async$cI)
case 3:r=$.az()
q=r.length
if(q!==0){if(0>=q){s=H.c(r,0)
u=1
break}$.t=r[0];(r&&C.b).as(r,0)}else P.dB("Acabaram as cartas do jogador 1")
if($.ay().length!==0){r=$.az()
if(0>=r.length){s=H.c(r,0)
u=1
break}$.n=r[0]}else P.dB("Acabaram as cartas do computador")
r=$.t
u=r!=null?4:5
break
case 4:u=6
return P.r(F.cE(H.d(r,"$ib5")),$async$cI)
case 6:case 5:u=7
return P.r(F.hk(),$async$cI)
case 7:case 1:return P.A(s,t)}})
return P.B($async$cI,t)},
ix:function(a){var u=0,t=P.C(null),s
var $async$ix=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:s=P.bb(P.b8(a),null)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$ix,t)},
c3:function(a,b){var u=0,t=P.C(null),s,r,q,p
var $async$c3=P.D(function(c,d){if(c===1)return P.z(d,t)
while(true)switch(u){case 0:p=Y.Z()
$.bq=p
p.sA(Y.R("Roboto",26,b,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
p=$.bq
s=p.t
s.c=b
s.Q="center"
p.sat(0,a)
p=$.bq
p.c=540
p.id=!0
p.d=-200
p.sM(0,200)
$.bq.sK(0,200)
$.bq.saH(0,!0)
r=$.q.O.S($.bq,1,K.bX())
p=r.gT(r)
p.a.R(p,1).d=200
$.q.q($.bq)
u=2
return P.r(F.ix(2),$async$c3)
case 2:q=$.q.O.S($.bq,1,K.bX())
p=q.gT(q)
p.a.R(p,1).d=1900
return P.A(null,t)}})
return P.B($async$c3,t)},
c2:function(a,b){var u=0,t=P.C(null),s,r,q
var $async$c2=P.D(function(c,d){if(c===1)return P.z(d,t)
while(true)switch(u){case 0:q=Y.Z()
$.bp=q
q.sA(Y.R("Roboto",26,b,"left",!1,0,null,0,!1,0,0,0,4278190080,0,0,!1,"top",400))
q=$.bp
s=q.t
s.c=b
s.Q="center"
q.sat(0,a)
q=$.bp
q.c=510
q.id=!0
q.d=-200
q.sM(0,250)
$.bp.sK(0,250)
$.bp.saH(0,!0)
r=$.q.O.S($.bp,1,K.bX())
q=r.gT(r)
q.a.R(q,1).d=185
$.q.q($.bp)
return P.A(null,t)}})
return P.B($async$c2,t)},
iF:function(){var u=0,t=P.C(null),s,r,q
var $async$iF=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:r=$.q.O.S($.bp,2,K.bX())
q=r.gT(r)
q.a.R(q,1).d=1900
s=P.bb(P.b8(2),null)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$iF,t)},
hY:function(){var u=0,t=P.C(null)
var $async$hY=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:$.q.G($.iA)
$.q.G($.an)
$.q.G($.am)
$.q.G($.ai)
$.q.G($.aj)
$.q.G($.ak)
$.q.G($.al)
return P.A(null,t)}})
return P.B($async$hY,t)},
hZ:function(){var u=0,t=P.C(null)
var $async$hZ=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:$.q.G($.iB)
$.q.G($.dF)
$.q.G($.dE)
$.q.G($.dC)
$.q.G($.dD)
return P.A(null,t)}})
return P.B($async$hZ,t)},
i1:function(){var u=0,t=P.C(null),s
var $async$i1=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:s=$.ay()
if(s.length>0){$.n=s[0];(s&&C.b).as(s,0)}else P.dB("Acabaram as cartas do computador 1")
s=$.n
u=s!=null?2:3
break
case 2:u=4
return P.r(F.cF(H.d(s,"$ib5"),$.aF),$async$i1)
case 4:case 3:return P.A(null,t)}})
return P.B($async$i1,t)},
ah:function(){var u=0,t=P.C(null),s,r,q,p,o
var $async$ah=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:F.hY()
F.cE(H.d($.t,"$ib5"))
s=new F.ha()
r=new F.hb()
u=$.aF===-1?2:4
break
case 2:u=5
return P.r(F.c3("SELECIONE UMA SKILL PARA JOGAR",4294901760),$async$ah)
case 5:u=3
break
case 4:u=$.aw===-1?6:8
break
case 6:u=9
return P.r(F.c3("SELECIONE UM TIPO DE BATALHA",4294901760),$async$ah)
case 9:u=7
break
case 8:u=10
return P.r(F.hZ(),$async$ah)
case 10:u=11
return P.r(F.i1(),$async$ah)
case 11:q=F.la()
p=q.a
u=p===1?12:14
break
case 12:o=$.az();(o&&C.b).i(o,$.t)
o=$.az();(o&&C.b).i(o,$.n)
r.$0()
s.$0()
u=15
return P.r(F.c2(C.d.X("VOC\xca GANHOU!\n",q.b),4278215680),$async$ah)
case 15:u=13
break
case 14:u=p===2?16:18
break
case 16:o=$.ay();(o&&C.b).i(o,$.t)
o=$.ay();(o&&C.b).i(o,$.n)
r.$0()
s.$0()
u=19
return P.r(F.c2(C.d.X("O COMPUTADOR GANHOU!\n",q.b),4294901760),$async$ah)
case 19:u=17
break
case 18:u=p===3?20:21
break
case 20:o=$.az();(o&&C.b).i(o,$.t)
o=$.ay();(o&&C.b).i(o,$.n)
r.$0()
s.$0()
u=22
return P.r(F.c2(C.d.X("EMPATE!\n",q.b),4278215680),$async$ah)
case 22:case 21:case 17:case 13:u=23
return P.r(F.cD(),$async$ah)
case 23:u=24
return P.r(F.hl(),$async$ah)
case 24:case 7:case 3:return P.A(null,t)}})
return P.B($async$ah,t)},
aS:function(){var u=0,t=P.C(null),s,r,q,p
var $async$aS=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:u=3
return P.r(F.hZ(),$async$aS)
case 3:u=4
return P.r(F.hY(),$async$aS)
case 4:F.iE()
F.iF()
$.q.G($.it)
r=$.az()
q=r.length
if(q!==0){if(0>=q){s=H.c(r,0)
u=1
break}$.t=r[0];(r&&C.b).as(r,0)}else{r=$.ay()
q=r.length
if(q!==0){if(0>=q){s=H.c(r,0)
u=1
break}$.n=r[0];(r&&C.b).as(r,0)}}u=5
return P.r(F.cF(V.aI("interrogacao",0,0,0,0,0),0),$async$aS)
case 5:F.cE(H.d($.t,"$ib5"))
u=$.az().length===0?6:8
break
case 6:u=9
return P.r(F.c2("FIM! VOC\xca PERDEU",4278215680),$async$aS)
case 9:F.cD()
u=7
break
case 8:u=$.ay().length===0?10:11
break
case 10:u=12
return P.r(F.c2("FIM! VOC\xca VENCEU!",4278215680),$async$aS)
case 12:F.cD()
case 11:case 7:r=$.i3
u=r===!0&&$.az().length!==0&&$.ay().length!==0?13:15
break
case 13:$.i3=!1
p=F.kl()
$.aF=p.b
$.aw=p.c
u=16
return P.r(F.c3("\xc9 A VEZ DO COMPUTADOR!",4278215680),$async$aS)
case 16:F.ah()
u=14
break
case 15:u=r===!1&&$.az().length!==0&&$.ay().length!==0?17:18
break
case 17:u=19
return P.r(F.c3("\xc9 A SUA VEZ!",4278215680),$async$aS)
case 19:$.i3=!0
case 18:case 14:case 1:return P.A(s,t)}})
return P.B($async$aS,t)},
lb:function(){var u,t,s,r,q,p=$.aG();(p&&C.b).i(p,V.aI("cs",7,8,7,9,-1))
p=$.aG();(p&&C.b).i(p,V.aI("c++",9,7,6,7,-1))
p=$.aG();(p&&C.b).i(p,V.aI("c",9,6,6,6,-1))
p=$.aG();(p&&C.b).i(p,V.aI("java",7,9,6,9,-1))
p=$.aG();(p&&C.b).i(p,V.aI("js",6,5,6,5,-1))
p=$.aG();(p&&C.b).i(p,V.aI("php",6,6,7,5,-1))
p=$.aG();(p&&C.b).i(p,V.aI("python",4,6,6,5,-1))
p=$.aG();(p&&C.b).i(p,V.aI("ruby",4,5,4,8,-1))
p=$.aG();(p&&C.b).d7(p,C.T)
for(p=$.aG(),u=p.length,t=!0,s=0;s<p.length;p.length===u||(0,H.i0)(p),++s){r=p[s]
if(t){q=$.az();(q&&C.b).i(q,r)
t=!1}else{q=$.ay();(q&&C.b).i(q,r)
t=!0}}},
la:function(){var u,t,s="CONFIABILIDADE,\n",r=new O.dL(),q=$.aF
if(q===-1||$.aw===-1){r.a=-1
return r}if(q===1){q=$.aw
if(q===1)if($.t.gk()>$.n.gk()){r.b="VELOCIDADE,\n"+C.a.h($.t.gk())+" > "+C.a.h($.n.gk())
r.a=1
return r}else{q=$.t.gk()
u=$.n.gk()
t=$.t
if(q<u){r.b="VELOCIDADE,\n"+C.a.h(t.gk())+" < "+C.a.h($.n.gk())
r.a=2
return r}else{r.b="VELOCIDADE,\n"+C.a.h(t.gk())+" = "+C.a.h($.n.gk())
r.a=3
return r}}else if(q===2)if($.t.gk()<$.n.gk()){r.b="VELOCIDADE,\n"+C.a.h($.t.gk())+" < "+C.a.h($.n.gk())
r.a=1
return r}else{q=$.t.gk()
u=$.n.gk()
t=$.t
if(q>u){r.b="VELOCIDADE,\n"+C.a.h(t.gk())+" > "+C.a.h($.n.gk())
r.a=2
return r}else{r.b="VELOCIDADE,\n"+C.a.h(t.gk())+" = "+C.a.h($.n.gk())
r.a=3
return r}}}else if(q===2){q=$.aw
if(q===1)if($.t.gw()>$.n.gw()){r.b="USABILIDADE,\n"+C.a.h($.t.gw())+" > "+C.a.h($.n.gw())
r.a=1
return r}else{q=$.t.gw()
u=$.n.gw()
t=$.t
if(q<u){r.b="USABILIDADE,\n"+C.a.h(t.gw())+" < "+C.a.h($.n.gw())
r.a=2
return r}else{r.b="USABILIDADE,\n"+C.a.h(t.gw())+" = "+C.a.h($.n.gw())
r.a=3
return r}}else if(q===2)if($.t.gw()<$.n.gw()){r.b="USABILIDADE,\n"+C.a.h($.t.gw())+" < "+C.a.h($.n.gw())
r.a=1
return r}else{q=$.t.gw()
u=$.n.gw()
t=$.t
if(q>u){r.b="USABILIDADE,\n"+C.a.h(t.gw())+" > "+C.a.h($.n.gw())
r.a=2
return r}else{r.b="USABILIDADE,\n"+C.a.h(t.gw())+" = "+C.a.h($.n.gw())
r.a=3
return r}}}else if(q===3){q=$.aw
if(q===1)if($.t.ga2()>$.n.ga2()){r.b="APRENDIZADO,\n"+C.a.h($.t.gk())+" > "+C.a.h($.n.gk())
r.a=1
return r}else{q=$.t.ga2()
u=$.n.ga2()
t=$.t
if(q<u){r.b="APRENDIZADO,\n"+C.a.h(t.gk())+" < "+C.a.h($.n.gk())
r.a=2
return r}else{r.b="APRENDIZADO,\n"+C.a.h(t.gk())+" = "+C.a.h($.n.gk())
r.a=3
return r}}else if(q===2)if($.t.ga2()<$.n.ga2()){r.b="APRENDIZADO,\n"+C.a.h($.t.gk())+" < "+C.a.h($.n.gk())
r.a=1
return r}else{q=$.t.ga2()
u=$.n.ga2()
t=$.t
if(q>u){r.b="APRENDIZADO,\n"+C.a.h(t.gk())+" > "+C.a.h($.n.gk())
r.a=2
return r}else{r.b="APRENDIZADO,\n"+C.a.h(t.gk())+" = "+C.a.h($.n.gk())
r.a=3
return r}}}else if(q===4){q=$.aw
if(q===1)if($.t.gu()>$.n.gu()){r.b=s+C.a.h($.t.gu())+" > "+C.a.h($.n.gu())
r.a=1
return r}else{q=$.t.gu()
u=$.n.gu()
t=$.t
if(q<u){r.b=s+C.a.h(t.gu())+" < "+C.a.h($.n.gu())
r.a=2
return r}else{r.b=s+C.a.h(t.gu())+" = "+C.a.h($.n.gu())
r.a=3
return r}}else if(q===2)if($.t.gu()<$.n.gu()){r.b=s+C.a.h($.t.gu())+" < "+C.a.h($.n.gu())
r.a=1
return r}else{q=$.t.gu()
u=$.n.gu()
t=$.t
if(q>u){r.b=s+C.a.h(t.gu())+" > "+C.a.h($.n.gu())
r.a=2
return r}else{r.b=s+C.a.h(t.gu())+" = "+C.a.h($.n.gu())
r.a=3
return r}}}return r},
kl:function(){var u,t,s,r=$.n.gk(),q=$.n.gw(),p=$.n.ga2(),o=$.n.gu(),n=[],m=new X.ao()
m.a=$.n.gk()
m.c=m.b=1
n.push(m)
m=new X.ao()
m.a=$.n.gw()
m.b=2
m.c=1
n.push(m)
m=new X.ao()
m.a=$.n.ga2()
m.b=3
m.c=1
n.push(m)
m=new X.ao()
m.a=$.n.gu()
m.b=4
m.c=1
n.push(m)
m=new X.ao()
m.a=10-r
m.b=1
m.c=2
n.push(m)
m=new X.ao()
m.a=10-q
m.c=m.b=2
n.push(m)
m=new X.ao()
m.a=10-p
m.b=3
m.c=2
n.push(m)
m=new X.ao()
m.a=10-o
m.b=4
m.c=2
n.push(m)
u=new X.ao()
t=u.b=0
for(r=n.length;t<r;++t){s=n[t]
q=s.b
p=u.b
if(typeof q!=="number")return q.fn()
if(typeof p!=="number")return H.a2(p)
if(q>p)u=s}P.dB(P.i9(n,"[","]"))
return u},
cJ:function(){var u=0,t=P.C(null),s,r,q,p,o
var $async$cJ=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:$.an=Y.Z()
$.am=Y.Z()
$.ai=Y.Z()
$.aj=Y.Z()
$.ak=Y.Z()
$.al=Y.Z()
$.dF=Y.Z()
$.dE=Y.Z()
$.dC=Y.Z()
$.dD=Y.Z()
$.i3=!0
s=new A.eV(C.m)
s.f=4294309365
$.q=A.kD(H.d(document.querySelector("#stage"),"$iaX"),720,s,1280)
r=K.j5()
q=H.h([],[A.a8])
p=new A.eC(r,q,new R.bz("enterFrame",!1),new R.bA("exitFrame",!1))
p.a=!0
L.jm()
r=$.iN();(r&&C.b).i(r,p.ge_())
r=$.q
o=r.bC
if(o!=null)if(C.b.aD(o.c,r))r.bC=null
r.bC=p
C.b.i(q,r)
$.aF=$.aw=-1
F.lb()
F.dA()
u=2
return P.r(F.dA(),$async$cJ)
case 2:F.dz()
u=3
return P.r(F.dz(),$async$cJ)
case 3:F.hd()
F.hc()
return P.A(null,t)}})
return P.B($async$cJ,t)},
he:function he(){},
hf:function hf(){},
hh:function hh(){},
hg:function hg(a){this.a=a},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(){},
hx:function hx(){},
hy:function hy(a){this.a=a},
hz:function hz(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
ha:function ha(){},
hb:function hb(){}}
var w=[C,H,J,P,W,K,A,L,T,R,D,U,N,O,Y,Q,V,X,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ic.prototype={}
J.M.prototype={
N:function(a,b){return a===b},
gj:function(a){return H.bF(a)},
h:function(a){return"Instance of '"+H.ck(a)+"'"}}
J.ec.prototype={
h:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$ia_:1}
J.cW.prototype={
N:function(a,b){return null==b},
h:function(a){return"null"},
gj:function(a){return 0},
$iu:1}
J.cZ.prototype={
gj:function(a){return 0},
h:function(a){return String(a)}}
J.ev.prototype={}
J.bQ.prototype={}
J.bd.prototype={
h:function(a){var u=a[$.jP()]
if(u==null)return this.de(a)
return"JavaScript function for "+H.j(J.aV(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ii8:1}
J.bc.prototype={
i:function(a,b){H.l(b,H.a(a,0))
if(!!a.fixed$length)H.a0(P.af("add"))
a.push(b)},
as:function(a,b){if(!!a.fixed$length)H.a0(P.af("removeAt"))
if(b<0||b>=a.length)throw H.f(P.d6(b,null))
return a.splice(b,1)[0]},
aD:function(a,b){var u
if(!!a.fixed$length)H.a0(P.af("remove"))
for(u=0;u<a.length;++u)if(J.dG(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.b(b,{func:1,ret:-1,args:[H.a(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bw(a))}},
f0:function(a,b,c,d){var u,t,s
H.l(b,d)
H.b(c,{func:1,ret:d,args:[d,H.a(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.bw(a))}return t},
a8:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
da:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.bG(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.bG(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.a(a,0)])
return H.h(a.slice(b,c),[H.a(a,0)])},
d9:function(a,b){return this.da(a,b,null)},
gf8:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.ko())},
d7:function(a,b){var u,t,s,r
if(!!a.immutable$list)H.a0(P.af("shuffle"))
u=a.length
for(;u>1;){t=b.fc(u);--u
s=a.length
if(u>=s)return H.c(a,u)
r=a[u]
if(t<0||t>=s)return H.c(a,t)
this.D(a,u,a[t])
this.D(a,t,r)}},
f4:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.dG(a[u],b))return u
return-1},
bv:function(a,b){var u
for(u=0;u<a.length;++u)if(J.dG(a[u],b))return!0
return!1},
h:function(a){return P.i9(a,"[","]")},
gH:function(a){return new J.dJ(a,a.length,[H.a(a,0)])},
gj:function(a){return H.bF(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.a0(P.af("set length"))
if(b<0)throw H.f(P.bG(b,0,null,"newLength",null))
a.length=b},
D:function(a,b,c){H.l(c,H.a(a,0))
if(!!a.immutable$list)H.a0(P.af("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cG(a,b))
a[b]=c},
$ia1:1,
$iU:1,
$iI:1}
J.ib.prototype={}
J.dJ.prototype={
gC:function(){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.i0(s))
u=t.c
if(u>=r){t.sc5(null)
return!1}t.sc5(s[u]);++t.c
return!0},
sc5:function(a){this.d=H.l(a,H.a(this,0))},
$iad:1}
J.cg.prototype={
a5:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.f(P.af(""+a+".ceil()"))},
aC:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.af(""+a+".floor()"))},
F:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.af(""+a+".round()"))},
fh:function(a,b){var u,t
if(b<0||b>20)throw H.f(P.bG(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ae:function(a,b){return(a|0)===a?a/b|0:this.ew(a,b)},
ew:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.af("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
es:function(a,b){var u
if(a>0)u=this.er(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
er:function(a,b){return b>31?0:a>>>b},
$iaE:1,
$im:1}
J.cV.prototype={$iG:1}
J.cU.prototype={}
J.bC.prototype={
aW:function(a,b){if(b<0)throw H.f(H.cG(a,b))
if(b>=a.length)H.a0(H.cG(a,b))
return a.charCodeAt(b)},
aM:function(a,b){if(b>=a.length)throw H.f(H.cG(a,b))
return a.charCodeAt(b)},
cv:function(a,b){return new H.fZ(b,a,0)},
X:function(a,b){if(typeof b!=="string")throw H.f(P.iT(b,null,null))
return a+b},
d8:function(a,b){if(typeof b==="string")return H.h(a.split(b),[P.v])
else if(b instanceof H.cX&&b.gdS().exec("").length-2===0)return H.h(a.split(b.b),[P.v])
else return this.dF(a,b)},
dF:function(a,b){var u,t,s,r,q,p,o=H.h([],[P.v])
for(u=J.k7(b,a),u=u.gH(u),t=0,s=1;u.B();){r=u.gC()
q=r.gc2(r)
p=r.gaY()
s=p-q
if(s===0&&t===q)continue
C.b.i(o,this.aK(a,t,q))
t=p}if(t<a.length||s>0)C.b.i(o,this.c3(a,t))
return o},
aK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.d6(b,null))
if(b>c)throw H.f(P.d6(b,null))
if(c>a.length)throw H.f(P.d6(c,null))
return a.substring(b,c)},
c3:function(a,b){return this.aK(a,b,null)},
fi:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aM(r,0)===133){u=J.kq(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aW(r,t)===133?J.kr(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
aI:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
b5:function(a,b){var u=b-a.length
if(u<=0)return a
return this.aI(" ",u)+a},
h:function(a){return a},
gj:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ij9:1,
$iv:1}
H.a1.prototype={}
H.be.prototype={
gH:function(a){var u=this
return new H.ci(u,u.gl(u),[H.cH(u,"be",0)])},
eO:function(a,b){var u,t,s=this
H.b(b,{func:1,ret:P.a_,args:[H.cH(s,"be",0)]})
u=s.gl(s)
for(t=0;t<u;++t){if(!H.b3(b.$1(s.a8(0,t))))return!1
if(u!==s.gl(s))throw H.f(P.bw(s))}return!0}}
H.f5.prototype={
gdH:function(){var u=J.bv(this.a)
return u},
geu:function(){var u=J.bv(this.a),t=this.b
if(t>u)return u
return t},
gl:function(a){var u=J.bv(this.a),t=this.b
if(t>=u)return 0
return u-t},
a8:function(a,b){var u,t=this,s=t.geu()+b
if(b>=0){u=t.gdH()
if(typeof u!=="number")return H.a2(u)
u=s>=u}else u=!0
if(u)throw H.f(P.e9(b,t,"index",null,null))
return J.iR(t.a,s)}}
H.ci.prototype={
gC:function(){return this.d},
B:function(){var u,t=this,s=t.a,r=J.jF(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.bw(s))
u=t.c
if(u>=q){t.sau(null)
return!1}t.sau(r.a8(s,u));++t.c
return!0},
sau:function(a){this.d=H.l(a,H.a(this,0))},
$iad:1}
H.d_.prototype={
gH:function(a){var u=this.a
return new H.en(u.gH(u),this.b,this.$ti)},
gl:function(a){var u=this.a
return u.gl(u)},
$aU:function(a,b){return[b]}}
H.e1.prototype={$ia1:1,
$aa1:function(a,b){return[b]}}
H.en.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.sau(u.c.$1(t.gC()))
return!0}u.sau(null)
return!1},
gC:function(){return this.a},
sau:function(a){this.a=H.l(a,H.a(this,1))},
$aad:function(a,b){return[b]}}
H.eo.prototype={
gl:function(a){return J.bv(this.a)},
a8:function(a,b){return this.b.$1(J.iR(this.a,b))},
$aa1:function(a,b){return[b]},
$abe:function(a,b){return[b]},
$aU:function(a,b){return[b]}}
H.cr.prototype={
gH:function(a){return new H.fh(J.iS(this.a),this.b,this.$ti)}}
H.fh.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.b3(t.$1(u.gC())))return!0
return!1},
gC:function(){return this.a.gC()}}
H.bB.prototype={}
H.ew.prototype={
$0:function(){return C.c.aC(1000*this.a.now())},
$S:13}
H.fb.prototype={
a3:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.et.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ee.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.fe.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cd.prototype={}
H.i2.prototype={
$1:function(a){if(!!J.F(a).$iaY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:11}
H.du.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iN:1}
H.ca.prototype={
h:function(a){return"Closure '"+H.ck(this).trim()+"'"},
$ii8:1,
gfl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f6.prototype={}
H.f_.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bt(u)+"'"}}
H.c8.prototype={
N:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c8))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gj:function(a){var u,t=this.c
if(t==null)u=H.bF(this.a)
else u=typeof t!=="object"?J.bu(t):H.bF(t)
return(u^H.bF(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.ck(u)+"'")}}
H.dh.prototype={
h:function(a){return this.a}}
H.dT.prototype={
h:function(a){return this.a}}
H.eT.prototype={
h:function(a){return"RuntimeError: "+H.j(this.a)}}
H.fk.prototype={
h:function(a){return"Assertion failed: "+P.cP(this.a)}}
H.cq.prototype={
gaT:function(){var u=this.b
return u==null?this.b=H.c6(this.a):u},
h:function(a){return this.gaT()},
gj:function(a){var u=this.d
return u==null?this.d=C.d.gj(this.gaT()):u},
N:function(a,b){if(b==null)return!1
return b instanceof H.cq&&this.gaT()===b.gaT()}}
H.H.prototype={
gl:function(a){return this.a},
gbT:function(a){var u=this,t=H.a(u,0)
return H.kt(new H.eh(u,[t]),new H.ed(u),t,H.a(u,1))},
ax:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.cb(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.cb(t,a)}else return s.f5(a)},
f5:function(a){var u=this.d
if(u==null)return!1
return this.b3(this.aQ(u,J.bu(a)&0x3ffffff),a)>=0},
p:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.av(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.av(r,b)
s=t==null?null:t.b
return s}else return q.f6(b)},
f6:function(a){var u,t,s=this.d
if(s==null)return
u=this.aQ(s,J.bu(a)&0x3ffffff)
t=this.b3(u,a)
if(t<0)return
return u[t].b},
D:function(a,b,c){var u,t,s,r,q,p,o=this
H.l(b,H.a(o,0))
H.l(c,H.a(o,1))
if(typeof b==="string"){u=o.b
o.c7(u==null?o.b=o.bj():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c7(t==null?o.c=o.bj():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bj()
r=J.bu(b)&0x3ffffff
q=o.aQ(s,r)
if(q==null)o.bq(s,r,[o.bk(b,c)])
else{p=o.b3(q,b)
if(p>=0)q[p].b=c
else q.push(o.bk(b,c))}}},
bJ:function(a,b){var u,t=this
H.l(a,H.a(t,0))
H.b(b,{func:1,ret:H.a(t,1)})
if(t.ax(a))return t.p(0,a)
u=b.$0()
t.D(0,a,u)
return u},
aD:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.el(this.c,b)
else return this.f7(b)},
f7:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=J.bu(a)&0x3ffffff
t=q.aQ(p,u)
s=q.b3(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.co(r)
if(t.length===0)q.be(p,u)
return r.b},
bu:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.bi()}},
ag:function(a,b){var u,t,s=this
H.b(b,{func:1,ret:-1,args:[H.a(s,0),H.a(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bw(s))
u=u.c}},
c7:function(a,b,c){var u,t=this
H.l(b,H.a(t,0))
H.l(c,H.a(t,1))
u=t.av(a,b)
if(u==null)t.bq(a,b,t.bk(b,c))
else u.b=c},
el:function(a,b){var u
if(a==null)return
u=this.av(a,b)
if(u==null)return
this.co(u)
this.be(a,b)
return u.b},
bi:function(){this.r=this.r+1&67108863},
bk:function(a,b){var u,t=this,s=new H.eg(H.l(a,H.a(t,0)),H.l(b,H.a(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.bi()
return s},
co:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.bi()},
b3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.dG(a[t].a,b))return t
return-1},
h:function(a){return P.j7(this)},
av:function(a,b){return a[b]},
aQ:function(a,b){return a[b]},
bq:function(a,b,c){a[b]=c},
be:function(a,b){delete a[b]},
cb:function(a,b){return this.av(a,b)!=null},
bj:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bq(t,u,t)
this.be(t,u)
return t},
$ij6:1}
H.ed.prototype={
$1:function(a){var u=this.a
return u.p(0,H.l(a,H.a(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.a(u,1),args:[H.a(u,0)]}}}
H.eg.prototype={}
H.eh.prototype={
gl:function(a){return this.a.a},
gH:function(a){var u=this.a,t=new H.ei(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ei.prototype={
gC:function(){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bw(t))
else{t=u.c
if(t==null){u.sc6(null)
return!1}else{u.sc6(t.a)
u.c=u.c.c
return!0}}},
sc6:function(a){this.d=H.l(a,H.a(this,0))},
$iad:1}
H.hS.prototype={
$1:function(a){return this.a(a)},
$S:11}
H.hT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.hU.prototype={
$1:function(a){return this.a(H.av(a))},
$S:42}
H.cX.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdT:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.ia(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
gdS:function(){var u=this,t=u.d
if(t!=null)return t
t=u.b
return u.d=H.ia(u.a+"|()",t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
f_:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.ds(u)},
cv:function(a,b){return new H.fi(this,b,0)},
dK:function(a,b){var u,t=this.gdT()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.ds(u)},
$ij9:1}
H.ds.prototype={
gc2:function(a){return this.b.index},
gaY:function(){var u=this.b
return u.index+u[0].length},
$ibf:1,
$icm:1}
H.fi.prototype={
gH:function(a){return new H.fj(this.a,this.b,this.c)},
$aU:function(){return[P.cm]}}
H.fj.prototype={
gC:function(){return this.d},
B:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.dK(p,u)
if(s!=null){q.d=s
r=s.gaY()
if(s.b.index===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.iy(t).aW(t,p)
if(p>=55296&&p<=56319){p=C.d.aW(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1},
$iad:1,
$aad:function(){return[P.cm]}}
H.f4.prototype={
gaY:function(){return this.a+this.c.length},
$ibf:1,
gc2:function(a){return this.a}}
H.fZ.prototype={
gH:function(a){return new H.h_(this.a,this.b,this.c)},
$aU:function(){return[P.bf]}}
H.h_.prototype={
B:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.f4(u,q)
s.c=t===s.c?t+1:t
return!0},
gC:function(){return this.d},
$iad:1,
$aad:function(){return[P.bf]}}
H.d4.prototype={$ilV:1}
H.d1.prototype={
gl:function(a){return a.length},
$icY:1,
$acY:function(){}}
H.d2.prototype={
p:function(a,b){H.jk(b,a,a.length)
return a[b]},
$ia1:1,
$aa1:function(){return[P.aE]},
$abB:function(){return[P.aE]},
$aaL:function(){return[P.aE]},
$iU:1,
$aU:function(){return[P.aE]},
$iI:1,
$aI:function(){return[P.aE]}}
H.d3.prototype={$ia1:1,
$aa1:function(){return[P.G]},
$abB:function(){return[P.G]},
$aaL:function(){return[P.G]},
$iU:1,
$aU:function(){return[P.G]},
$iI:1,
$aI:function(){return[P.G]}}
H.er.prototype={$ilB:1}
H.es.prototype={
p:function(a,b){H.jk(b,a,a.length)
return a[b]},
$ilC:1}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
P.fq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.fp.prototype={
$1:function(a){var u,t
this.a.a=H.b(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:30}
P.fr.prototype={
$0:function(){this.a.$0()},
$S:1}
P.fs.prototype={
$0:function(){this.a.$0()},
$S:1}
P.h0.prototype={
dl:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bZ(new P.h1(this,b),0),a)
else throw H.f(P.af("`setTimeout()` not found."))}}
P.h1.prototype={
$0:function(){this.b.$0()},
$S:2}
P.fl.prototype={
a6:function(a,b){var u,t=this
H.c0(b,{futureOr:1,type:H.a(t,0)})
if(t.b)t.a.a6(0,b)
else if(H.aT(b,"$iQ",t.$ti,"$aQ")){u=t.a
b.aG(u.geG(u),u.geI(),-1)}else P.i_(new P.fn(t,b))},
ap:function(a,b){if(this.b)this.a.ap(a,b)
else P.i_(new P.fm(this,a,b))},
$iki:1}
P.fn.prototype={
$0:function(){this.a.a.a6(0,this.b)},
$S:1}
P.fm.prototype={
$0:function(){this.a.a.ap(this.b,this.c)},
$S:1}
P.h3.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:43}
P.h4.prototype={
$2:function(a,b){this.a.$2(1,new H.cd(a,H.d(b,"$iN")))},
$S:14}
P.h9.prototype={
$2:function(a,b){this.a(H.ac(a),b)},
$S:21}
P.ft.prototype={}
P.aa.prototype={
bm:function(){},
bn:function(){},
sbl:function(a){this.dy=H.E(a,"$iaa",this.$ti,"$aaa")},
scl:function(a){this.fr=H.E(a,"$iaa",this.$ti,"$aaa")}}
P.fu.prototype={
gdQ:function(){return this.c<4},
du:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.a(p,0)
H.b(a,{func:1,ret:-1,args:[o]})
H.b(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.jA()
o=new P.dq($.x,c,p.$ti)
o.eo()
return o}u=$.x
t=d?1:0
s=p.$ti
r=new P.aa(p,u,t,s)
r.dj(a,b,c,d,o)
r.scl(r)
r.sbl(r)
H.E(r,"$iaa",s,"$aaa")
r.dx=p.c&1
q=p.e
p.sdP(r)
r.sbl(null)
r.scl(q)
if(q==null)p.sdL(r)
else q.sbl(r)
if(p.d==p.e)P.l2(p.a)
return r},
dm:function(){if((this.c&4)!==0)return new P.bN("Cannot add new events after calling close")
return new P.bN("Cannot add new events while doing an addStream")},
i:function(a,b){var u=this
H.l(b,H.a(u,0))
if(!u.gdQ())throw H.f(u.dm())
u.bp(b)},
sdL:function(a){this.d=H.E(a,"$iaa",this.$ti,"$aaa")},
sdP:function(a){this.e=H.E(a,"$iaa",this.$ti,"$aaa")},
$ilI:1,
$im_:1,
$ibR:1}
P.fo.prototype={
bp:function(a){var u,t
H.l(a,H.a(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.dr(new P.fx(a,t))}}
P.Q.prototype={}
P.e5.prototype={
$0:function(){this.b.aN(null)},
$S:1}
P.e7.prototype={
$2:function(a,b){var u,t,s=this
H.d(b,"$iN")
u=s.a
t=--u.b
if(u.a!=null){u.a=null
if(u.b===0||s.c)s.d.P(a,b)
else{u.d=a
u.c=b}}else if(t===0&&!s.c)s.d.P(u.d,u.c)},
$S:14}
P.e6.prototype={
$1:function(a){var u,t,s=this
H.l(a,s.f)
u=s.a;--u.b
t=u.a
if(t!=null){C.b.D(t,s.b,a)
if(u.b===0)s.c.ca(u.a)}else if(u.b===0&&!s.e)s.c.P(u.d,u.c)},
$S:function(){return{func:1,ret:P.u,args:[this.f]}}}
P.dl.prototype={
ap:function(a,b){H.d(b,"$iN")
if(a==null)a=new P.bE()
if(this.a.a!==0)throw H.f(P.a9("Future already completed"))
this.P(a,b)},
cA:function(a){return this.ap(a,null)},
$iki:1}
P.dk.prototype={
a6:function(a,b){var u
H.c0(b,{futureOr:1,type:H.a(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.a9("Future already completed"))
u.c8(b)},
P:function(a,b){this.a.c9(a,b)}}
P.dv.prototype={
a6:function(a,b){var u
H.c0(b,{futureOr:1,type:H.a(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.a9("Future already completed"))
u.aN(b)},
eH:function(a){return this.a6(a,null)},
P:function(a,b){this.a.P(a,b)}}
P.ar.prototype={
fa:function(a){if(this.c!==6)return!0
return this.b.b.bP(H.b(this.d,{func:1,ret:P.a_,args:[P.w]}),a.a,P.a_,P.w)},
f1:function(a){var u=this.e,t=P.w,s={futureOr:1,type:H.a(this,1)},r=this.b.b
if(H.c_(u,{func:1,args:[P.w,P.N]}))return H.c0(r.fg(u,a.a,a.b,null,t,P.N),s)
else return H.c0(r.bP(H.b(u,{func:1,args:[P.w]}),a.a,null,t),s)}}
P.L.prototype={
aG:function(a,b,c){var u,t=H.a(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=$.x
if(u!==C.e){H.b(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
if(b!=null)b=P.jq(b,u)}return this.br(a,b,c)},
aF:function(a,b){return this.aG(a,null,b)},
br:function(a,b,c){var u,t,s=H.a(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[s]})
u=new P.L($.x,[c])
t=b==null?1:3
this.aL(new P.ar(u,t,a,b,[s,c]))
return u},
aL:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.d(t.c,"$iar")
t.c=a}else{if(s===2){u=H.d(t.c,"$iL")
s=u.a
if(s<4){u.aL(a)
return}t.a=s
t.c=u.c}P.bn(null,null,t.b,H.b(new P.fD(t,a),{func:1,ret:-1}))}},
ck:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.d(p.c,"$iar")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.d(p.c,"$iL")
u=q.a
if(u<4){q.ck(a)
return}p.a=u
p.c=q.c}o.a=p.aS(a)
P.bn(null,null,p.b,H.b(new P.fL(o,p),{func:1,ret:-1}))}},
aR:function(){var u=H.d(this.c,"$iar")
this.c=null
return this.aS(u)},
aS:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aN:function(a){var u,t,s=this,r=H.a(s,0)
H.c0(a,{futureOr:1,type:r})
u=s.$ti
if(H.aT(a,"$iQ",u,"$aQ"))if(H.aT(a,"$iL",u,null))P.fG(a,s)
else P.jg(a,s)
else{t=s.aR()
H.l(a,r)
s.a=4
s.c=a
P.bT(s,t)}},
ca:function(a){var u,t=this
H.l(a,H.a(t,0))
u=t.aR()
t.a=4
t.c=a
P.bT(t,u)},
P:function(a,b){var u,t=this
H.d(b,"$iN")
u=t.aR()
t.a=8
t.c=new P.a3(a,b)
P.bT(t,u)},
dC:function(a){return this.P(a,null)},
c8:function(a){var u=this
H.c0(a,{futureOr:1,type:H.a(u,0)})
if(H.aT(a,"$iQ",u.$ti,"$aQ")){u.dz(a)
return}u.a=1
P.bn(null,null,u.b,H.b(new P.fF(u,a),{func:1,ret:-1}))},
dz:function(a){var u=this,t=u.$ti
H.E(a,"$iQ",t,"$aQ")
if(H.aT(a,"$iL",t,null)){if(a.a===8){u.a=1
P.bn(null,null,u.b,H.b(new P.fK(u,a),{func:1,ret:-1}))}else P.fG(a,u)
return}P.jg(a,u)},
c9:function(a,b){H.d(b,"$iN")
this.a=1
P.bn(null,null,this.b,H.b(new P.fE(this,a,b),{func:1,ret:-1}))},
$iQ:1}
P.fD.prototype={
$0:function(){P.bT(this.a,this.b)},
$S:1}
P.fL.prototype={
$0:function(){P.bT(this.b,this.a.a)},
$S:1}
P.fH.prototype={
$1:function(a){var u=this.a
u.a=0
u.aN(a)},
$S:4}
P.fI.prototype={
$2:function(a,b){H.d(b,"$iN")
this.a.P(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.fJ.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:1}
P.fF.prototype={
$0:function(){var u=this.a
u.ca(H.l(this.b,H.a(u,0)))},
$S:1}
P.fK.prototype={
$0:function(){P.fG(this.b,this.a)},
$S:1}
P.fE.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:1}
P.fO.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cW(H.b(s.d,{func:1}),null)}catch(r){u=H.ax(r)
t=H.bs(r)
if(o.d){s=H.d(o.a.a.c,"$ia3").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.d(o.a.a.c,"$ia3")
else q.b=new P.a3(u,t)
q.a=!0
return}if(!!J.F(n).$iQ){if(n instanceof P.L&&n.a>=4){if(n.a===8){s=o.b
s.b=H.d(n.c,"$ia3")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.aF(new P.fP(p),null)
s.a=!1}},
$S:2}
P.fP.prototype={
$1:function(a){return this.a},
$S:33}
P.fN.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.a(s,0)
q=H.l(n.c,r)
p=H.a(s,1)
n.a.b=s.b.b.bP(H.b(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ax(o)
t=H.bs(o)
s=n.a
s.b=new P.a3(u,t)
s.a=!0}},
$S:2}
P.fM.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.d(m.a.a.c,"$ia3")
r=m.c
if(H.b3(r.fa(u))&&r.e!=null){q=m.b
q.b=r.f1(u)
q.a=!1}}catch(p){t=H.ax(p)
s=H.bs(p)
r=H.d(m.a.a.c,"$ia3")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a3(t,s)
n.a=!0}},
$S:2}
P.dj.prototype={}
P.f1.prototype={
gl:function(a){var u={},t=new P.L($.x,[P.G])
u.a=0
this.b4(new P.f2(u,this),!0,new P.f3(u,t),t.gdB())
return t}}
P.f2.prototype={
$1:function(a){H.l(a,H.a(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.u,args:[H.a(this.b,0)]}}}
P.f3.prototype={
$0:function(){this.b.aN(this.a.a)},
$S:1}
P.aP.prototype={}
P.dm.prototype={
gj:function(a){return(H.bF(this.a)^892482866)>>>0},
N:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.dm&&b.a===this.a}}
P.fw.prototype={
bm:function(){H.E(this,"$iaP",[H.a(this.x,0)],"$aaP")},
bn:function(){H.E(this,"$iaP",[H.a(this.x,0)],"$aaP")}}
P.fv.prototype={
dj:function(a,b,c,d,e){var u,t,s=this,r=H.a(s,0)
H.b(a,{func:1,ret:-1,args:[r]})
s.sdt(H.b(a,{func:1,ret:null,args:[r]}))
u=b==null?P.l9():b
if(H.c_(u,{func:1,ret:-1,args:[P.w,P.N]}))s.d.bL(u,null,P.w,P.N)
else if(H.c_(u,{func:1,ret:-1,args:[P.w]}))H.b(u,{func:1,ret:null,args:[P.w]})
else H.a0(P.aW("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.b(c,{func:1,ret:-1})
t=c==null?P.jA():c
s.sdZ(H.b(t,{func:1,ret:-1}))},
bm:function(){},
bn:function(){},
dr:function(a){var u=this,t=u.$ti,s=H.E(u.r,"$icz",t,"$acz")
if(s==null){s=new P.cz(t)
u.scj(s)}t=s.c
if(t==null)s.b=s.c=a
else s.c=t.a=a
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.c0(u)}},
bp:function(a){var u,t=this,s=H.a(t,0)
H.l(a,s)
u=t.e
t.e=u|32
t.d.cY(t.a,a,s)
t.e&=4294967263
t.dA((u&4)!==0)},
dA:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.scj(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.bm()
else s.bn()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.c0(s)},
sdt:function(a){this.a=H.b(a,{func:1,ret:-1,args:[H.a(this,0)]})},
sdZ:function(a){H.b(a,{func:1,ret:-1})},
scj:function(a){this.r=H.E(a,"$icy",this.$ti,"$acy")},
$iaP:1,
$ibR:1}
P.fX.prototype={
b4:function(a,b,c,d){H.b(a,{func:1,ret:-1,args:[H.a(this,0)]})
H.b(c,{func:1,ret:-1})
return this.a.du(H.b(a,{func:1,ret:-1,args:[H.a(this,0)]}),d,c,!0===b)},
f9:function(a){return this.b4(a,null,null,null)}}
P.fy.prototype={}
P.fx.prototype={}
P.cy.prototype={
c0:function(a){var u,t=this
H.E(a,"$ibR",t.$ti,"$abR")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.i_(new P.fS(t,a))
t.a=1}}
P.fS.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.E(this.b,"$ibR",[H.a(r,0)],"$abR")
t=r.b
s=t.a
r.b=s
if(s==null)r.c=null
H.E(u,"$ibR",[H.a(t,0)],"$abR").bp(t.b)},
$S:1}
P.cz.prototype={}
P.dq.prototype={
eo:function(){var u=this
if((u.b&2)!==0)return
P.bn(null,null,u.a,H.b(u.gep(),{func:1,ret:-1}))
u.b|=2},
eq:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.cX(u.c)},
$iaP:1}
P.fY.prototype={}
P.a3.prototype={
h:function(a){return H.j(this.a)},
$iaY:1}
P.h2.prototype={$ilW:1}
P.h8.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bE():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u},
$S:1}
P.fT.prototype={
cX:function(a){var u,t,s,r=null
H.b(a,{func:1,ret:-1})
try{if(C.e===$.x){a.$0()
return}P.jr(r,r,this,a,-1)}catch(s){u=H.ax(s)
t=H.bs(s)
P.dy(r,r,this,u,H.d(t,"$iN"))}},
cY:function(a,b,c){var u,t,s,r=null
H.b(a,{func:1,ret:-1,args:[c]})
H.l(b,c)
try{if(C.e===$.x){a.$1(b)
return}P.js(r,r,this,a,b,-1,c)}catch(s){u=H.ax(s)
t=H.bs(s)
P.dy(r,r,this,u,H.d(t,"$iN"))}},
eD:function(a,b){return new P.fV(this,H.b(a,{func:1,ret:b}),b)},
bt:function(a){return new P.fU(this,H.b(a,{func:1,ret:-1}))},
eE:function(a,b){return new P.fW(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
cW:function(a,b){H.b(a,{func:1,ret:b})
if($.x===C.e)return a.$0()
return P.jr(null,null,this,a,b)},
bP:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.l(b,d)
if($.x===C.e)return a.$1(b)
return P.js(null,null,this,a,b,c,d)},
fg:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.l(b,e)
H.l(c,f)
if($.x===C.e)return a.$2(b,c)
return P.l1(null,null,this,a,b,c,d,e,f)},
bL:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}}
P.fV.prototype={
$0:function(){return this.a.cW(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fU.prototype={
$0:function(){return this.a.cX(this.b)},
$S:2}
P.fW.prototype={
$1:function(a){var u=this.c
return this.a.cY(this.b,H.l(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.eb.prototype={}
P.aL.prototype={
gH:function(a){return new H.ci(a,this.gl(a),[H.jI(this,a,"aL",0)])},
a8:function(a,b){return this.p(a,b)},
h:function(a){return P.i9(a,"[","]")}}
P.ek.prototype={}
P.el.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:12}
P.em.prototype={
gl:function(a){return this.a},
h:function(a){return P.j7(this)},
$iig:1}
P.a_.prototype={}
P.aE.prototype={}
P.by.prototype={
N:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a},
gj:function(a){return C.a.gj(this.a)},
h:function(a){var u,t,s,r=new P.e0(),q=this.a
if(q<0)return"-"+new P.by(0-q).h(0)
u=r.$1(C.a.ae(q,6e7)%60)
t=r.$1(C.a.ae(q,1e6)%60)
s=new P.e_().$1(q%1e6)
return""+C.a.ae(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.e_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:9}
P.e0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:9}
P.aY.prototype={}
P.dK.prototype={
h:function(a){return"Assertion failed"}}
P.bE.prototype={
h:function(a){return"Throw of null."}}
P.aH.prototype={
gbg:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbf:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbg()+o+u
if(!q.a)return t
s=q.gbf()
r=P.cP(q.b)
return t+s+": "+r}}
P.cl.prototype={
gbg:function(){return"RangeError"},
gbf:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.e8.prototype={
gbg:function(){return"RangeError"},
gbf:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.bY()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gl:function(a){return this.f}}
P.ff.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.fd.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bN.prototype={
h:function(a){return"Bad state: "+H.j(this.a)}}
P.dW.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cP(u)+"."}}
P.eu.prototype={
h:function(a){return"Out of Memory"},
$iaY:1}
P.dc.prototype={
h:function(a){return"Stack Overflow"},
$iaY:1}
P.dY.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.fC.prototype={
h:function(a){return"Exception: "+this.a}}
P.e4.prototype={
h:function(a){var u,t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.d.aK(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.G.prototype={}
P.U.prototype={
gl:function(a){var u,t=this.gH(this)
for(u=0;t.B();)++u
return u},
a8:function(a,b){var u,t,s
P.ja(b,"index")
for(u=this.gH(this),t=0;u.B();){s=u.gC()
if(b===t)return s;++t}throw H.f(P.e9(b,this,"index",null,t))},
h:function(a){return P.kn(this,"(",")")}}
P.ad.prototype={}
P.I.prototype={$ia1:1,$iU:1}
P.u.prototype={
gj:function(a){return P.w.prototype.gj.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.w.prototype={constructor:P.w,$iw:1,
N:function(a,b){return this===b},
gj:function(a){return H.bF(this)},
h:function(a){return"Instance of '"+H.ck(this)+"'"},
toString:function(){return this.h(this)}}
P.bf.prototype={}
P.cm.prototype={$ibf:1}
P.N.prototype={}
P.f0.prototype={
geN:function(){var u,t,s=this.b
if(s==null)s=H.ac($.ey.$0())
u=this.a
if(typeof s!=="number")return s.bb()
t=s-u
if($.ih===1000)return t
return C.a.ae(t,1000)}}
P.v.prototype={$ij9:1}
P.cp.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.dH.prototype={
h:function(a){return String(a)}}
W.dI.prototype={
h:function(a){return String(a)}}
W.cK.prototype={}
W.aX.prototype={
bW:function(a,b,c){var u=a.getContext(b,P.lc(c,null))
return u},
geJ:function(a){return a.getContext("2d")},
$iaX:1,
$iiX:1}
W.cN.prototype={$icN:1}
W.b6.prototype={
gl:function(a){return a.length}}
W.cb.prototype={
gl:function(a){return a.length}}
W.dX.prototype={}
W.dZ.prototype={
h:function(a){return String(a)}}
W.cO.prototype={
h:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
N:function(a,b){var u
if(b==null)return!1
u=J.F(b)
if(!u.$ibH)return!1
return a.left===u.gah(b)&&a.top===u.gai(b)&&a.width===u.gM(b)&&a.height===u.gK(b)},
gj:function(a){return W.ji(C.c.gj(a.left),C.c.gj(a.top),C.c.gj(a.width),C.c.gj(a.height))},
gK:function(a){return a.height},
gah:function(a){return a.left},
gai:function(a){return a.top},
gM:function(a){return a.width},
$ibH:1,
$abH:function(){return[P.m]}}
W.i.prototype={
h:function(a){return a.localName},
$ii:1}
W.e.prototype={$ie:1}
W.ba.prototype={
dn:function(a,b,c,d){return a.addEventListener(b,H.bZ(H.b(c,{func:1,args:[W.e]}),1),!1)},
ek:function(a,b,c,d){return a.removeEventListener(b,H.bZ(H.b(c,{func:1,args:[W.e]}),1),!1)},
$iba:1}
W.e3.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1,$iiX:1}
W.aZ.prototype={$iaZ:1}
W.cj.prototype={}
W.ap.prototype={$iap:1}
W.ae.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.dd(a):u},
cw:function(a,b){return a.appendChild(b)},
ej:function(a,b){return a.removeChild(b)},
$iae:1}
W.eU.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.b1.prototype={$ib1:1}
W.f8.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.e9(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ia1:1,
$aa1:function(){return[W.aC]},
$icY:1,
$acY:function(){return[W.aC]},
$aaL:function(){return[W.aC]},
$iU:1,
$aU:function(){return[W.aC]},
$iI:1,
$aI:function(){return[W.aC]},
$ace:function(){return[W.aC]}}
W.bl.prototype={}
W.fg.prototype={$iiX:1}
W.aR.prototype={
geL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.af("deltaY is not supported"))},
geK:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.af("deltaX is not supported"))},
$iaR:1}
W.cs.prototype={
en:function(a,b){return a.requestAnimationFrame(H.bZ(H.b(b,{func:1,ret:-1,args:[P.m]}),1))},
dI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dp.prototype={
h:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
N:function(a,b){var u
if(b==null)return!1
u=J.F(b)
if(!u.$ibH)return!1
return a.left===u.gah(b)&&a.top===u.gai(b)&&a.width===u.gM(b)&&a.height===u.gK(b)},
gj:function(a){return W.ji(C.c.gj(a.left),C.c.gj(a.top),C.c.gj(a.width),C.c.gj(a.height))},
gK:function(a){return a.height},
gM:function(a){return a.width}}
W.fz.prototype={
b4:function(a,b,c,d){var u=H.a(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
H.b(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,u)}}
W.ij.prototype={}
W.fA.prototype={
aV:function(a){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.b(u,{func:1,args:[W.e]})
if(t)J.k6(r,s.c,u,!1)}s.b=null
s.sdY(null)
return},
sdY:function(a){this.d=H.b(a,{func:1,args:[W.e]})}}
W.fB.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ie"))},
$S:23}
W.ce.prototype={
gH:function(a){return new W.e2(a,a.length,[H.jI(this,a,"ce",0)])}}
W.e2.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.c(s,t)
u.scd(s[t])
u.c=t
return!0}u.scd(null)
u.c=s
return!1},
gC:function(){return this.d},
scd:function(a){this.d=H.l(a,H.a(this,0))},
$iad:1}
W.dn.prototype={}
W.dw.prototype={}
W.dx.prototype={}
P.hj.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.fQ.prototype={
fc:function(a){if(a<=0||a>4294967296)throw H.f(P.ky("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$ilH:1}
P.aB.prototype={
h:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
N:function(a,b){if(b==null)return!1
return!!J.F(b).$iaB&&this.a==b.gI(b)&&this.b==b.gaj(b)},
gj:function(a){var u,t=J.bu(this.a),s=J.bu(this.b)
s=P.jh(P.jh(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
gI:function(a){return this.a},
gaj:function(a){return this.b}}
P.cL.prototype={$icL:1}
P.aK.prototype={$iaK:1}
P.cR.prototype={$icR:1}
P.d5.prototype={$id5:1}
P.db.prototype={$idb:1}
P.bj.prototype={
bQ:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.F(g)
if(!!u.$iaA&&h==null&&t&&!0){this.ex(a,b,c,d,e,f,g)
return}if(!!u.$iaX&&h==null&&t&&!0){this.ey(a,b,c,d,e,f,g)
return}throw H.f(P.aW("Incorrect number or type of arguments"))},
b9:function(a,b,c,d,e,f,g){return this.bQ(a,b,c,d,e,f,g,null,null,null)},
ex:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ey:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
d_:function(a,b,c){return a.uniform1i(b,c)},
$ibj:1}
P.df.prototype={$idf:1}
P.bP.prototype={$ibP:1}
K.di.prototype={}
K.ef.prototype={
bv:function(a,b){var u,t=this.a
for(u=this.b;t!==u;){if(t.a===b)return!0
t=t.b}return!1},
S:function(a,b,c){var u,t=new K.f9(a,H.b(c,{func:1,ret:P.m,args:[P.m]}),H.h([],[K.dg]))
if(!J.F(a).$ikM)H.a0(P.aW("tweenObject"))
t.r=Math.max(0.0001,b)
if(!this.bv(0,t)){u=this.b
u.a=t
this.b=u.b=new K.di()}return t},
ao:function(a){var u,t,s,r,q=this,p=q.c+=a
q.d.i(0,p)
u=q.a
t=q.b
for(;u!=t;){s=u.a
if(s==null){r=u.b
u.a=r.a
u.b=r.b
if(r==t)t=u
if(r===q.b)q.b=u}else if(!s.ao(a))u.a=null
else u=u.b}return!0},
$ika:1}
K.f9.prototype={
gT:function(a){var u=this.a
if(!!J.F(u).$ikN)return new K.fa(this,u)
else throw H.f(P.a9("Invalid tween object for 2D animation."))},
R:function(a,b){var u=new K.dg(a,b,0/0,0/0,0/0)
if(!this.Q)C.b.i(this.c,u)
return u},
ao:function(a){var u,t,s,r,q,p=this,o=p.x,n=p.r
if(o<n||!p.Q){o=p.x=o+a
if(o>n){p.x=n
o=n}if(o>=0){if(!p.Q){p.Q=!0
for(o=p.c,u=0;u<o.length;++u){n=o[u]
t=n.c=n.a.dO(n.b)
s=n.e
if(isNaN(s)&&isFinite(n.d))s=n.e=n.d-t
if(isNaN(n.d)&&isFinite(s))n.d=t+s}}o=p.b.$1(p.x/p.r)
o.toString
for(n=p.c,u=0;u<n.length;++u){t=n[u]
s=t.c
if(isFinite(s)&&isFinite(t.d)){r=t.d
if(typeof o!=="number")return o.aI()
q=s+o*(r-s)
s=t.a
switch(t.b){case 0:t=s.b
t.c=q
t.id=!0
break
case 1:t=s.b
t.d=q
t.id=!0
break
case 2:t=s.b
t.e=q
t.id=!0
break
case 3:t=s.b
t.f=q
t.id=!0
break
case 4:t=s.b
t.r=q
t.id=!0
break
case 5:t=s.b
t.x=q
t.id=!0
break
case 6:t=s.b
t.y=q
t.id=!0
break
case 7:t=s.b
t.z=q
t.id=!0
break
case 8:t=s.b
t.Q=q
t.id=!0
break
case 9:if(q<=0)q=0
if(q>=1)q=1
s.b.ch=q
break}}}}}return p.x<p.r},
$ika:1}
K.dg.prototype={}
K.fa.prototype={
dO:function(a){var u,t=this
switch(a){case 0:u=t.b
return u.gI(u)
case 1:return t.b.d
case 2:return t.b.e
case 3:return t.b.f
case 4:return t.b.r
case 5:return t.b.x
case 6:return t.b.y
case 7:return t.b.z
case 8:return t.b.Q
case 9:return t.b.ch
default:return 0}},
$ilK:1}
A.a6.prototype={
ga0:function(){var u=this.k3,t=[P.m]
return u==null?new U.O(0,0,0,0,t):new U.O(0,0,u.a,u.b,t)},
ab:function(a,b){var u=this.k3
if(u==null)return
if(a<0||a>=u.a)return
if(b<0||b>=u.b)return
return this},
a4:function(a){var u=this.k3
if(u!=null)a.c.ac(a,u.c)},
bM:function(a){var u=this.k3
if(u!=null)a.c.b7(a,u.c,H.E(this.dy,"$iI",[L.aM],"$aI"))}}
A.S.prototype={}
A.dP.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iaA")
u=new L.bL(C.n)
u.a=V.aU(a.width)
u.b=V.aU(a.height)
u.c=a
t=u.gbK().bU(this.a)
s=t.c
r=t.e
return new A.S(s.c/r,s.d/r,t)},
$S:18}
A.dM.prototype={
df:function(a,b){var u,t,s,r,q,p,o,n,m,l=this
l.b=l.a=a
l.c=1
u=P.jb("@(\\d+(.\\d+)?)x").f_(l.a)
if(u!=null){t=u.b
if(2>=t.length)return H.c(t,2)
s=t[2]
if(s==null)s="."
r=P.le(t[1])
q=C.b.f0(b,0,new A.dN($.iP()),P.m)
p=J.k8(q,s.length-1)
t=t.index+1
s=u.gaY()
o=P.kz(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
l.b=n+p+m
if(typeof r!=="number")return H.a2(r)
l.c=q/r}}}
A.dN.prototype={
$2:function(a,b){var u
H.hX(a)
H.hX(b)
u=this.a
if(typeof a!=="number")return a.bb()
if(typeof u!=="number")return H.a2(u)
if(typeof b!=="number")return b.bb()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:19}
A.dO.prototype={}
A.Y.prototype={}
A.K.prototype={
gI:function(a){return this.c},
sI:function(a,b){this.c=b
this.id=!0},
gcP:function(){return this.dy},
gcV:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gad:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.id){f.id=!1
u=f.go
t=f.Q
s=f.r
r=f.x
q=f.y
p=f.z
if(s>-0.0001&&s<0.0001)s=s>=0?0.0001:-0.0001
if(r>-0.0001&&r<0.0001)r=r>=0?0.0001:-0.0001
if(q!==0||p!==0){o=p+t
n=s*Math.cos(o)
m=s*Math.sin(o)
o=q+t
l=-r*Math.sin(o)
k=r*Math.cos(o)
o=f.c
j=f.e
i=f.f
u.al(n,m,l,k,o-j*n-i*l,f.d-j*m-i*k)}else if(t!==0){h=Math.cos(t)
g=Math.sin(t)
n=s*h
m=s*g
l=-r*g
k=r*h
o=f.c
j=f.e
i=f.f
u.al(n,m,l,k,o-j*n-i*l,f.d-j*m-i*k)}else u.al(s,0,0,r,f.c-f.e*s,f.d-f.f*r)}return f.go},
ga0:function(){return new U.O(0,0,0,0,[P.m])},
Y:function(a,b){var u,t=[P.m]
H.E(a,"$iT",t,"$aT")
H.E(b,"$iT",t,"$aT")
u=!!b.$iT?b:new U.T(0,0,t)
u.sI(0,a.a)
u.saj(0,a.b)
this.cg(u)
return u},
cg:function(a){var u,t,s,r,q,p=[P.m]
H.E(a,"$iT",p,"$aT")
u=this.fy
if(u!=null)u.cg(a)
t=!!a.$iT?a:new U.T(0,0,p)
s=a.a
r=a.b
q=this.gad()
p=q.a
t.sI(0,(p[3]*(s-p[4])-p[2]*(r-p[5]))/q.gaX())
t.saj(0,(p[0]*(r-p[5])-p[1]*(s-p[4]))/q.gaX())},
E:function(a,b){var u,t,s,r,q=this,p=H.h([],[R.cQ])
for(u=q.fy;u!=null;u=u.fy)C.b.i(p,u)
t=p.length-1
while(!0){if(!(t>=0&&b.gcz()))break
if(t<0||t>=p.length)return H.c(p,t)
p[t].bw(b,q,C.u);--t}q.bw(b,q,C.V)
s=b.b
t=0
while(!0){r=p.length
if(!(t<r&&s))break
if(t>=r)return H.c(p,t)
p[t].bw(b,q,C.W);++t}},
a4:function(a){},
bM:function(a){a.c.bO(a,this)},
cn:function(a,b,c,d){var u=this,t=-c,s=Math.atan2(t,d),r=Math.cos(s),q=Math.sin(s),p=Math.atan2(b,a),o=Math.cos(p),n=Math.sin(p)
u.id=!0
u.r=o*o>n*n?a/o:b/n
u.x=r*r>q*q?d/r:t/q
t=u.Q
u.y=s-t
u.z=p-t},
sci:function(a){this.fy=H.E(a,"$ii6",[A.K],"$ai6")},
$ikM:1,
$ikN:1,
$ikA:1}
A.bx.prototype={
q:function(a){var u,t,s=this
if(a===s)throw H.f(P.aW("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===s)s.dq(a)
else{if(u!=null)u.G(a)
s.ez(a)
C.b.i(s.a1,a)
a.sci(s)
a.E(0,new R.a4("added",!0))
t=s.gcV()
if((t instanceof A.a8?t:null)!=null)s.ce(a,"addedToStage")}}},
G:function(a){var u,t,s,r=this
if(a.fy!==r)throw H.f(P.aW("The supplied DisplayObject must be a child of the caller."))
else{u=r.a1
t=C.b.f4(u,a)
a.E(0,new R.a4("removed",!0))
s=r.gcV()
if((s instanceof A.a8?s:null)!=null)r.ce(a,"removedFromStage")
a.sci(null)
C.b.as(u,t)}},
ga0:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this.a1
if(j.length===0)return A.K.prototype.ga0.call(this)
for(u=1/0,t=1/0,s=-1/0,r=-1/0,q=0;q<j.length;++q){p=j[q]
o=p.ga0()
o=p.gad().bS(o,o)
n=o.a
if(n<u)u=n
m=o.b
if(m<t)t=m
p=H.a(o,0)
l=H.l(n+o.c,p)
if(l>s)s=l
k=H.l(m+o.d,p)
if(k>r)r=k}return new U.O(u,t,s-u,r-t,[P.m])},
ab:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.a1,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.c(u,t)
r=u[t]
q=r.gad()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.ab((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
if(!!i.$icT&&!0)return i
s=this}}return s},
a4:function(a){var u,t,s
for(u=this.a1,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.bN(s)}},
ez:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.f(P.aW("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
dq:function(a){var u,t,s,r=this.a1
for(u=r.length-1,t=a;u>=0;--u,t=s){if(u>=r.length)return H.c(r,u)
s=r[u]
C.b.D(r,u,t)
if(a===s)break}},
ce:function(a,b){var u=!1,t=this
while(!0){if(!(t!=null&&!u))break
if(t.bH(b,!0))u=!0
t=t.fy}this.cf(a,new R.a4(b,!1),u)},
cf:function(a,b,c){var u,t,s=!c
if(!s||a.f2(b.a))a.E(0,b)
if(!!a.$ibx){c=!s||a.bH(b.a,!0)
u=a.a1
for(t=0;t<u.length;++t)this.cf(u[t],b,c)}},
$ii6:1,
$ai6:function(){return[A.K]}}
A.cT.prototype={}
A.eC.prototype={
ao:function(a){var u,t=this
t.f+=a
R.il(t.d,$.iL(),R.bz)
t.b.ao(a)
u=t.c
C.b.ag(u,new A.eD(a))
C.b.ag(u,new A.eE(t,a))
R.il(t.e,$.iM(),R.bA)}}
A.eD.prototype={
$1:function(a){H.d(a,"$ia8").O.ao(this.a)
return!0},
$S:20}
A.eE.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$ia8")
u=this.a.f
t=a.aZ
if(t!==C.o)t=t===C.I
else t=!0
if(t){s=new P.f0()
if($.ih==null){H.kw()
$.ih=$.ex}t=H.ac($.ey.$0())
if(typeof t!=="number")return t.bb()
s.a=t-0
s.b=null
a.cp()
R.il(a.eQ,$.iO(),R.bI)
a.ar.aE(0)
t=a.ar
r=t.a
r.c=r.b=r.a=0
t.aw(0,a.bz)
a.a9.cU(0,a.cO)
V.as(u)
a.a9.b=V.as(this.b)
a.a9.bN(a)
a.a9.c.v(0)
u=a.eW=!1
q=a.ar.a
p=s.geN()
a.bE=a.bE*0.75+q.a*0.25
a.bF=a.bF*0.75+q.b*0.25
a.bG=a.bG*0.75+q.c*0.25
a.bD=a.bD*0.95+p*0.05
t=a.af
if(t.cx){t.toString
u=!0}if(u){C.b.sl(t.r2,0)
t.ry=t.rx=0
a.af.b6(0,"FRAMETIME"+C.d.b5(C.a.h(C.c.F(a.bD)),6))
a.af.b6(0,"DRAWCALLS"+C.d.b5(C.a.h(C.c.F(a.bE)),6))
a.af.b6(0,"VERTICES"+C.d.b5(C.a.h(C.c.F(a.bF)),7))
a.af.b6(0,"INDICES"+C.d.b5(C.a.h(C.c.F(a.bG)),8))
a.a9.cU(0,a.cC)
a.a9.bN(a.af)
a.a9.c.v(0)}}if(a.aZ===C.I)a.aZ=C.a2
return},
$S:27}
A.a7.prototype={
ga0:function(){var u=A.bx.prototype.ga0.call(this)
return u},
ab:function(a,b){var u=this.bc(a,b)
return u},
a4:function(a){this.dc(a)}}
A.co.prototype={
h:function(a){return this.b}}
A.bM.prototype={
h:function(a){return this.b}}
A.aq.prototype={
h:function(a){return this.b}}
A.a8.prototype={
di:function(a,b,c,d){var u,t,s,r=this,q=a.tabIndex
if(typeof q!=="number")return q.fo()
if(q<=0)a.tabIndex=1
q=a.style
if(q.outline==="")q.outline="none"
r.bz=c.f
r.eT=r.eS=!0
r.eV=r.eU=!1
r.aa=a
r.cE=C.i
r.cD=C.p
r.aZ=C.o
r.bx=C.k
r.cK=V.aU(d)
r.cL=V.aU(b)
r.b0=V.lq(5,$.iP())
q=r.dE(a,c)
r.ar=q
r.a9=L.jc(q)
q=H.h([],[L.aO])
u=T.y()
t=H.h([],[P.v])
s=$.o
$.o=s+1
s=new A.dd(q,u,t,s,H.h([],[A.Y]),T.y())
A.iU("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC",null).aF(s.gdv(),-1)
s.cx=!1
r.af=s
P.dB("StageXL render engine : "+r.ar.gcS().h(0))
q=W.aZ
u=H.b(r.ge7(),{func:1,ret:-1,args:[q]})
W.V(a,"keydown",u,!1,q)
W.V(a,"keyup",u,!1,q)
W.V(a,"keypress",u,!1,q)
q=r.bx
if(q===C.k||q===C.v){q=W.ap
u=H.b(r.geb(),{func:1,ret:-1,args:[q]})
W.V(a,"mousedown",u,!1,q)
W.V(a,"mouseup",u,!1,q)
W.V(a,"mousemove",u,!1,q)
W.V(a,"mouseout",u,!1,q)
W.V(a,"contextmenu",u,!1,q)
W.j_(a)
q=W.aR
W.V(a,H.av(W.j_(a)),H.b(r.ged(),{func:1,ret:-1,args:[q]}),!1,q)}q=r.bx
if((q===C.X||q===C.v)&&H.b3($.k3())){q=W.b1
u=H.b(r.geh(),{func:1,ret:-1,args:[q]})
W.V(a,"touchstart",u,!1,q)
W.V(a,"touchend",u,!1,q)
W.V(a,"touchmove",u,!1,q)
W.V(a,"touchenter",u,!1,q)
W.V(a,"touchleave",u,!1,q)
W.V(a,"touchcancel",u,!1,q)}$.jR().f9(new A.eZ(r))
r.bs()
r.cp()
r.ar.aw(0,r.bz)},
ab:function(a,b){var u=this.bc(a,b)
return u!=null?u:this},
dE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.a
if(e===C.m)try{e=new T.b_(new Float32Array(16))
e.ak()
u=H.h([],[L.dr])
t=P.v
s=P.G
r=P.bP
q=new Int16Array(0)
q=new L.eF(new H.H([t,s]),new H.H([t,r]),new L.bg(q),new L.bh(new Float32Array(0)),new L.aN())
p=new Int16Array(0)
o=new Float32Array(0)
n=new Int16Array(0)
m=new Float32Array(0)
l=new Int16Array(16384)
k=new Float32Array(32768)
j=new Array(8)
j.fixed$length=Array
j=H.h(j,[L.bL])
i=H.h([],[L.b0])
h=L.bi
h=new L.cn(a,e,u,q,new L.eG(new H.H([t,s]),new H.H([t,r]),new L.bg(p),new L.bh(o),new L.aN()),new L.eH(new H.H([t,s]),new H.H([t,r]),new L.bg(n),new L.bh(m),new L.aN()),new L.bg(l),new L.bh(k),j,i,new H.H([t,L.bJ]),new L.aN(),P.X(h),P.X(h))
i=P.aK
j={func:1,ret:-1,args:[i]}
W.V(a,"webglcontextlost",H.b(h.gdU(),j),!1,i)
W.V(a,"webglcontextrestored",H.b(h.gdW(),j),!1,i)
b=P.ks(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t,null)
g=C.j.bW(a,"webgl",b)
g=H.d(g==null?C.j.bW(a,"experimental-webgl",b):g,"$ibj")
if(!J.F(g).$ibj)H.a0(P.a9("Failed to get WebGL context."))
h.e=g
g.enable(3042)
h.e.disable(2960)
h.e.disable(2929)
h.e.disable(2884)
h.e.pixelStorei(37441,1)
h.e.blendFunc(1,771)
h.x=q
q.am(h)
h.cx=$.eA=$.eA+1
h.aE(0)
return h}catch(f){H.ax(f)
e=T.y()
u=L.bi
u=new L.d7(a,a.getContext("2d"),e,C.f,new L.aN(),P.X(u),P.X(u))
u.aE(0)
return u}else if(e===C.z){e=T.y()
u=L.bi
u=new L.d7(a,a.getContext("2d"),e,C.f,new L.aN(),P.X(u),P.X(u))
u.aE(0)
return u}else throw H.f(P.a9("Unknown RenderEngine"))},
cp:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.cK,h=j.cL,g=j.aa.getBoundingClientRect(),f=j.aa,e=f.clientLeft,d=C.c.F(g.left)
if(typeof e!=="number")return e.X()
u=f.clientTop
t=C.c.F(g.top)
if(typeof u!=="number")return u.X()
s=f.clientWidth
r=f.clientHeight
if(s===0||r===0)return
if(typeof s!=="number")return s.bV()
q=s/i
if(typeof r!=="number")return r.bV()
p=r/h
switch(j.cD){case C.a3:o=p
n=q
break
case C.a4:o=q>p?q:p
n=o
break
case C.a5:n=1
o=1
break
case C.p:o=q<p?q:p
n=o
break
default:n=1
o=1}f=j.cE
switch(f){case C.D:case C.F:case C.A:m=0
break
case C.B:case C.i:case C.G:m=(s-i*n)/2
break
case C.C:case C.E:case C.H:m=s-i*n
break
default:m=0}switch(f){case C.A:case C.B:case C.C:l=0
break
case C.D:case C.i:case C.E:l=(r-h*o)/2
break
case C.F:case C.G:case C.H:l=r-h*o
break
default:l=0}f=j.eX
f.sah(0,-m/n)
f.sai(0,-l/o)
f.sM(0,s/n)
f.sK(0,r/o)
f=j.cO
f.al(n,0,0,o,m,l)
k=j.b0
f.aJ(0,k,k)
k=j.b1
k.al(1,0,0,1,-(e+d)-m,-(u+t)-l)
k.aJ(0,1/n,1/o)
k=j.cC
k.cQ()
t=j.b0
k.aJ(0,t,t)
if(j.cM!==s||j.cN!==r){j.cM=s
j.cN=r
f=j.aa
e=j.b0
if(typeof e!=="number")return H.a2(e)
f.width=C.c.F(s*e)
f.height=C.c.F(r*e)
if(f.clientWidth!==s||f.clientHeight!==r){f=f.style
e=""+s+"px"
f.width=e
f=j.aa.style
e=""+r+"px"
f.height=e}j.E(0,new R.a4("resize",!1))}},
bs:function(){var u,t,s,r,q,p,o,n=this,m="default",l=n.by
if(l!=null&&!0)l.toString
if(n.cF!=="default"){n.cF=m
u=n.aa.style
if($.iI().ax(m)){t=$.iI().p(0,m)
s=C.w.gfw(t)
r=t.gf3()
q=r.gI(r)
r=t.gf3()
p=r.gaj(r)
o="url('"+H.j(s)+"') "+H.j(q)+" "+H.j(p)+", default"}else o=m
u.cursor=o}},
ec:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
H.d(a,"$iap")
a.preventDefault()
u=Date.now()
t=a.button
s=P.m
r=b.b1.bR(new P.aB(a.clientX,a.clientY,[s]))
q=new U.T(0,0,[s])
if(typeof t!=="number")return t.bY()
if(t<0||t>2)return
if(a.type==="mousemove"&&b.cG.N(0,r))return
s=b.eR
if(t<0||t>=3)return H.c(s,t)
p=s[t]
b.sdR(r)
C.b.ag(b.cH,new A.eW(r))
if(a.type!=="mouseout")o=b.ab(r.a,r.b)
else{b.E(0,new R.a4("mouseLeave",!1))
o=null}n=b.by
if(n!=o){s=[A.K]
m=H.h([],s)
l=H.h([],s)
for(k=n;k!=null;k=k.fy)C.b.i(m,k)
for(k=o;k!=null;k=k.fy)C.b.i(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.c(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.c(l,h)
if(g!==l[h])break}if(n!=null){n.Y(r,q)
n.E(0,new R.p(q.a,q.b,"mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.Y(r,q)
e.E(0,new R.p(q.a,q.b,"rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.c(l,f)
e=l[f]
e.Y(r,q)
e.E(0,new R.p(q.a,q.b,"rollOver",!1))}if(o!=null){o.Y(r,q)
o.E(0,new R.p(q.a,q.b,"mouseOver",!0))}b.by=o}b.bs()
if(a.type==="mousedown"){b.aa.focus()
d=p.a
if(o!=p.e||u>p.r+500)p.x=0
p.f=!0
p.e=o
p.r=u;++p.x}else d=null
if(a.type==="mouseup"){d=p.b
p.f=!1
c=p.e==o
c}else c=!1
u=a.type
if(u==="mousemove")d="mouseMove"
if(u==="contextmenu")d="contextMenu"
if(d!=null&&o!=null){o.Y(r,q)
o.E(0,new R.p(q.a,q.b,d,!0))
if(c)o.E(0,new R.p(q.a,q.b,p.c,!0))}},
ee:function(a){var u,t,s,r,q
H.d(a,"$iaR")
u=P.m
t=this.b1.bR(new P.aB(a.clientX,a.clientY,[u]))
s=new U.T(0,0,[u])
r=this.ab(t.a,t.b)
r.Y(t,s)
u=s.a
q=s.b;(a&&C.J).geK(a)
C.J.geL(a)
r.E(0,new R.p(u,q,"mouseWheel",!0))},
ei:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
H.d(b4,"$ib1")
b4.preventDefault()
u=b4.type
for(t=b4.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=b3.cI,m=b3.cH,l=P.m,k=[l],j=b3.b1,l=[l],i=[A.K],h=0;h<t.length;t.length===s||(0,H.i0)(t),++h){g=t[h]
f=g.identifier
e=j.bR(new P.aB(C.c.F(g.clientX),C.c.F(g.clientY),k))
d=new U.T(0,0,l)
c=b3.bc(e.a,e.b)
c=c!=null?c:b3
b=n.bJ(f,new A.eX(b3,c))
a=b.a
b.b
C.b.ag(m,new A.eY(a,e))
a0=b.d
if(a0!==c){a1=H.h([],i)
a2=H.h([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.b.i(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.b.i(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.c(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.c(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.Y(e,d)
a0.E(0,new R.b2(d.a,d.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.Y(e,d)
b0.E(0,new R.b2(d.a,d.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.c(a2,a9)
b0=a2[a9]
b0.Y(e,d)
b0.E(0,new R.b2(d.a,d.b,"touchRollOver",!1))}c.Y(e,d)
c.E(0,new R.b2(d.a,d.b,"touchOver",!0))
b.d=c}if(o){b3.aa.focus()
n.D(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.aD(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.aD(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.Y(e,d)
c.E(0,new R.b2(d.a,d.b,b1,!0))
if(b2)c.E(0,new R.b2(d.a,d.b,"touchTap",!0))}}},
e8:function(a){H.d(a,"$iaZ")
return},
sdR:function(a){this.cG=H.E(a,"$iT",[P.m],"$aT")}}
A.eZ.prototype={
$1:function(a){H.av(a)
return this.a.bs()},
$S:26}
A.eW.prototype={
$1:function(a){return H.d(a,"$ibm").fk(0,this.a)},
$S:10}
A.eX.prototype={
$0:function(){var u=this.b,t=this.a.cI.a,s=$.jj
$.jj=s+1
return new A.bV(s,t===0,u,u)},
$S:28}
A.eY.prototype={
$1:function(a){return H.d(a,"$ibm").fk(this.a,this.b)},
$S:10}
A.dd.prototype={
b6:function(a,b){var u,t,s=this
C.b.i(s.r2,b)
u=b.length
t=s.rx
s.rx=u>t?u:t;++s.ry},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.E(0,new R.a4("Update",!1))
for(u=i.k4,t=a.c,s=i.r1,r=i.r2,q=0;q<i.ry;++q)for(p=q*14,o=0;o<i.rx;++o){if(q>=r.length)return H.c(r,q)
n=r[q]
m=o<n.length?C.d.aM(n,o)-32:0
if(m<0||m>=64)m=0
s.al(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.y()
j=new T.b_(new Float32Array(16))
j.ak()
k=l.f=new L.ct(C.f,n,j,l)}k.c.cB(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.c(u,m)
t.ac(a,u[m])
a.e=a.e.e}},
dw:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=H.d(b3,"$iS").c,b2=b1.a
b2.seY(C.a1)
for(u=[P.G],t=this.k4,s=[P.m],r=b1.e,q=0*r,p=b1.d,o=b1.b,n=H.a(o,0),b1=b1.c,m=0;m<64;++m){l=m*7
k=H.E(new U.O(l,0,7,14,u),"$iO",s,"$aO")
j=C.c.F(l*r)
i=C.c.F(q)
k=H.a(k,0)
l=C.c.F(H.l(l+7,k)*r)-j
k=C.c.F(H.l(14,k)*r)-i
h=o.a
g=o.b
f=H.l(h+o.c,n)
e=H.l(g+o.d,n)
d=b1.a
c=b1.b
b=C.a.bZ(p,4)
a=j+l
a0=i+k
if(p===0){a1=h+d
a2=a1+j
a3=g+c
a4=a3+i
a5=a1+a
a6=a3+a0}else if(p===1){a1=f-c
a2=a1-a0
a3=g+d
a4=a3+j
a5=a1-i
a6=a3+a}else if(p===2){a1=f-d
a2=a1-a
a3=e-c
a4=a3-a0
a5=a1-j
a6=a3-i}else if(p===3){a1=h+c
a2=a1+i
a3=e-d
a4=a3-a
a5=a1+a0
a6=a3-j}else{a2=0
a4=0
a5=0
a6=0}a7=V.hi(a2,h,f)
a8=V.hi(a4,g,e)
a=V.hi(a5,h,f)
a0=V.hi(a6,g,e)
if(b===0){a9=a2-a7
b0=a4-a8}else if(b===1){a9=a4-a8
b0=a-a5}else if(b===2){a9=a-a5
b0=a6-a0}else if(b===3){a9=a0-a6
b0=a7-a2}else{a9=0
b0=0}C.b.i(t,L.eJ(b2,new U.O(a7,a8,a-a7,a0-a8,u),new U.O(a9,b0,l,k,u),b,r))}}}
A.eV.prototype={}
A.bU.prototype={}
A.bV.prototype={}
A.bm.prototype={}
L.dQ.prototype={}
L.bg.prototype={}
L.bh.prototype={
U:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.d8.prototype={
h:function(a){return this.b}}
L.bi.prototype={}
L.ez.prototype={}
L.d7.prototype={
gcS:function(){return C.z},
aE:function(a){var u,t=this
t.c1(0,t.f)
t.r=C.f
u=t.e
u.globalCompositeOperation="source-over"
u.globalAlpha=t.x=1},
aw:function(a,b){var u,t,s,r=this
r.c1(0,r.f)
r.r=C.f
u=r.e
u.globalCompositeOperation="source-over"
u.globalAlpha=r.x=1
t=b>>>24&255
if(t<255){s=r.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.jC(b)
s=r.d
u.fillRect(0,0,s.width,s.height)}},
v:function(a){},
ac:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
H.d(a,"$ibK")
H.d(b,"$iaO")
u=g.e
t=b.a.c
s=b.d
r=b.b
q=b.r
p=a.e
o=p.c
n=p.a
m=p.b
if(g.x!==n)u.globalAlpha=g.x=n
if(g.r!==m){g.r=m
u.globalCompositeOperation="source-over"}if(s===0){p=o.a
u.setTransform(p[0],p[1],p[2],p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[0]
h=q[1]
u.drawImage(t,p,l,k,j,i,h,q[8]-i,q[9]-h)}else if(s===1){p=o.a
u.setTransform(-p[2],-p[3],p[0],p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,0-q[13],q[12],q[9]-q[1],q[8]-q[0])}else if(s===2){p=o.a
u.setTransform(-p[0],-p[1],-p[2],-p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[8]
h=q[9]
u.drawImage(t,p,l,k,j,0-i,0-h,i-q[0],h-q[1])}else if(s===3){p=o.a
u.setTransform(p[2],p[3],-p[0],-p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,q[5],0-q[4],q[9]-q[1],q[8]-q[0])}},
b7:function(a,b,c){H.E(c,"$iI",[L.aM],"$aI")
this.ac(a,b)},
bO:function(a,b){b.a4(a)},
c1:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.cn.prototype={
gcS:function(){return C.m},
aE:function(a){var u=this,t=u.d,s=t.width,r=t.height
u.y=null
u.e.bindFramebuffer(36160,null)
u.e.viewport(0,0,s,r)
t=u.f
t.ak()
if(typeof s!=="number")return H.a2(s)
if(typeof r!=="number")return H.a2(r)
t.c_(0,2/s,-2/r,1)
t.cZ(0,-1,1,0)
u.x.sbI(t)},
aw:function(a,b){var u,t=this
C.b.sl(t.bh(),0)
t.cq(null)
t.cr(0)
u=(b>>>24&255)/255
t.e.colorMask(!0,!0,!0,!0)
t.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
t.e.clear(17408)},
v:function(a){this.x.v(0)},
ac:function(a,b){var u,t=this
H.d(a,"$ibK")
H.d(b,"$iaO")
u=t.cy
t.ct(u)
t.cs(a.e.b)
t.an(b.a)
u.ac(a,b)},
b7:function(a,b,c){var u,t
H.d(b,"$iaO")
H.E(c,"$iI",[L.aM],"$aI")
u=c.length
if(u===1){if(0>=u)return H.c(c,0)
t=c[0]}else t=null
if(u!==0)if(t instanceof L.aM&&t.gcR())t.cT(a,b,0)
else this.bO(a,new L.dt(b,c,T.y()))},
bO:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=b2.ga0(),a4=b2.gcP(),a5=Math.sqrt(Math.abs(b1.e.c.gaX())),a6=C.c.aC(a3.a),a7=C.c.aC(a3.b),a8=H.a(a3,0),a9=C.c.a5(H.l(a3.a+a3.c,a8)),b0=C.c.a5(H.l(a3.b+a3.d,a8))
for(a8=a4.length,u=P.G,t=[u],s=0;s<a8;++s);a6=C.c.aC(a6*a5)
a7=C.c.aC(a7*a5)
r=C.c.a5(a9*a5)-a6
q=C.c.a5(b0*a5)-a7
p=a2.y
a8=a2.f
o=new T.b_(new Float32Array(16))
o.ay(a8)
n=a2.bX(r,q)
m=new T.b_(new Float32Array(16))
m.ak()
m.c_(0,2/r,2/q,1)
m.cZ(0,-1,-1,0)
l=L.jc(a2)
l.e.c.aJ(0,a5,a5)
k=-a6
j=-a7
i=l.e.c.a
i[4]=i[4]+k
i[5]=i[5]+j
h=new H.H([u,L.b0])
h.D(0,0,n)
a2.aU(n)
a2.eC(m)
a2.cs(C.f)
a2.aw(0,0)
u=a4.length
if(!(u===0)){if(0>=u)return H.c(a4,0)
if(a4[0].gcR()&&!!b2.$idt){if(0>=a4.length)return H.c(a4,0)
a2.b7(l,b2.a,H.h([a4[0]],[L.aM]))
a4=C.b.d9(a4,1)}else b2.a4(l)}for(u=H.a(C.l,0),i=a8.a,g=a2.fy,s=0;s<a4.length;++s){f=a4[s]
f.toString
for(e=0;e<1;){d=C.l[e]
c=C.x[e]
if(h.ax(d)){b=h.p(0,d)
a=L.eJ(b.a,new U.O(0,0,r,q,t),new U.O(k,j,r,q,t),0,a5)}else throw H.f(P.a9("Invalid renderPassSource!"))
if(s===a4.length-1&&c===C.b.gf8(C.x)){a2.aU(p)
a8.ay(o)
a2.x.v(0)
a0=a2.x
a1=a0.e.p(0,"uProjectionMatrix")
a0.b.uniformMatrix4fv(a1,!1,i)
a0=b1.e.b
if(a0!==a2.Q){a2.x.v(0)
a2.Q=a0
a2.e.blendFunc(1,771)}l=b1
n=null}else if(h.ax(c)){n=h.p(0,c)
a2.aU(n)
if(C.f!==a2.Q){a2.x.v(0)
a2.Q=C.f
a2.e.blendFunc(1,771)}}else{n=a2.bX(r,q)
h.D(0,c,n)
a2.aU(n)
if(C.f!==a2.Q){a2.x.v(0)
a2.Q=C.f
a2.e.blendFunc(1,771)}a2.aw(0,0)}f.cT(l,a,e);++e
if(H.kE(C.l,e,null,u).eO(0,new L.eB(d))){h.aD(0,d)
if(b instanceof L.b0){a2.x.v(0)
C.b.i(g,b)}}}h.bu(0)
h.D(0,0,n)}},
bX:function(a,b){var u,t,s,r=this.fy,q=r.length
if(q===0){r=new L.b0(H.h([],[L.dr]))
q=new L.bL(C.n)
q.a=V.aU(a)
q.b=V.aU(b)
r.a=q
q=new L.eI()
q.a=V.aU(a)
q.b=V.aU(b)
r.b=q
return r}else{if(0>=q)return H.c(r,-1)
u=r.pop()
t=u.a
s=u.b
if(t.a!==a||t.b!==b){this.fe(t)
t.b8(0,a,b)
s.b8(0,a,b)}return u}},
fe:function(a){var u,t
for(u=this.fx,t=0;t<8;++t)if(a===u[t]){C.b.D(u,t,null)
this.e.activeTexture(33984+t)
this.e.bindTexture(3553,null)}},
aU:function(a){var u,t,s,r,q=this,p=36160
if(a!=q.y){u=q.x
if(a instanceof L.b0){u.v(0)
q.y=a
u=a.d
t=q.cx
if(u!==t){a.c=q
a.d=t
u=q.e
a.f=u
a.e=u.createFramebuffer()
a.c.an(a.a)
a.c.cu(a.b)
s=a.a.ch
r=a.b.f
a.f.bindFramebuffer(p,a.e)
a.f.framebufferTexture2D(p,36064,3553,s,0)
a.f.framebufferRenderbuffer(p,33306,36161,r)}else a.f.bindFramebuffer(p,a.e)
u=q.e
t=a.a
u.viewport(0,0,t.a,t.b)}else{u.v(0)
q.y=null
q.e.bindFramebuffer(p,null)
u=q.d
q.e.viewport(0,0,u.width,u.height)}q.cq(q.dM())
q.cr(q.dN())}},
cu:function(a){var u,t,s=this
if(a!==s.z){s.x.v(0)
s.z=a
u=a.d
t=s.cx
if(u!==t){a.c=s
a.d=t
u=s.e
a.e=u
u=u.createRenderbuffer()
a.f=u
a.e.bindRenderbuffer(36161,u)
a.e.renderbufferStorage(36161,34041,a.a,a.b)}else a.e.bindRenderbuffer(36161,a.f)}},
ct:function(a){var u=this,t=u.x
if(a!=t){t.v(0)
u.x=a
a.am(u)
u.x.sbI(u.f)}},
cs:function(a){var u=this
if(a!==u.Q){u.x.v(0)
u.Q=a
u.e.blendFunc(1,771)}},
an:function(a){var u,t,s,r=this,q=3553,p=6408,o=r.fx
if(a!==o[0]){r.x.v(0)
C.b.D(o,0,a)
o=a.y
u=r.cx
if(o!==u){a.x=r
a.y=u
o=r.e
a.Q=o
a.ch=o.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)
o=H.b3(a.Q.isEnabled(3089))
if(o)a.Q.disable(3089)
u=a.c
t=a.Q
s=t&&C.h
if(u!=null){s.b9(t,q,0,p,p,5121,u)
a.z=a.Q.getError()===1281}else s.bQ(t,q,0,p,a.a,a.b,0,p,5121,null)
if(a.z){u=a.a
u=W.cM(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.h).b9(u,q,0,p,p,5121,a.d)}if(o)a.Q.enable(3089)
a.Q.texParameteri(q,10242,33071)
a.Q.texParameteri(q,10243,33071)
a.Q.texParameteri(q,10241,a.e.a)
a.Q.texParameteri(q,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)}}},
eC:function(a){var u=this.f
u.ay(a)
this.x.v(0)
this.x.sbI(u)},
bh:function(){var u=this.y
return u instanceof L.b0?u.r:this.r},
dN:function(){var u,t,s=this.bh()
for(u=s.length-1;u>=0;--u){t=s[u]
if(!!t.$ilZ)return t.b}return 0},
dM:function(){var u,t,s=this.bh()
for(u=s.length-1;u>=0;--u){t=s[u]
if(!!t.$ilY)return t.b}return},
cr:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
cq:function(a){this.e.disable(3089)},
dV:function(a){H.d(a,"$iaK").preventDefault()
this.b.i(0,new L.bi())},
dX:function(a){H.d(a,"$iaK")
this.cx=$.eA=$.eA+1
this.c.i(0,new L.bi())}}
L.eB.prototype={
$1:function(a){return H.ac(a)!==this.a},
$S:31}
L.aM.prototype={
gcR:function(){return!0}}
L.b0.prototype={}
L.h6.prototype={
$1:function(a){var u,t,s,r,q
H.hX(a)
if(typeof a!=="number")return a.bV()
u=a/1000
t=u-$.jn
$.jn=u
$.im=-1
L.jm()
s=$.iN()
s=H.h(s.slice(0),[H.a(s,0)])
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.i0)(s),++q)s[q].$1(t)},
$S:32}
L.d9.prototype={
e0:function(a){var u
H.hX(a)
if(this.a){if(typeof a!=="number")return a.fm()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.ao(a)}}
L.dr.prototype={}
L.dt.prototype={
ga0:function(){var u=this.a,t=u.c,s=t.c
u=u.e
return new U.O(0,0,s/u,t.d/u,[P.m])},
a4:function(a){a.c.ac(a,this.a)},
$ikA:1,
gcP:function(){return this.b}}
L.bJ.prototype={
sbI:function(a){var u=this.e.p(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
am:function(a){var u,t,s=this,r=s.a,q=a.cx
if(r!==q){s.a=q
r=s.b=a.e
u=s.x=a.a
t=s.f=a.dy
s.r=a.fr
if(t.e!==q){t.e=q
t.x=u
t.r=r
r=r.createBuffer()
t.f=r
t.r.bindBuffer(34963,r)
t.r.bufferData(34963,t.a,35048)}t.r.bindBuffer(34963,t.f)
r=s.r
q=r.e
t=a.cx
if(q!==t){r.e=t
r.x=u
q=a.e
r.r=q
q=q.createBuffer()
r.f=q
r.r.bindBuffer(34962,q)
r.r.bufferData(34962,r.a,35048)}r.r.bindBuffer(34962,r.f)
r=s.dD(s.b)
s.c=r
s.eA(s.b,r)
s.eB(s.b,s.c)}s.b.useProgram(s.c)},
v:function(a){var u,t,s,r=this,q=r.f,p=q.c
if(p>0&&r.r.c>0){u=q.a.buffer
u.toString
H.jl(u,0,p)
t=new Int16Array(u,0,p)
q.r.bufferSubData(34963,0,t)
u=q.x
u.c=u.c+q.d
q=r.f
q.d=q.c=0
q=r.r
u=q.a.buffer
s=q.c
u.toString
H.jl(u,0,s)
t=new Float32Array(u,0,s)
q.r.bufferSubData(34962,0,t)
u=q.x
u.b=u.b+q.d
q=r.r
q.d=q.c=0
r.b.drawElements(4,p,5123,0);++r.x.a}},
dD:function(a){var u=this,t=a.createProgram(),s=u.cc(a,u.gba(),35633),r=u.cc(a,u.gb2(),35632)
a.attachShader(t,s)
a.attachShader(t,r)
a.linkProgram(t)
if(a.getProgramParameter(t,35714)===!0)return t
throw H.f(P.a9(H.b3(a.isContextLost())?"ContextLost":a.getProgramInfoLog(t)))},
cc:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.f(P.a9(H.b3(a.isContextLost())?"ContextLost":a.getShaderInfoLog(u)))},
eA:function(a,b){var u,t,s,r,q=this.d
q.bu(0)
u=H.ac(a.getProgramParameter(b,35721))
if(typeof u!=="number")return H.a2(u)
t=0
for(;t<u;++t){s=a.getActiveAttrib(b,t)
r=a.getAttribLocation(b,s.name)
a.enableVertexAttribArray(r)
q.D(0,s.name,r)}},
eB:function(a,b){var u,t,s,r,q=this.e
q.bu(0)
u=H.ac(a.getProgramParameter(b,35718))
if(typeof u!=="number")return H.a2(u)
t=0
for(;t<u;++t){s=a.getActiveUniform(b,t)
r=a.getUniformLocation(b,s.name)
q.D(0,s.name,r)}}}
L.eF.prototype={
gba:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gb2:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
am:function(a){var u,t=this
t.bd(a)
u=t.b;(u&&C.h).d_(u,t.e.p(0,"uSampler"),0)
u=t.d
t.r.U(u.p(0,"aVertexPosition"),2,20,0)
t.r.U(u.p(0,"aVertexTextCoord"),2,20,8)
t.r.U(u.p(0,"aVertexAlpha"),1,20,16)},
ac:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
H.d(a3,"$ibK")
H.d(a4,"$iaO")
a4.z
u=a3.e
t=u.a
s=u.c
r=a4.r
u=a2.f
q=u.a
p=q.length
if(u.c+6>=p)a2.v(0)
u=a2.r
o=u.a
n=o.length
if(u.c+20>=n)a2.v(0)
u=a2.f
m=u.c
l=a2.r
k=l.c
j=l.d
if(m>=p)return H.c(q,m)
q[m]=j
i=m+1
if(i>=p)return H.c(q,i)
q[i]=j+1
i=m+2
h=j+2
if(i>=p)return H.c(q,i)
q[i]=h
i=m+3
if(i>=p)return H.c(q,i)
q[i]=j
i=m+4
if(i>=p)return H.c(q,i)
q[i]=h
h=m+5
if(h>=p)return H.c(q,h)
q[h]=j+3
u.c=m+6
u.d+=6
u=r[0]
h=s.a
p=h[0]
i=h[4]
g=u*p+i
f=r[8]
e=f*p+i
i=h[1]
p=h[5]
d=u*i+p
c=f*i+p
p=r[1]
i=h[2]
b=p*i
f=r[9]
a=f*i
h=h[3]
a0=p*h
a1=f*h
if(k>=n)return H.c(o,k)
o[k]=g+b
h=k+1
if(h>=n)return H.c(o,h)
o[h]=d+a0
h=k+2
f=r[2]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+3
h=r[3]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+4
if(h>=n)return H.c(o,h)
o[h]=t
h=k+5
if(h>=n)return H.c(o,h)
o[h]=e+b
h=k+6
if(h>=n)return H.c(o,h)
o[h]=c+a0
h=k+7
f=r[6]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+8
h=r[7]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+9
if(h>=n)return H.c(o,h)
o[h]=t
h=k+10
if(h>=n)return H.c(o,h)
o[h]=e+a
h=k+11
if(h>=n)return H.c(o,h)
o[h]=c+a1
h=k+12
f=r[10]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+13
h=r[11]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+14
if(h>=n)return H.c(o,h)
o[h]=t
h=k+15
if(h>=n)return H.c(o,h)
o[h]=g+a
h=k+16
if(h>=n)return H.c(o,h)
o[h]=d+a1
h=k+17
f=r[14]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+18
h=r[15]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+19
if(h>=n)return H.c(o,h)
o[h]=t
l.c=k+20
l.d=j+4}}
L.eG.prototype={
gba:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gb2:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.eH.prototype={
gba:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gb2:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
am:function(a){var u,t=this
t.bd(a)
u=t.d
t.r.U(u.p(0,"aVertexPosition"),2,24,0)
t.r.U(u.p(0,"aVertexColor"),4,24,8)}}
L.ct.prototype={
gfb:function(){var u,t=this.f
if(t==null){t=T.y()
u=new T.b_(new Float32Array(16))
u.ak()
u=this.f=new L.ct(C.f,t,u,this)
t=u}return t}}
L.bK.prototype={
cU:function(a,b){var u,t=this.d
this.e=t
t=t.c
t.cQ()
u=this.e
u.a=1
u.b=C.f
t.ay(b)},
bN:function(a){var u,t=this,s=a.gad(),r=a.ch,q=a.dy,p=t.e,o=p.gfb()
o.c.cB(s,p.c)
u=p.b
o.b=u
o.a=r*p.a
t.e=o
if(q.length!==0)a.bM(t)
else a.a4(t)
t.e=p}}
L.aN.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.eI.prototype={
b8:function(a,b,c){var u,t=this
if(t.a!==b||t.b!==c){t.a=b
t.b=c
u=t.c
if(u==null||t.f==null)return
if(u.cx!==t.d)return
u.cu(t)
t.e.renderbufferStorage(36161,34041,t.a,t.b)}}}
L.bL.prototype={
gbK:function(){var u=this.a,t=this.b,s=[P.G]
return L.eJ(this,new U.O(0,0,u,t,s),new U.O(0,0,u,t,s),0,1)},
geF:function(a){var u=this,t=u.c,s=J.F(t)
if(!!s.$iaX)return t
else if(!!s.$iaA){s=u.a
s=W.cM(u.b,s)
u.d=u.c=s
s.getContext("2d").drawImage(t,0,0,u.a,u.b)
return u.d}else throw H.f(P.a9("RenderTexture is read only."))},
seY:function(a){var u,t=this
if(t.e===a)return
t.e=a
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.an(t)
t.Q.texParameteri(3553,10241,t.e.a)
t.Q.texParameteri(3553,10240,t.e.a)},
b8:function(a,b,c){var u,t=this
if(!(t.a===b&&t.b===c))if(t.c==null){t.a=b
t.b=c
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.an(t)
u=t.Q;(u&&C.h).bQ(u,3553,0,6408,t.a,t.b,0,6408,5121,null)}else{t.a=b
t.b=c
t.d=t.c=W.cM(c,b)}},
fj:function(){var u,t=this,s=6408,r=t.x
if(r==null||t.ch==null)return
if(r.cx!==t.y)return
r.x.v(0)
t.x.an(t)
r=H.b3(t.Q.isEnabled(3089))
if(r)t.Q.disable(3089)
if(t.z){t.d.getContext("2d").drawImage(t.c,0,0)
u=t.Q;(u&&C.h).b9(u,3553,0,s,s,5121,t.d)}else{u=t.Q;(u&&C.h).b9(u,3553,0,s,s,5121,t.c)}if(r)t.Q.enable(3089)}}
L.da.prototype={}
L.aO.prototype={
bU:function(a){var u=this
return L.eJ(u.a,u.b,u.c,u.d,a)},
geM:function(){var u,t,s,r=this,q=r.e,p=r.d
if(p===0){p=r.b
u=r.c
return T.ep(q,0,0,q,p.a+u.a,p.b+u.b)}else if(p===1){p=r.b
u=r.c
return T.ep(0,q,0-q,0,H.l(p.a+p.c,H.a(p,0))-u.b,p.b+u.a)}else if(p===2){p=r.b
u=H.a(p,0)
t=r.c
s=0-q
return T.ep(s,0,0,s,H.l(p.a+p.c,u)-t.a,H.l(p.b+p.d,u)-t.b)}else if(p===3){p=r.b
u=r.c
return T.ep(0,0-q,q,0,p.a+u.b,H.l(p.b+p.d,H.a(p,0))-u.a)}else throw H.f(P.i7())}}
L.eK.prototype={}
T.ej.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.dS.prototype={
gcz:function(){return!1}}
R.bz.prototype={}
R.bA.prototype={}
R.bI.prototype={}
R.a4.prototype={
gcz:function(){return!0}}
R.cQ.prototype={
n:function(a,b,c){var u,t,s,r
H.jz(c,R.a4,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=new H.H([P.v,[R.b9,R.a4]])
this.sdJ(u)}t=[c]
s=H.E(u.p(0,b),"$ib9",t,"$ab9")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.b9(this,H.h(r,[[R.W,c]]),t)
u.D(0,b,s)}return s},
bH:function(a,b){var u,t,s=this.a
if(s==null)return!1
u=s.p(0,a)
if(u==null)return!1
t=u.d
return b?t>0:u.c.length>t},
f2:function(a){return this.bH(a,!1)},
bw:function(a,b,c){var u,t
a.r=a.f=!1
u=this.a
if(u==null)return
t=u.p(0,a.a)
if(t==null)return
t.dG(a,b,c)},
sdJ:function(a){this.a=H.E(a,"$iig",[P.v,[R.b9,R.a4]],"$aig")}}
R.cc.prototype={
h:function(a){return this.b}}
R.b9.prototype={
b4:function(a,b,c,d){H.b(a,{func:1,ret:-1,args:[H.a(this,0)]})
H.b(c,{func:1,ret:-1})
return this.m(a,!1,0)},
m:function(a,b,c){var u,t,s,r,q,p,o=this,n=H.a(o,0),m=new R.W(c,!1,o,H.b(a,{func:1,ret:-1,args:[n]}),o.$ti),l=o.c,k=l.length,j=new Array(k+1)
j.fixed$length=Array
u=H.h(j,[[R.W,n]])
t=u.length-1
for(s=0,r=0;s<k;++s,r=p){q=l[s]
if(s===r&&q.a<c){p=r+1
t=r
r=p}p=r+1
C.b.D(u,r,q)}C.b.D(u,t,m)
o.sev(u)
n=[R.bz]
if(H.aT(m,"$iW",n,null)){k=$.iL();(k&&C.b).i(k,H.iG(m,"$iW",n,"$aW"))}else{n=[R.bA]
if(H.aT(m,"$iW",n,null)){k=$.iM();(k&&C.b).i(k,H.iG(m,"$iW",n,"$aW"))}else{n=[R.bI]
if(H.aT(m,"$iW",n,null)){k=$.iO();(k&&C.b).i(k,H.iG(m,"$iW",n,"$aW"))}}}return m},
dG:function(a,b,c){var u,t,s,r,q,p,o=H.a(this,0)
H.l(a,o)
u=this.c
t=c===C.u
for(s=u.length,o={func:1,ret:-1,args:[o]},r=0;r<s;++r){q=u[r]
if(!q.c){q.d
p=t}else p=!0
if(p)continue
H.b(q.f,o).$1(a)}},
sev:function(a){this.c=H.E(a,"$iI",[[R.W,H.a(this,0)]],"$aI")}}
R.W.prototype={}
R.cf.prototype={
h:function(a){return this.b}}
R.ea.prototype={}
R.bD.prototype={}
R.p.prototype={}
R.bO.prototype={}
R.b2.prototype={}
D.dU.prototype={
dg:function(a,b){var u,t
for(u=this.a,t=0;t<16;++t)u[t]=a[t]
for(u=this.b,t=0;t<4;++t)u[t]=b[t]},
aO:function(a1,a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=[P.m]
H.E(a1,"$iI",a0,"$aI")
H.E(a2,"$iI",a0,"$aI")
u=new Float32Array(16)
t=new Float32Array(4)
for(a0=a.b,s=t.length,r=a.a,q=u.length,p=0,o=0;p<4;++p,o+=4){if(o>12)continue
for(n=o+1,m=o+2,l=o+3,k=0;k<4;++k){j=o+k
i=a1[o]
h=r[k]
g=a1[n]
f=r[k+4]
e=a1[m]
d=r[k+8]
c=a1[l]
b=r[k+12]
if(j>=q)return H.c(u,j)
u[j]=i*h+g*f+e*d+c*b}j=a2[p]
i=a1[o]
h=a0[0]
n=a1[n]
g=a0[1]
m=a1[m]
f=a0[2]
l=a1[l]
e=a0[3]
if(p>=s)return H.c(t,p)
t[p]=j+i*h+n*g+m*f+l*e}a.a=u
a.b=t},
cT:function(a,b,c){var u,t,s,r
H.d(b,"$iaO")
u=H.d(a.c,"$icn")
t=b.a
s=D.b7
u.toString
H.jz(s,L.bJ,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'getRenderProgram'.")
s=H.b(new D.dV(),{func:1,ret:s})
r=H.at(u.go.bJ("$ColorMatrixFilterProgram",s),"$ib7")
u.ct(r)
u.an(t)
r.ff(a,b,this)}}
D.dV.prototype={
$0:function(){var u=P.v,t=new Int16Array(0)
return new D.b7(new H.H([u,P.G]),new H.H([u,P.bP]),new L.bg(t),new L.bh(new Float32Array(0)),new L.aN())},
$S:34}
D.b7.prototype={
gba:function(){return"\n    uniform mat4 uProjectionMatrix;\n\n    attribute vec2 aPosition;\n    attribute vec2 aTexCoord;\n    attribute vec4 aMatrixR, aMatrixG, aMatrixB, aMatrixA; \n    attribute vec4 aOffset;\n\n    varying vec2 vTexCoord;\n    varying vec4 vMatrixR, vMatrixG, vMatrixB, vMatrixA;\n    varying vec4 vOffset;\n\n    void main() {\n      vTexCoord = aTexCoord; \n      vMatrixR = aMatrixR; \n      vMatrixG = aMatrixG;\n      vMatrixB = aMatrixB; \n      vMatrixA = aMatrixA; \n      vOffset = aOffset;\n      gl_Position = vec4(aPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gb2:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n\n    varying vec2 vTexCoord;\n    varying vec4 vMatrixR, vMatrixG, vMatrixB, vMatrixA;\n    varying vec4 vOffset;\n\n    void main() {\n      vec4 color = texture2D(uSampler, vTexCoord);\n      mat4 colorMatrix = mat4(vMatrixR, vMatrixG, vMatrixB, vMatrixA);\n      color = vec4(color.rgb / color.a, color.a);\n      color = vOffset + color * colorMatrix;\n      gl_FragColor = vec4(color.rgb * color.a, color.a);\n    }\n    "},
am:function(a){var u,t=this
t.bd(a)
u=t.b;(u&&C.h).d_(u,t.e.p(0,"uSampler"),0)
u=t.d
t.r.U(u.p(0,"aPosition"),2,96,0)
t.r.U(u.p(0,"aTexCoord"),2,96,8)
t.r.U(u.p(0,"aMatrixR"),4,96,16)
t.r.U(u.p(0,"aMatrixG"),4,96,32)
t.r.U(u.p(0,"aMatrixB"),4,96,48)
t.r.U(u.p(0,"aMatrixA"),4,96,64)
t.r.U(u.p(0,"aOffset"),4,96,80)},
ff:function(a6,a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=a6.e,a0=a.a,a1=a.c,a2=a7.x,a3=a7.y,a4=a8.a,a5=a8.b
a=b.f
u=a.a
t=u.length
if(a.c+6>=t)b.v(0)
a=b.r
s=a.a
r=s.length
if(a.c+96>=r)b.v(0)
a=b.f
q=a.c
p=b.r
o=p.c
n=p.d
for(m=0;m<6;++m){p=q+m
l=a2[m]
if(p>=t)return H.c(u,p)
u[p]=n+l}a.c=q+6
b.f.d+=6
a=a1.a
k=a[0]
j=a[1]
i=a[2]
h=a[3]
g=a[4]
f=a[5]
for(m=0,e=0;m<4;++m,e+=4){if(e>=16)return H.c(a3,e)
d=a3[e]
a=e+1
if(a>=16)return H.c(a3,a)
c=a3[a]
if(o>=r)return H.c(s,o)
s[o]=g+k*d+i*c
a=o+1
if(a>=r)return H.c(s,a)
s[a]=f+j*d+h*c
a=o+2
t=e+2
if(t>=16)return H.c(a3,t)
t=a3[t]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+3
a=e+3
if(a>=16)return H.c(a3,a)
a=a3[a]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+4
t=a4[0]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+5
a=a4[1]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+6
t=a4[2]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+7
a=a4[3]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+8
t=a4[4]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+9
a=a4[5]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+10
t=a4[6]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+11
a=a4[7]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+12
t=a4[8]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+13
a=a4[9]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+14
t=a4[10]
if(a>=r)return H.c(s,a)
s[a]=t
t=o+15
a=a4[11]
if(t>=r)return H.c(s,t)
s[t]=a
a=o+16
t=a4[12]
if(a>=r)return H.c(s,a)
s[a]=t*a0
t=o+17
a=a4[13]
if(t>=r)return H.c(s,t)
s[t]=a*a0
a=o+18
t=a4[14]
if(a>=r)return H.c(s,a)
s[a]=t*a0
t=o+19
a=a4[15]
if(t>=r)return H.c(s,t)
s[t]=a*a0
a=o+20
t=a5[0]
if(a>=r)return H.c(s,a)
s[a]=t/255
t=o+21
a=a5[1]
if(t>=r)return H.c(s,t)
s[t]=a/255
a=o+22
t=a5[2]
if(a>=r)return H.c(s,a)
s[a]=t/255
t=o+23
a=a5[3]
if(t>=r)return H.c(s,t)
s[t]=a/255*a0
o+=24}a=b.r
a.c+=96
a.d+=4}}
T.d0.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.j(u[0])+", b="+H.j(u[1])+", c="+H.j(u[2])+", d="+H.j(u[3])+", tx="+H.j(u[4])+", ty="+H.j(u[5])+"]"},
gaX:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
bR:function(a){var u,t,s,r,q,p,o,n=P.m
H.E(a,"$iaB",[n],"$aaB")
u=a.a
u.toString
t=a.b
t.toString
s=this.a
r=s[0]
if(typeof u!=="number")return u.aI()
q=s[2]
if(typeof t!=="number")return t.aI()
p=u*r+t*q+s[4]
o=u*s[1]+t*s[3]+s[5]
if(!!C.w.$iT){null.fp(p,o)
return}else return new U.T(p,o,[n])},
bS:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=P.m
H.E(a7,"$ibH",[a6],"$abH")
a6=[a6]
H.E(a8,"$iO",a6,"$aO")
u=a7.a
t=H.a(a7,0)
s=H.l(u+a7.c,t)
r=a7.b
q=H.l(r+a7.d,t)
t=this.a
p=t[0]
o=u*p
n=t[2]
m=r*n
l=o+m
k=t[1]
j=u*k
i=t[3]
h=r*i
g=j+h
p=s*p
f=p+m
k=s*k
e=k+h
n=q*n
d=p+n
i=q*i
c=k+i
b=o+n
a=j+i
a0=l>f?f:l
if(a0>d)a0=d
if(a0>b)a0=b
a1=g>e?e:g
if(a1>c)a1=c
if(a1>a)a1=a
a2=l<f?f:l
if(a2<d)a2=d
if(a2<b)a2=b
a3=g<e?e:g
if(a3<c)a3=c
if(a3<a)a3=a
a4=a2-a0
a5=a3-a1
if(!!a8.$iO){a6=t[4]
t=t[5]
p=H.a(a8,0)
a6=H.l(a6+a0,p)
t=H.l(t+a1,p)
H.l(a4,p)
H.l(a5,p)
a8.sah(0,a6)
a8.sai(0,t)
a8.sM(0,a4)
a8.sK(0,a5)
return a8}else return new U.O(t[4]+a0,t[5]+a1,a4,a5,a6)},
cQ:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aJ:function(a,b,c){var u=this.a,t=u[0]
if(typeof b!=="number")return H.a2(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.a2(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
al:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
ay:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
cB:function(a,b){var u,t,s,r,q,p,o=a.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5]
o=b.a
u=o[0]
t=o[1]
s=o[2]
r=o[3]
q=o[4]
p=o[5]
o=this.a
o[0]=n*u+m*s
o[1]=n*t+m*r
o[2]=l*u+k*s
o[3]=l*t+k*r
o[4]=j*u+i*s+q
o[5]=j*t+i*r+p}}
T.b_.prototype={
ak:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1},
c_:function(a,b,c,d){var u=this.a
u[0]=u[0]*b
u[1]=u[1]*b
u[2]=u[2]*b
u[3]=u[3]*b
u[4]=u[4]*c
u[5]=u[5]*c
u[6]=u[6]*c
u[7]=u[7]*c
u[8]=u[8]*d
u[9]=u[9]*d
u[10]=u[10]*d
u[11]=u[11]*d},
cZ:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d},
ay:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]
u[6]=t[6]
u[7]=t[7]
u[8]=t[8]
u[9]=t[9]
u[10]=t[10]
u[11]=t[11]
u[12]=t[12]
u[13]=t[13]
u[14]=t[14]
u[15]=t[15]}}
U.T.prototype={
h:function(a){return"Point<"+new H.cq(H.a(this,0)).h(0)+"> [x="+H.j(this.a)+", y="+H.j(this.b)+"]"},
N:function(a,b){if(b==null)return!1
return!!J.F(b).$iaB&&this.a===b.gI(b)&&this.b===b.gaj(b)},
gj:function(a){var u=C.c.gj(this.a),t=C.c.gj(this.b)
return O.j3(O.ch(O.ch(0,u),t))},
sI:function(a,b){this.a=H.l(b,H.a(this,0))},
saj:function(a,b){this.b=H.l(b,H.a(this,0))},
$iaB:1,
gI:function(a){return this.a},
gaj:function(a){return this.b}}
U.O.prototype={
h:function(a){var u=this
return"Rectangle<"+new H.cq(H.a(u,0)).h(0)+"> [left="+H.j(u.a)+", top="+H.j(u.b)+", width="+H.j(u.c)+", height="+H.j(u.d)+"]"},
N:function(a,b){var u,t=this
if(b==null)return!1
u=J.F(b)
return!!u.$ibH&&t.a===u.gah(b)&&t.b===u.gai(b)&&t.c===u.gM(b)&&t.d===u.gK(b)},
gj:function(a){var u=this,t=C.c.gj(u.a),s=C.c.gj(u.b),r=C.c.gj(u.c),q=C.c.gj(u.d)
return O.j3(O.ch(O.ch(O.ch(O.ch(0,t),s),r),q))},
sah:function(a,b){this.a=H.l(b,H.a(this,0))},
sai:function(a,b){this.b=H.l(b,H.a(this,0))},
sM:function(a,b){this.c=H.l(b,H.a(this,0))},
sK:function(a,b){this.d=H.l(b,H.a(this,0))},
$ibH:1,
gah:function(a){return this.a},
gai:function(a){return this.b},
gM:function(a){return this.c},
gK:function(a){return this.d}}
N.cS.prototype={
e4:function(a){var u=this
u.d.aV(0)
u.e.aV(0)
u.b.a6(0,u.a)},
e2:function(a){var u=this
u.d.aV(0)
u.e.aV(0)
u.b.cA(new T.ej("Failed to load "+H.j(u.a.src)+"."))}}
O.a5.prototype={
L:function(a){var u=0,t=P.C(O.a5),s,r=this,q,p,o,n
var $async$L=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:p=r.gfd()
o=[P.Q,,]
n=H.a(p,0)
u=3
return P.r(P.kk(new H.eo(p,H.b(new O.eR(),{func:1,ret:o,args:[n]}),[n,o]),null),$async$L)
case 3:q=r.geP().length
if(q>0)throw H.f(P.a9("Failed to load "+q+" resource(s)."))
else{s=r
u=1
break}case 1:return P.A(s,t)}})
return P.B($async$L,t)},
geZ:function(){var u,t=this.a
t=t.gbT(t)
u=H.cH(t,"U",0)
return P.ie(new H.cr(t,H.b(new O.eQ(),{func:1,ret:P.a_,args:[u]}),[u]),!0,u)},
gfd:function(){var u,t=this.a
t=t.gbT(t)
u=H.cH(t,"U",0)
return P.ie(new H.cr(t,H.b(new O.eS(),{func:1,ret:P.a_,args:[u]}),[u]),!0,u)},
geP:function(){var u,t=this.a
t=t.gbT(t)
u=H.cH(t,"U",0)
return P.ie(new H.cr(t,H.b(new O.eP(),{func:1,ret:P.a_,args:[u]}),[u]),!0,u)},
a_:function(a,b){this.ds("BitmapData",a,b,A.iU(b,null))},
ds:function(a,b,c,d){var u=a+"."+b,t=O.kB(a,b,c,d),s=this.a
if(s.ax(u))throw H.f(P.a9("ResourceManager already contains a resource called '"+b+"'"))
else s.D(0,u,t)
t.f.a.aF(new O.eO(this),null)},
Z:function(a,b){var u,t=this.a.p(0,a+"."+b)
if(t==null)throw H.f(P.a9("Resource '"+b+"' does not exist."))
else{u=t.d
if(u!=null)return u
else{u=t.e
if(u!=null)throw H.f(u)
else throw H.f(P.a9("Resource '"+b+"' has not finished loading yet."))}}}}
O.eR.prototype={
$1:function(a){return H.d(a,"$iP").f.a},
$S:36}
O.eQ.prototype={
$1:function(a){return H.d(a,"$iP").d!=null},
$S:8}
O.eS.prototype={
$1:function(a){H.d(a,"$iP")
return a.d==null&&a.e==null},
$S:8}
O.eP.prototype={
$1:function(a){return H.d(a,"$iP").e!=null},
$S:8}
O.eO.prototype={
$1:function(a){var u=this.a
u.b.i(0,u.geZ().length/u.a.a)},
$S:4}
O.P.prototype={
dh:function(a,b,c,d){var u,t=d.aF(new O.eL(this),null),s=new O.eM(this),r=H.a(t,0),q=$.x,p=[r],o=new P.L(q,p)
if(q!==C.e)s=P.jq(s,q)
r=[r,r]
t.aL(new P.ar(o,2,null,s,r))
u=H.b(new O.eN(this),{func:1})
t=$.x
if(t!==C.e)u=H.b(u,{func:1,ret:null})
o.aL(new P.ar(new P.L(t,p),8,u,null,r))},
h:function(a){return"ResourceManagerResource [kind="+this.a+", name="+this.b+", url = "+this.c+"]"}}
O.eL.prototype={
$1:function(a){this.a.d=a},
$S:4}
O.eM.prototype={
$1:function(a){this.a.e=a},
$S:4}
O.eN.prototype={
$0:function(){var u=this.a
u.f.a6(0,u)},
$S:1}
Y.h5.prototype={
$0:function(){return Y.kS(this.a)},
$S:38}
Y.bS.prototype={
dk:function(a){var u,t,s=this,r=a.gaP(),q=H.d(W.ik("span",null),"$ii"),p=H.d(W.ik("div",null),"$ii"),o=H.d(W.ik("div",null),"$ii"),n=q.style
n.font=r
q.textContent="Hg"
n=p.style
n.display="inline-block"
n=p.style
n.width="1px"
n=p.style
n.height="0px"
J.iQ(o,p)
J.iQ(o,q)
n=document.body;(n&&C.L).cw(n,o)
try{n=p.style
n.verticalAlign="baseline"
n=C.c.F(p.offsetTop)-C.c.F(q.offsetTop)
s.a=n
u=p.style
u.verticalAlign="bottom"
u=C.c.F(p.offsetTop)-C.c.F(q.offsetTop)
s.c=u
s.b=u-n}catch(t){H.ax(t)
n=s.c=a.b
s.a=C.a.ae(n*7,8)
s.b=C.a.ae(n*2,8)}finally{n=o
u=n.parentNode
if(u!=null)J.k5(u,n)}}}
Y.de.prototype={
sM:function(a,b){this.J=b
this.W|=3},
sK:function(a,b){this.V=b
this.W|=3},
sat:function(a,b){this.a1=b
this.cJ=b.length
this.W|=3},
sA:function(a){var u=a.c,t=a.x,s=a.y,r=a.z
this.t=Y.R(a.a,a.b,u,a.Q,t,a.cy,a.f,a.dy,s,a.fr,a.db,a.dx,a.e,a.d,a.cx,r,a.ch,a.r)
this.W|=3},
saH:function(a,b){this.bB=!0
this.W|=3},
gI:function(a){this.a7()
return A.K.prototype.gI.call(this,this)},
gad:function(){this.a7()
return A.K.prototype.gad.call(this)},
ga0:function(){var u,t=this
t.a7()
u=t.J
t.a7()
return new U.O(0,0,u,t.V,[P.m])},
ab:function(a,b){var u,t=this
if(!(a<0)){t.a7()
u=a>=t.J}else u=!0
if(u)return
if(!(b<0)){t.a7()
u=b>=t.V}else u=!0
if(u)return
return t},
a4:function(a){var u=this
u.a7()
u.cm(a.e.c)
a.c.ac(a,u.aB)
u.bA=u.bA+a.b},
bM:function(a){var u=this
u.a7()
u.cm(a.e.c)
a.c.b7(a,u.aB,H.E(u.dy,"$iI",[L.aM],"$aI"))},
a7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=c1.W
if((c2&1)===0)return
else c1.W=c2&254
c2=c1.b_
C.b.sl(c2,0)
u=c1.t
t=V.as(u.b)
s=V.as(u.d)
r=V.as(u.db)
q=V.as(u.dx)
p=V.as(u.cx)
o=V.as(u.cy)
n=V.as(u.dy)
m=V.as(u.fr)
l=V.jD(u.Q)
k=V.jD(u.ch)
j=u.gaP()
i=Y.kX(u)
h=V.as(i.a)
g=V.as(i.b)
f=c1.J-r-q
e=$.iK()
d=H.h([],[P.G])
c=P.jb("\\r\\n|\\r|\\n")
b=C.d.d8(c1.a1,c)
e.font=j+" "
e.textAlign="start"
e.textBaseline="alphabetic"
e.setTransform(1,0,0,1,0,0)
for(a=0,a0="",a1="",a2=0,a3=0,a4=0;a4<b.length;++a4){a5=b[a4]
if(typeof a5!=="string")continue
C.b.i(d,c2.length)
if(!c1.bB){a5=c1.bo(a5)
C.b.i(c2,new Y.bk(a5,a))
a+=a5.length+1}else{H.ac(n)
a6=a5.split(" ")
for(a3=n,a0=null,a7=0;a7<a6.length;++a7){a8=a6[a7]
if(typeof a8!=="string")continue
a9=a0==null
b0=c1.bo(a9?a8:a0+" "+a8)
a2=e.measureText(b0).width
a2.toString
if(typeof a2!=="number")return H.a2(a2)
if(a3+a2>=f){if(a9){C.b.i(c2,new Y.bk(b0,a))
a+=b0.length+1
b0=null}else{C.b.i(c2,new Y.bk(a0,a))
a+=a0.length+1
b0=c1.bo(a8)}a3=0}a1=a0
a0=b0}if(a0!=null){C.b.i(c2,new Y.bk(a0,a))
a+=a0.length+1}}}c1.aq=c1.az=0
for(a9=p+t,b1=m+t+g,b2=0;b2<c2.length;++b2){b3=c2[b2]
b4=r+(C.b.bv(d,b2)?n:0)
b5=a9+b2*b1
b6=e.measureText(b3.a).width
b6.toString
b3.c=b4
b3.d=b5
b3.e=b6
b3.r=h
b3.x=g
b7=c1.az
if(typeof b6!=="number")return H.a2(b6)
c1.az=Math.max(b7,b4+b6+q)
c1.aq=b5+g+o}a9=s*2
b1=c1.az+a9
c1.az=b1
c1.aq+=a9
b8=c1.bB?c1.J:C.c.a5(b1)
b9=C.c.a5(c1.aq)
a9=c1.J
if(a9!==b8||c1.V!==b9)switch("none"){case"left":c1.J=b8
c1.V=b9
a9=b8
break
case"right":c1.c4(0,A.K.prototype.gI.call(c1,c1)-(b8-c1.J))
c1.J=b8
c1.V=b9
a9=b8
break
case"center":c1.c4(0,A.K.prototype.gI.call(c1,c1)-(b8-c1.J)/2)
c1.J=b8
c1.V=b9
a9=b8
break}f=a9-r-q
switch(k){case"center":c0=(c1.V-c1.aq)/2
break
case"bottom":c0=c1.V-c1.aq-s
break
default:c0=s}for(b2=0;b2<c2.length;++b2){b3=c2[b2]
switch(l){case"center":case"justify":b3.c=b3.c+(f-b3.e)/2
break
case"right":case"end":b3.c=b3.c+(f-b3.e)
break
default:b3.c+=s}b3.d+=c0}},
cm:function(a){var u,t,s,r,q,p,o,n=this,m=Math.sqrt(Math.abs(a.gaX())),l=n.aB,k=l==null?null:l.e
if(k==null)k=0
if(k<m*0.8)n.W|=2
if(k>m*1.25)n.W|=2
l=n.W
if((l&2)===0)return
n.W=l&253
u=C.c.a5(Math.max(1,n.J*m))
t=C.c.a5(Math.max(1,n.V*m))
l=n.aA
if(l==null){l=new L.bL(C.n)
if(u<=0)H.a0(P.aW("width"))
if(t<=0)H.a0(P.aW("height"))
s=l.a=V.aU(u)
r=l.b=V.aU(t)
q=W.cM(r,s)
l.c=l.d=q
p=q.getContext("2d")
p.fillStyle=V.jC(16777215)
p.fillRect(0,0,s,r)
n.aA=l
l=n.aB=l.gbK().bU(m)}else{l.b8(0,u,t)
l=n.aB=n.aA.gbK().bU(m)}o=l.geM()
l=n.aA
p=l.geF(l).getContext("2d")
l=o.a
p.setTransform(l[0],l[1],l[2],l[3],l[4],l[5])
p.clearRect(0,0,n.J,n.V)
n.em(p)
n.aA.fj()},
em:function(a){var u,t,s,r,q=this,p=q.t,o=C.Z.a5(p.x?p.b/10:p.b/20)
a.save()
a.beginPath()
a.rect(0,0,q.J,q.V)
a.clip()
a.font=p.gaP()+" "
a.textAlign="start"
a.textBaseline="alphabetic"
a.lineJoin=a.lineCap="round"
u=p.d
if(u>0){a.lineWidth=u*2
a.strokeStyle=V.iw(p.e)
for(u=q.b_,t=0;t<u.length;++t){s=u[t]
a.strokeText(s.a,s.c,s.d)}}a.lineWidth=o
a.strokeStyle=V.iw(p.c)
u=V.iw(p.c)
a.fillStyle=u
for(u=q.b_,t=0;t<u.length;++t){s=u[t]
a.fillText(s.a,s.c,s.d)
if(p.z){r=C.c.F(s.d+o)
if(C.a.bZ(o,2)!==0)r+=0.5
a.beginPath()
a.moveTo(s.c,r)
a.lineTo(s.c+s.e,r)
a.stroke()}}a.restore()},
bo:function(a){return a},
e6:function(a){H.d(a,"$ibD")},
eg:function(a){H.d(a,"$ibO")},
ea:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
H.d(a,"$ip")
u=a.x
t=a.y
s=$.iK()
s.setTransform(1,0,0,1,0,0)
for(r=e.b_,q=0;q<r.length;++q){p=r[q]
o=p.a
n=p.c
m=p.d
l=p.r
k=p.x
if(m-l<=t&&m+k>=t){for(m=o.length,j=1/0,i=0,h=0;h<=m;++h){g=s.measureText(C.d.aK(o,0,h)).width
g.toString
if(typeof g!=="number")return H.a2(g)
f=Math.abs(n+g-u)
if(f<j){i=h
j=f}}e.cJ=p.b+i
e.bA=0
e.W|=3}}}}
Y.f7.prototype={
gaP:function(){var u=this,t=u.b,s=u.a,r=""+u.r+" "+t+"px "+s
if(u.x)r="bold "+t+"px "+s
return u.y?"italic "+r:r}}
Y.bk.prototype={}
Q.eq.prototype={}
O.dL.prototype={
h:function(a){return J.aV(this.a)+",batalha="+J.aV(this.b)}}
V.b5.prototype={
h:function(a){var u=this
return"Nome:"+u.a+",velocidade:"+C.a.h(u.b)+",usabilidade:"+C.a.h(u.c)+",aprendizado:"+C.a.h(u.d)+",confiabilidade:"+C.a.h(u.e)},
gk:function(){return this.b},
gw:function(){return this.c},
ga2:function(){return this.d},
gu:function(){return this.e}}
X.ao.prototype={
h:function(a){return"SkillValor="+J.aV(this.a)+",skill="+J.aV(this.b)+",batalha="+J.aV(this.c)}}
F.he.prototype={
$1:function(a){H.d(a,"$ip")
C.b.i($.au.dy,D.i5(-0.5))},
$S:0}
F.hf.prototype={
$1:function(a){H.d(a,"$ip")
C.b.sl($.au.dy,0)},
$S:0}
F.hh.prototype={
$0:function(){var u=0,t=P.C(null),s,r,q,p
var $async$$0=P.D(function(a,b){if(a===1)return P.z(b,t)
while(true)switch(u){case 0:q=$.q.O.S($.au,3,K.jx())
p=q.gT(q)
p.a.R(p,1).d=1900
r=$.q.O.S($.c1,3,K.jx())
p=r.gT(r)
p.a.R(p,1).d=1900
s=P.bb(P.b8(3),-1)
u=1
break
case 1:return P.A(s,t)}})
return P.B($async$$0,t)},
$S:2}
F.hg.prototype={
$1:function(a){return this.d0(H.d(a,"$ip"))},
d0:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:r=s.a
r.$0()
u=2
return P.r(r.$0(),$async$$1)
case 2:$.q.G($.au)
$.q.G($.c1)
F.cC()
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hK.prototype={
$1:function(a){var u=this,t="Roboto",s=4278222976,r="left",q=null,p=4278190080,o="top"
$.an.sA(Y.R(t,23,s,r,!1,0,q,0,!1,0,0,0,p,0,0,!1,o,400))
F.J($.an,s,"Velocidade "+C.a.h(u.a),270,375,200,50)
$.am.sA(Y.R(t,23,s,r,!1,0,q,0,!1,0,0,0,p,0,0,!1,o,400))
F.J($.am,s,"Usabilidade "+C.a.h(u.b),270,415,200,50)
$.ai.sA(Y.R(t,23,s,r,!1,0,q,0,!1,0,0,0,p,0,0,!1,o,400))
F.J($.ai,s,"Aprendizado "+C.a.h(u.c),270,455,200,50)
$.aj.sA(Y.R(t,23,s,r,!1,0,q,0,!1,0,0,0,p,0,0,!1,o,400))
F.J($.aj,s,"Confiabilidade "+C.a.h(u.d),270,495,200,50)},
$S:15}
F.hL.prototype={
$1:function(a){var u=4278222976,t=4278190080
$.ak.sA(Y.R("Roboto",17,u,"left",!1,0,null,0,!1,0,0,0,t,0,0,!1,"top",400))
F.J($.ak,u,"O maior valor ganha!",240,557,190,50)
$.al.sA(Y.R("Roboto",17,u,"left",!1,0,null,0,!1,0,0,0,t,0,0,!1,"top",400))
F.J($.al,u,"O menor valor ganha!",240,597,190,50)},
$S:15}
F.hs.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.an,4278222848,"Velocidade "+C.a.h(this.a),270,375,200,50)},
$S:0}
F.ht.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.an,4278222976,"Velocidade "+C.a.h(this.a),270,375,200,50)},
$S:0}
F.hu.prototype={
$1:function(a){return this.d6(H.d(a,"$ip"))},
d6:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:u=2
return P.r(s.a.$1(a),$async$$1)
case 2:r=$.an.t
r.z=r.y=r.x=!0
$.aF=1
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hC.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.am,4278222848,"Usabilidade "+C.a.h(this.a),270,415,200,50)},
$S:0}
F.hD.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.am,4278222976,"Usabilidade "+C.a.h(this.a),270,415,200,50)},
$S:0}
F.hE.prototype={
$1:function(a){return this.d5(H.d(a,"$ip"))},
d5:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:u=2
return P.r(s.a.$1(a),$async$$1)
case 2:r=$.am.t
r.z=r.y=r.x=!0
$.aF=2
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hF.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.ai,4278222848,"Aprendizado "+C.a.h(this.a),270,455,200,50)},
$S:0}
F.hG.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.ai,4278222976,"Aprendizado "+C.a.h(this.a),270,455,200,50)},
$S:0}
F.hH.prototype={
$1:function(a){return this.d4(H.d(a,"$ip"))},
d4:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:u=2
return P.r(s.a.$1(a),$async$$1)
case 2:r=$.ai.t
r.z=r.y=r.x=!0
$.aF=3
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hI.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.aj,4278222848,"Confiabilidade "+C.a.h(this.a),270,495,200,50)},
$S:0}
F.hJ.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.aj,4278222976,"Confiabilidade "+C.a.h(this.a),270,495,200,50)},
$S:0}
F.hv.prototype={
$1:function(a){return this.d3(H.d(a,"$ip"))},
d3:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:u=2
return P.r(s.a.$1(a),$async$$1)
case 2:r=$.aj.t
r.z=r.y=r.x=!0
$.aF=4
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hw.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.ak,4278222848,"O maior valor ganha!",240,557,190,50)},
$S:0}
F.hx.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.ak,4278222976,"O maior valor ganha!",240,557,190,50)},
$S:0}
F.hy.prototype={
$1:function(a){return this.d2(H.d(a,"$ip"))},
d2:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:u=2
return P.r(s.a.$1(a),$async$$1)
case 2:r=$.ak.t
r.z=r.y=r.x=!0
$.aw=1
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hz.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.al,4278222848,"O menor valor ganha!",240,597,190,50)},
$S:0}
F.hA.prototype={
$1:function(a){H.d(a,"$ip")
F.J($.al,4278222976,"O menor valor ganha!",240,597,190,50)},
$S:0}
F.hB.prototype={
$1:function(a){return this.d1(H.d(a,"$ip"))},
d1:function(a){var u=0,t=P.C(P.u),s=this,r
var $async$$1=P.D(function(b,c){if(b===1)return P.z(c,t)
while(true)switch(u){case 0:u=2
return P.r(s.a.$1(a),$async$$1)
case 2:r=$.al.t
r.z=r.y=r.x=!0
$.aw=2
return P.A(null,t)}})
return P.B($async$$1,t)},
$S:3}
F.hp.prototype={
$1:function(a){H.d(a,"$ip")
C.b.i(this.a.a.dy,D.i5(-0.5))},
$S:0}
F.hq.prototype={
$1:function(a){H.d(a,"$ip")
C.b.sl(this.a.a.dy,0)},
$S:0}
F.hr.prototype={
$1:function(a){H.d(a,"$ip")
F.ah()},
$S:0}
F.hm.prototype={
$1:function(a){H.d(a,"$ip")
C.b.i($.b4.dy,D.i5(-0.5))},
$S:0}
F.hn.prototype={
$1:function(a){H.d(a,"$ip")
C.b.sl($.b4.dy,0)},
$S:0}
F.ho.prototype={
$1:function(a){H.d(a,"$ip")
F.aS()},
$S:0}
F.ha.prototype={
$0:function(){$.q.G($.c4)
$.q.G($.c5)
F.hN()},
$S:2}
F.hb.prototype={
$0:function(){$.aw=$.aF=-1},
$S:2};(function aliases(){var u=J.M.prototype
u.dd=u.h
u=J.cZ.prototype
u.de=u.h
u=A.K.prototype
u.c4=u.sI
u=A.bx.prototype
u.bc=u.ab
u.dc=u.a4
u=L.bJ.prototype
u.bd=u.am})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"kZ","kv",13)
t(P,"l6","kP",6)
t(P,"l7","kQ",6)
t(P,"l8","kR",6)
u(P,"jB","l4",2)
s(P,"l9",1,null,["$2","$1"],["jp",function(a){return P.jp(a,null)}],7,0)
u(P,"jA","l0",2)
r(P.dl.prototype,"geI",0,1,null,["$2","$1"],["ap","cA"],7,0)
r(P.dv.prototype,"geG",1,0,null,["$1","$0"],["a6","eH"],44,0)
r(P.L.prototype,"gdB",0,1,null,["$2","$1"],["P","dC"],7,0)
q(P.dq.prototype,"gep","eq",2)
t(K,"m7","kL",5)
t(K,"bX","kJ",5)
t(K,"jx","kI",5)
t(K,"ir","kK",5)
var o
p(o=A.a8.prototype,"geb","ec",22)
p(o,"ged","ee",46)
p(o,"geh","ei",24)
p(o,"ge7","e8",25)
p(A.dd.prototype,"gdv","dw",29)
p(o=L.cn.prototype,"gdU","dV",17)
p(o,"gdW","dX",17)
p(L.d9.prototype,"ge_","e0",45)
p(o=N.cS.prototype,"ge3","e4",16)
p(o,"ge1","e2",16)
p(o=Y.de.prototype,"ge5","e6",39)
p(o,"gef","eg",40)
p(o,"ge9","ea",41)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.w,null)
s(P.w,[H.ic,J.M,J.dJ,P.U,H.ci,P.ad,H.bB,H.ca,H.fb,P.aY,H.cd,H.du,H.cq,P.em,H.eg,H.ei,H.cX,H.ds,H.fj,H.f4,H.h_,P.h0,P.fl,P.f1,P.fv,P.fu,P.Q,P.dl,P.ar,P.L,P.dj,P.aP,P.fy,P.cy,P.dq,P.fY,P.a3,P.h2,P.aL,P.a_,P.m,P.by,P.eu,P.dc,P.fC,P.e4,P.I,P.u,P.bf,P.cm,P.N,P.f0,P.v,P.cp,W.dX,W.ce,W.e2,P.fQ,P.aB,K.di,K.ef,K.f9,K.dg,K.fa,R.cQ,A.S,A.dM,A.dO,L.aM,L.d9,A.co,A.bM,A.aq,A.eV,A.bU,A.bV,A.bm,L.dQ,L.bg,L.bh,L.d8,L.bi,L.ez,L.b0,L.dr,L.dt,L.bJ,L.ct,L.bK,L.aN,L.eI,L.bL,L.da,L.aO,L.eK,R.a4,R.cc,R.cf,T.d0,T.b_,U.T,U.O,N.cS,O.a5,O.P,Y.bS,Y.f7,Y.bk,Q.eq,O.dL,V.b5,X.ao])
s(J.M,[J.ec,J.cW,J.cZ,J.bc,J.cg,J.bC,H.d4,W.ba,W.cN,W.dn,W.dZ,W.cO,W.e,W.aC,W.dw,P.cL,P.cR,P.d5,P.db,P.bj,P.df,P.bP])
s(J.cZ,[J.ev,J.bQ,J.bd])
t(J.ib,J.bc)
s(J.cg,[J.cV,J.cU])
s(P.U,[H.a1,H.d_,H.cr,P.eb,H.fZ])
s(H.a1,[H.be,H.eh])
s(H.be,[H.f5,H.eo])
t(H.e1,H.d_)
s(P.ad,[H.en,H.fh])
s(H.ca,[H.ew,H.i2,H.f6,H.ed,H.hS,H.hT,H.hU,P.fq,P.fp,P.fr,P.fs,P.h1,P.fn,P.fm,P.h3,P.h4,P.h9,P.e5,P.e7,P.e6,P.fD,P.fL,P.fH,P.fI,P.fJ,P.fF,P.fK,P.fE,P.fO,P.fP,P.fN,P.fM,P.f2,P.f3,P.fS,P.h8,P.fV,P.fU,P.fW,P.el,P.e_,P.e0,W.fB,P.hj,A.dP,A.dN,A.eD,A.eE,A.eZ,A.eW,A.eX,A.eY,L.eB,L.h6,D.dV,O.eR,O.eQ,O.eS,O.eP,O.eO,O.eL,O.eM,O.eN,Y.h5,F.he,F.hf,F.hh,F.hg,F.hK,F.hL,F.hs,F.ht,F.hu,F.hC,F.hD,F.hE,F.hF,F.hG,F.hH,F.hI,F.hJ,F.hv,F.hw,F.hx,F.hy,F.hz,F.hA,F.hB,F.hp,F.hq,F.hr,F.hm,F.hn,F.ho,F.ha,F.hb])
s(P.aY,[H.et,H.ee,H.fe,H.dh,H.dT,H.eT,P.dK,P.bE,P.aH,P.ff,P.fd,P.bN,P.dW,P.dY,T.ej])
s(H.f6,[H.f_,H.c8])
t(H.fk,P.dK)
t(P.ek,P.em)
t(H.H,P.ek)
t(H.fi,P.eb)
t(H.d1,H.d4)
s(H.d1,[H.cu,H.cw])
t(H.cv,H.cu)
t(H.d2,H.cv)
t(H.cx,H.cw)
t(H.d3,H.cx)
t(H.er,H.d2)
t(H.es,H.d3)
s(P.f1,[P.fX,W.fz,R.b9])
t(P.dm,P.fX)
t(P.ft,P.dm)
t(P.fw,P.fv)
t(P.aa,P.fw)
t(P.fo,P.fu)
s(P.dl,[P.dk,P.dv])
t(P.fx,P.fy)
t(P.cz,P.cy)
t(P.fT,P.h2)
s(P.m,[P.aE,P.G])
s(P.aH,[P.cl,P.e8])
s(W.ba,[W.ae,W.cs])
s(W.ae,[W.i,W.b6])
t(W.k,W.i)
s(W.k,[W.dH,W.dI,W.cK,W.aX,W.e3,W.aA,W.cj,W.eU])
t(W.cb,W.dn)
s(W.e,[W.bl,P.aK])
s(W.bl,[W.aZ,W.ap,W.b1])
t(W.dx,W.dw)
t(W.f8,W.dx)
t(W.fg,W.cj)
t(W.aR,W.ap)
t(W.dp,W.cO)
t(W.ij,W.fz)
s(P.aP,[W.fA,R.W])
t(A.K,R.cQ)
s(A.K,[A.a6,A.cT,A.dd])
t(A.Y,L.aM)
s(A.cT,[A.bx,Y.de])
t(A.eC,L.d9)
s(A.bx,[A.a7,A.a8])
s(L.ez,[L.d7,L.cn])
s(L.bJ,[L.eF,L.eG,L.eH,D.b7])
s(R.a4,[R.dS,R.ea,R.bD,R.bO])
s(R.dS,[R.bz,R.bA,R.bI])
s(R.ea,[R.p,R.b2])
t(D.dU,A.Y)
u(H.cu,P.aL)
u(H.cv,H.bB)
u(H.cw,P.aL)
u(H.cx,H.bB)
u(W.dn,W.dX)
u(W.dw,P.aL)
u(W.dx,W.ce)})()
var v={mangledGlobalNames:{G:"int",aE:"double",m:"num",v:"String",a_:"bool",u:"Null",I:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.u,args:[R.p]},{func:1,ret:P.u},{func:1,ret:-1},{func:1,ret:[P.Q,P.u],args:[R.p]},{func:1,ret:P.u,args:[,]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.w],opt:[P.N]},{func:1,ret:P.a_,args:[O.P]},{func:1,ret:P.v,args:[P.G]},{func:1,ret:-1,args:[A.bm]},{func:1,args:[,]},{func:1,ret:P.u,args:[,,]},{func:1,ret:P.G},{func:1,ret:P.u,args:[,P.N]},{func:1,ret:-1,args:[R.a4]},{func:1,ret:-1,args:[W.e]},{func:1,ret:-1,args:[P.aK]},{func:1,ret:A.S,args:[W.aA]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.a_,args:[A.a8]},{func:1,ret:P.u,args:[P.G,,]},{func:1,ret:-1,args:[W.ap]},{func:1,args:[W.e]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[P.v]},{func:1,ret:-1,args:[A.a8]},{func:1,ret:A.bV},{func:1,ret:-1,args:[A.S]},{func:1,ret:P.u,args:[{func:1,ret:-1}]},{func:1,ret:P.a_,args:[P.G]},{func:1,ret:P.u,args:[P.m]},{func:1,ret:[P.L,,],args:[,]},{func:1,ret:D.b7},{func:1,ret:P.u,args:[,],opt:[P.N]},{func:1,ret:[P.Q,,],args:[O.P]},{func:1,args:[,P.v]},{func:1,ret:Y.bS},{func:1,ret:-1,args:[R.bD]},{func:1,ret:-1,args:[R.bO]},{func:1,ret:-1,args:[R.p]},{func:1,args:[P.v]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,opt:[P.w]},{func:1,ret:-1,args:[P.m]},{func:1,ret:-1,args:[W.aR]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.L=W.cK.prototype
C.j=W.aX.prototype
C.Y=J.M.prototype
C.b=J.bc.prototype
C.Z=J.cU.prototype
C.a=J.cV.prototype
C.w=J.cW.prototype
C.c=J.cg.prototype
C.d=J.bC.prototype
C.a_=J.bd.prototype
C.y=J.ev.prototype
C.h=P.bj.prototype
C.q=J.bQ.prototype
C.J=W.aR.prototype
C.K=W.cs.prototype
C.f=new L.dQ()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.R=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.Q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.P=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.t=function(hooks) { return hooks; }

C.S=new P.eu()
C.a6=new L.eK()
C.T=new P.fQ()
C.e=new P.fT()
C.U=new P.by(0)
C.u=new R.cc("EventPhase.CAPTURING_PHASE")
C.V=new R.cc("EventPhase.AT_TARGET")
C.W=new R.cc("EventPhase.BUBBLING_PHASE")
C.k=new R.cf("InputEventMode.MouseOnly")
C.X=new R.cf("InputEventMode.TouchOnly")
C.v=new R.cf("InputEventMode.MouseAndTouch")
C.l=H.h(u([0]),[P.G])
C.x=H.h(u([1]),[P.G])
C.a0=H.h(u([]),[P.u])
C.m=new L.d8("RenderEngine.WebGL")
C.z=new L.d8("RenderEngine.Canvas2D")
C.a1=new L.da(9728)
C.n=new L.da(9729)
C.A=new A.aq("StageAlign.TOP_LEFT")
C.B=new A.aq("StageAlign.TOP")
C.C=new A.aq("StageAlign.TOP_RIGHT")
C.D=new A.aq("StageAlign.LEFT")
C.i=new A.aq("StageAlign.NONE")
C.E=new A.aq("StageAlign.RIGHT")
C.F=new A.aq("StageAlign.BOTTOM_LEFT")
C.G=new A.aq("StageAlign.BOTTOM")
C.H=new A.aq("StageAlign.BOTTOM_RIGHT")
C.o=new A.co("StageRenderMode.AUTO")
C.I=new A.co("StageRenderMode.ONCE")
C.a2=new A.co("StageRenderMode.STOP")
C.a3=new A.bM("StageScaleMode.EXACT_FIT")
C.a4=new A.bM("StageScaleMode.NO_BORDER")
C.a5=new A.bM("StageScaleMode.NO_SCALE")
C.p=new A.bM("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.ex=null
$.ey=null
$.aJ=0
$.c9=null
$.iV=null
$.io=!1
$.jJ=null
$.jw=null
$.jM=null
$.hP=null
$.hV=null
$.iz=null
$.bW=null
$.cA=null
$.cB=null
$.ip=!1
$.x=C.e
$.ab=[]
$.ih=null
$.o=0
$.jj=1
$.eA=0
$.jn=17976931348623157e292
$.im=-1
$.q=null
$.au=null
$.c1=null
$.iA=null
$.an=null
$.am=null
$.ai=null
$.aj=null
$.ak=null
$.al=null
$.aF=null
$.aw=null
$.iB=null
$.dF=null
$.dE=null
$.dC=null
$.dD=null
$.t=null
$.n=null
$.b4=null
$.it=null
$.c5=null
$.c4=null
$.bp=null
$.bq=null
$.i3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lA","jP",function(){return H.jH("_$dart_dartClosure")})
u($,"lD","iH",function(){return H.jH("_$dart_js")})
u($,"lL","jS",function(){return H.aQ(H.fc({
toString:function(){return"$receiver$"}}))})
u($,"lM","jT",function(){return H.aQ(H.fc({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lN","jU",function(){return H.aQ(H.fc(null))})
u($,"lO","jV",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lR","jY",function(){return H.aQ(H.fc(void 0))})
u($,"lS","jZ",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lQ","jX",function(){return H.aQ(H.je(null))})
u($,"lP","jW",function(){return H.aQ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lU","k0",function(){return H.aQ(H.je(void 0))})
u($,"lT","k_",function(){return H.aQ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lX","iJ",function(){return P.kO()})
u($,"lz","jO",function(){return new A.dO(H.h([1,2],[P.aE]))})
u($,"m5","iN",function(){return[]})
u($,"m2","iL",function(){return H.h([],[[R.W,R.bz]])})
u($,"m3","iM",function(){return H.h([],[[R.W,R.bA]])})
u($,"m6","iO",function(){return H.h([],[[R.W,R.bI]])})
u($,"md","iP",function(){var t=W.ly().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"mh","k3",function(){return Q.kV()})
u($,"m0","k1",function(){return W.cM(16,16)})
u($,"m1","iK",function(){var t=$.k1()
return(t&&C.j).geJ(t)})
u($,"m4","k2",function(){return H.j4(P.v,Y.bS)})
u($,"lF","iI",function(){return H.j4(P.v,Q.eq)})
u($,"lE","jQ",function(){return P.X(P.v)})
u($,"lG","jR",function(){var t=$.jQ()
t.toString
return new P.ft(t,[H.a(t,0)])})
u($,"mj","aG",function(){return[]})
u($,"ma","az",function(){return[]})
u($,"m9","ay",function(){return[]})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.M,CanvasGradient:J.M,CanvasPattern:J.M,DOMError:J.M,MediaError:J.M,Navigator:J.M,NavigatorConcurrentHardware:J.M,NavigatorUserMediaError:J.M,OverconstrainedError:J.M,PositionError:J.M,TextMetrics:J.M,SVGAnimatedLength:J.M,SVGAnimatedLengthList:J.M,SVGAnimatedNumber:J.M,WebGLActiveInfo:J.M,WebGL2RenderingContext:J.M,WebGLShader:J.M,SQLError:J.M,ArrayBufferView:H.d4,Float32Array:H.er,Int16Array:H.es,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dH,HTMLAreaElement:W.dI,HTMLBodyElement:W.cK,HTMLCanvasElement:W.aX,CanvasRenderingContext2D:W.cN,CDATASection:W.b6,CharacterData:W.b6,Comment:W.b6,ProcessingInstruction:W.b6,Text:W.b6,CSSStyleDeclaration:W.cb,MSStyleCSSProperties:W.cb,CSS2Properties:W.cb,DOMException:W.dZ,DOMRectReadOnly:W.cO,SVGAElement:W.i,SVGAnimateElement:W.i,SVGAnimateMotionElement:W.i,SVGAnimateTransformElement:W.i,SVGAnimationElement:W.i,SVGCircleElement:W.i,SVGClipPathElement:W.i,SVGDefsElement:W.i,SVGDescElement:W.i,SVGDiscardElement:W.i,SVGEllipseElement:W.i,SVGFEBlendElement:W.i,SVGFEColorMatrixElement:W.i,SVGFEComponentTransferElement:W.i,SVGFECompositeElement:W.i,SVGFEConvolveMatrixElement:W.i,SVGFEDiffuseLightingElement:W.i,SVGFEDisplacementMapElement:W.i,SVGFEDistantLightElement:W.i,SVGFEFloodElement:W.i,SVGFEFuncAElement:W.i,SVGFEFuncBElement:W.i,SVGFEFuncGElement:W.i,SVGFEFuncRElement:W.i,SVGFEGaussianBlurElement:W.i,SVGFEImageElement:W.i,SVGFEMergeElement:W.i,SVGFEMergeNodeElement:W.i,SVGFEMorphologyElement:W.i,SVGFEOffsetElement:W.i,SVGFEPointLightElement:W.i,SVGFESpecularLightingElement:W.i,SVGFESpotLightElement:W.i,SVGFETileElement:W.i,SVGFETurbulenceElement:W.i,SVGFilterElement:W.i,SVGForeignObjectElement:W.i,SVGGElement:W.i,SVGGeometryElement:W.i,SVGGraphicsElement:W.i,SVGImageElement:W.i,SVGLineElement:W.i,SVGLinearGradientElement:W.i,SVGMarkerElement:W.i,SVGMaskElement:W.i,SVGMetadataElement:W.i,SVGPathElement:W.i,SVGPatternElement:W.i,SVGPolygonElement:W.i,SVGPolylineElement:W.i,SVGRadialGradientElement:W.i,SVGRectElement:W.i,SVGScriptElement:W.i,SVGSetElement:W.i,SVGStopElement:W.i,SVGStyleElement:W.i,SVGElement:W.i,SVGSVGElement:W.i,SVGSwitchElement:W.i,SVGSymbolElement:W.i,SVGTSpanElement:W.i,SVGTextContentElement:W.i,SVGTextElement:W.i,SVGTextPathElement:W.i,SVGTextPositioningElement:W.i,SVGTitleElement:W.i,SVGUseElement:W.i,SVGViewElement:W.i,SVGGradientElement:W.i,SVGComponentTransferFunctionElement:W.i,SVGFEDropShadowElement:W.i,SVGMPathElement:W.i,Element:W.i,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,Event:W.e,InputEvent:W.e,Animation:W.ba,EventTarget:W.ba,HTMLFormElement:W.e3,HTMLImageElement:W.aA,KeyboardEvent:W.aZ,HTMLAudioElement:W.cj,HTMLMediaElement:W.cj,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.ae,DocumentFragment:W.ae,HTMLDocument:W.ae,ShadowRoot:W.ae,XMLDocument:W.ae,Attr:W.ae,DocumentType:W.ae,Node:W.ae,HTMLSelectElement:W.eU,Touch:W.aC,TouchEvent:W.b1,TouchList:W.f8,CompositionEvent:W.bl,FocusEvent:W.bl,TextEvent:W.bl,UIEvent:W.bl,HTMLVideoElement:W.fg,WheelEvent:W.aR,Window:W.cs,DOMWindow:W.cs,ClientRect:W.dp,DOMRect:W.dp,WebGLBuffer:P.cL,WebGLContextEvent:P.aK,WebGLFramebuffer:P.cR,WebGLProgram:P.d5,WebGLRenderbuffer:P.db,WebGLRenderingContext:P.bj,WebGLTexture:P.df,WebGLUniformLocation:P.bP})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,TextMetrics:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,Animation:true,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.cJ,[])
else F.cJ([])})})()
//# sourceMappingURL=main.dart.js.map
