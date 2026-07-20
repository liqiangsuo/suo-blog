import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
//#region components/ArticleMeta.vue?vue&type=script&setup=true&lang.ts
var ArticleMeta_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "ArticleMeta",
	__ssrInlineRender: true,
	props: {
		date: {},
		wordCount: {},
		readingTime: {}
	},
	setup(__props) {
		const props = __props;
		const formattedDate = (0, vue_exports.computed)(() => {
			return new Date(props.date).toLocaleDateString("zh-CN", {
				year: "numeric",
				month: "long",
				day: "numeric"
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400" }, _attrs))}><time${(0, server_renderer_exports.ssrRenderAttr)("datetime", __props.date)}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(formattedDate))}</time>`);
			if (__props.wordCount) _push(`<span>· ${(0, server_renderer_exports.ssrInterpolate)(__props.wordCount)} 字</span>`);
			else _push(`<!---->`);
			if (__props.readingTime) _push(`<span>· 阅读约 ${(0, server_renderer_exports.ssrInterpolate)(__props.readingTime)} 分钟</span>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region components/ArticleMeta.vue
var _sfc_setup = ArticleMeta_vue_vue_type_script_setup_true_lang_default.setup;
ArticleMeta_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleMeta.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ArticleMeta_default = Object.assign(ArticleMeta_vue_vue_type_script_setup_true_lang_default, { __name: "ArticleMeta" });
//#endregion
export { ArticleMeta_default as t };

//# sourceMappingURL=ArticleMeta-CblSVYkk.js.map