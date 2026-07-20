import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
//#region components/TagBadge.vue?vue&type=script&setup=true&lang.ts
var TagBadge_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "TagBadge",
	__ssrInlineRender: true,
	props: { tag: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" }, _attrs))}>${(0, server_renderer_exports.ssrInterpolate)(__props.tag)}</span>`);
		};
	}
});
//#endregion
//#region components/TagBadge.vue
var _sfc_setup = TagBadge_vue_vue_type_script_setup_true_lang_default.setup;
TagBadge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagBadge.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TagBadge_default = Object.assign(TagBadge_vue_vue_type_script_setup_true_lang_default, { __name: "TagBadge" });
//#endregion
export { TagBadge_default as t };

//# sourceMappingURL=TagBadge-Do9pLAY2.js.map