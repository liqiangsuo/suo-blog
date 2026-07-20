import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { o as useRuntimeConfig } from "./nuxt-BhJpKRwS.js";
import { joinURL, withLeadingSlash, withTrailingSlash } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue
var _sfc_main = {
	__name: "ProseImg",
	__ssrInlineRender: true,
	props: {
		src: {
			type: String,
			default: ""
		},
		alt: {
			type: String,
			default: ""
		},
		width: {
			type: [String, Number],
			default: void 0
		},
		height: {
			type: [String, Number],
			default: void 0
		}
	},
	setup(__props) {
		const props = __props;
		const refinedSrc = (0, vue_exports.computed)(() => {
			if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
				const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
				if (_base !== "/" && !props.src.startsWith(_base)) return joinURL(_base, props.src);
			}
			return props.src;
		});
		return (_ctx, _push, _parent, _attrs) => {
			(0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
				src: (0, vue_exports.unref)(refinedSrc),
				alt: props.alt,
				width: props.width,
				height: props.height
			}, _attrs), null), _parent);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };

//# sourceMappingURL=ProseImg-C3AtXcMD.js.map