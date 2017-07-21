module.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),r=i(o),a=n(2),s=i(a),l=n(3),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(l),c=novi.react.React,p={name:"novi-plugin-image",title:"Novi Image",description:"Novi Image description",version:"1.0.3",dependencies:{},defaults:{querySelector:"img[src]"},ui:{editor:[r.default],settings:c.createElement(s.default,null)},excerpt:u.isImageReplaceble};novi.plugins.register(p)},function(e,t){"use strict";function n(e){s.fileUpload({path:novi.media.directory,accept:l,messages:{submit:"Upload Image",title:"Upload an image",body:'Click on "Choose File" to upload your image.'},onSubmitClick:i.bind(this,e)})}function i(e,t){novi.element.setAttribute(e,"src",t)}Object.defineProperty(t,"__esModule",{value:!0});var o=novi.react.React,r=novi.ui.icon,a=novi.ui.icons,s=novi.modal,l=novi.types.images,u={trigger:o.createElement(r,null,a.ICON_PICTURE),tooltip:"Replace Image",closeIcon:"submit",title:"Replace image",onTriggerClick:n};t.default=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=novi.react.React,s=novi.react.Component,l=novi.ui.input,u=novi.ui.button,c=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={settings:e.settings},o.saveSettings=o.saveSettings.bind(o),o.onChange=o.onChange.bind(o),o}return o(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Image Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(l,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(u,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-image",this.state.settings)}}]),t}(s);t.default=c},function(e,t){"use strict";function n(e){return!!(e&&e.hasAttribute("src")&&novi.element.hasAttribute(e,"src"))&&e.getAttribute("src")===novi.element.getAttribute(e,"src")}Object.defineProperty(t,"__esModule",{value:!0}),t.isImageReplaceble=n}]);