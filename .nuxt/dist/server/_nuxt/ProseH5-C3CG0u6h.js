import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { o as useRuntimeConfig } from "./nuxt-BhJpKRwS.js";
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue
var _sfc_main = {
	__name: "ProseH5",
	__ssrInlineRender: true,
	props: { id: {
		type: String,
		required: false
	} },
	setup(__props) {
		const props = __props;
		const { headings } = useRuntimeConfig().public.mdc;
		const generate = (0, vue_exports.computed)(() => props.id && (typeof headings?.anchorLinks === "boolean" && headings?.anchorLinks === true || typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h5));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<h5${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ id: props.id }, _attrs))}>`);
			if (props.id && (0, vue_exports.unref)(generate)) {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", `#${props.id}`)}>`);
				(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</a>`);
			} else (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</h5>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };

//# sourceMappingURL=ProseH5-C3CG0u6h.js.map