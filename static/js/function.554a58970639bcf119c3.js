webpackJsonp([0],{MHg8:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Header",data:function(){return{url_home:"//www.seeyoz.cn",url_docs:"//www.yuque.com/seeyoz",url_faqs:"//github.com/seeyoz/seeyoz.github.io/issues",url_community:"//www.yuque.com/seeyoz/topics",options:[{value:"zh_CN",label:"简体中文"},{value:"en_US",label:"English"}],value:"en_US",lang:""}},computed:{showTxt:function(){return this.$t("nav.tips")}},mounted:function(){this.value=null==sessionStorage.getItem("lang")?"en_US":"en_US"==sessionStorage.getItem("lang")?this.value="en_US":this.value="zh_CN"},methods:{component_item1:function(){alert("No release...")},change_lang:function(){sessionStorage.setItem("lang",this.value),this.$i18n.locale=sessionStorage.getItem("lang")}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header_container"},[a("div",{staticClass:"header_logo"},[a("svg",{attrs:{id:"图层_1","data-name":"图层 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 515.27 124.23"}},[a("path",{staticClass:"cls-1",attrs:{d:"M75,29.76l2.32-3.52a30.37,30.37,0,0,1,41.81-8.78h0a25,25,0,0,1-34.7,6.93L72,16.06",transform:"translate(-2.73 -2)"}}),t._v(" "),a("g",{attrs:{id:"图层_2","data-name":"图层 2"}},[a("path",{staticClass:"cls-2",attrs:{d:"M51.65,60.78,66.51,37.61a1.14,1.14,0,0,0-.39-1.6,31.52,31.52,0,0,0-21-3.95,1.13,1.13,0,0,0-.94,1.34l5.41,27A1.13,1.13,0,0,0,51.65,60.78Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M55.55,64.23l26.89-5.88A1.14,1.14,0,0,0,83.3,57,31.53,31.53,0,0,0,71.24,39.3a1.13,1.13,0,0,0-1.61.28L54.37,62.49A1.13,1.13,0,0,0,55.55,64.23Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M55.87,69.42,79.05,84.28a1.13,1.13,0,0,0,1.59-.39,31.41,31.41,0,0,0,4-21A1.14,1.14,0,0,0,83.25,62l-27,5.41A1.13,1.13,0,0,0,55.87,69.42Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M52.43,73.33l5.88,26.89a1.14,1.14,0,0,0,1.4.85A31.45,31.45,0,0,0,77.36,89a1.15,1.15,0,0,0-.29-1.62L54.16,72.14A1.13,1.13,0,0,0,52.43,73.33Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M47.23,73.65,32.37,96.82a1.14,1.14,0,0,0,.39,1.6,31.49,31.49,0,0,0,21,4A1.13,1.13,0,0,0,54.7,101L49.29,74A1.13,1.13,0,0,0,47.23,73.65Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M43.33,70.2l-26.9,5.88a1.14,1.14,0,0,0-.85,1.4A31.53,31.53,0,0,0,27.64,95.13a1.14,1.14,0,0,0,1.61-.28L44.51,71.93A1.13,1.13,0,0,0,43.33,70.2Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M43,65,19.83,50.15a1.14,1.14,0,0,0-1.59.38,31.46,31.46,0,0,0-4,21,1.14,1.14,0,0,0,1.34.94l27-5.41A1.13,1.13,0,0,0,43,65Z",transform:"translate(-2.73 -2)"}}),t._v(" "),a("path",{staticClass:"cls-2",attrs:{d:"M46.45,61.1,40.57,34.21a1.13,1.13,0,0,0-1.4-.85,31.45,31.45,0,0,0-17.65,12A1.14,1.14,0,0,0,21.81,47L44.72,62.29A1.13,1.13,0,0,0,46.45,61.1Z",transform:"translate(-2.73 -2)"}})]),t._v(" "),a("text",{staticClass:"cls-3",attrs:{transform:"translate(125.23 96.54)"}},[t._v("SEEYOZ")]),t._v(" "),a("path",{staticClass:"cls-4",attrs:{d:"M74.81,30.66a43.9,43.9,0,1,1-16.08-6.79",transform:"translate(-2.73 -2)"}}),t._v(" "),a("rect",{staticClass:"cls-2",attrs:{x:"447.27",width:"68",height:"27",rx:"13.5",ry:"13.5"}}),t._v(" "),a("text",{staticClass:"cls-5",attrs:{transform:"translate(459.74 20.01)"}},[t._v("Beta")])])]),t._v(" "),a("ul",{staticClass:"header_nav"},[a("li",[a("a",{attrs:{href:t.url_home,target:"_blank"}},[t._v(t._s(t.$t("nav.home")))])]),t._v(" "),a("li",[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v("\n\t\t\t\t\t  "+t._s(t.$t("nav.components"))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){return t.component_item1()}}},[t._v(t._s(t.$t("nav.components_1"))+"\n\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),a("li",[a("a",{attrs:{href:t.url_docs,target:"_blank"}},[t._v(t._s(t.$t("nav.documents")))])]),t._v(" "),a("li",[a("a",{attrs:{href:t.url_faqs,target:"_blank"}},[t._v(t._s(t.$t("nav.faqs")))])]),t._v(" "),a("li",[a("a",{attrs:{href:t.url_community,target:"_blank"}},[t._v(t._s(t.$t("nav.community")))])]),t._v(" "),a("li",{staticClass:"header_language",attrs:{title:t.showTxt}},[a("el-select",{attrs:{placeholder:t.showTxt},on:{change:t.change_lang},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])])])},staticRenderFns:[]};var l={name:"Container",data:function(){return{clientHeight:"",src:a("Yz7+")}},mounted:function(){this.initHeight()},methods:{goToLink:function(){window.location.href="https://github.com/seeyoz/seeyoz.github.io/"},initHeight:function(){this.clientHeight=""+document.documentElement.clientHeight-70,this.clientHeight<535?(this.clientHeight=535,this.$refs.content.style.height=this.clientHeight+"px"):this.$refs.content.style.height=this.clientHeight+"px"}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"content",staticClass:"container"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content chunk_1"},[a("div",{staticClass:"headline_1"},[t._v(t._s(t.$t("panel.headline_1")))]),t._v(" "),a("div",{staticClass:"headline_2"},[t._v(t._s(t.$t("panel.headline_2")))]),t._v(" "),a("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("panel.subtitle")))]),t._v(" "),a("el-row",{staticClass:"btntext",attrs:{type:"flex"}},[a("button",{on:{click:t.goToLink}},[t._v(t._s(t.$t("panel.btntext")))])])],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content chunk_2"},[a("el-image",{attrs:{src:t.src}})],1)])],1)],1)},staticRenderFns:[]};var o={name:"App",components:{Header:a("C7Lr")(s,n,!1,function(t){a("SPjc")},null,null).exports,Container:a("C7Lr")(l,i,!1,function(t){a("vbsD")},null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("Container")],1)},staticRenderFns:[]};var c=a("C7Lr")(o,r,!1,function(t){a("MHg8")},null,null).exports,u=a("P6bB");Vue.config.productionTip=!1,Vue.use(u.a);var h=new u.a({locale:sessionStorage.getItem("lang")||"en_US",messages:{zh_CN:{nav:{home:"西柚子官网",components:"开源项目",components_1:"DeAndroid",documents:"在线文档",faqs:"疑难解答",community:"交流社区",tips:"点我切换语言",text:"语言"},panel:{headline_1:"西柚子",headline_2:"官方开源项目",subtitle:"如果你有一种思想，我有一种思想，彼此交换，我们每个人就有了两种思想，甚至多于两种思想。",btntext:"开始使用"}},en_US:{nav:{home:"Home",components:"Project",components_1:"DeAndroid",documents:"Documents",faqs:"FAQs",community:"Community",tips:"Click me to toggle language",text:"Language"},panel:{headline_1:"SEEYOZ",headline_2:"Official Open Source Project",subtitle:"If you have an idea, I have an idea, exchange with each other, we each have two kinds of ideas, even more than two kinds of ideas.",btntext:"Go head"}}},silentTranslationWarn:!0});new Vue({el:"#app",i18n:h,components:{App:c},template:"<App/>"})},SPjc:function(t,e){},"Yz7+":function(t,e,a){t.exports=a.p+"static/img/banner.f220ac6.png"},vbsD:function(t,e){}},["NHnr"]);