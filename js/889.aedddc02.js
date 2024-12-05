"use strict";(self["webpackChunknetflixkekw"]=self["webpackChunknetflixkekw"]||[]).push([[889],{2484:function(r,e,t){t.d(e,{A:function(){return l}});var o=t(6768),n=t(4232);const i={class:"wrapper__input"},s=["placeholder"],a={class:"input__error"};function c(r,e,t,c,u,p){return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("input",{type:"text",class:"input",placeholder:t.textForPlaceholder,onInput:e[0]||(e[0]=e=>r.$emit("returnValue",e.target.value))},null,40,s),(0,o.Lk)("div",a,(0,n.v_)(t.error),1)])}var u={data(){return{}},props:["textForPlaceholder","error"]},p=t(1241);const f=(0,p.A)(u,[["render",c],["__scopeId","data-v-a976c2ac"]]);var l=f},2889:function(r,e,t){t.r(e),t.d(e,{default:function(){return x}});var o=t(6768);const n={class:"wrapper"},i={class:"wrapper__forms"},s={key:0,class:"wrapper__logIn"},a={key:1,class:"wrapper__signIn"};function c(r,e,t,c,u,p){const f=(0,o.g2)("router-link"),l=(0,o.g2)("inputComponent"),h=(0,o.g2)("passwordComponent");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(f,{to:"/",class:"wrapper__back btn"},{default:(0,o.k6)((()=>e[9]||(e[9]=[(0,o.eW)("Вернуться")]))),_:1}),(0,o.Lk)("div",i,["enter"==this.section?((0,o.uX)(),(0,o.CE)("div",s,[e[10]||(e[10]=(0,o.Lk)("h2",{class:"wrapper__logIn-title"},"Войти в аккаунт",-1)),(0,o.bF)(l,{error:this.errors.errorLogin,textForPlaceholder:"Логин",class:"wrapper__input-form",onReturnValue:e[0]||(e[0]=r=>this.Login=r)},null,8,["error"]),(0,o.bF)(h,{error:this.errors.errorPassword,textForPlaceholder:"Пароль",class:"wrapper__input-form",onReturnValue:e[1]||(e[1]=r=>p.hashForPassword(r))},null,8,["error"]),(0,o.Lk)("div",{class:"btn btn__signIn",onClick:e[2]||(e[2]=(...r)=>p.signInUser&&p.signInUser(...r))},"Войти"),(0,o.Lk)("div",{class:"btn__logIn",onClick:e[3]||(e[3]=r=>this.section="create")},"Создать аккаунт")])):((0,o.uX)(),(0,o.CE)("div",a,[e[11]||(e[11]=(0,o.Lk)("h2",{class:"wrapper__logIn-title"},"Зарегистрируйте аккаунт",-1)),(0,o.bF)(l,{error:this.errors.errorName,textForPlaceholder:"Имя",class:"wrapper__input-form",onReturnValue:e[4]||(e[4]=r=>this.Username=r)},null,8,["error"]),(0,o.bF)(l,{error:this.errors.errorLogin,textForPlaceholder:"Логин",class:"wrapper__input-form",onReturnValue:e[5]||(e[5]=r=>this.Login=r)},null,8,["error"]),(0,o.bF)(h,{error:this.errors.errorPassword,textForPlaceholder:"Пароль",class:"wrapper__input-form",onReturnValue:e[6]||(e[6]=r=>p.hashForPassword(r))},null,8,["error"]),(0,o.Lk)("div",{class:"btn btn__signIn",onClick:e[7]||(e[7]=(...r)=>p.registerUser&&p.registerUser(...r))},"Зарегистрироваться"),(0,o.Lk)("div",{class:"btn__logIn",onClick:e[8]||(e[8]=r=>this.section="enter")},"Войти в аккаунт")]))])])}t(6573),t(8100),t(7936),t(7467),t(4732),t(9577),t(1454);var u=t(2484),p=t(4232);const f={class:"wrapper__input"},l=["type","placeholder"],h=["src"],d={class:"input__error"};function y(r,e,n,i,s,a){return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("input",{type:this.isClick?"text":"password",class:"input",placeholder:n.textForPlaceholder,onInput:e[0]||(e[0]=e=>r.$emit("returnValue",e.target.value))},null,40,l),(0,o.Lk)("img",{class:"input__eye-btn",src:this.isClick?t(2710):t(6226),onMouseup:e[1]||(e[1]=r=>this.isClick=!1),onMousedown:e[2]||(e[2]=r=>this.isClick=!0)},null,40,h),(0,o.Lk)("div",d,(0,p.v_)(n.error),1)])}var g={data(){return{isClick:!1}},props:["textForPlaceholder","error"]},w=t(1241);const v=(0,w.A)(g,[["render",y],["__scopeId","data-v-1fc525b5"]]);var _=v,A={data(){return{section:"enter",Username:"",Login:"",hashPassword:"",error:"",errors:{errorName:"",errorLogin:"",errorPassword:""}}},components:{inputComponent:u.A,passwordComponent:_},methods:{async fillLocalStorage(r){console.log(r),localStorage.setItem("user",JSON.stringify({name:r.name,login:r.login,role:r.role})),window.location="/Zetflix/"},async hashForPassword(r){this.hashPassword=await this.hashing(r)},async hashing(r){const e=r,t=new TextEncoder,o=t.encode(e),n=await crypto.subtle.digest("SHA-256",o),i=Array.from(new Uint8Array(n)),s=i.map((r=>r.toString(16).padStart(2,"0"))).join("");return console.log(s),s},async registerUser(){if(""==this.Username)this.errors.errorName="Укажи имя хуила)";else if(""==this.Login)this.errors.errorName="",this.errors.errorLogin="Укажи логин хуила)";else if(""==this.password)this.errors.errorName="",this.errors.errorLogin="",this.errors.errorPassword="Укажи пароль хуила)";else{this.errors.errorName="",this.errors.errorLogin="",this.errors.errorPassword="";try{let e=await fetch(`https://1d95bdc879b5963a.mokky.dev/users?login=${this.Login}`),t=await e.json();if(0!=t.length)this.errors.errorLogin="Такой логин уже есть";else try{await fetch("https://1d95bdc879b5963a.mokky.dev/users",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({name:this.Username,login:this.Login,password:this.hashPassword,role:"Зритель"})}),this.fillLocalStorage({name:this.Username,login:this.Login,role:"Зритель"})}catch(r){console.log(r)}}catch(r){console.log(r)}}},async signInUser(){if(""==this.Login)this.errors.errorLogin="Укажи логин сука)";else if(""==this.password)this.errors.errorLogin="",this.errors.errorPassword="Укажи пароль сука)";else{this.errors.errorLogin="",this.errors.errorPassword="";try{let r=await fetch(`https://1d95bdc879b5963a.mokky.dev/users?login=${this.Login}&password=${this.hashPassword}`),e=await r.json();0!=e.length?this.fillLocalStorage({name:e[0].name,login:e[0].login,role:e[0].role}):this.errors.errorLogin="Такого пользователя нет"}catch(r){console.log(r)}}}}};const m=(0,w.A)(A,[["render",c],["__scopeId","data-v-35d5b6c6"]]);var x=m},6226:function(r,e,t){r.exports=t.p+"img/closed-eye.8caf3a33.svg"},2710:function(r,e,t){r.exports=t.p+"img/open-eye.22db9f44.svg"},3506:function(r,e,t){var o=t(3925),n=String,i=TypeError;r.exports=function(r){if(o(r))return r;throw new i("Can't set "+n(r)+" as a prototype")}},7811:function(r){r.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(r,e,t){var o=t(4576),n=t(6706),i=t(2195),s=o.ArrayBuffer,a=o.TypeError;r.exports=s&&n(s.prototype,"byteLength","get")||function(r){if("ArrayBuffer"!==i(r))throw new a("ArrayBuffer expected");return r.byteLength}},3238:function(r,e,t){var o=t(4576),n=t(7476),i=t(7394),s=o.ArrayBuffer,a=s&&s.prototype,c=a&&n(a.slice);r.exports=function(r){if(0!==i(r))return!1;if(!c)return!1;try{return c(r,0,0),!1}catch(e){return!0}}},5169:function(r,e,t){var o=t(3238),n=TypeError;r.exports=function(r){if(o(r))throw new n("ArrayBuffer is detached");return r}},5636:function(r,e,t){var o=t(4576),n=t(9504),i=t(6706),s=t(7696),a=t(5169),c=t(7394),u=t(4483),p=t(1548),f=o.structuredClone,l=o.ArrayBuffer,h=o.DataView,d=Math.min,y=l.prototype,g=h.prototype,w=n(y.slice),v=i(y,"resizable","get"),_=i(y,"maxByteLength","get"),A=n(g.getInt8),m=n(g.setInt8);r.exports=(p||u)&&function(r,e,t){var o,n=c(r),i=void 0===e?n:s(e),y=!v||!v(r);if(a(r),p&&(r=f(r,{transfer:[r]}),n===i&&(t||y)))return r;if(n>=i&&(!t||y))o=w(r,0,i);else{var g=t&&!y&&_?{maxByteLength:_(r)}:void 0;o=new l(i,g);for(var x=new h(r),L=new h(o),b=d(i,n),k=0;k<b;k++)m(L,k,A(x,k))}return p||u(r),o}},4644:function(r,e,t){var o,n,i,s=t(7811),a=t(3724),c=t(4576),u=t(4901),p=t(34),f=t(9297),l=t(6955),h=t(6823),d=t(6699),y=t(6840),g=t(2106),w=t(1625),v=t(2787),_=t(2967),A=t(8227),m=t(3392),x=t(1181),L=x.enforce,b=x.get,k=c.Int8Array,C=k&&k.prototype,T=c.Uint8ClampedArray,I=T&&T.prototype,E=k&&v(k),P=C&&v(C),B=Object.prototype,F=c.TypeError,U=A("toStringTag"),R=m("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",O=s&&!!_&&"Opera"!==l(c.opera),S=!1,D={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},M=function(r){if(!p(r))return!1;var e=l(r);return"DataView"===e||f(D,e)||f(V,e)},j=function(r){var e=v(r);if(p(e)){var t=b(e);return t&&f(t,N)?t[N]:j(e)}},W=function(r){if(!p(r))return!1;var e=l(r);return f(D,e)||f(V,e)},X=function(r){if(W(r))return r;throw new F("Target is not a typed array")},Y=function(r){if(u(r)&&(!_||w(E,r)))return r;throw new F(h(r)+" is not a typed array constructor")},$=function(r,e,t,o){if(a){if(t)for(var n in D){var i=c[n];if(i&&f(i.prototype,r))try{delete i.prototype[r]}catch(s){try{i.prototype[r]=e}catch(u){}}}P[r]&&!t||y(P,r,t?e:O&&C[r]||e,o)}},G=function(r,e,t){var o,n;if(a){if(_){if(t)for(o in D)if(n=c[o],n&&f(n,r))try{delete n[r]}catch(i){}if(E[r]&&!t)return;try{return y(E,r,t?e:O&&E[r]||e)}catch(i){}}for(o in D)n=c[o],!n||n[r]&&!t||y(n,r,e)}};for(o in D)n=c[o],i=n&&n.prototype,i?L(i)[N]=n:O=!1;for(o in V)n=c[o],i=n&&n.prototype,i&&(L(i)[N]=n);if((!O||!u(E)||E===Function.prototype)&&(E=function(){throw new F("Incorrect invocation")},O))for(o in D)c[o]&&_(c[o],E);if((!O||!P||P===B)&&(P=E.prototype,O))for(o in D)c[o]&&_(c[o].prototype,P);if(O&&v(I)!==P&&_(I,P),a&&!f(P,U))for(o in S=!0,g(P,U,{configurable:!0,get:function(){return p(this)?this[R]:void 0}}),D)c[o]&&d(c[o],R,o);r.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:S&&R,aTypedArray:X,aTypedArrayConstructor:Y,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:j,isView:M,isTypedArray:W,TypedArray:E,TypedArrayPrototype:P}},9928:function(r,e,t){var o=t(6198),n=t(1291),i=RangeError;r.exports=function(r,e,t,s){var a=o(r),c=n(t),u=c<0?a+c:c;if(u>=a||u<0)throw new i("Incorrect index");for(var p=new e(a),f=0;f<a;f++)p[f]=f===u?s:r[f];return p}},4483:function(r,e,t){var o,n,i,s,a=t(4576),c=t(9429),u=t(1548),p=a.structuredClone,f=a.ArrayBuffer,l=a.MessageChannel,h=!1;if(u)h=function(r){p(r,{transfer:[r]})};else if(f)try{l||(o=c("worker_threads"),o&&(l=o.MessageChannel)),l&&(n=new l,i=new f(2),s=function(r){n.port1.postMessage(null,[r])},2===i.byteLength&&(s(i),0===i.byteLength&&(h=s)))}catch(d){}r.exports=h},6193:function(r,e,t){var o=t(4215);r.exports="NODE"===o},4215:function(r,e,t){var o=t(4576),n=t(2839),i=t(2195),s=function(r){return n.slice(0,r.length)===r};r.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":o.Bun&&"string"==typeof Bun.version?"BUN":o.Deno&&"object"==typeof Deno.version?"DENO":"process"===i(o.process)?"NODE":o.window&&o.document?"BROWSER":"REST"}()},9429:function(r,e,t){var o=t(4576),n=t(6193);r.exports=function(r){if(n){try{return o.process.getBuiltinModule(r)}catch(e){}try{return Function('return require("'+r+'")')()}catch(e){}}}},1108:function(r,e,t){var o=t(6955);r.exports=function(r){var e=o(r);return"BigInt64Array"===e||"BigUint64Array"===e}},3925:function(r,e,t){var o=t(34);r.exports=function(r){return o(r)||null===r}},2967:function(r,e,t){var o=t(6706),n=t(34),i=t(7750),s=t(3506);r.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r,e=!1,t={};try{r=o(Object.prototype,"__proto__","set"),r(t,[]),e=t instanceof Array}catch(a){}return function(t,o){return i(t),s(o),n(t)?(e?r(t,o):t.__proto__=o,t):t}}():void 0)},1548:function(r,e,t){var o=t(4576),n=t(9039),i=t(9519),s=t(4215),a=o.structuredClone;r.exports=!!a&&!n((function(){if("DENO"===s&&i>92||"NODE"===s&&i>94||"BROWSER"===s&&i>97)return!1;var r=new ArrayBuffer(8),e=a(r,{transfer:[r]});return 0!==r.byteLength||8!==e.byteLength}))},5854:function(r,e,t){var o=t(2777),n=TypeError;r.exports=function(r){var e=o(r,"number");if("number"==typeof e)throw new n("Can't convert number to bigint");return BigInt(e)}},7696:function(r,e,t){var o=t(1291),n=t(8014),i=RangeError;r.exports=function(r){if(void 0===r)return 0;var e=o(r),t=n(e);if(e!==t)throw new i("Wrong length or index");return t}},6573:function(r,e,t){var o=t(3724),n=t(2106),i=t(3238),s=ArrayBuffer.prototype;o&&!("detached"in s)&&n(s,"detached",{configurable:!0,get:function(){return i(this)}})},7936:function(r,e,t){var o=t(6518),n=t(5636);n&&o({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return n(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(r,e,t){var o=t(6518),n=t(5636);n&&o({target:"ArrayBuffer",proto:!0},{transfer:function(){return n(this,arguments.length?arguments[0]:void 0,!0)}})},7467:function(r,e,t){var o=t(7628),n=t(4644),i=n.aTypedArray,s=n.exportTypedArrayMethod,a=n.getTypedArrayConstructor;s("toReversed",(function(){return o(i(this),a(this))}))},4732:function(r,e,t){var o=t(4644),n=t(9504),i=t(9306),s=t(5370),a=o.aTypedArray,c=o.getTypedArrayConstructor,u=o.exportTypedArrayMethod,p=n(o.TypedArrayPrototype.sort);u("toSorted",(function(r){void 0!==r&&i(r);var e=a(this),t=s(c(e),e);return p(t,r)}))},9577:function(r,e,t){var o=t(9928),n=t(4644),i=t(1108),s=t(1291),a=t(5854),c=n.aTypedArray,u=n.getTypedArrayConstructor,p=n.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(r){return 8===r}}();p("with",{with:function(r,e){var t=c(this),n=s(r),p=i(t)?a(e):+e;return o(t,u(t),n,p)}}["with"],!f)}}]);
//# sourceMappingURL=889.aedddc02.js.map