import { n as vue_exports, r as require_shared_cjs_prod } from "./server-renderer-CaOs55OH.js";
import { a as useNuxtApp, c as fetchDefaults, f as docsBase, m as defineProdDiagnostics, p as prodReporters } from "./nuxt-BhJpKRwS.js";
import { rt as toArray } from "./ready-CDNijHl7.js";
import { t as $fetch } from "./virtual_nuxt_.nuxt_fetch-CFpjVnC0.js";
import "./head-Ba2JA2W3.js";
import { n as dataDiagnostics, r as defineKeyedFunctionFactory, t as useAsyncData } from "./asyncData-HuskU6BQ.js";
import { appendHeader } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/@nuxt+nitro-server@4.5.0_d548e8a8ccd3cb99a7c5c8e434f06eb1/node_modules/@nuxt/nitro-server/dist/h3.mjs";
import { fnv1a64Base36 } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/fnv1a-64@0.1.1/node_modules/fnv1a-64/dist/index.mjs";
import { identify } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/object-identity@0.2.3/node_modules/object-identity/index.js";
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/utils/hash.js
/**
* Hash an arbitrary value into a short, stable string key.
*
* Values are serialized to a canonical, locale-independent representation
* (equal structures hash equally regardless of key order or runtime locale),
* then digested with a fast non-cryptographic hash. This is what `useFetch` and
* `useAsyncData` use internally to derive their cache keys, so it is safe to use
* for the same purpose in your own code.
*
* The digest is non-cryptographic and must not be used for integrity checks.
*
* @since 4.5.0
*/
function hashKey(value) {
	return fnv1a64Base36(identify(value));
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/diagnostics/state.js
/**
* E7xxx
* Payload / state / cookie runtime diagnostics.
*/
var stateDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/composables/state.js
var useStateKeyPrefix = "$s";
function useState(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (typeof args[0] !== "string") args.unshift(autoKey);
	const [_key, init] = args;
	if (!_key || typeof _key !== "string") throw stateDiagnostics.NUXT_E7009({ key: _key });
	if (init !== void 0 && typeof init !== "function") throw stateDiagnostics.NUXT_E7007({ type: typeof init });
	const key = useStateKeyPrefix + _key;
	const nuxtApp = useNuxtApp();
	const state = (0, vue_exports.toRef)(nuxtApp.payload.state, key);
	if (init) nuxtApp._state[key] ??= { _default: init };
	if (state.value === void 0 && init) {
		const initialValue = init();
		if ((0, vue_exports.isRef)(initialValue)) {
			nuxtApp.payload.state[key] = initialValue;
			return initialValue;
		}
		state.value = initialValue;
	}
	return state;
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/composables/ssr.js
var $fetch$1$1 = $fetch;
/** @since 3.0.0 */
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
/** @since 3.2.0 */
function useRequestFetch() {
	return useRequestEvent()?.$fetch || $fetch$1$1;
}
/** @since 3.8.0 */
function prerenderRoutes(path) {
	if (!import.meta.prerender) return;
	const paths = toArray(path);
	appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/composables/fetch.js
var import_shared_cjs_prod = require_shared_cjs_prod();
var $fetch$1 = $fetch;
var MAYBE_REF_OR_GETTER_OPTION_KEYS = [
	"method",
	"baseURL",
	"query",
	"params",
	"body",
	"headers"
];
function generateOptionSegments(opts) {
	const segments = [(0, vue_exports.toValue)(opts.method)?.toUpperCase() || "GET", (0, vue_exports.toValue)(opts.baseURL)];
	for (const _obj of [opts.query || opts.params]) {
		const obj = (0, vue_exports.toValue)(_obj);
		if (!obj) continue;
		const unwrapped = {};
		for (const [key, value] of Object.entries(obj)) unwrapped[(0, vue_exports.toValue)(key)] = (0, vue_exports.toValue)(value);
		segments.push(unwrapped);
	}
	if (opts.body) {
		const value = (0, vue_exports.toValue)(opts.body);
		if (!value) segments.push(hashKey(value));
		else if (value instanceof ArrayBuffer) segments.push(hashKey(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
		else if (value instanceof FormData) {
			const entries = [];
			for (const entry of value.entries()) {
				const [key, val] = entry;
				entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
			}
			segments.push(hashKey(entries));
		} else if ((0, import_shared_cjs_prod.isPlainObject)(value)) segments.push(hashKey((0, vue_exports.reactive)(value)));
		else try {
			segments.push(hashKey(value));
		} catch {
			dataDiagnostics.NUXT_E3002({ cause: value });
		}
	}
	return segments;
}
/**
* A factory function to create a custom `useFetch` composable with pre-defined default options.
* @since 4.2.0
*/
var createUseFetch = defineKeyedFunctionFactory({
	name: "createUseFetch",
	factory(options = {}) {
		function useFetch(request, arg1, arg2) {
			const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
			const factoryOptions = typeof options === "function" ? options(opts) : options;
			const { server, lazy, default: defaultFn, transform, pick, watch: watchSources, immediate, getCachedData, deep, dedupe, timeout, enabled, ...fetchOptions } = {
				...typeof options === "function" ? {} : factoryOptions,
				...opts,
				...typeof options === "function" ? factoryOptions : {}
			};
			const _request = (0, vue_exports.computed)(() => (0, vue_exports.toValue)(request));
			const key = (0, vue_exports.computed)(() => (0, vue_exports.toValue)(fetchOptions.key) || "$f" + hashKey([
				autoKey,
				typeof _request.value === "string" ? _request.value : "",
				...generateOptionSegments(fetchOptions)
			]));
			if (!fetchOptions.baseURL && typeof _request.value === "string" && _request.value[0] === "/" && _request.value[1] === "/") throw dataDiagnostics.NUXT_E3001({ url: _request.value });
			const _fetchOptions = (0, vue_exports.reactive)({
				...fetchDefaults,
				...fetchOptions,
				cache: typeof fetchOptions.cache === "boolean" ? void 0 : fetchOptions.cache
			});
			const _asyncDataOptions = {
				server,
				lazy,
				default: defaultFn,
				transform,
				pick,
				immediate,
				getCachedData,
				deep,
				dedupe,
				timeout,
				enabled,
				watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
			};
			if (watchSources === false) _asyncDataOptions._keyTriggersExecute = false;
			return useAsyncData(key, (_, { signal }) => {
				let _$fetch = fetchOptions.$fetch || $fetch$1;
				if (!fetchOptions.$fetch) {
					if (typeof _request.value === "string" && _request.value[0] === "/" && (!(0, vue_exports.toValue)(fetchOptions.baseURL) || (0, vue_exports.toValue)(fetchOptions.baseURL)[0] === "/")) _$fetch = useRequestFetch();
				}
				const resolvedOptions = {
					signal,
					..._fetchOptions
				};
				for (const key of MAYBE_REF_OR_GETTER_OPTION_KEYS) if (typeof resolvedOptions[key] === "function") resolvedOptions[key] = (0, vue_exports.toValue)(resolvedOptions[key]);
				return _$fetch(_request.value, resolvedOptions);
			}, _asyncDataOptions);
		}
		return useFetch;
	}
});
var useFetch = createUseFetch.__nuxt_factory();
createUseFetch.__nuxt_factory({
	lazy: true,
	_functionName: "useLazyFetch"
});
//#endregion
export { useState as i, prerenderRoutes as n, useRequestEvent as r, useFetch as t };

//# sourceMappingURL=fetch-DZbKVTJb.js.map