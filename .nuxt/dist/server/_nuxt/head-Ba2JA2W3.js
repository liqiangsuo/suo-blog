import { n as vue_exports } from "./server-renderer-CaOs55OH.js";
import { a as useNuxtApp, f as docsBase, m as defineProdDiagnostics, p as prodReporters } from "./nuxt-BhJpKRwS.js";
import { headSymbol, useHead } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/@unhead+vue@3.1.8_crossws@0_04985a48638c31ce6f665dd682c9d0d7/node_modules/@unhead/vue/dist/index.mjs";
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/diagnostics/head.js
/**
* E6xxx
* Head / unhead runtime diagnostics.
*/
var unheadDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/head/runtime/composables.js
/**
* Injects the head client from the Nuxt context or Vue inject.
*/
function injectHead(nuxtApp) {
	const nuxt = nuxtApp || useNuxtApp();
	return nuxt.ssrContext?.head || nuxt.runWithContext(() => {
		if ((0, vue_exports.hasInjectionContext)()) {
			const head = (0, vue_exports.inject)(headSymbol);
			if (!head) throw unheadDiagnostics.NUXT_E6001();
			return head;
		}
	});
}
function useHead$1(input, options = {}) {
	return useHead(input, {
		head: options.head || injectHead(options.nuxt),
		...options
	});
}
//#endregion
export { useHead$1 as t };

//# sourceMappingURL=head-Ba2JA2W3.js.map