(function(t){function e(e){for(var i,s,o=e[0],a=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],r[s]&&d.push(r[s][0]),r[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(i=!1)}i&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},c=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0246":function(t,e,n){"use strict";var i=n("48b2"),r=n.n(i);r.a},"3e80":function(t,e,n){t.exports=n.p+"img/1.ac4fae9d.png"},"48b2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("section",{staticClass:"wrap"},t._l(t.choice,function(e){return n("makechoice",{key:e,ref:"xxx",refInFor:!0,attrs:{message:e},on:{getIndex:t.captureIndex}})}),1),n("section",{staticClass:"tab"},[n("div",{staticClass:"reRandom"},[n("button",{on:{click:t.reRandom}},[t._v("random")])]),n("div",{staticClass:"submit"},[n("button",{on:{click:t.submitSelect}},[t._v("submit")])]),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.stringify,expression:"stringify"}],attrs:{type:"textarea"},domProps:{value:t.stringify},on:{input:function(e){e.target.composing||(t.stringify=e.target.value)}}})])])])])},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slider"}},[n("section",{staticClass:"window"},[n("ul",{staticClass:"container",style:t.containerStyle},[t._m(0),t._l(t.sliders,function(t,e){return n("li",{key:e},[n("img",{attrs:{src:"./img/"+t+".png",alt:""}})])}),t._m(1)],2)]),n("section",{staticClass:"wrap"},[n("div",{staticClass:"lock",class:{active:t.isActive},on:{click:t.lockChoice}},[t._v("lock")])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:n("7def"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:n("3e80"),alt:""}})])}],a={name:"makechoice",props:["message"],data:function(){return{sliders:[1,2,3,4],distance:0,currentIndex:1,lock:!1,isActive:!1}},computed:{containerStyle:function(){return{transform:"translateY( ".concat(this.distance,"px)")}}},methods:{move:function(t){if(!this.lock){this.currentIndex--,this.currentIndex>4&&(this.currentIndex=1),this.currentIndex<1&&(this.currentIndex=4);var e=this.distance+t;this.animate(e)}},animate:function(t){var e=this,n=setInterval(function(){t>e.distance?e.distance+=30:(clearInterval(n),e.distance=t,t<-800&&(e.distance=-200),t>-200&&(e.distance=-800))},20)},lockChoice:function(){this.lock=!this.lock,this.isActive=!this.isActive,this.lock&&this.$emit("getIndex",this.currentIndex,this.message)}}},u=a,l=(n("0246"),n("2877")),f=Object(l["a"])(u,s,o,!1,null,"743dbb1d",null);f.options.__file="makechoice.vue";var d=f.exports,p={name:"app",components:{makechoice:d},data:function(){return{choice:["drink","cake","food"],confirming:{},stringify:""}},methods:{captureIndex:function(t,e){this.confirming[e]=t},submitSelect:function(){for(var t=0;t<this.choice.length;t++)if(void 0===this.confirming[this.choice[t]])return void alert("请勾选全部选项");this.stringify=JSON.stringify(this.confirming),alert(this.stringify)},reRandom:function(){for(var t=0;t<3;t++){var e=Math.ceil(50*Math.random()),n=0;while(n<e)this.$refs.xxx[t].move(200),n++}}}},h=p,v=(n("5fc9"),Object(l["a"])(h,r,c,!1,null,"49729556",null));v.options.__file="App.vue";var m=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(m)}}).$mount("#app")},"5fc9":function(t,e,n){"use strict";var i=n("b2b7"),r=n.n(i);r.a},"7def":function(t,e,n){t.exports=n.p+"img/4.018cf556.png"},b2b7:function(t,e,n){}});
//# sourceMappingURL=app.35207496.js.map