import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as queryCollection } from "./client-KWlXg-RK.js";
import { t as ArticleCard_default } from "./ArticleCard-CwolEkgG.js";
//#region pages/index.vue?vue&type=script&setup=true&lang.ts
var pageSize = 10;
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "首页" });
		const { data: articles, pending } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData("articles-list", () => queryCollection("articles").select([
			"title",
			"description",
			"path",
			"date",
			"tags"
		]).all())), __temp = await __temp, __restore(), __temp);
		const currentPage = (0, vue_exports.ref)(1);
		const totalPages = (0, vue_exports.computed)(() => Math.max(1, Math.ceil((articles.value?.length || 0) / pageSize)));
		const paginatedArticles = (0, vue_exports.computed)(() => {
			if (!articles.value) return [];
			const start = (currentPage.value - 1) * pageSize;
			return articles.value.slice(start, start + pageSize);
		});
		(0, vue_exports.watch)(currentPage, () => {
			(void 0).scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ArticleCard = ArticleCard_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-5xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}><div class="mb-10"><h1 class="text-3xl font-bold mb-2">CodexList</h1><p class="text-gray-600 dark:text-gray-400">记录技术思考与探索</p></div>`);
			if ((0, vue_exports.unref)(articles).length === 0 && !(0, vue_exports.unref)(pending)) _push(`<div class="text-center py-16 text-gray-500 dark:text-gray-400"> 暂无文章 </div>`);
			else {
				_push(`<div class="space-y-4"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(paginatedArticles), (article) => {
					_push((0, server_renderer_exports.ssrRenderComponent)(_component_ArticleCard, {
						key: article.path,
						article
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			}
			if ((0, vue_exports.unref)(totalPages) > 1) _push(`<nav class="flex items-center justify-center gap-2 mt-8"><button${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(currentPage) === 1) ? " disabled" : ""} class="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--color-border))] disabled:opacity-40 hover:bg-[rgb(var(--color-card))] transition-colors"> 上一页 </button><span class="text-sm text-gray-500 dark:text-gray-400">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(currentPage))} / ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(totalPages))}</span><button${(0, server_renderer_exports.ssrIncludeBooleanAttr)((0, vue_exports.unref)(currentPage) === (0, vue_exports.unref)(totalPages)) ? " disabled" : ""} class="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--color-border))] disabled:opacity-40 hover:bg-[rgb(var(--color-card))] transition-colors"> 下一页 </button></nav>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { pages_default as default };

//# sourceMappingURL=pages-hSTPwdQl.js.map