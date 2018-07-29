(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{200:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),s("table",[t._m(4),t._v(" "),s("tbody",[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("dictionary")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A dictionary to be merged with the internal dictionary. (Check the "),s("router-link",{attrs:{to:"./guide/messages.html"}},[t._v("Error Messages")]),t._v(" and "),s("router-link",{attrs:{to:"./guide/localization.html"}},[t._v("Localization")]),t._v(" sections.)")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fastExit")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Whether the validation should stop after the first failure for each field, you can opt in or out from either settings by using the "),s("router-link",{attrs:{to:"/api/directive.html#continues"}},[t._v("continues")]),t._v(" and the "),s("router-link",{attrs:{to:"/api/directive.html#bails"}},[t._v("bails")]),t._v(" modifiers.")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inject")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Specifies if a validator instance should be injected automatically for all components. (See "),s("router-link",{attrs:{to:"./advanced/#component-injections"}},[t._v("Component Injections")]),t._v(" for more information.)")],1)]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("validity")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Set custom validity "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Constraint validation"),s("OutboundLink")],1),t._v(" on native HTML inputs.")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation Config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You may need to configure some options to tweak some of the plugin internals. This is not required, but could cause conflicts. For example, using a property called "),e("code",[this._v("errors")]),this._v(" on your vue instance may cause conflicts. Here is how you would set up the options, along with the default values:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VeeValidate "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  aria"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  classNames"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  classes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  delay"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  errorBagName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'errors'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// change if property conflicts")]),t._v("\n  events"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'input|blur'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fieldsBagName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'fields'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  i18n"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// the vue-i18n plugin instance")]),t._v("\n  i18nRootKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'validations'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// the nested key under which the validation messages will be located")]),t._v("\n  inject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  locale"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'en'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strict"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  validity"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Property")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Type")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Default")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("aria")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("true")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Allows setting "),s("code",[t._v("aria-invalid")]),t._v(" and "),s("code",[t._v("aria-required")]),t._v(" attributes on HTML inputs.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("classNames")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("object")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}}),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The classes to be applied depending on the state of the input.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("classes")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("false")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Applies automatic classes on HTML inputs being validated.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("delay")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("number")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("0")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The default debounce time for all inputs (only affects validations).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("object|null")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("null")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("errorBagName")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("'errors'")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the "),s("code",[t._v("ErrorBag")]),t._v(" object that will be injected in each of Vue's instances' data. Used to avoid conflicts with other plugins.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("events")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'input|blur'")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Pipe separated list of the default event names that will be listened to, to trigger validation. If an empty string is provided, it will disable all listeners.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("fieldsBagName")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'fields'")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The name of the Fields (flags) object that will be injected in each of Vue's instances' data.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("true")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("i18n")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("VueI18n | null")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("null")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The "),s("code",[t._v("vue-i18n")]),t._v(" instance, if provided will integrate vee-validate with the i18n plugin and will use it to produce the error messages instead of the built in dictionary.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("i18nRootKey")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'validations'")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The key name of the validation messages for each locale.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("true")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("locale")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("string")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("'en'")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("The default language for the validation messages.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"}},[this._v("strict")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("true")])]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[this._v("Validation attempt on non-existent fields will result in an invalid state")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("false")])])}],!1,null,null,null);e.default=n.exports}}]);