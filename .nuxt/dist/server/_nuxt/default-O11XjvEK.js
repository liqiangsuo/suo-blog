import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { i as useState, t as useFetch } from "./fetch-DZbKVTJb.js";
import { t as NuxtLink } from "../server.mjs";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { Moon, Search, Sun } from "lucide-vue-next";
//#region node_modules/.pnpm/@nuxtjs+color-mode@4.0.1_ma_9f03d65aa0c3b100ecc5bf0890b7244f/node_modules/@nuxtjs/color-mode/dist/runtime/composables.js
var useColorMode = () => {
	return useState("color-mode").value;
};
//#endregion
//#region components/ThemeToggle.vue?vue&type=script&setup=true&lang.ts
var ThemeToggle_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "ThemeToggle",
	__ssrInlineRender: true,
	setup(__props) {
		const colorMode = useColorMode();
		const isDark = (0, vue_exports.computed)(() => colorMode.value === "dark");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				class: "p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
				"aria-label": (0, vue_exports.unref)(isDark) ? "切换到亮色模式" : "切换到暗色模式"
			}, _attrs))}>`);
			if ((0, vue_exports.unref)(isDark)) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Sun), { class: "w-4 h-4" }, null, _parent));
			else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Moon), { class: "w-4 h-4" }, null, _parent));
			_push(`</button>`);
		};
	}
});
//#endregion
//#region components/ThemeToggle.vue
var _sfc_setup$4 = ThemeToggle_vue_vue_type_script_setup_true_lang_default.setup;
ThemeToggle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ThemeToggle_default = Object.assign(ThemeToggle_vue_vue_type_script_setup_true_lang_default, { __name: "ThemeToggle" });
//#endregion
//#region composables/search.ts
var useSearchStore = () => {
	const isOpen = (0, vue_exports.ref)(false);
	function open() {
		isOpen.value = true;
	}
	function close() {
		isOpen.value = false;
	}
	function toggle() {
		isOpen.value = !isOpen.value;
	}
	return {
		isOpen: (0, vue_exports.readonly)(isOpen),
		open,
		close,
		toggle
	};
};
//#endregion
//#region components/BlogHeader.vue?vue&type=script&setup=true&lang.ts
var BlogHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "BlogHeader",
	__ssrInlineRender: true,
	setup(__props) {
		useSearchStore();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ThemeToggle = ThemeToggle_default;
			_push(`<header${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "sticky top-0 z-40 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))/80] backdrop-blur-sm" }, _attrs))}><nav class="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/",
				class: "text-lg font-bold tracking-tight"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` CodexList `);
					else return [(0, vue_exports.createTextVNode)(" CodexList ")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex items-center gap-3">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/tags",
				class: "text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` 标签 `);
					else return [(0, vue_exports.createTextVNode)(" 标签 ")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/about",
				class: "text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` 关于 `);
					else return [(0, vue_exports.createTextVNode)(" 关于 ")];
				}),
				_: 1
			}, _parent));
			_push(`<button class="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="搜索">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Search), { class: "w-4 h-4" }, null, _parent));
			_push(`</button>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_ThemeToggle, null, null, _parent));
			_push(`</div></nav></header>`);
		};
	}
});
//#endregion
//#region components/BlogHeader.vue
var _sfc_setup$3 = BlogHeader_vue_vue_type_script_setup_true_lang_default.setup;
BlogHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogHeader.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var BlogHeader_default = Object.assign(BlogHeader_vue_vue_type_script_setup_true_lang_default, { __name: "BlogHeader" });
//#endregion
//#region components/BlogFooter.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	_push(`<footer${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "border-t border-[rgb(var(--color-border))] mt-16" }, _attrs))}><div class="max-w-5xl mx-auto px-4 sm:px-6 py-8"><div class="flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-sm text-gray-500 dark:text-gray-400"> © ${(0, server_renderer_exports.ssrInterpolate)((/* @__PURE__ */ new Date()).getFullYear())} CodexList. All rights reserved. </p><div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: "/",
		class: "hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
	}, {
		default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(` 首页 `);
			else return [(0, vue_exports.createTextVNode)(" 首页 ")];
		}),
		_: 1
	}, _parent));
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: "/tags",
		class: "hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
	}, {
		default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(` 标签 `);
			else return [(0, vue_exports.createTextVNode)(" 标签 ")];
		}),
		_: 1
	}, _parent));
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
		to: "/about",
		class: "hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
	}, {
		default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
			if (_push) _push(` 关于 `);
			else return [(0, vue_exports.createTextVNode)(" 关于 ")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div></footer>`);
}
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogFooter.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var BlogFooter_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "BlogFooter" });
//#endregion
//#region components/SearchModal.vue?vue&type=script&setup=true&lang.ts
var SearchModal_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "SearchModal",
	__ssrInlineRender: true,
	setup(__props) {
		const searchStore = useSearchStore();
		const input = (0, vue_exports.ref)();
		const query = (0, vue_exports.ref)("");
		const results = (0, vue_exports.ref)([]);
		const loading = (0, vue_exports.ref)(false);
		(0, vue_exports.watch)(query, async (q) => {
			if (!q.trim()) {
				results.value = [];
				return;
			}
			loading.value = true;
			try {
				const { data } = await useFetch("/api/search", { params: { q: q.trim() } }, "$8B4CLLsM1s");
				if (data.value) results.value = data.value;
			} catch {
				results.value = [];
			} finally {
				loading.value = false;
			}
		}, { debounce: 200 });
		(0, vue_exports.watch)(() => searchStore.isOpen, (open) => {
			if (open) (0, vue_exports.nextTick)(() => {
				input.value?.focus();
				query.value = "";
				results.value = [];
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			(0, server_renderer_exports.ssrRenderTeleport)(_push, (_push) => {
				if ((0, vue_exports.unref)(searchStore).isOpen) {
					_push(`<div class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"><div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div><div class="relative w-full max-w-lg mx-4 bg-[rgb(var(--color-bg))] border border-[rgb(var(--color-border))] rounded-xl shadow-2xl overflow-hidden"><div class="flex items-center gap-3 px-4 border-b border-[rgb(var(--color-border))]">`);
					_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Search), { class: "w-4 h-4 text-gray-400 flex-shrink-0" }, null, _parent));
					_push(`<input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(query))} type="text" placeholder="搜索文章..." class="flex-1 py-3.5 bg-transparent text-sm outline-none placeholder:text-gray-400"><kbd class="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 rounded"> ESC </kbd></div>`);
					if ((0, vue_exports.unref)(query)) {
						_push(`<div class="max-h-80 overflow-y-auto">`);
						if ((0, vue_exports.unref)(loading)) _push(`<div class="flex items-center justify-center py-8"><div class="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>`);
						else if ((0, vue_exports.unref)(results).length === 0) _push(`<div class="py-8 text-center text-sm text-gray-500 dark:text-gray-400"> 没有找到相关内容 </div>`);
						else _push(`<!---->`);
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(results), (result) => {
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
								key: result.path,
								to: `/articles/${result.path}`,
								class: "block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",
								onClick: ($event) => (0, vue_exports.unref)(searchStore).close()
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<p class="text-sm font-medium"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(result.title)}</p>`);
										if (result.description) _push(`<p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(result.description)}</p>`);
										else _push(`<!---->`);
									} else return [(0, vue_exports.createVNode)("p", { class: "text-sm font-medium" }, (0, vue_exports.toDisplayString)(result.title), 1), result.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
										key: 0,
										class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1"
									}, (0, vue_exports.toDisplayString)(result.description), 1)) : (0, vue_exports.createCommentVNode)("", true)];
								}),
								_: 2
							}, _parent));
						});
						_push(`<!--]--></div>`);
					} else _push(`<div class="py-8 text-center text-sm text-gray-500 dark:text-gray-400"> 输入关键词开始搜索 </div>`);
					_push(`</div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
});
//#endregion
//#region components/SearchModal.vue
var _sfc_setup$1 = SearchModal_vue_vue_type_script_setup_true_lang_default.setup;
SearchModal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchModal.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SearchModal_default = Object.assign(SearchModal_vue_vue_type_script_setup_true_lang_default, { __name: "SearchModal" });
//#endregion
//#region layouts/default.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_BlogHeader = BlogHeader_default;
	const _component_BlogFooter = BlogFooter_default;
	const _component_SearchModal = SearchModal_default;
	_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_BlogHeader, null, null, _parent));
	_push(`<main class="flex-1">`);
	(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</main>`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_BlogFooter, null, null, _parent));
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_SearchModal, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { default_default as default };

//# sourceMappingURL=default-O11XjvEK.js.map