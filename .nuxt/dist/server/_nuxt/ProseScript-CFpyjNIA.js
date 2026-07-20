import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue
var _sfc_main = {
	__name: "ProseScript",
	__ssrInlineRender: true,
	props: { src: {
		type: String,
		default: ""
	} },
	setup(__props) {
		const isDev = false;
		return (_ctx, _push, _parent, _attrs) => {
			if ((0, vue_exports.unref)(isDev)) _push(`<div${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}> Rendering the <code>script</code> element is dangerous and is disabled by default. Consider implementing your own <code>ProseScript</code> element to have control over script rendering. </div>`);
			else _push(`<!---->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };

//# sourceMappingURL=ProseScript-CFpyjNIA.js.map