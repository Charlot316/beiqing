(this["webpackJsonpworld-skill"]=this["webpackJsonpworld-skill"]||[]).push([[19],{377:function(e,t,n){e.exports=function(){"use strict";return function(e,t,n){(n=n||{}).childrenKeyName=n.childrenKeyName||"children";var a=e||[],i=[],l=0;do{var o=a.filter((function(e){return t(e,l)}))[0];if(!o)break;i.push(o),a=o[n.childrenKeyName]||[],l+=1}while(a.length>0);return i}}()},699:function(e,t,n){"use strict";n(59),n(700),n(327),n(284)},700:function(e,t,n){},721:function(e,t,n){"use strict";var a=n(4),i=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(14)),o=a(n(43)),r=a(n(51)),u=a(n(97)),s=a(n(52)),p=a(n(53)),c=a(n(32)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var n=I(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),f=a(n(737)),v=a(n(377)),h=a(n(11)),m=a(n(86)),g=a(n(338)),b=a(n(150)),y=a(n(329)),C=a(n(314)),N=a(n(723)),k=a(n(344)),O=a(n(288)),P=n(25),V=a(n(89)),E=a(n(84)),w=a(n(88)),F=n(69),S=n(283);function I(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(I=function(e){return e?n:t})(e)}var T=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};function D(e,t,n){return t.some((function(t){return t[n.label].indexOf(e)>-1}))}function x(e,t,n,a){return t.map((function(t,i){var l=t[a.label],o=l.indexOf(e)>-1?function(e,t,n){return e.split(t).map((function(e,a){return 0===a?e:[d.createElement("span",{className:"".concat(n,"-menu-item-keyword"),key:"seperator"},t),e]}))}(l,e,n):l;return 0===i?o:[" / ",o]}))}function _(e,t,n,a){function i(e){return e[a.label].indexOf(n)>-1}return e.findIndex(i)-t.findIndex(i)}function j(e){var t=e.fieldNames||{};return{children:t.children||"children",label:t.label||"label",value:t.value||"value"}}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=j(t),i=[],l=a.children;return e.forEach((function(e){var a=n.concat(e);!t.changeOnSelect&&e[l]&&e[l].length||i.push(a),e[l]&&(i=i.concat(A(e[l],t,a)))})),i}var K=function(e){return e.join(" / ")};function R(e,t,n){var a;return a={},(0,c.default)(a,t.value,"ANT_CASCADER_NOT_FOUND"),(0,c.default)(a,t.label,n||e("Cascader")),(0,c.default)(a,"disabled",!0),(0,c.default)(a,"isEmptyNode",!0),a}var L=function(e){(0,s.default)(n,e);var t=(0,p.default)(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).cachedOptions=[],a.setValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"value"in a.props||a.setState({value:e});var n=a.props.onChange;null===n||void 0===n||n(e,t)},a.saveInput=function(e){a.input=e},a.handleChange=function(e,t){if(a.setState({inputValue:""}),t[0].__IS_FILTERED_OPTION){var n=void 0===t[0].__KEEP_FILTERED_OPTION_VALUE?e[0]:t[0].__KEEP_FILTERED_OPTION_VALUE,i=t[0].path;a.setValue(n,i)}else a.setValue(e,t)},a.handlePopupVisibleChange=function(e){"popupVisible"in a.props||a.setState((function(t){return{popupVisible:e,inputFocused:e,inputValue:e?t.inputValue:""}}));var t=a.props.onPopupVisibleChange;null===t||void 0===t||t(e)},a.handleInputBlur=function(){a.setState({inputFocused:!1})},a.handleInputClick=function(e){var t=a.state,n=t.inputFocused,i=t.popupVisible;(n||i)&&e.stopPropagation()},a.handleKeyDown=function(e){e.keyCode!==g.default.BACKSPACE&&e.keyCode!==g.default.SPACE||e.stopPropagation()},a.handleInputChange=function(e){var t=a.state.popupVisible,n=e.target.value;t||a.handlePopupVisibleChange(!0),a.setState({inputValue:n})},a.clearSelection=function(e){var t=a.state.inputValue;e.preventDefault(),e.stopPropagation(),t?a.setState({inputValue:""}):(a.handlePopupVisibleChange(!1),a.clearSelectionTimeout=setTimeout((function(){a.setValue([])}),200))},a.renderCascader=function(e,t){var n=e.getPopupContainer,i=e.getPrefixCls,o=e.renderEmpty,r=e.direction;return d.createElement(w.default.Consumer,null,(function(e){var s,p,v,g,P=(0,u.default)(a),V=P.props,E=P.state,w=V.prefixCls,I=V.inputPrefixCls,D=V.children,x=V.placeholder,_=void 0===x?t.placeholder||"Please select":x,A=V.size,K=V.disabled,L=V.className,M=V.style,B=V.allowClear,U=V.showSearch,W=void 0!==U&&U,X=V.suffixIcon,Y=V.expandIcon,z=V.notFoundContent,G=V.popupClassName,H=V.bordered,J=V.dropdownRender,q=T(V,["prefixCls","inputPrefixCls","children","placeholder","size","disabled","className","style","allowClear","showSearch","suffixIcon","expandIcon","notFoundContent","popupClassName","bordered","dropdownRender"]),Q=A||e,Z=E.value,$=E.inputFocused,ee="rtl"===r,te=i("cascader",w),ne=i("input",I),ae=(0,h.default)((s={},(0,c.default)(s,"".concat(ne,"-lg"),"large"===Q),(0,c.default)(s,"".concat(ne,"-sm"),"small"===Q),s)),ie=B&&!K&&Z.length>0||E.inputValue?d.createElement(b.default,{className:"".concat(te,"-picker-clear"),onClick:a.clearSelection}):null,le=(0,h.default)((p={},(0,c.default)(p,"".concat(te,"-picker-arrow"),!0),(0,c.default)(p,"".concat(te,"-picker-arrow-expand"),E.popupVisible),p)),oe=(0,h.default)("".concat(te,"-picker"),(v={},(0,c.default)(v,"".concat(te,"-picker-rtl"),ee),(0,c.default)(v,"".concat(te,"-picker-with-value"),E.inputValue),(0,c.default)(v,"".concat(te,"-picker-disabled"),K),(0,c.default)(v,"".concat(te,"-picker-").concat(Q),!!Q),(0,c.default)(v,"".concat(te,"-picker-show-search"),!!W),(0,c.default)(v,"".concat(te,"-picker-focused"),$),(0,c.default)(v,"".concat(te,"-picker-borderless"),!H),v),L),re=(0,m.default)(q,["onChange","options","popupPlacement","transitionName","displayRender","onPopupVisibleChange","changeOnSelect","expandTrigger","popupVisible","getPopupContainer","loadData","filterOption","renderFilteredOption","sortFilteredOption","fieldNames"]),ue=V.options,se=j(a.props);ue&&ue.length>0?E.inputValue&&(ue=a.generateFilteredOptions(te,o)):ue=[R(o,se,z)],E.popupVisible?a.cachedOptions=ue:ue=a.cachedOptions;var pe,ce={},de=1===(ue||[]).length&&ue[0].isEmptyNode;de&&(ce.height="auto"),!1!==W.matchInputWidth&&(E.inputValue||de)&&a.input&&(ce.width=a.input.input.offsetWidth),pe=X?(0,F.replaceElement)(X,d.createElement("span",{className:"".concat(te,"-picker-arrow")},X),(function(){var e;return{className:(0,h.default)((e={},(0,c.default)(e,X.props.className,X.props.className),(0,c.default)(e,"".concat(te,"-picker-arrow"),!0),e))}})):d.createElement(y.default,{className:le});var fe,ve=D||d.createElement("span",{style:M,className:oe},d.createElement("span",{className:"".concat(te,"-picker-label")},a.getLabel()),d.createElement(O.default,(0,l.default)({},re,{tabIndex:-1,ref:a.saveInput,prefixCls:ne,placeholder:Z&&Z.length>0?void 0:_,className:"".concat(te,"-input ").concat(ae),value:E.inputValue,disabled:K,readOnly:!W,autoComplete:re.autoComplete||"off",onClick:W?a.handleInputClick:void 0,onBlur:W?a.handleInputBlur:void 0,onKeyDown:a.handleKeyDown,onChange:W?a.handleInputChange:void 0})),ie,pe);fe=Y||(ee?d.createElement(k.default,null):d.createElement(C.default,null));var he=d.createElement("span",{className:"".concat(te,"-menu-item-loading-icon")},d.createElement(N.default,{spin:!0})),me=V.getPopupContainer||n,ge=(0,m.default)(V,["inputIcon","expandIcon","loadingIcon","bordered","className"]),be=(0,h.default)(G,(g={},(0,c.default)(g,"".concat(te,"-menu-").concat(r),"rtl"===r),(0,c.default)(g,"".concat(te,"-menu-empty"),1===ue.length&&"ANT_CASCADER_NOT_FOUND"===ue[0].value),g)),ye=i();return d.createElement(f.default,(0,l.default)({},ge,{prefixCls:te,getPopupContainer:me,options:ue,value:Z,popupVisible:E.popupVisible,onPopupVisibleChange:a.handlePopupVisibleChange,onChange:a.handleChange,dropdownMenuColumnStyle:ce,expandIcon:fe,loadingIcon:he,popupClassName:be,popupPlacement:a.getPopupPlacement(r),dropdownRender:J,transitionName:(0,S.getTransitionName)(ye,"slide-up",V.transitionName)}),ve)}))},a.state={value:e.value||e.defaultValue||[],inputValue:"",inputFocused:!1,popupVisible:e.popupVisible,flattenOptions:e.showSearch?A(e.options,e):void 0,prevProps:e},a}return(0,r.default)(n,[{key:"componentWillUnmount",value:function(){this.clearSelectionTimeout&&clearTimeout(this.clearSelectionTimeout)}},{key:"getLabel",value:function(){var e=this.props,t=e.options,n=e.displayRender,a=void 0===n?K:n,i=j(this.props),l=this.state.value,o=Array.isArray(l[0])?l[0]:l,r=(0,v.default)(t,(function(e,t){return e[i.value]===o[t]}),{childrenKeyName:i.children});return a(r.length?r.map((function(e){return e[i.label]})):l,r)}},{key:"generateFilteredOptions",value:function(e,t){var n,a=this,i=this.props,l=i.showSearch,o=i.notFoundContent,r=j(this.props),u=l.filter,s=void 0===u?D:u,p=l.render,d=void 0===p?x:p,f=l.sort,v=void 0===f?_:f,h=l.limit,m=void 0===h?50:h,g=this.state,b=g.flattenOptions,y=void 0===b?[]:b,C=g.inputValue;if(m>0){n=[];var N=0;y.some((function(e){return s(a.state.inputValue,e,r)&&(n.push(e),N+=1),N>=m}))}else(0,E.default)("number"!==typeof m,"Cascader","'limit' of showSearch should be positive number or false."),n=y.filter((function(e){return s(a.state.inputValue,e,r)}));if((n=n.sort((function(e,t){return v(e,t,C,r)}))).length>0){var k=r.value===r.label?"__KEEP_FILTERED_OPTION_VALUE":r.value;return n.map((function(t){var n;return n={__IS_FILTERED_OPTION:!0,path:t},(0,c.default)(n,k,t.map((function(e){return e[r.value]}))),(0,c.default)(n,r.label,d(C,t,e,r)),(0,c.default)(n,"disabled",t.some((function(e){return!!e.disabled}))),(0,c.default)(n,"isEmptyNode",!0),n}))}return[R(t,r,o)]}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"getPopupPlacement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ltr",t=this.props.popupPlacement;return void 0!==t?t:"rtl"===e?"bottomRight":"bottomLeft"}},{key:"render",value:function(){var e=this;return d.createElement(P.ConfigConsumer,null,(function(t){return d.createElement(V.default,null,(function(n){return e.renderCascader(t,n)}))}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,a={prevProps:e};return"value"in e&&(a.value=e.value||[]),"popupVisible"in e&&(a.popupVisible=e.popupVisible),e.showSearch&&n.options!==e.options&&(a.flattenOptions=A(e.options,e)),a}}]),n}(d.Component);L.defaultProps={options:[],disabled:!1,allowClear:!0,bordered:!0};var M=L;t.default=M},722:function(e,t,n){"use strict";var a=function(){};e.exports=a},723:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(a=n(724))&&a.__esModule?a:{default:a};t.default=i,e.exports=i},724:function(e,t,n){"use strict";var a=n(4),i=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),o=a(n(725)),r=a(n(28)),u=function(e,t){return l.createElement(r.default,Object.assign({},e,{ref:t,icon:o.default}))};u.displayName="RedoOutlined";var s=l.forwardRef(u);t.default=s},725:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"}},737:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(18),l=n(5),o=n(21),r=n(26),u=n(29),s=n(30),p=n(0),c=n(312),d=n(722),f=n.n(d),v=n(282),h=n(377),m=n.n(h);var g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).menuItems={},e.saveMenuItem=function(t){return function(n){e.menuItems[t]=n}},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.scrollActiveItemToView()}},{key:"componentDidUpdate",value:function(e){!e.visible&&this.props.visible&&this.scrollActiveItemToView()}},{key:"getFieldName",value:function(e){var t=this.props,n=t.fieldNames,a=t.defaultFieldNames;return n[e]||a[e]}},{key:"getOption",value:function(e,t){var n=this.props,i=n.prefixCls,l=n.expandTrigger,o=n.expandIcon,r=n.loadingIcon,u=this.props.onSelect.bind(this,e,t),s={onClick:u,onDoubleClick:this.props.onItemDoubleClick.bind(this,e,t)},c="".concat(i,"-menu-item"),d=null,f=e[this.getFieldName("children")]&&e[this.getFieldName("children")].length>0;(f||!1===e.isLeaf)&&(c+=" ".concat(i,"-menu-item-expand"),e.loading||(d=p.createElement("span",{className:"".concat(i,"-menu-item-expand-icon")},o))),"hover"!==l||!f&&!1!==e.isLeaf||(s={onMouseEnter:this.delayOnSelect.bind(this,u),onMouseLeave:this.delayOnSelect.bind(this),onClick:u}),this.isActiveOption(e,t)&&(c+=" ".concat(i,"-menu-item-active"),s.ref=this.saveMenuItem(t)),e.disabled&&(c+=" ".concat(i,"-menu-item-disabled"));var v=null;e.loading&&(c+=" ".concat(i,"-menu-item-loading"),v=r||null);var h="";return"title"in e?h=e.title:"string"===typeof e[this.getFieldName("label")]&&(h=e[this.getFieldName("label")]),p.createElement("li",Object(a.a)({key:e[this.getFieldName("value")],className:c,title:h},s,{role:"menuitem",onMouseDown:function(e){return e.preventDefault()}}),e[this.getFieldName("label")],d,v)}},{key:"getActiveOptions",value:function(e){var t=this,n=this.props.options,a=e||this.props.activeValue;return m()(n,(function(e,n){return e[t.getFieldName("value")]===a[n]}),{childrenKeyName:this.getFieldName("children")})}},{key:"getShowOptions",value:function(){var e=this,t=this.props.options,n=this.getActiveOptions().map((function(t){return t[e.getFieldName("children")]})).filter((function(e){return!!e&&e.length>0}));return n.unshift(t),n}},{key:"delayOnSelect",value:function(e){for(var t=this,n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null),"function"===typeof e&&(this.delayTimer=window.setTimeout((function(){e(a),t.delayTimer=null}),150))}},{key:"scrollActiveItemToView",value:function(){for(var e=this.getShowOptions().length,t=0;t<e;t++){var n=this.menuItems[t];n&&n.parentElement&&(n.parentElement.scrollTop=n.offsetTop)}}},{key:"isActiveOption",value:function(e,t){var n=this.props.activeValue;return(void 0===n?[]:n)[t]===e[this.getFieldName("value")]}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.dropdownMenuColumnStyle;return p.createElement("div",null,this.getShowOptions().map((function(t,i){return p.createElement("ul",{className:"".concat(n,"-menu"),key:i,style:a},t.map((function(t){return e.getOption(t,i)})))})))}}]),n}(p.Component);g.defaultProps={options:[],value:[],activeValue:[],onSelect:function(){},prefixCls:"rc-cascader-menus",visible:!1,expandTrigger:"click"};var b=g,y={bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).setPopupVisible=function(e){var t=a.state.value;"popupVisible"in a.props||a.setState({popupVisible:e}),e&&!a.state.popupVisible&&a.setState({activeValue:t}),a.props.onPopupVisibleChange(e)},a.handleChange=function(e,t,n){var i=t.visible;"keydown"===n.type&&n.keyCode!==v.a.ENTER||(a.props.onChange(e.map((function(e){return e[a.getFieldName("value")]})),e),a.setPopupVisible(i))},a.handlePopupVisibleChange=function(e){a.setPopupVisible(e)},a.handleMenuSelect=function(e,t,n){var i=a.trigger.getRootDomNode();i&&i.focus&&i.focus();var l=a.props,o=l.changeOnSelect,r=l.loadData,u=l.expandTrigger;if(e&&!e.disabled){var s=a.state.activeValue;(s=s.slice(0,t+1))[t]=e[a.getFieldName("value")];var p=a.getActiveOptions(s);if(!1===e.isLeaf&&!e[a.getFieldName("children")]&&r)return o&&a.handleChange(p,{visible:!0},n),a.setState({activeValue:s}),void r(p);var c={};e[a.getFieldName("children")]&&e[a.getFieldName("children")].length?!o||"click"!==n.type&&"keydown"!==n.type||("hover"===u?a.handleChange(p,{visible:!1},n):a.handleChange(p,{visible:!0},n),c.value=s):(a.handleChange(p,{visible:!1},n),c.value=s),c.activeValue=s,("value"in a.props||"keydown"===n.type&&n.keyCode!==v.a.ENTER)&&delete c.value,a.setState(c)}},a.handleItemDoubleClick=function(){a.props.changeOnSelect&&a.setPopupVisible(!1)},a.handleKeyDown=function(e){var t=a.props.children;if(t&&t.props.onKeyDown)t.props.onKeyDown(e);else{var n=Object(l.a)(a.state.activeValue),i=n.length-1<0?0:n.length-1,o=a.getCurrentLevelOptions(),r=o.map((function(e){return e[a.getFieldName("value")]})).indexOf(n[i]);if(e.keyCode===v.a.DOWN||e.keyCode===v.a.UP||e.keyCode===v.a.LEFT||e.keyCode===v.a.RIGHT||e.keyCode===v.a.ENTER||e.keyCode===v.a.SPACE||e.keyCode===v.a.BACKSPACE||e.keyCode===v.a.ESC||e.keyCode===v.a.TAB){if(!a.state.popupVisible&&e.keyCode!==v.a.BACKSPACE&&e.keyCode!==v.a.LEFT&&e.keyCode!==v.a.RIGHT&&e.keyCode!==v.a.ESC&&e.keyCode!==v.a.TAB)return a.setPopupVisible(!0),void(a.props.onKeyDown&&a.props.onKeyDown(e));if(e.keyCode===v.a.DOWN||e.keyCode===v.a.UP){e.preventDefault();var u=r;u=-1!==u?e.keyCode===v.a.DOWN?(u+=1)>=o.length?0:u:(u-=1)<0?o.length-1:u:0,n[i]=o[u][a.getFieldName("value")]}else if(e.keyCode===v.a.LEFT||e.keyCode===v.a.BACKSPACE)e.preventDefault(),n.splice(n.length-1,1);else if(e.keyCode===v.a.RIGHT)e.preventDefault(),o[r]&&o[r][a.getFieldName("children")]&&n.push(o[r][a.getFieldName("children")][0][a.getFieldName("value")]);else if(e.keyCode===v.a.ESC||e.keyCode===v.a.TAB)return a.setPopupVisible(!1),void(a.props.onKeyDown&&a.props.onKeyDown(e));n&&0!==n.length||a.setPopupVisible(!1);var s=a.getActiveOptions(n),p=s[s.length-1];a.handleMenuSelect(p,s.length-1,e),a.props.onKeyDown&&a.props.onKeyDown(e)}}},a.saveTrigger=function(e){a.trigger=e};var i=[];return"value"in e?i=e.value||[]:"defaultValue"in e&&(i=e.defaultValue||[]),f()(!("filedNames"in e),"`filedNames` of Cascader is a typo usage and deprecated, please use `fieldNames` instead."),a.state={popupVisible:e.popupVisible,activeValue:i,value:i,prevProps:e},a.defaultFieldNames={label:"label",value:"value",children:"children"},a}return Object(r.a)(n,[{key:"getPopupDOMNode",value:function(){return this.trigger.getPopupDomNode()}},{key:"getFieldName",value:function(e){var t=this.defaultFieldNames,n=this.props,a=n.fieldNames,i=n.filedNames;return"filedNames"in this.props?i[e]||t[e]:a[e]||t[e]}},{key:"getFieldNames",value:function(){var e=this.props,t=e.fieldNames,n=e.filedNames;return"filedNames"in this.props?n:t}},{key:"getCurrentLevelOptions",value:function(){var e=this,t=this.props.options,n=void 0===t?[]:t,a=this.state.activeValue,i=void 0===a?[]:a,o=m()(n,(function(t,n){return t[e.getFieldName("value")]===i[n]}),{childrenKeyName:this.getFieldName("children")});return o[o.length-2]?o[o.length-2][this.getFieldName("children")]:Object(l.a)(n).filter((function(e){return!e.disabled}))}},{key:"getActiveOptions",value:function(e){var t=this;return m()(this.props.options||[],(function(n,a){return n[t.getFieldName("value")]===e[a]}),{childrenKeyName:this.getFieldName("children")})}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.transitionName,l=e.popupClassName,o=e.options,r=void 0===o?[]:o,u=e.disabled,s=e.builtinPlacements,d=e.popupPlacement,f=e.children,v=e.dropdownRender,h=Object(i.a)(e,["prefixCls","transitionName","popupClassName","options","disabled","builtinPlacements","popupPlacement","children","dropdownRender"]),m=p.createElement("div",null),g="";r&&r.length>0?m=p.createElement(b,Object(a.a)({},this.props,{fieldNames:this.getFieldNames(),defaultFieldNames:this.defaultFieldNames,activeValue:this.state.activeValue,onSelect:this.handleMenuSelect,onItemDoubleClick:this.handleItemDoubleClick,visible:this.state.popupVisible})):g=" ".concat(t,"-menus-empty");var y=m;return v&&(y=v(m)),p.createElement(c.a,Object(a.a)({ref:this.saveTrigger},h,{popupPlacement:d,builtinPlacements:s,popupTransitionName:n,action:u?[]:["click"],popupVisible:!u&&this.state.popupVisible,onPopupVisibleChange:this.handlePopupVisibleChange,prefixCls:"".concat(t,"-menus"),popupClassName:l+g,popup:y}),p.cloneElement(f,{onKeyDown:this.handleKeyDown,tabIndex:u?void 0:0}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,a={prevProps:e};return"value"in e&&!function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var a=0;a<n;a++)if(e[a]!==t[a])return!1;return!0}((void 0===n?{}:n).value,e.value)&&(a.value=e.value||[],"loadData"in e||(a.activeValue=e.value||[])),"popupVisible"in e&&(a.popupVisible=e.popupVisible),a}}]),n}(p.Component);C.defaultProps={onChange:function(){},onPopupVisibleChange:function(){},disabled:!1,transitionName:"",prefixCls:"rc-cascader",popupClassName:"",popupPlacement:"bottomLeft",builtinPlacements:y,expandTrigger:"click",fieldNames:{label:"label",value:"value",children:"children"},expandIcon:">"};var N=C;t.default=N}}]);