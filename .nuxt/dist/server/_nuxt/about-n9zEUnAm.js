import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as queryCollection } from "./client-KWlXg-RK.js";
import { t as _sfc_main } from "./ContentRenderer-CX7J2sUa.js";
//#region pages/about.vue?vue&type=script&setup=true&lang.ts
var about_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "about",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "关于" });
		const { data: content, pending } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData("about", () => queryCollection("content").path("/about").first())), __temp = await __temp, __restore(), __temp);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ContentRenderer = _sfc_main;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-3xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}><h1 class="text-2xl font-bold mb-6">关于</h1>`);
			if ((0, vue_exports.unref)(pending)) _push(`<div class="flex items-center justify-center py-16"><div class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>`);
			else if ((0, vue_exports.unref)(content)) {
				_push(`<div class="prose-article">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_ContentRenderer, { value: (0, vue_exports.unref)(content) }, null, _parent));
				_push(`</div>`);
			} else _push(`<div class="text-center py-16 text-gray-500 dark:text-gray-400"> 暂无内容 </div>`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/about.vue
var _sfc_setup = about_vue_vue_type_script_setup_true_lang_default.setup;
about_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = about_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { about_default as default };

//# sourceMappingURL=about-n9zEUnAm.js.map