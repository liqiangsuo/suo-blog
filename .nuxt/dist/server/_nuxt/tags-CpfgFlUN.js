import { n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { t as useHead } from "./head-Ba2JA2W3.js";
import { t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { t as NuxtLink } from "../server.mjs";
import { t as queryCollection } from "./client-KWlXg-RK.js";
//#region components/TagList.vue?vue&type=script&setup=true&lang.ts
var TagList_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "TagList",
	__ssrInlineRender: true,
	props: { tags: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "flex flex-wrap gap-2" }, _attrs))}><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.tags, (tag) => {
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					key: tag.name,
					to: `/tags/${tag.name}`,
					class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm border border-[rgb(var(--color-border))] hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(tag.name)} <span class="text-xs text-gray-400 dark:text-gray-500"${_scopeId}>(${(0, server_renderer_exports.ssrInterpolate)(tag.count)})</span>`);
						else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(tag.name) + " ", 1), (0, vue_exports.createVNode)("span", { class: "text-xs text-gray-400 dark:text-gray-500" }, "(" + (0, vue_exports.toDisplayString)(tag.count) + ")", 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div>`);
		};
	}
});
//#endregion
//#region components/TagList.vue
var _sfc_setup$1 = TagList_vue_vue_type_script_setup_true_lang_default.setup;
TagList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagList.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var TagList_default = Object.assign(TagList_vue_vue_type_script_setup_true_lang_default, { __name: "TagList" });
//#endregion
//#region pages/tags/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "标签" });
		const { data: articles } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData("tags-all", () => queryCollection("articles").select(["tags"]).all())), __temp = await __temp, __restore(), __temp);
		const tagList = (0, vue_exports.computed)(() => {
			if (!articles.value) return [];
			const tagCount = /* @__PURE__ */ new Map();
			articles.value.forEach((article) => {
				(article.tags || []).forEach((tag) => {
					tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
				});
			});
			return Array.from(tagCount.entries()).map(([name, count]) => ({
				name,
				count
			})).sort((a, b) => b.count - a.count);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_TagList = TagList_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "max-w-5xl mx-auto px-4 sm:px-6 py-8" }, _attrs))}><h1 class="text-2xl font-bold mb-6">标签</h1>`);
			if ((0, vue_exports.unref)(tagList).length === 0) _push(`<div class="text-center py-16 text-gray-500 dark:text-gray-400"> 暂无标签 </div>`);
			else _push((0, server_renderer_exports.ssrRenderComponent)(_component_TagList, { tags: (0, vue_exports.unref)(tagList) }, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region pages/tags/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var tags_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { tags_default as default };

//# sourceMappingURL=tags-CpfgFlUN.js.map