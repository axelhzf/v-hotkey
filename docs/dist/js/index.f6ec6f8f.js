(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],v=0,p=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={index:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/v-hotkey/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("e351")},"024e":function(e,t,n){"use strict";var s=n("dd02"),a=n("50de"),r=(n("ef84"),n("2877")),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},"028e":function(e,t,n){},1024:function(e,t,n){"use strict";var s=n("028e"),a=n.n(s);a.a},1270:function(e,t,n){"use strict";var s=n("d6a5"),a=n.n(s);a.a},"1c8b":function(e,t,n){"use strict";var s=n("6ca8"),a=n.n(s);a.a},"31de":function(e,t,n){"use strict";var s=n("6a9c"),a=n.n(s);a.a},"50de":function(e,t,n){"use strict";var s=n("f372"),a=n.n(s);t["default"]=a.a},"6a9c":function(e,t,n){},"6ca8":function(e,t,n){},"7e96":function(e,t,n){"use strict";var s=n("ac80"),a=n.n(s);a.a},ac80:function(e,t,n){},c763:function(e,t,n){},d6a5:function(e,t,n){},dd02:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)])])},a=[];n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}))},e351:function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),a={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91},r={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},o={"numpad *":106,"numpad +":43,"numpad add":43,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"numpad 0":96,"numpad 1":97,"numpad 2":98,"numpad 3":99,"numpad 4":100,"numpad 5":101,"numpad 6":102,"numpad 7":103,"numpad 8":104,"numpad 9":105},i={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=l({backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i,{},o,{},r),p=function(){},h=function(e,t){return Object.keys(e).map((function(n){var s={},a=e[n],r=a.keyup,o=a.keydown;return n.replace("numpad +","numpad add").split("+").forEach((function(e){switch(e.toLowerCase()){case"ctrl":case"alt":case"shift":case"meta":s[e]=!0;break;default:s.keyCode=t[e]||d(e)}})),s.callback={keydown:o||(r?p:e[n]),keyup:r||p},s}))},d=function(e){if(e)return e=y(e)||String(e),v[e.toLowerCase()]||a[e.toLowerCase()]||f(e)},f=function(e){return 1===e.length?e.charCodeAt(0):void 0},m=function(e){return"[object Object]"===Object.prototype.toString.call(e)},y=function(e){return m(e)?e.which||e.keyCode||e.charCode||!1:e};function _(e,t,n){var s=t.value,a=t.modifiers;e._keymap=h(s,n),e._keyHandler=function(t){if(a.prevent&&t.preventDefault(),a.stop){var n=document.activeElement,s=n.nodeName,r=n.isContentEditable;if(r)return;switch(s){case"INPUT":case"TEXTAREA":case"SELECT":return}}var o=!0,i=!1,c=void 0;try{for(var l,u=e._keymap[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var v=l.value,p=v.keyCode===t.keyCode&&!!v.ctrl===t.ctrlKey&&!!v.alt===t.altKey&&!!v.shift===t.shiftKey&&!!v.meta===t.metaKey&&v.callback[t.type];p&&p(t)}}catch(h){i=!0,c=h}finally{try{o||null==u["return"]||u["return"]()}finally{if(i)throw c}}},document.addEventListener("keydown",e._keyHandler),document.addEventListener("keyup",e._keyHandler)}function k(e){document.removeEventListener("keydown",e._keyHandler),document.removeEventListener("keyup",e._keyHandler)}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{bind:function(t,n){_(t,n,e)},componentUpdated:function(t,n){n.value!==n.oldValue&&(k(t),_(t,n,e))},unbind:k}},w={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive("hotkey",b(t))},directive:b()},g=w,C=n("8c4f"),x=n("024e"),P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",{staticClass:"title"},[e._v("Get Start")]),n("section",{staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("←")]),e._v(" to previous page.")]),n("p",[e._v("Press "),n("kbd",[e._v("→")]),e._v(" to next page.")]),n("p",[e._v("Press "),n("kbd",[e._v("esc")]),e._v(" to return home.")])])])}],O=n("2877"),E={},L=Object(O["a"])(E,P,$,!1,null,null,null),j=L.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{ref:"hello",staticClass:"title"},[e._v("Hello world.")]),n("section",{staticClass:"hero-section"},[e._m(0),n("transition",{attrs:{name:"slide"}},[n("p",{class:{next:!0,show:e.show}},[e._v("Press "),n("kbd",[e._v("→")]),e._v(" to play next case.")])])],1)])},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Press "),n("kbd",[e._v("enter")]),e._v(" to say hello.")])}],S={data:function(){return{show:!1}},computed:{keymap:function(){return{enter:this.hello}}},mounted:function(){var e=this.$refs.hello;e.addEventListener("animationend",(function(t){return e.classList.remove("active")}))},methods:{hello:function(){var e=this.$refs.hello;e.classList.add("active"),this.show=!0}}},D=S,H=(n("1c8b"),Object(O["a"])(D,T,N,!1,null,"5b9da2b1",null)),K=H.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{staticClass:"title"},[e._v("Keyup and Keydown Listeners.")]),n("section",{staticClass:"hero-section"},[n("p",[e._v("Press and hold "),n("kbd",[e._v("enter")]),e._v(" to say "),n("b",{ref:"hello",staticClass:"hello"},[e._v("hello")]),e._v(" louder.")]),n("transition",{attrs:{name:"slide"}},[n("p",{class:{next:!0,show:e.show}},[e._v("Press "),n("kbd",[e._v("→")]),e._v(" to play next case.")])])],1)])},M=[],B={data:function(){return{show:!1}},computed:{keymap:function(){return{enter:{keydown:this.louder,keyup:this.softer}}}},methods:{louder:function(){var e=this.$refs.hello;e.classList.add("loud")},softer:function(){var e=this.$refs.hello;e.classList.remove("loud"),this.show=!0}}},R=B,V=(n("7e96"),Object(O["a"])(R,A,M,!1,null,"0c611a03",null)),Y=V.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{staticClass:"title"},[e._v("Key Combination")]),n("section",{staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("ctrl")]),e._v(" + "),n("kbd",[e._v("enter")]),e._v(" to say"),n("b",{ref:"hello"},[e._v("hello.")])]),n("p",[e._v("Press "),n("kbd",[e._v("alt")]),e._v(" + "),n("kbd",[e._v("enter")]),e._v(" to say"),n("b",{ref:"bye"},[e._v("bye.")])]),e._m(0),n("p",{class:{next:!0,show:e.show}},[e._v("Press "),n("kbd",[e._v("→")]),e._v(" to play next case.")])])])},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Press "),n("kbd",[e._v("ctrl")]),e._v(" + "),n("kbd",[e._v("alt")]),e._v(" + "),n("kbd",[e._v("enter")]),e._v(" to leave.")])}],W={data:function(){return{show:!1}},computed:{keymap:function(){return{"ctrl+enter":this.hello,"alt+enter":this.bye,"ctrl+alt+enter":this.leave}}},mounted:function(){var e=this.$refs.hello,t=this.$refs.bye;e.addEventListener("animationend",(function(t){return e.classList.remove("active")})),t.addEventListener("animationend",(function(e){return t.classList.remove("active")}))},methods:{hello:function(){var e=this.$refs.hello;e.classList.add("active")},bye:function(){var e=this.$refs.bye;e.classList.add("active")},leave:function(){this.show=!0}}},q=W,z=(n("1024"),Object(O["a"])(q,J,U,!1,null,"7ce5c68c",null)),G=z.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{staticClass:"title"},[e._v("Private Hotkeys of Components")]),e._m(0),n("section",{staticClass:"hero-section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-2"}),n("div",{staticClass:"column is-4"},[n("div",{staticClass:"box content component-a",class:{active:e.flag}},[n("h1",[e._v("Component A")]),e.flag?n("p",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymapA,expression:"keymapA"}]},[e._v("Press "),n("kbd",[e._v("enter")]),e._v(" to say hello.")]):e._e(),n("div",{ref:"hello",staticClass:"msg"},[e._v("HELLO!")])])]),n("div",{staticClass:"column is-4"},[n("div",{staticClass:"box content component-b",class:{active:!e.flag}},[n("h1",[e._v("Component B")]),e.flag?e._e():n("p",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymapB,expression:"keymapB"}]},[e._v("Press "),n("kbd",[e._v("enter")]),e._v(" to say bye.")]),n("div",{ref:"bye",staticClass:"msg"},[e._v("BYE!")])])]),n("div",{staticClass:"column is-2"})])]),n("section",{staticClass:"hero-section"},[n("p",{class:{next:!0,show:e.show}},[e._v("Press "),n("kbd",[e._v("→")]),e._v(" to play next case.")])])])},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("tab")]),e._v(" to switch between two components.")])])}],F={data:function(){return{flag:!0,show:!1}},computed:{keymap:function(){return{tab:this["switch"]}},keymapA:function(){return{enter:this.hello}},keymapB:function(){return{enter:this.bye}}},watch:{flag:function(e,t){e&&(this.show=!0)}},mounted:function(){var e=this.$refs.hello,t=this.$refs.bye;e.addEventListener("animationend",(function(t){return e.classList.remove("active")})),t.addEventListener("animationend",(function(e){return t.classList.remove("active")}))},methods:{hello:function(){var e=this.$refs.hello;e.classList.add("active")},bye:function(){var e=this.$refs.bye;e.classList.add("active")},switch:function(e){e.preventDefault(),this.flag=!this.flag}}},Q=F,Z=(n("31de"),Object(O["a"])(Q,I,X,!1,null,"e3965fea",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{staticClass:"title"},[e._v("Dynamic Keymap With Single Component")]),e._m(0),n("section",{directives:[{name:"show",rawName:"v-show",value:"keymap1"===e.keymapType,expression:"keymapType === 'keymap1'"}],staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("ctrl")]),e._v(" + "),n("kbd",[e._v("enter")]),e._v(" to say"),n("b",{ref:"hello"},[e._v("hello.")])]),n("p",[e._v("You can't say bye now.")])]),n("section",{directives:[{name:"show",rawName:"v-show",value:"keymap2"===e.keymapType,expression:"keymapType === 'keymap2'"}],staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("alt")]),e._v(" + "),n("kbd",[e._v("enter")]),e._v(" to say"),n("b",{ref:"bye"},[e._v("bye.")])]),n("p",[e._v("You can't say hello now.")])]),n("section",{staticClass:"hero-section"},[n("p",{class:{next:!0,show:e.show}},[e._v("Press "),n("kbd",[e._v("→")]),e._v(" to play next case.")])])])},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("tab")]),e._v(" to switch keymap.")])])}],se={data:function(){return{keymapType:"keymap1",show:!1}},computed:{keymap:function(){var e={keymap1:{tab:this.switchKeyMap,"ctrl+enter":this.hello},keymap2:{tab:this.switchKeyMap,"alt+enter":this.bye}};return e[this.keymapType]}},mounted:function(){var e=this.$refs.hello,t=this.$refs.bye;console.log(this.$refs),e.addEventListener("animationend",(function(t){return e.classList.remove("active")})),t.addEventListener("animationend",(function(e){return t.classList.remove("active")}))},methods:{switchKeyMap:function(e){e.preventDefault(),this.keymapType="keymap1"===this.keymapType?"keymap2":"keymap1";var t=this.$refs.hello,n=this.$refs.bye;t.classList.remove("active"),n.classList.remove("active")},hello:function(){console.log("hello");var e=this.$refs.hello;console.log(e),e.classList.add("active")},bye:function(){console.log("bye");var e=this.$refs.bye;e.classList.add("active"),this.show=!0}}},ae=se,re=(n("1270"),Object(O["a"])(ae,te,ne,!1,null,"26cb86ea",null)),oe=re.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{staticClass:"title"},[e._v("Well done!")]),n("section",{staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("enter")]),e._v(" to give me a "),n("a",{ref:"star",attrs:{href:"https://github.com/Dafrok/v-hotkey",target:"_blank"}},[e._v("STAR")]),e._v(".")]),e._m(0)])])},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Press "),n("kbd",[e._v("esc")]),e._v(" to return home.")])}],le={computed:{keymap:function(){return{enter:this.star}}},methods:{star:function(){var e=this.$refs.star;e.click()}}},ue=le,ve=Object(O["a"])(ue,ie,ce,!1,null,null,null),pe=ve.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("h1",{staticClass:"title"},[e._v("V-Hotkey")]),n("h2",{staticClass:"subtitle"},[e._v("Vue 2.x directive for binding hotkeys to components.")]),n("section",{staticClass:"hero-section"},[n("p",[e._v("Press "),n("kbd",[e._v("enter")]),e._v(" to "),n("router-link",{attrs:{to:"/step/1"}},[e._v("get start")]),e._v(".")],1),n("p",[e._v("Press "),n("kbd",[e._v("space")]),e._v(" to see the "),n("a",{ref:"doc",attrs:{href:"https://github.com/Dafrok/v-hotkey/blob/master/README.md",target:"_blank"}},[e._v("documentation")]),e._v(".")])])])},de=[],fe={computed:{keymap:function(){return{enter:this.start,space:this.doc}}},methods:{start:function(){this.$router.push("/step/1")},doc:function(){this.$refs.doc.click()}}},me=fe,ye=Object(O["a"])(me,he,de,!1,null,null,null),_e=ye.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}]},[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)},be=[],we={computed:{keymap:function(){return{left:this.prevPage,right:this.nextPage,esc:this.backHome}}},methods:{nextPage:function(){var e=7,t=0|this.$route.path.split("/")[2],n=t>=e?e:t+1;this.$router.push("/step/".concat(n))},prevPage:function(){var e=0|this.$route.path.split("/")[2],t=e<=1?1:e-1;this.$router.push("/step/".concat(t))},backHome:function(){this.$router.push("/")}}},ge=we,Ce=Object(O["a"])(ge,ke,be,!1,null,null,null),xe=Ce.exports,Pe=[{path:"/",alias:"/start",component:_e},{path:"/step",component:xe,children:[{path:"1",component:j},{path:"2",component:K},{path:"3",component:Y},{path:"4",component:G},{path:"5",component:ee},{path:"6",component:oe},{path:"7",component:pe}]}];n("92c6");s["a"].use(g),s["a"].use(C["a"]);var $e=new C["a"]({routes:Pe});new s["a"]({el:"#app",router:$e,render:function(e){return e(x["default"])}})},ef84:function(e,t,n){"use strict";var s=n("c763"),a=n.n(s);a.a},f372:function(e,t){}});
//# sourceMappingURL=index.f6ec6f8f.js.map