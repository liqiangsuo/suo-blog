import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { t as NuxtLink } from "../server.mjs";
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue
var _sfc_main = {
	__name: "ProseA",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			default: ""
		},
		target: {
			type: String,
			default: void 0,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(NuxtLink, (0, vue_exports.mergeProps)({
				href: props.href,
				target: props.target
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };

//# sourceMappingURL=ProseA-DoK32-UW.js.map