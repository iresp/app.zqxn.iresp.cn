(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-button"],{"71d1":function(t,i,s){"use strict";s.r(i);var a=s("bb16"),n=s("f42a");for(var e in n)["default"].indexOf(e)<0&&function(t){s.d(i,t,(function(){return n[t]}))}(e);var u=s("828b"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"daff354c",null,!1,a["a"],void 0);i["default"]=c.exports},b364:function(t,i,s){"use strict";s("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={data:function(){return{ColorList:this.ColorList,shadow:!1,bordersize:""}},methods:{SetShadow:function(t){this.shadow=t.detail.value},SetBorderSize:function(t){this.bordersize=t.detail.value}}}},bb16:function(t,i,s){"use strict";s.d(i,"b",(function(){return a})),s.d(i,"c",(function(){return n})),s.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[t._v("按钮")])],2),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮形状")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-navigator",{staticClass:"action",attrs:{url:"design","hover-class":"none"}},[s("v-uni-text",{staticClass:"cuIcon-skinfill"}),s("v-uni-text",{staticClass:"text-df"},[t._v("设计")])],1)],1)],1),s("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[s("v-uni-button",{staticClass:"cu-btn"},[t._v("默认")]),s("v-uni-button",{staticClass:"cu-btn round"},[t._v("圆角")]),s("v-uni-button",{staticClass:"cu-btn cuIcon"},[s("v-uni-text",{staticClass:"cuIcon-emojifill"})],1)],1),s("v-uni-view",{staticClass:"cu-bar margin-top bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮尺寸")],1)],1),s("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[s("v-uni-button",{staticClass:"cu-btn round sm"},[t._v("小尺寸")]),s("v-uni-button",{staticClass:"cu-btn round"},[t._v("默认")]),s("v-uni-button",{staticClass:"cu-btn round lg"},[t._v("大尺寸")])],1),s("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮颜色")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-df margin-right-sm"},[t._v("阴影")]),s("v-uni-switch",{class:t.shadow?"checked":"",attrs:{color:"#39B54A"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetShadow.apply(void 0,arguments)}}})],1)],1),s("v-uni-view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,(function(i,a){return s("v-uni-view",{key:a,staticClass:"margin-tb-sm text-center"},[s("v-uni-button",{staticClass:"cu-btn round",class:["bg-"+i.name,t.shadow?"shadow":""]},[t._v(t._s(i.title))])],1)})),1),s("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("镂空按钮")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetBorderSize.apply(void 0,arguments)}}},[s("v-uni-label",{staticClass:"margin-left-sm"},[s("v-uni-radio",{staticClass:"blue radio",attrs:{value:"",checked:!0}}),s("v-uni-text",{staticClass:"margin-left-sm"},[t._v("小")])],1),s("v-uni-label",{staticClass:"margin-left-sm"},[s("v-uni-radio",{staticClass:"blue radio",attrs:{value:"s"}}),s("v-uni-text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1)],1),s("v-uni-view",{staticClass:"grid col-5 padding-sm"},t._l(t.ColorList,(function(i,a){return"white"!=i.name?s("v-uni-view",{key:a,staticClass:"margin-tb-sm text-center"},[s("v-uni-button",{staticClass:"cu-btn round",class:[t.bordersize?"lines-"+i.name:"line-"+i.name,t.shadow?"shadow":""]},[t._v(t._s(i.title))])],1):t._e()})),1),s("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("块状按钮")],1)],1),s("v-uni-view",{staticClass:"padding flex flex-direction"},[s("v-uni-button",{staticClass:"cu-btn bg-grey lg"},[t._v("玄灰")]),s("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg"},[t._v("嫣红")])],1),s("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("无效状态")],1)],1),s("v-uni-view",{staticClass:"padding"},[s("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",attrs:{disabled:!0,type:""}},[t._v("无效状态")]),s("v-uni-button",{staticClass:"cu-btn block line-blue margin-tb-sm lg",attrs:{disabled:!0}},[t._v("无效状态")])],1),s("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("按钮加图标")],1)],1),s("v-uni-view",{staticClass:"padding-xl"},[s("v-uni-button",{staticClass:"cu-btn block line-orange lg"},[s("v-uni-text",{staticClass:"cuIcon-upload"}),t._v("图标")],1),s("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg"},[s("v-uni-text",{staticClass:"cuIcon-loading2 cuIconfont-spin"}),t._v("加载")],1),s("v-uni-button",{staticClass:"cu-btn block bg-black margin-tb-sm lg",attrs:{loading:!0}},[t._v("原生加载")])],1)],1)},n=[]},f42a:function(t,i,s){"use strict";s.r(i);var a=s("b364"),n=s.n(a);for(var e in a)["default"].indexOf(e)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(e);i["default"]=n.a}}]);