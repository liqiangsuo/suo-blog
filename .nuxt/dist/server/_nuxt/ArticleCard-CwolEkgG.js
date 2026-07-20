import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { t as NuxtLink } from "../server.mjs";
import { t as TagBadge_default } from "./TagBadge-Do9pLAY2.js";
import { t as ArticleMeta_default } from "./ArticleMeta-CblSVYkk.js";
//#region components/ArticleCard.vue?vue&type=script&setup=true&lang.ts
var ArticleCard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "ArticleCard",
	__ssrInlineRender: true,
	props: { article: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ArticleMeta = ArticleMeta_default;
			const _component_TagBadge = TagBadge_default;
			_push(`<article${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "group" }, _attrs))}>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: `/articles/${__props.article.path}`,
				class: "block p-6 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<h2 class="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.article.title)}</h2>`);
						if (__props.article.description) _push(`<p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(__props.article.description)}</p>`);
						else _push(`<!---->`);
						_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_ArticleMeta, {
							date: __props.article.date,
							"word-count": __props.article.wordCount,
							"reading-time": __props.article.readingTime
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (__props.article.tags?.length) {
							_push(`<div class="flex items-center gap-1.5"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(__props.article.tags, (tag) => {
								_push((0, server_renderer_exports.ssrRenderComponent)(_component_TagBadge, {
									key: tag,
									tag
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [
						(0, vue_exports.createVNode)("h2", { class: "text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, (0, vue_exports.toDisplayString)(__props.article.title), 1),
						__props.article.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
							key: 0,
							class: "text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2"
						}, (0, vue_exports.toDisplayString)(__props.article.description), 1)) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-2" }, [(0, vue_exports.createVNode)(_component_ArticleMeta, {
							date: __props.article.date,
							"word-count": __props.article.wordCount,
							"reading-time": __props.article.readingTime
						}, null, 8, [
							"date",
							"word-count",
							"reading-time"
						])]), __props.article.tags?.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "flex items-center gap-1.5"
						}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(__props.article.tags, (tag) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_TagBadge, {
								key: tag,
								tag
							}, null, 8, ["tag"]);
						}), 128))])) : (0, vue_exports.createCommentVNode)("", true)])
					];
				}),
				_: 1
			}, _parent));
			_push(`</article>`);
		};
	}
});
//#endregion
//#region components/ArticleCard.vue
var _sfc_setup = ArticleCard_vue_vue_type_script_setup_true_lang_default.setup;
ArticleCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ArticleCard_default = Object.assign(ArticleCard_vue_vue_type_script_setup_true_lang_default, { __name: "ArticleCard" });
//#endregion
export { ArticleCard_default as t };

//# sourceMappingURL=ArticleCard-CwolEkgG.js.map