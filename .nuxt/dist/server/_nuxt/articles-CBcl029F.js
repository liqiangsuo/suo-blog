import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import "./nuxt-BhJpKRwS.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as NuxtLink } from "../server.mjs";
import { t as queryCollection } from "./client-KWlXg-RK.js";
import { t as TagBadge_default } from "./TagBadge-Do9pLAY2.js";
import { t as definePageMeta } from "./pages-DFl-cvev.js";
//#region pages/admin/articles.vue?vue&type=script&setup=true&lang.ts
var articles_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "articles",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		definePageMeta({ layout: "admin" });
		useHead({ title: "文章管理" });
		const password = (0, vue_exports.ref)("");
		const error = (0, vue_exports.ref)(false);
		const authenticated = (0, vue_exports.ref)(false);
		const searchQuery = (0, vue_exports.ref)("");
		const { data: articles } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData("admin-articles", () => queryCollection("articles").select([
			"title",
			"path",
			"tags",
			"date"
		]).all())), __temp = await __temp, __restore(), __temp);
		const filteredArticles = (0, vue_exports.computed)(() => {
			if (!articles.value) return [];
			const q = searchQuery.value.toLowerCase();
			if (!q) return articles.value;
			return articles.value.filter((a) => a.title?.toLowerCase().includes(q) || a.tags?.some((t) => t.toLowerCase().includes(q)));
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_TagBadge = TagBadge_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-5xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}>`);
			if (!(0, vue_exports.unref)(authenticated)) {
				_push(`<div class="max-w-sm mx-auto mt-16"><h1 class="text-xl font-bold mb-4">管理面板</h1><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(password))} type="password" placeholder="输入管理员密码" class="w-full px-3 py-2 rounded-lg border border-[rgb(var(--color-border))] bg-transparent text-sm outline-none focus:border-blue-500 mb-3">`);
				if ((0, vue_exports.unref)(error)) _push(`<p class="text-red-500 text-sm mb-2">密码错误</p>`);
				else _push(`<!---->`);
				_push(`<button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"> 登录 </button></div>`);
			} else {
				_push(`<div><div class="flex items-center justify-between mb-6"><h1 class="text-2xl font-bold">文章管理</h1><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(searchQuery))} type="text" placeholder="搜索文章..." class="px-3 py-1.5 rounded-lg border border-[rgb(var(--color-border))] bg-transparent text-sm outline-none focus:border-blue-500 w-48"></div>`);
				if ((0, vue_exports.unref)(filteredArticles).length === 0) _push(`<div class="text-center py-16 text-gray-500 dark:text-gray-400"> 暂无文章 </div>`);
				else {
					_push(`<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-[rgb(var(--color-border))]"><th class="text-left py-3 px-2 font-semibold">标题</th><th class="text-left py-3 px-2 font-semibold hidden sm:table-cell">标签</th><th class="text-right py-3 px-2 font-semibold hidden md:table-cell">字数</th><th class="text-right py-3 px-2 font-semibold">日期</th></tr></thead><tbody><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(filteredArticles), (article) => {
						_push(`<tr class="border-b border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-card))] transition-colors"><td class="py-3 px-2">`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
							to: `/articles/${article.path}`,
							class: "text-blue-600 dark:text-blue-400 hover:underline font-medium"
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(article.title)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(article.title), 1)];
							}),
							_: 2
						}, _parent));
						_push(`</td><td class="py-3 px-2 hidden sm:table-cell"><div class="flex items-center gap-1"><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(article.tags || [], (tag) => {
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_TagBadge, {
								key: tag,
								tag
							}, null, _parent));
						});
						_push(`<!--]--></div></td><td class="py-3 px-2 text-right text-gray-500 dark:text-gray-400 hidden md:table-cell">${(0, server_renderer_exports.ssrInterpolate)(article.wordCount?.toLocaleString() || 0)}</td><td class="py-3 px-2 text-right text-gray-500 dark:text-gray-400">${(0, server_renderer_exports.ssrInterpolate)(article.date?.slice(0, 10))}</td></tr>`);
					});
					_push(`<!--]--></tbody></table></div>`);
				}
				_push(`</div>`);
			}
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/admin/articles.vue
var _sfc_setup = articles_vue_vue_type_script_setup_true_lang_default.setup;
articles_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/articles.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var articles_default = articles_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { articles_default as default };

//# sourceMappingURL=articles-CBcl029F.js.map