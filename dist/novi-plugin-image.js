module.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(1),o=i(r),a=n(2),u=i(a),s=n(3),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),l=novi.react.React,f={name:"novi-plugin-image",title:"Novi Image",description:"Novi Image description",version:"1.0.5",dependencies:{},defaults:{querySelector:"img[src]"},ui:{editor:[o.default],settings:l.createElement(u.default,null)},excerpt:c.isImageReplaceble};novi.plugins.register(f)},function(e,t){"use strict";function n(e){var t=this,n=void 0,o=void 0,a=void 0;n=e.ownerDocument.querySelector("base").getAttribute("href"),o=novi.element.getAttribute(e,"src"),a=n+o,r(a).then(function(n){novi.media.choose({onSubmit:i.bind(t,e),ratio:n})})}function i(e,t){novi.element.setAttribute(e,"src",t)}function r(e){return new Promise(function(t,n){var i=new Image;i.src=e,i.onload=function(e){var n=e.target,i=n.naturalWidth,r=n.naturalHeight;t(i/r)}})}Object.defineProperty(t,"__esModule",{value:!0});var o=novi.react.React,a=novi.ui.icon,u=novi.ui.icons,s={trigger:o.createElement(a,null,u.ICON_PICTURE),tooltip:"Replace Image",closeIcon:"submit",title:"Replace image",onTriggerClick:n};t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=novi.react.React,u=novi.react.Component,s=novi.ui.input,c=novi.ui.button,l=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.state={settings:e.settings},r.saveSettings=r.saveSettings.bind(r),r.onChange=r.onChange.bind(r),r}return r(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Image Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(s,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(c,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-image",this.state.settings)}}]),t}(u);t.default=l},function(e,t){"use strict";function n(e){return!!(e&&e.hasAttribute("src")&&novi.element.hasAttribute(e,"src"))&&e.getAttribute("src")===novi.element.getAttribute(e,"src")}Object.defineProperty(t,"__esModule",{value:!0}),t.isImageReplaceble=n}]);