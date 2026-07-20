import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { Z as useRoute } from "./ready-CDNijHl7.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as NuxtLink } from "../server.mjs";
import { t as queryCollection } from "./client-KWlXg-RK.js";
import { t as _sfc_main } from "./ContentRenderer-CX7J2sUa.js";
import { t as TagBadge_default } from "./TagBadge-Do9pLAY2.js";
import { t as ArticleMeta_default } from "./ArticleMeta-CblSVYkk.js";
//#region components/GiscusComments.vue?vue&type=script&setup=true&lang.ts
var GiscusComments_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "GiscusComments",
	__ssrInlineRender: true,
	props: { term: {} },
	setup(__props) {
		(0, vue_exports.ref)();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "mt-12 pt-8 border-t border-[rgb(var(--color-border))]" }, _attrs))}><h2 class="text-lg font-semibold mb-6">评论</h2><div></div></div>`);
		};
	}
});
//#endregion
//#region components/GiscusComments.vue
var _sfc_setup$2 = GiscusComments_vue_vue_type_script_setup_true_lang_default.setup;
GiscusComments_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GiscusComments.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var GiscusComments_default = Object.assign(GiscusComments_vue_vue_type_script_setup_true_lang_default, { __name: "GiscusComments" });
//#endregion
//#region components/TableOfContents.vue?vue&type=script&setup=true&lang.ts
var TableOfContents_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "TableOfContents",
	__ssrInlineRender: true,
	props: { toc: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.toc.length > 0) {
				_push(`<nav${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "text-sm" }, _attrs))}><h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">目录</h3><ul class="space-y-1.5"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(__props.toc, (item) => {
					_push(`<li class="${(0, server_renderer_exports.ssrRenderClass)({
						"ml-4": item.depth === 3,
						"ml-8": item.depth === 4
					})}"><a${(0, server_renderer_exports.ssrRenderAttr)("href", `#${item.id}`)} class="${(0, server_renderer_exports.ssrRenderClass)([{ "font-medium": item.depth === 2 }, "block py-0.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"])}">${(0, server_renderer_exports.ssrInterpolate)(item.text)}</a></li>`);
				});
				_push(`<!--]--></ul></nav>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region components/TableOfContents.vue
var _sfc_setup$1 = TableOfContents_vue_vue_type_script_setup_true_lang_default.setup;
TableOfContents_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableOfContents.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var TableOfContents_default = Object.assign(TableOfContents_vue_vue_type_script_setup_true_lang_default, { __name: "TableOfContents" });
//#endregion
//#region pages/articles/[...slug].vue?vue&type=script&setup=true&lang.ts
var ____slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "[...slug]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const route = useRoute();
		const slug = (0, vue_exports.computed)(() => route.params.slug.join("/"));
		const { data: article, pending } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData(`article-${slug.value}`, () => queryCollection("articles").path(slug.value).first())), __temp = await __temp, __restore(), __temp);
		(0, vue_exports.computed)(() => {
			if (!article.value?.body?.text) return 0;
			const words = article.value.body.text.length;
			return Math.max(1, Math.round(words / 500));
		});
		useHead(() => ({
			title: article.value?.title || "文章",
			meta: article.value?.description ? [{
				name: "description",
				content: article.value.description
			}, {
				property: "og:description",
				content: article.value.description
			}] : []
		}));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ArticleMeta = ArticleMeta_default;
			const _component_TagBadge = TagBadge_default;
			const _component_ContentRenderer = _sfc_main;
			const _component_GiscusComments = GiscusComments_default;
			const _component_TableOfContents = TableOfContents_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-5xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}>`);
			if ((0, vue_exports.unref)(pending)) _push(`<div class="flex items-center justify-center py-16"><div class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>`);
			else if (!(0, vue_exports.unref)(article)) {
				_push(`<div class="text-center py-16"><h1 class="text-xl font-semibold mb-2">文章未找到</h1>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					to: "/",
					class: "text-blue-600 dark:text-blue-400 hover:underline"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`返回首页`);
						else return [(0, vue_exports.createTextVNode)("返回首页")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else {
				_push(`<article class="flex gap-8"><div class="flex-1 min-w-0 max-w-3xl"><header class="mb-8"><h1 class="text-3xl font-bold mb-3">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(article).title)}</h1><div class="flex flex-wrap items-center gap-3">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_ArticleMeta, {
					date: (0, vue_exports.unref)(article).date,
					"word-count": (0, vue_exports.unref)(article).wordCount,
					"reading-time": (0, vue_exports.unref)(article).readingTime
				}, null, _parent));
				if ((0, vue_exports.unref)(article).tags?.length) {
					_push(`<div class="flex items-center gap-1.5"><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(article).tags, (tag) => {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
							key: tag,
							to: `/tags/${tag}`
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_TagBadge, { tag }, null, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)(_component_TagBadge, { tag }, null, 8, ["tag"])];
							}),
							_: 2
						}, _parent));
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div></header>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_ContentRenderer, {
					value: (0, vue_exports.unref)(article),
					class: "prose-article"
				}, null, _parent));
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_GiscusComments, { term: (0, vue_exports.unref)(article).path }, null, _parent));
				_push(`</div><aside class="hidden xl:block w-56 flex-shrink-0"><div class="sticky top-20">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_TableOfContents, { toc: (0, vue_exports.unref)(article).body?.toc || [] }, null, _parent));
				_push(`</div></aside></article>`);
			}
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/articles/[...slug].vue
var _sfc_setup = ____slug__vue_vue_type_script_setup_true_lang_default.setup;
____slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[...slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____slug__default = ____slug__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { ____slug__default as default };

//# sourceMappingURL=_...slug_-gp1uycAU.js.map