import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { t as NuxtLink } from "../server.mjs";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
//#region layouts/admin.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "min-h-screen flex flex-col" }, _attrs))}><header class="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-14"><div class="flex items-center gap-4">`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: "/admin",
		class: "font-semibold text-lg"
	}, {
		default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(`管理面板`);
			else return [(0, vue_exports.createTextVNode)("管理面板")];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: "/",
		class: "text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
	}, {
		default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(` 返回博客 `);
			else return [(0, vue_exports.createTextVNode)(" 返回博客 ")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></header><main class="flex-1">`);
	(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { admin_default as default };

//# sourceMappingURL=admin-BNUNVzDG.js.map