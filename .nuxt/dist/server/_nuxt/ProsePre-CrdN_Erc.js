import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue
var _sfc_main = {
	__name: "ProsePre",
	__ssrInlineRender: true,
	props: {
		code: {
			type: String,
			default: ""
		},
		language: {
			type: String,
			default: null
		},
		filename: {
			type: String,
			default: null
		},
		highlights: {
			type: Array,
			default: () => []
		},
		meta: {
			type: String,
			default: null
		},
		class: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<pre${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: _ctx.$props.class }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</pre>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };

//# sourceMappingURL=ProsePre-CrdN_Erc.js.map