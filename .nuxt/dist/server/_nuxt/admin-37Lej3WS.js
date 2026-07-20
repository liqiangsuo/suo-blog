import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import "./nuxt-BhJpKRwS.js";
import { t as $fetch } from "./virtual_nuxt_.nuxt_fetch-CFpjVnC0.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as definePageMeta } from "./pages-DFl-cvev.js";
//#region pages/admin/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		definePageMeta({ layout: "admin" });
		useHead({ title: "管理面板" });
		const password = (0, vue_exports.ref)("");
		const error = (0, vue_exports.ref)(false);
		const authenticated = (0, vue_exports.ref)(false);
		const { data: stats } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData("admin-stats", () => $fetch("/api/stats"))), __temp = await __temp, __restore(), __temp);
		const monthlyData = (0, vue_exports.computed)(() => {
			if (!stats.value?.byMonth) return [];
			return Object.entries(stats.value.byMonth).map(([month, count]) => ({
				month,
				count
			})).sort((a, b) => a.month.localeCompare(b.month));
		});
		const maxCount = (0, vue_exports.computed)(() => Math.max(1, ...monthlyData.value.map((m) => m.count)));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-5xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}>`);
			if (!(0, vue_exports.unref)(authenticated)) {
				_push(`<div class="max-w-sm mx-auto mt-16"><h1 class="text-xl font-bold mb-4">管理面板</h1><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(password))} type="password" placeholder="输入管理员密码" class="w-full px-3 py-2 rounded-lg border border-[rgb(var(--color-border))] bg-transparent text-sm outline-none focus:border-blue-500 mb-3">`);
				if ((0, vue_exports.unref)(error)) _push(`<p class="text-red-500 text-sm mb-2">密码错误</p>`);
				else _push(`<!---->`);
				_push(`<button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"> 登录 </button></div>`);
			} else {
				_push(`<div><h1 class="text-2xl font-bold mb-6">仪表盘</h1><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"><div class="p-4 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]"><p class="text-sm text-gray-500 dark:text-gray-400">文章总数</p><p class="text-2xl font-bold mt-1">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(stats)?.totalArticles || 0)}</p></div><div class="p-4 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]"><p class="text-sm text-gray-500 dark:text-gray-400">标签数</p><p class="text-2xl font-bold mt-1">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(stats)?.totalTags || 0)}</p></div><div class="p-4 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]"><p class="text-sm text-gray-500 dark:text-gray-400">总字数</p><p class="text-2xl font-bold mt-1">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(stats)?.totalWords?.toLocaleString() || 0)}</p></div></div><div class="mb-8"><h2 class="text-lg font-semibold mb-4">文章数量按月统计</h2>`);
				if ((0, vue_exports.unref)(monthlyData).length) {
					_push(`<div class="flex items-end gap-2 h-32"><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(monthlyData), (item) => {
						_push(`<div class="flex-1 flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">${(0, server_renderer_exports.ssrInterpolate)(item.count)}</span><div class="w-full rounded-t bg-blue-500 dark:bg-blue-400 transition-all" style="${(0, server_renderer_exports.ssrRenderStyle)({ height: `${Math.max(4, item.count / (0, vue_exports.unref)(maxCount) * 100)}px` })}"></div><span class="text-xs text-gray-500 dark:text-gray-400 truncate w-full text-center">${(0, server_renderer_exports.ssrInterpolate)(item.month)}</span></div>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<p class="text-sm text-gray-500 dark:text-gray-400">暂无数据</p>`);
				_push(`</div></div>`);
			}
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/admin/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { admin_default as default };

//# sourceMappingURL=admin-37Lej3WS.js.map