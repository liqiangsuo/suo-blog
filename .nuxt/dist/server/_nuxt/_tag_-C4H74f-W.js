import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { Z as useRoute } from "./ready-CDNijHl7.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as NuxtLink } from "../server.mjs";
import { t as queryCollection } from "./client-KWlXg-RK.js";
import { t as ArticleCard_default } from "./ArticleCard-CwolEkgG.js";
//#region pages/tags/[tag].vue?vue&type=script&setup=true&lang.ts
var _tag__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "[tag]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const route = useRoute();
		const tag = (0, vue_exports.computed)(() => route.params.tag);
		useHead({ title: `标签: ${tag.value}` });
		const { data: articles } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData(`tag-${tag.value}`, () => queryCollection("articles").select([
			"title",
			"description",
			"path",
			"date",
			"tags"
		]).all())), __temp = await __temp, __restore(), __temp);
		const filteredArticles = (0, vue_exports.computed)(() => {
			if (!articles.value) return [];
			return articles.value.filter((article) => article.tags?.some((t) => t.toLowerCase() === tag.value.toLowerCase()));
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ArticleCard = ArticleCard_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-5xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}><div class="mb-8">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/tags",
				class: "text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-2 inline-block"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(` ← 所有标签 `);
					else return [(0, vue_exports.createTextVNode)(" ← 所有标签 ")];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="text-2xl font-bold"> 标签: <span class="text-blue-600 dark:text-blue-400">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(tag))}</span></h1></div>`);
			if ((0, vue_exports.unref)(filteredArticles).length === 0) _push(`<div class="text-center py-16 text-gray-500 dark:text-gray-400"> 该标签下暂无文章 </div>`);
			else {
				_push(`<div class="space-y-4"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(filteredArticles), (article) => {
					_push((0, server_renderer_exports.ssrRenderComponent)(_component_ArticleCard, {
						key: article.path,
						article
					}, null, _parent));
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/tags/[tag].vue
var _sfc_setup = _tag__vue_vue_type_script_setup_true_lang_default.setup;
_tag__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/[tag].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _tag__default = _tag__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { _tag__default as default };

//# sourceMappingURL=_tag_-C4H74f-W.js.map