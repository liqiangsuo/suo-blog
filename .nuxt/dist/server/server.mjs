import { n as vue_exports, t as server_renderer_exports } from "./_nuxt/server-renderer-CaOs55OH.js";
import { a as useNuxtApp, f as docsBase, l as nuxtLinkDefaults, m as defineProdDiagnostics, n as createNuxtApp, o as useRuntimeConfig, p as prodReporters, r as defineNuxtPlugin, t as applyPlugins } from "./_nuxt/nuxt-BhJpKRwS.js";
import { $ as navigationDiagnostics, A as assign, B as useRoute$1, C as parseURL$1, D as stringifyURL, E as stringifyQuery, F as mergeOptions, G as showError, H as _showErrorUnlessCrawler, I as noop, J as encodeRoutePath, K as useError, L as routeLocationKey, M as isArray, N as isNavigationFailure, O as useCallbacks, P as matchedRouteKey, Q as useRouter, R as routerKey, S as parseQuery$1, U as createError$1, V as viewDepthKey, W as isNuxtError, X as resolveRouteObject, Y as navigateTo, Z as useRoute, _ as isSameRouteLocation, a as START_LOCATION_NORMALIZED, b as normalizeBase, c as decode, d as extractChangingRecords, et as LayoutMetaSymbol, f as extractComponentsGuards, g as isRouteName, h as guardToPromiseFn, j as createRouterError, k as applyToParams, l as encodeHash, n as _wrapInTransition, nt as PageRouteSymbol, q as defineNuxtRouteMiddleware, r as isChangingPage, s as createHref, t as _mergeTransitionProps, tt as LayoutSymbol, u as encodeParam, v as isSameRouteLocationParams, x as normalizeQuery, y as isSameRouteRecord, z as routerViewLocationKey } from "./_nuxt/ready-CDNijHl7.js";
import "./_nuxt/virtual_nuxt_.nuxt_fetch-CFpjVnC0.js";
import { i as useState, n as prerenderRoutes, r as useRequestEvent } from "./_nuxt/fetch-DZbKVTJb.js";
import { t as useHead$1 } from "./_nuxt/head-Ba2JA2W3.js";
import "./_nuxt/asyncData-HuskU6BQ.js";
import { executeAsync } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/unctx@3.0.0_magic-string@1._3f681382cddc6b302018a8a0f569418e/node_modules/unctx/dist/index.mjs";
import "C:/codex_learn/codex_list/blog/node_modules/.pnpm/@nuxt+nitro-server@4.5.0_d548e8a8ccd3cb99a7c5c8e434f06eb1/node_modules/@nuxt/nitro-server/dist/h3.mjs";
import { hasProtocol, isScriptProtocol, joinURL, parseQuery, withTrailingSlash, withoutTrailingSlash } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
import "#internal/nuxt/paths";
import { defu } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs";
import "C:/codex_learn/codex_list/blog/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "C:/codex_learn/codex_list/blog/node_modules/.pnpm/cookie-es@3.1.1/node_modules/cookie-es/dist/index.mjs";
import "C:/codex_learn/codex_list/blog/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs";
//#region virtual:nuxt:.nuxt%2Fglobal-polyfills.mjs
if (!("global" in globalThis)) globalThis.global = globalThis;
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/head/runtime/island-head.js
/**
* No-op `head.push` until the returned `unfreeze` runs. Plugin/transformer
* augmentations on the same head are unaffected.
*/
function freezeHead(head) {
	const realPush = head.push;
	head.push = () => ({
		dispose: () => {},
		patch: () => {},
		_i: 0
	});
	return () => {
		head.push = realPush;
	};
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/head/runtime/plugins/unhead.server.js
var plugin$3 = defineNuxtPlugin({
	name: "nuxt:head",
	enforce: "pre",
	setup(nuxtApp) {
		const head = nuxtApp.ssrContext.head;
		if (nuxtApp.ssrContext.islandContext) {
			const unfreeze = freezeHead(head);
			nuxtApp.hooks.hookOnce("app:created", unfreeze);
		}
		nuxtApp.vueApp.use(head);
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/pages/runtime/utils.js
var ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE = /:\w+/g;
var interpolatePath = (route, match) => {
	return match.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
};
var generateRouteKey = (routeProps, override) => {
	const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
	const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
	return typeof source === "function" ? source(routeProps.route) : source;
};
/** @since 3.9.0 */
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
//#endregion
//#region node_modules/.pnpm/vue-router@5.2.0_@vue+compi_6668c30771a6d54be1eab3c0bf26669a/node_modules/vue-router/dist/vue-router.js
/*!
* vue-router v5.2.0
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
/**
* Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
* It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
*
* @param base - Base applied to all urls, defaults to '/'
* @returns a history object that can be passed to the router constructor
*/
function createMemoryHistory(base = "") {
	let listeners = [];
	let queue = [["", {}]];
	let position = 0;
	base = normalizeBase(base);
	function setLocation(location, state = {}) {
		position++;
		if (position !== queue.length) queue.splice(position);
		queue.push([location, state]);
	}
	function triggerListeners(to, from, { direction, delta }) {
		const info = {
			direction,
			delta,
			type: "pop"
		};
		for (const callback of listeners) callback(to, from, info);
	}
	const routerHistory = {
		location: "",
		state: {},
		base,
		createHref: createHref.bind(null, base),
		replace(to, state) {
			queue.splice(position--, 1);
			setLocation(to, state);
		},
		push(to, state) {
			setLocation(to, state);
		},
		listen(callback) {
			listeners.push(callback);
			return () => {
				const index = listeners.indexOf(callback);
				if (index > -1) listeners.splice(index, 1);
			};
		},
		destroy() {
			listeners = [];
			queue = [["", {}]];
			position = 0;
		},
		go(delta, shouldTrigger = true) {
			const from = this.location;
			const direction = delta < 0 ? "back" : "forward";
			position = Math.max(0, Math.min(position + delta, queue.length - 1));
			if (shouldTrigger) triggerListeners(this.location, from, {
				direction,
				delta
			});
		}
	};
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => queue[position][0]
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => queue[position][1]
	});
	return routerHistory;
}
var ROOT_TOKEN = {
	type: 0,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = 0;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === 0) segment.push({
			type: 0,
			value: buffer
		});
		else if (state === 1 || state === 2 || state === 3) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: 1,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		switch (state) {
			case 0:
				if (char === "\\") {
					previousState = state;
					state = 4;
				} else if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = 1;
				} else addCharToBuffer();
				break;
			case 4:
				addCharToBuffer();
				state = previousState;
				break;
			case 1:
				if (char === "(") state = 2;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = 0;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case 2:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = 3;
				else customRe += char;
				break;
			case 3:
				consumeBuffer();
				state = 0;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [90];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = 40 + (options.sensitive ? .25 : 0);
			if (token.type === 0) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += 40;
			} else if (token.type === 1) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re !== BASE_PARAM_PATTERN) {
					subSegmentScore += 10;
					try {
						new RegExp(`(${re})`);
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += 20;
				if (optional) subSegmentScore += -8;
				if (repeatable) subSegmentScore += -20;
				if (re === ".*") subSegmentScore += -50;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += .7000000000000001;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === 0) path += token.value;
			else if (token.type === 1) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === 80 ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === 80 ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const matcher = assign(tokensToParser(tokenizePath(record.path), options), {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location && location.name) {
			matcher = matcherMap.get(location.name);
			if (!matcher) throw createRouterError(1, { location });
			name = matcher.record.name;
			params = assign(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location.params && pickParams(location.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location.path != null) {
			path = location.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
				matcher.keys.forEach((key) => {
					if (key.optional && !params[key.name]) delete params[key.name];
				});
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(1, {
				location,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = (0, vue_exports.inject)(routerKey);
	const currentRoute = (0, vue_exports.inject)(routeLocationKey);
	const route = (0, vue_exports.computed)(() => {
		const to = (0, vue_exports.unref)(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = (0, vue_exports.computed)(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = (0, vue_exports.computed)(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = (0, vue_exports.computed)(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[(0, vue_exports.unref)(props.replace) ? "replace" : "push"]((0, vue_exports.unref)(props.to)).catch(noop);
			if (props.viewTransition && false);
			return p;
		}
		return Promise.resolve();
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: (0, vue_exports.computed)(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = (0, vue_exports.reactive)(useLink(props));
		const { options } = (0, vue_exports.inject)(routerKey);
		const elClass = (0, vue_exports.computed)(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : (0, vue_exports.h)("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /*#__PURE__*/ (0, vue_exports.defineComponent)({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = (0, vue_exports.inject)(routerViewLocationKey);
		const routeToDisplay = (0, vue_exports.computed)(() => props.route || injectedRoute.value);
		const injectedDepth = (0, vue_exports.inject)(viewDepthKey, 0);
		const depth = (0, vue_exports.computed)(() => {
			let initialDepth = (0, vue_exports.unref)(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = (0, vue_exports.computed)(() => routeToDisplay.value.matched[depth.value]);
		(0, vue_exports.provide)(viewDepthKey, (0, vue_exports.computed)(() => depth.value + 1));
		(0, vue_exports.provide)(matchedRouteKey, matchedRouteRef);
		(0, vue_exports.provide)(routerViewLocationKey, routeToDisplay);
		const viewRef = (0, vue_exports.ref)();
		(0, vue_exports.watch)(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, _oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot$1(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = (0, vue_exports.h)(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot$1(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot$1(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1$1 = options.parseQuery || parseQuery$1;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = (0, vue_exports.shallowRef)(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL$1(parseQuery$1$1, rawLocation, currentLocation.path);
			const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href = routerHistory.createHref(locationNormalized.fullPath);
			return assign(locationNormalized, matchedRoute, {
				params: decodeParams(matchedRoute.params),
				redirectedFrom: void 0,
				href
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = assign({}, rawLocation, { path: parseURL$1(parseQuery$1$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL$1(parseQuery$1$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(8, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(16, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure) => {
			if (failure) {
				if (isNavigationFailure(failure, 2)) return pushWithRedirect(assign({ replace }, locationAsObject(failure.to), {
					state: typeof failure.to === "object" ? assign({}, data, failure.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure = finalizeNavigation(toLocation, from, true, replace, data);
			triggerAfterEach(toLocation, from, failure);
			return failure;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = {};
		if (isPush) if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, 12)) return error;
				if (isNavigationFailure(error, 2)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, 20) && !info.delta && info.type === "pop") routerHistory.go(-1, false);
					}).catch(noop);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, 8)) routerHistory.go(-info.delta, false);
					else if (info.type === "pop" && isNavigationFailure(failure, 20)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve, reject) => {
			readyHandlers.add([resolve, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		return Promise.resolve();
	}
	const go = (delta) => routerHistory.go(delta);
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => (0, vue_exports.unref)(currentRoute)
			});
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, (0, vue_exports.shallowReactive)(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/pages/runtime/router.options.js
var router_options_default = { scrollBehavior(to, from, savedPosition) {
	const nuxtApp = useNuxtApp();
	const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
	if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
		if (from.hash && !to.hash) return savedPosition ?? {
			left: 0,
			top: 0
		};
		if (to.hash) return {
			el: to.hash,
			top: _getHashElementScrollMarginTop(to.hash),
			behavior: hashScrollBehaviour
		};
		return false;
	}
	if ((typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop) === false) return false;
	if (from === START_LOCATION_NORMALIZED) return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
	return new Promise((resolve) => {
		const doScroll = () => {
			requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
		};
		nuxtApp.hooks.hookOnce("page:loading:end", () => {
			const transitionPromise = nuxtApp["~transitionPromise"];
			if (transitionPromise) transitionPromise.then(doScroll);
			else doScroll();
		});
	});
} };
function _getHashElementScrollMarginTop(selector) {
	try {
		const elem = (void 0).querySelector(selector);
		if (elem) return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
	} catch {}
	return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
	if (savedPosition) return savedPosition;
	if (to.hash) return {
		el: to.hash,
		top: _getHashElementScrollMarginTop(to.hash),
		behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
	};
	return {
		left: 0,
		top: 0
	};
}
var virtual_nuxt__nuxt_2Frouter_options_default = {
	hashMode: false,
	scrollBehaviorType: "auto",
	...router_options_default
};
Object.assign(Object.create(null), {});
var pageIslandRoutes = Object.assign(Object.create(null), {});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/pages/runtime/validate.js
var middleware$1 = defineNuxtRouteMiddleware(async (to) => {
	let __temp, __restore;
	if (!to.meta?.validate) return;
	const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
	if (result === true) return;
	return createError$1({
		fatal: false,
		status: result && (result.status || result.statusCode) || 404,
		statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
		data: { path: to.fullPath }
	});
}, 1);
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/diagnostics/manifest.js
/**
* E5xxx
* App manifest / route-rules runtime diagnostics.
*/
var manifestDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region virtual:nuxt:.nuxt%2Froute-rules.mjs
var matcher = /* @__PURE__ */ (() => {
	const $0 = { prerender: true }, $1 = {}, $2 = { payload: false };
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		if (p === "/__nuxt_content/content/sql_dump.txt") r.push({ data: $0 });
		else if (p === "/sitemap.xml") r.push({ data: $1 });
		else if (p.charCodeAt(p.length - 1) === 47) {
			if (p === "/__nuxt_content/content/sql_dump.txt/") r.push({ data: $0 });
			else if (p === "/sitemap.xml/") r.push({ data: $1 });
		}
		let s = p.split("/");
		if (s.length > 1 && s[s.length - 1] === "") {
			s.pop();
			p = p.slice(0, -1);
		}
		if (s.length > 1) {
			if (s[1] === "__nuxt_content") r.push({
				data: $2,
				params: { "_": p.slice(16) }
			});
		}
		return r.reverse();
	};
})();
var virtual_nuxt__nuxt_2Froute_rules_default = (path) => defu({}, ...matcher("", typeof path === "string" ? path.toLowerCase() : path).map((r) => r.data).reverse());
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/composables/manifest.js
var routeRulesMatcher$2 = virtual_nuxt__nuxt_2Froute_rules_default;
function getRouteRules(arg) {
	const path = typeof arg === "string" ? arg : arg.path;
	try {
		return routeRulesMatcher$2(path.toLowerCase());
	} catch (e) {
		manifestDiagnostics.NUXT_E5003({
			path,
			cause: e
		});
		return {};
	}
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fmiddleware.mjs
var globalMiddleware = [middleware$1, /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {})];
var namedMiddleware = {};
//#endregion
//#region virtual:nuxt:.nuxt%2Froutes.mjs
var virtual_nuxt__nuxt_2Froutes_default = [
	{
		name: "admin-articles",
		path: "/admin/articles",
		meta: { layout: "admin" },
		component: () => import("./_nuxt/articles-CBcl029F.js")
	},
	{
		name: "tags-tag",
		path: "/tags/:tag()",
		component: () => import("./_nuxt/_tag_-C4H74f-W.js")
	},
	{
		name: "articles-slug",
		path: "/articles/:slug(.*)*",
		component: () => import("./_nuxt/_...slug_-gp1uycAU.js")
	},
	{
		name: "about",
		path: "/about",
		component: () => import("./_nuxt/about-n9zEUnAm.js")
	},
	{
		name: "admin",
		path: "/admin",
		meta: { layout: "admin" },
		component: () => import("./_nuxt/admin-37Lej3WS.js")
	},
	{
		name: "tags",
		path: "/tags",
		component: () => import("./_nuxt/tags-CpfgFlUN.js")
	},
	{
		name: "index",
		path: "/",
		component: () => import("./_nuxt/pages-hSTPwdQl.js")
	}
];
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/pages/runtime/plugins/router.js
var plugin$2 = defineNuxtPlugin({
	name: "nuxt:router",
	enforce: "pre",
	async setup(nuxtApp) {
		let __temp, __restore;
		let routerBase = useRuntimeConfig().app.baseURL;
		const history = virtual_nuxt__nuxt_2Frouter_options_default.history?.(routerBase) ?? createMemoryHistory(routerBase);
		const routes = virtual_nuxt__nuxt_2Frouter_options_default.routes ? ([__temp, __restore] = executeAsync(() => virtual_nuxt__nuxt_2Frouter_options_default.routes(virtual_nuxt__nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__nuxt_2Froutes_default : virtual_nuxt__nuxt_2Froutes_default;
		let startPosition;
		const router = createRouter({
			...virtual_nuxt__nuxt_2Frouter_options_default,
			scrollBehavior: (to, from, savedPosition) => {
				if (from === START_LOCATION_NORMALIZED) {
					startPosition = savedPosition;
					return;
				}
				if (virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior) {
					router.options.scrollBehavior = virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior;
					if ("scrollRestoration" in (void 0).history) {
						const unsub = router.beforeEach(() => {
							unsub();
							(void 0).history.scrollRestoration = "manual";
						});
					}
					return virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior(to, START_LOCATION_NORMALIZED, startPosition || savedPosition);
				}
			},
			history,
			routes
		});
		nuxtApp.vueApp.use(router);
		const previousRoute = (0, vue_exports.shallowRef)(router.currentRoute.value);
		router.afterEach((_to, from) => {
			previousRoute.value = from;
		});
		Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", { get: () => previousRoute.value });
		const initialURL = nuxtApp.ssrContext.url;
		const _route = (0, vue_exports.shallowRef)(router.currentRoute.value);
		const syncCurrentRoute = () => {
			_route.value = router.currentRoute.value;
		};
		router.afterEach((to, from) => {
			const lastTo = to.matched.at(-1)?.components?.default;
			const lastFrom = from.matched.at(-1)?.components?.default;
			if (lastTo === lastFrom) {
				if (generateRouteKey({
					route: to,
					Component: { type: lastTo }
				}) === generateRouteKey({
					route: from,
					Component: { type: lastFrom }
				})) syncCurrentRoute();
				return;
			}
			if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) syncCurrentRoute();
		});
		const route = { sync: syncCurrentRoute };
		for (const key in _route.value) Object.defineProperty(route, key, {
			get: () => _route.value[key],
			enumerable: true
		});
		nuxtApp._route = (0, vue_exports.shallowReactive)(route);
		nuxtApp._middleware ||= {
			global: [],
			named: {}
		};
		const error = useError();
		const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
		if (!nuxtApp.ssrContext?.islandContext || isServerPage) router.afterEach(async (to, _from, failure) => {
			delete nuxtApp._processingMiddleware;
			if (failure) await nuxtApp.callHook("page:loading:end");
			if (failure?.type === 4) return;
			if (to.redirectedFrom && to.fullPath !== initialURL) await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
		});
		try {
			[__temp, __restore] = executeAsync(() => router.push(initialURL)), __temp = await __temp, __restore();
			[__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
		} catch (error) {
			[__temp, __restore] = executeAsync(() => _showErrorUnlessCrawler(nuxtApp, error)), await __temp, __restore();
		}
		const resolvedInitialRoute = router.currentRoute.value;
		syncCurrentRoute();
		if (nuxtApp.ssrContext?.islandContext && !isServerPage) return { provide: { router } };
		const initialLayout = nuxtApp.payload.state._layout;
		router.beforeEach(async (to, from) => {
			await nuxtApp.callHook("page:loading:start");
			to.meta = (0, vue_exports.reactive)(to.meta);
			if (nuxtApp.isHydrating && initialLayout && !(0, vue_exports.isReadonly)(to.meta.layout)) to.meta.layout = initialLayout;
			nuxtApp._processingMiddleware = true;
			if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
				const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
				for (const component of to.matched) {
					const componentMiddleware = component.meta.middleware;
					if (!componentMiddleware) continue;
					for (const entry of toArray(componentMiddleware)) middlewareEntries.add(entry);
				}
				const routeRules = getRouteRules({ path: to.path });
				if (routeRules.appMiddleware) for (const key in routeRules.appMiddleware) if (routeRules.appMiddleware[key]) middlewareEntries.add(key);
				else middlewareEntries.delete(key);
				for (const entry of middlewareEntries) {
					const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
					if (!middleware) throw navigationDiagnostics.NUXT_E2004({
						entry: String(entry),
						validMiddleware: void 0
					});
					try {
						const result = await nuxtApp.runWithContext(() => middleware(to, from));
						if (result === false || result instanceof Error) {
							const error = result || createError$1({
								status: 404,
								statusText: `Page Not Found: ${initialURL}`
							});
							await nuxtApp.runWithContext(() => showError(error));
							return false;
						}
						if (result === true) continue;
						if (result === false) return result;
						if (result) {
							if (isNuxtError(result) && result.fatal) await nuxtApp.runWithContext(() => showError(result));
							return result;
						}
					} catch (err) {
						const error = createError$1(err);
						if (error.fatal) await nuxtApp.runWithContext(() => showError(error));
						return error;
					}
				}
			}
		});
		if (isServerPage) router.beforeResolve((to) => {
			const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
			const actual = to.matched.find((m) => (m.components?.default)?.__nuxt_island)?.components?.default;
			if (!expected || expected !== actual?.__nuxt_island) {
				nuxtApp.ssrContext["~renderResponse"] = {
					statusCode: 400,
					statusMessage: "Invalid island request path"
				};
				return false;
			}
		});
		router.onError(async () => {
			delete nuxtApp._processingMiddleware;
			await nuxtApp.callHook("page:loading:end");
		});
		router.afterEach((to) => {
			if (to.matched.length === 0 && !error.value) return nuxtApp.runWithContext(() => showError(createError$1({
				status: 404,
				fatal: false,
				statusText: `Page not found: ${to.fullPath}`,
				data: { path: to.fullPath }
			})));
		});
		nuxtApp.hooks.hookOnce("app:created", async () => {
			try {
				if ("name" in resolvedInitialRoute) resolvedInitialRoute.name = void 0;
				await router.replace({
					...resolvedInitialRoute,
					force: true
				});
				router.options.scrollBehavior = virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior;
			} catch (error) {
				await _showErrorUnlessCrawler(nuxtApp, error);
			}
		});
		return { provide: { router } };
	}
}, 1);
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/composables/payload.js
/**
* This is an experimental function for configuring passing rich data from server -> client.
* @since 3.4.0
*/
function definePayloadReducer(name, reduce) {
	useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/composables/layout.js
var routeRulesMatcher$1 = virtual_nuxt__nuxt_2Froute_rules_default;
function resolveLayoutName(route, name) {
	return (0, vue_exports.unref)(name) ?? route?.meta.layout ?? routeRulesMatcher$1(route?.path ?? "/").appLayout ?? "default";
}
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/nuxt-link.js
var firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
/**
* Reject URL strings that would resolve to a script-capable protocol when used as the
* `href` of an anchor element. Returns the value unchanged when safe, or `null`.
*
* The denylist is delegated to `ufo`'s `isScriptProtocol` so it stays in sync with the
* check used by `navigateTo` (currently `javascript:`, `data:`, `vbscript:`, `blob:`).
* ASCII whitespace and control characters are stripped first because browser URL
* parsers tolerate them before the scheme, and `view-source:` is peeled recursively
* because Chromium resolves it transparently to the inner URL.
*/
function sanitizeExternalHref(value) {
	let candidate = value.replace(/[\u0000-\u001F\s]+/g, "");
	while (candidate.toLowerCase().startsWith("view-source:")) candidate = candidate.slice(12);
	const colon = candidate.indexOf(":");
	if (colon > 0 && isScriptProtocol(candidate.slice(0, colon + 1))) return null;
	return value;
}
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtLink(options) {
	const componentName = options.componentName || "NuxtLink";
	function isHashLinkWithoutHashMode(link) {
		return typeof link === "string" && link.startsWith("#");
	}
	function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
		const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
		if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") return to;
		if (typeof to === "string") return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
		const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
		return {
			...to,
			name: void 0,
			path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
		};
	}
	function useNuxtLink(props) {
		const router = useRouter();
		const config = /* @__PURE__ */ useRuntimeConfig();
		const hasTarget = (0, vue_exports.computed)(() => !!(0, vue_exports.unref)(props.target) && (0, vue_exports.unref)(props.target) !== "_self");
		const isAbsoluteUrl = (0, vue_exports.computed)(() => {
			const path = (0, vue_exports.unref)(props.to) || (0, vue_exports.unref)(props.href) || "";
			return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
		});
		const builtinRouterLink = (0, vue_exports.resolveComponent)("RouterLink");
		const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
		const isExternal = (0, vue_exports.computed)(() => {
			if ((0, vue_exports.unref)(props.external)) return true;
			const path = (0, vue_exports.unref)(props.to) || (0, vue_exports.unref)(props.href) || "";
			if (typeof path === "object") return false;
			return path === "" || isAbsoluteUrl.value;
		});
		const to = (0, vue_exports.computed)(() => {
			const path = (0, vue_exports.unref)(props.to) || (0, vue_exports.unref)(props.href) || "";
			if (isExternal.value) return path;
			return resolveTrailingSlashBehavior(path, router.resolve, (0, vue_exports.unref)(props.trailingSlash));
		});
		const link = isExternal.value ? void 0 : useBuiltinLink?.({
			...props,
			to,
			viewTransition: (0, vue_exports.unref)(props.viewTransition)
		});
		const href = (0, vue_exports.computed)(() => {
			const effectiveTrailingSlash = (0, vue_exports.unref)(props.trailingSlash) ?? options.trailingSlash;
			if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
				const raw = to.value;
				return typeof raw === "string" ? sanitizeExternalHref(raw) : raw;
			}
			if (isExternal.value) {
				const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
				const href = typeof path === "object" ? router.resolve(path).href : path;
				const safe = typeof href === "string" ? sanitizeExternalHref(href) : href;
				return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
			}
			if (typeof to.value === "object") return router.resolve(to.value)?.href ?? null;
			return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
		});
		return {
			to,
			hasTarget,
			isAbsoluteUrl,
			isExternal,
			href,
			isActive: link?.isActive ?? (0, vue_exports.computed)(() => to.value === router.currentRoute.value.path),
			isExactActive: link?.isExactActive ?? (0, vue_exports.computed)(() => to.value === router.currentRoute.value.path),
			route: link?.route ?? (0, vue_exports.computed)(() => router.resolve(to.value)),
			async navigate(_e) {
				if (href.value === null) return;
				await navigateTo(href.value, {
					replace: (0, vue_exports.unref)(props.replace),
					external: isExternal.value || hasTarget.value
				});
			}
		};
	}
	return (0, vue_exports.defineComponent)({
		name: componentName,
		props: {
			to: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			href: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			target: {
				type: String,
				default: void 0,
				required: false
			},
			rel: {
				type: String,
				default: void 0,
				required: false
			},
			noRel: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetchOn: {
				type: [String, Object],
				default: void 0,
				required: false
			},
			noPrefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			activeClass: {
				type: String,
				default: void 0,
				required: false
			},
			exactActiveClass: {
				type: String,
				default: void 0,
				required: false
			},
			prefetchedClass: {
				type: String,
				default: void 0,
				required: false
			},
			replace: {
				type: Boolean,
				default: void 0,
				required: false
			},
			ariaCurrentValue: {
				type: String,
				default: void 0,
				required: false
			},
			external: {
				type: Boolean,
				default: void 0,
				required: false
			},
			custom: {
				type: Boolean,
				default: void 0,
				required: false
			},
			trailingSlash: {
				type: String,
				default: void 0,
				required: false
			}
		},
		useLink: useNuxtLink,
		setup(props, { slots }) {
			const router = useRouter();
			const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
			const prefetched = (0, vue_exports.shallowRef)(false);
			const el = void 0;
			const elRef = void 0;
			function shouldPrefetch(mode) {
				return false;
			}
			async function prefetch(nuxtApp = useNuxtApp()) {}
			return () => {
				const target = props.target || null;
				const rel = firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : "") || null;
				const getCustomSlotProps = (routerLinkSlotProps) => ({
					href: href.value,
					navigate,
					get route() {
						if (!href.value) return;
						const url = new URL(href.value, "http://localhost");
						return {
							path: url.pathname,
							fullPath: url.pathname,
							get query() {
								return parseQuery(url.search);
							},
							hash: url.hash,
							params: {},
							name: void 0,
							matched: [],
							redirectedFrom: void 0,
							meta: {},
							href: href.value
						};
					},
					rel,
					target,
					isExternal: isExternal.value || hasTarget.value,
					isActive: false,
					isExactActive: false,
					...routerLinkSlotProps,
					prefetch,
					prefetched: prefetched.value,
					shouldPrefetch
				});
				if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
					const routerLinkProps = {
						ref: elRef,
						to: to.value,
						activeClass: props.activeClass || options.activeClass,
						exactActiveClass: props.exactActiveClass || options.exactActiveClass,
						replace: props.replace,
						ariaCurrentValue: props.ariaCurrentValue,
						custom: props.custom
					};
					if (!props.custom) routerLinkProps.rel = props.rel || void 0;
					return (0, vue_exports.h)((0, vue_exports.resolveComponent)("RouterLink"), routerLinkProps, props.custom && slots.default ? { default: (slotProps) => slots.default(getCustomSlotProps(slotProps)) } : slots.default);
				}
				if (props.custom) {
					if (!slots.default) return null;
					return slots.default(getCustomSlotProps());
				}
				return (0, vue_exports.h)("a", {
					ref: el,
					href: href.value || null,
					rel,
					target,
					onClick: async (event) => {
						if (isExternal.value || hasTarget.value) return;
						event.preventDefault();
						try {
							const encodedHref = encodeRoutePath(href.value ?? "");
							return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
						} finally {}
					}
				}, slots.default?.());
			};
		}
	});
}
var NuxtLink = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
	const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
	if (hasProtocol(to) && !to.startsWith("http")) return to;
	return normalizeFn(to, true);
}
//#endregion
//#region node_modules/.pnpm/nuxt-site-config@4.1.1_@nux_4abc8fd1380961a9c297d9c0f1266ac5/node_modules/nuxt-site-config/dist/runtime/app/plugins/0.siteConfig.js
var _0_siteConfig_default = defineNuxtPlugin({
	name: "nuxt-site-config:init",
	enforce: "pre",
	async setup(nuxtApp) {
		const stack = useRequestEvent()?.context?.siteConfig;
		const state = useState("site-config");
		nuxtApp.hooks.hook("app:rendered", () => {
			state.value = stack?.get({
				debug: useRuntimeConfig()["nuxt-site-config"].debug,
				resolveRefs: true
			});
		});
		return { provide: { nuxtSiteConfig: stack } };
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/plugins/revive-payload.server.js
var reducers = [
	["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
	["EmptyShallowRef", (data) => (0, vue_exports.isRef)(data) && (0, vue_exports.isShallow)(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["EmptyRef", (data) => (0, vue_exports.isRef)(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["ShallowRef", (data) => (0, vue_exports.isRef)(data) && (0, vue_exports.isShallow)(data) && data.value],
	["ShallowReactive", (data) => (0, vue_exports.isReactive)(data) && (0, vue_exports.isShallow)(data) && (0, vue_exports.toRaw)(data)],
	["Ref", (data) => (0, vue_exports.isRef)(data) && data.value],
	["Reactive", (data) => (0, vue_exports.isReactive)(data) && (0, vue_exports.toRaw)(data)]
];
var plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:revive-payload:server",
	setup() {
		for (const [reducer, fn] of reducers) definePayloadReducer(reducer, fn);
	}
});
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue?nuxt_component=async&nuxt_component_name=ProseA&nuxt_component_export=default
var ProseA_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseA-DoK32-UW.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue?nuxt_component=async&nuxt_component_name=ProseBlockquote&nuxt_component_export=default
var ProseBlockquote_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseBlockquote-Dyb-7A2S.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue?nuxt_component=async&nuxt_component_name=ProseCode&nuxt_component_export=default
var ProseCode_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseCode-DueEAZwe.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue?nuxt_component=async&nuxt_component_name=ProseEm&nuxt_component_export=default
var ProseEm_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseEm-CHHvjC1y.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue?nuxt_component=async&nuxt_component_name=ProseH1&nuxt_component_export=default
var ProseH1_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseH1-mAgBnnjW.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue?nuxt_component=async&nuxt_component_name=ProseH2&nuxt_component_export=default
var ProseH2_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseH2-M6ZHKZT6.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue?nuxt_component=async&nuxt_component_name=ProseH3&nuxt_component_export=default
var ProseH3_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseH3-Bc1XJDit.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue?nuxt_component=async&nuxt_component_name=ProseH4&nuxt_component_export=default
var ProseH4_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseH4-BotxlDxO.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue?nuxt_component=async&nuxt_component_name=ProseH5&nuxt_component_export=default
var ProseH5_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseH5-C3CG0u6h.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue?nuxt_component=async&nuxt_component_name=ProseH6&nuxt_component_export=default
var ProseH6_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseH6-BqNutIBr.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue?nuxt_component=async&nuxt_component_name=ProseHr&nuxt_component_export=default
var ProseHr_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseHr-TcAMcfV5.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue?nuxt_component=async&nuxt_component_name=ProseImg&nuxt_component_export=default
var ProseImg_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseImg-C3AtXcMD.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue?nuxt_component=async&nuxt_component_name=ProseLi&nuxt_component_export=default
var ProseLi_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseLi-BLFCTVMI.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue?nuxt_component=async&nuxt_component_name=ProseOl&nuxt_component_export=default
var ProseOl_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseOl-DVMLRwFw.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue?nuxt_component=async&nuxt_component_name=ProseP&nuxt_component_export=default
var ProseP_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseP-F69MeFBD.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue?nuxt_component=async&nuxt_component_name=ProsePre&nuxt_component_export=default
var ProsePre_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProsePre-CrdN_Erc.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue?nuxt_component=async&nuxt_component_name=ProseScript&nuxt_component_export=default
var ProseScript_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseScript-CFpyjNIA.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue?nuxt_component=async&nuxt_component_name=ProseStrong&nuxt_component_export=default
var ProseStrong_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseStrong-kEjhs2Im.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue?nuxt_component=async&nuxt_component_name=ProseTable&nuxt_component_export=default
var ProseTable_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseTable-D7QX2imE.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue?nuxt_component=async&nuxt_component_name=ProseTbody&nuxt_component_export=default
var ProseTbody_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseTbody-DG5EhU5H.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue?nuxt_component=async&nuxt_component_name=ProseTd&nuxt_component_export=default
var ProseTd_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseTd-C30Eg0N2.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue?nuxt_component=async&nuxt_component_name=ProseTh&nuxt_component_export=default
var ProseTh_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseTh-CajT6RCP.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue?nuxt_component=async&nuxt_component_name=ProseThead&nuxt_component_export=default
var ProseThead_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseThead-DI0EWXfk.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue?nuxt_component=async&nuxt_component_name=ProseTr&nuxt_component_export=default
var ProseTr_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseTr-DutXJ9NF.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue?nuxt_component=async&nuxt_component_name=ProseUl&nuxt_component_export=default
var ProseUl_default = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/ProseUl-DjYwPSmr.js").then((r) => r["default"] || r.default || r));
//#endregion
//#region virtual:nuxt:.nuxt%2Fcomponents.plugin.mjs
var lazyGlobalComponents = [
	["ProseA", ProseA_default],
	["ProseBlockquote", ProseBlockquote_default],
	["ProseCode", ProseCode_default],
	["ProseEm", ProseEm_default],
	["ProseH1", ProseH1_default],
	["ProseH2", ProseH2_default],
	["ProseH3", ProseH3_default],
	["ProseH4", ProseH4_default],
	["ProseH5", ProseH5_default],
	["ProseH6", ProseH6_default],
	["ProseHr", ProseHr_default],
	["ProseImg", ProseImg_default],
	["ProseLi", ProseLi_default],
	["ProseOl", ProseOl_default],
	["ProseP", ProseP_default],
	["ProsePre", ProsePre_default],
	["ProseScript", ProseScript_default],
	["ProseStrong", ProseStrong_default],
	["ProseTable", ProseTable_default],
	["ProseTbody", ProseTbody_default],
	["ProseTd", ProseTd_default],
	["ProseTh", ProseTh_default],
	["ProseThead", ProseThead_default],
	["ProseTr", ProseTr_default],
	["ProseUl", ProseUl_default]
];
var virtual_nuxt__nuxt_2Fcomponents_plugin_default = defineNuxtPlugin({
	name: "nuxt:global-components",
	setup(nuxtApp) {
		for (const [name, component] of lazyGlobalComponents) {
			nuxtApp.vueApp.component(name, component);
			nuxtApp.vueApp.component("Lazy" + name, component);
		}
	}
});
//#endregion
//#region virtual:nuxt:.nuxt%2Fcolor-mode-options.mjs
var preference = "system";
//#endregion
//#region node_modules/.pnpm/@nuxtjs+color-mode@4.0.1_ma_9f03d65aa0c3b100ecc5bf0890b7244f/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js
var plugin_server_default = defineNuxtPlugin((nuxtApp) => {
	const colorMode = nuxtApp.ssrContext?.islandContext ? (0, vue_exports.ref)({}).value : useState("color-mode", () => (0, vue_exports.reactive)({
		preference,
		value: preference,
		unknown: true,
		forced: false
	})).value;
	const htmlAttrs = {};
	useHead$1({ htmlAttrs });
	useRouter().afterEach((to) => {
		const forcedColorMode = to.meta.colorMode;
		if (forcedColorMode && forcedColorMode !== "system") {
			htmlAttrs["data-color-mode-forced"] = forcedColorMode;
			colorMode.value = forcedColorMode;
			colorMode.forced = true;
		} else if (forcedColorMode === "system") console.warn("You cannot force the colorMode to system at the page level.");
	});
	nuxtApp.provide("colorMode", colorMode);
});
var routes;
var plugin = defineNuxtPlugin(async () => {
	let __temp, __restore;
	if (!import.meta.prerender || false) return;
	if (routes && !routes.length) return;
	routes ||= Array.from(processRoutes(([__temp, __restore] = executeAsync(() => virtual_nuxt__nuxt_2Frouter_options_default.routes?.(virtual_nuxt__nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__nuxt_2Froutes_default));
	prerenderRoutes(routes.splice(0, 10));
}, 1);
var OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
	return true;
}
function processRoutes(routes, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
	for (const route of routes) {
		if (OPTIONAL_PARAM_RE.test(route.path) && !route.children?.length && shouldPrerender(currentPath)) routesToPrerender.add(currentPath);
		if (route.path.includes(":")) continue;
		const fullPath = joinURL(currentPath, route.path);
		if (shouldPrerender(fullPath)) routesToPrerender.add(fullPath);
		if (route.children) processRoutes(route.children, fullPath, routesToPrerender);
	}
	return routesToPrerender;
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fplugins.server.mjs
var virtual_nuxt__nuxt_2Fplugins_server_default = [
	plugin$3,
	plugin$2,
	_0_siteConfig_default,
	plugin$1,
	virtual_nuxt__nuxt_2Fcomponents_plugin_default,
	plugin_server_default,
	plugin
];
//#endregion
//#region virtual:nuxt:.nuxt%2Flayouts.mjs
var virtual_nuxt__nuxt_2Flayouts_default = {
	admin: (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/admin-BNUNVzDG.js").then((m) => m.default || m)),
	default: (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/default-O11XjvEK.js").then((m) => m.default || m))
};
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/nuxt-layout.js
var LayoutLoader = (0, vue_exports.defineComponent)({
	name: "LayoutLoader",
	inheritAttrs: false,
	props: {
		name: String,
		layoutProps: Object
	},
	setup(props, context) {
		return () => (0, vue_exports.h)(virtual_nuxt__nuxt_2Flayouts_default[props.name], props.layoutProps, context.slots);
	}
});
var nuxt_layout_default = (0, vue_exports.defineComponent)({
	name: "NuxtLayout",
	inheritAttrs: false,
	props: {
		name: {
			type: [
				String,
				Boolean,
				Object
			],
			default: null
		},
		fallback: {
			type: [String, Object],
			default: null
		}
	},
	setup(props, context) {
		const nuxtApp = useNuxtApp();
		const injectedRoute = (0, vue_exports.inject)(PageRouteSymbol);
		const route = !injectedRoute || injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
		const layout = (0, vue_exports.computed)(() => {
			let layout = resolveLayoutName(route, props.name);
			if (layout && !(layout in virtual_nuxt__nuxt_2Flayouts_default)) {
				if (props.fallback) layout = (0, vue_exports.unref)(props.fallback);
			}
			return layout;
		});
		(0, vue_exports.provide)(LayoutSymbol, layout);
		const layoutRef = (0, vue_exports.shallowRef)();
		context.expose({ layoutRef });
		const done = nuxtApp.deferHydration();
		let lastLayout;
		return () => {
			const hasTransition = !!layout.value && layout.value in virtual_nuxt__nuxt_2Flayouts_default && !!(route?.meta.layoutTransition ?? false);
			const transitionProps = hasTransition && _mergeTransitionProps([
				route?.meta.layoutTransition,
				false,
				{
					onBeforeLeave() {
						nuxtApp["~transitionPromise"] = new Promise((resolve) => {
							nuxtApp["~transitionFinish"] = resolve;
						});
					},
					onAfterLeave() {
						nuxtApp["~transitionFinish"]?.();
						delete nuxtApp["~transitionFinish"];
						delete nuxtApp["~transitionPromise"];
					}
				}
			]);
			const previouslyRenderedLayout = lastLayout;
			lastLayout = layout.value;
			return _wrapInTransition(transitionProps, { default: () => (0, vue_exports.h)(vue_exports.Suspense, {
				suspensible: true,
				onResolve: async () => {
					await (0, vue_exports.nextTick)(done);
				}
			}, { default: () => (0, vue_exports.h)(LayoutProvider, {
				layoutProps: (0, vue_exports.mergeProps)(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
				key: layout.value || void 0,
				name: layout.value,
				shouldProvide: !props.name,
				isRenderingNewLayout: (name) => {
					return name !== previouslyRenderedLayout && name === layout.value;
				},
				hasTransition
			}, context.slots) }) }).default();
		};
	}
});
var LayoutProvider = (0, vue_exports.defineComponent)({
	name: "NuxtLayoutProvider",
	inheritAttrs: false,
	props: {
		name: { type: [String, Boolean] },
		layoutProps: { type: Object },
		hasTransition: { type: Boolean },
		shouldProvide: { type: Boolean },
		isRenderingNewLayout: {
			type: Function,
			required: true
		}
	},
	setup(props, context) {
		const name = props.name;
		if (props.shouldProvide) (0, vue_exports.provide)(LayoutMetaSymbol, { isCurrent: (route) => name === false || name === resolveLayoutName(route) });
		const injectedRoute = (0, vue_exports.inject)(PageRouteSymbol);
		const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
		const enclosingLayout = (0, vue_exports.inject)(LayoutMetaSymbol, null);
		if (isNotWithinNuxtPage) {
			const vueRouterRoute = useRoute$1();
			const reactiveChildRoute = {};
			for (const _key in vueRouterRoute) {
				const key = _key;
				Object.defineProperty(reactiveChildRoute, key, {
					enumerable: true,
					get: () => {
						return props.isRenderingNewLayout(props.name) && (!enclosingLayout || enclosingLayout.isCurrent(vueRouterRoute)) ? vueRouterRoute[key] : injectedRoute[key];
					}
				});
			}
			(0, vue_exports.provide)(PageRouteSymbol, (0, vue_exports.shallowReactive)(reactiveChildRoute));
		}
		return () => {
			if (!name || typeof name === "string" && !(name in virtual_nuxt__nuxt_2Flayouts_default)) return context.slots.default?.();
			return (0, vue_exports.h)(LayoutLoader, {
				key: name,
				layoutProps: props.layoutProps,
				name
			}, context.slots);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/route-provider.js
var defineRouteProvider = (name = "RouteProvider") => (0, vue_exports.defineComponent)({
	name,
	props: {
		route: {
			type: Object,
			required: true
		},
		vnode: Object,
		vnodeRef: Object,
		renderKey: String,
		trackRootNodes: Boolean
	},
	setup(props) {
		const previousKey = props.renderKey;
		const previousRoute = props.route;
		const route = {};
		for (const key in props.route) Object.defineProperty(route, key, {
			get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
			enumerable: true
		});
		(0, vue_exports.provide)(PageRouteSymbol, (0, vue_exports.shallowReactive)(route));
		return () => {
			if (!props.vnode) return props.vnode;
			return (0, vue_exports.h)(props.vnode, { ref: props.vnodeRef });
		};
	}
});
var RouteProvider = defineRouteProvider();
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/pages/runtime/page.js
var page_default = (0, vue_exports.defineComponent)({
	name: "NuxtPage",
	inheritAttrs: false,
	props: {
		name: { type: String },
		transition: {
			type: [Boolean, Object],
			default: void 0
		},
		keepalive: {
			type: [Boolean, Object],
			default: void 0
		},
		route: { type: Object },
		pageKey: {
			type: [Function, String],
			default: null
		}
	},
	setup(props, { attrs, slots, expose }) {
		const nuxtApp = useNuxtApp();
		const pageRef = (0, vue_exports.ref)();
		(0, vue_exports.inject)(PageRouteSymbol, null);
		expose({ pageRef });
		(0, vue_exports.inject)(LayoutMetaSymbol, null);
		nuxtApp.deferHydration();
		return () => {
			return (0, vue_exports.h)(RouterView, {
				name: props.name,
				route: props.route,
				...attrs
			}, { default: markStableSlot((routeProps) => {
				return (0, vue_exports.h)(vue_exports.Suspense, { suspensible: true }, { default() {
					return (0, vue_exports.h)(RouteProvider, {
						vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
						route: routeProps.route,
						vnodeRef: pageRef
					});
				} });
			}) });
		};
	}
});
function markStableSlot(fn) {
	const wrapped = ((routeProps) => {
		const result = fn(routeProps);
		if (Array.isArray(result)) return result;
		if (result == null || !(0, vue_exports.isVNode)(result)) return [(0, vue_exports.createCommentVNode)()];
		return [result];
	});
	wrapped._n = true;
	return wrapped;
}
function normalizeSlot(slot, data) {
	const slotContent = slot(data);
	return slotContent.length === 1 ? (0, vue_exports.h)(slotContent[0]) : (0, vue_exports.h)(vue_exports.Fragment, void 0, slotContent);
}
//#endregion
//#region app.vue?vue&type=script&setup=true&lang.ts
var app_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "app",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({ titleTemplate: "%s - CodexList Blog" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLayout = nuxt_layout_default;
			const _component_NuxtPage = page_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLayout, null, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtPage, null, null, _parent, _scopeId));
					else return [(0, vue_exports.createVNode)(_component_NuxtPage)];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app.vue
var _sfc_setup$2 = app_vue_vue_type_script_setup_true_lang_default.setup;
app_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var app_default = app_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/nuxt-error-page.vue
var _sfc_main$1 = {
	__name: "nuxt-error-page",
	__ssrInlineRender: true,
	props: { error: Object },
	setup(__props) {
		const _error = __props.error;
		const status = Number(_error.statusCode || 500);
		const is404 = status === 404;
		const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
		const description = _error.message || _error.toString();
		const stack = void 0;
		const _Error404 = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/error-404-BA3EuIEu.js"));
		const _Error = (0, vue_exports.defineAsyncComponent)(() => import("./_nuxt/error-500-Bt8oIh-x.js"));
		const ErrorTemplate = is404 ? _Error404 : _Error;
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ErrorTemplate), (0, vue_exports.mergeProps)({
				status: (0, vue_exports.unref)(status),
				statusText: (0, vue_exports.unref)(statusText),
				statusCode: (0, vue_exports.unref)(status),
				statusMessage: (0, vue_exports.unref)(statusText),
				description: (0, vue_exports.unref)(description),
				stack: (0, vue_exports.unref)(stack)
			}, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:.nuxt%2Fisland-renderer.mjs
var IslandRenderer = () => null;
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/nuxt-root.vue
var _sfc_main = {
	__name: "nuxt-root",
	__ssrInlineRender: true,
	setup(__props) {
		const nuxtApp = useNuxtApp();
		nuxtApp.deferHydration();
		nuxtApp.ssrContext.url;
		const SingleRenderer = false;
		(0, vue_exports.provide)(PageRouteSymbol, useRoute());
		nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
		const error = useError();
		const abortRender = error.value && !nuxtApp.ssrContext.error;
		function invokeAppErrorHandler(err, target, info) {
			const errorHandler = nuxtApp.vueApp.config.errorHandler;
			if (errorHandler && !errorHandler.__nuxt_default) try {
				errorHandler(err, target, info);
			} catch (handlerError) {
				console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
			}
		}
		(0, vue_exports.onErrorCaptured)((err, target, info) => {
			nuxtApp.hooks.callHook("vue:error", err, target, info)?.catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
			{
				const p = nuxtApp.runWithContext(() => showError(err));
				(0, vue_exports.onServerPrefetch)(() => p);
				invokeAppErrorHandler(err, target, info);
				return false;
			}
		});
		const islandContext = nuxtApp.ssrContext.islandContext;
		return (_ctx, _push, _parent, _attrs) => {
			(0, server_renderer_exports.ssrRenderSuspense)(_push, {
				default: () => {
					if ((0, vue_exports.unref)(abortRender)) _push(`<div></div>`);
					else if ((0, vue_exports.unref)(error)) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(_sfc_main$1), { error: (0, vue_exports.unref)(error) }, null, _parent));
					else if ((0, vue_exports.unref)(islandContext)) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(IslandRenderer), { context: (0, vue_exports.unref)(islandContext) }, null, _parent));
					else if ((0, vue_exports.unref)(SingleRenderer)) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)(SingleRenderer)), null, null), _parent);
					else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(app_default), null, null, _parent));
				},
				_: 1
			});
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/components/nuxt-root.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region node_modules/.pnpm/nuxt@4.5.0_@babel+plugin-sy_a75106a48c00810e2ede7cc6d274deaf/node_modules/nuxt/dist/app/entry.js
var entry = async function createNuxtAppServer(ssrContext) {
	const vueApp = (0, vue_exports.createApp)(_sfc_main);
	const nuxt = createNuxtApp({
		vueApp,
		ssrContext
	});
	try {
		await applyPlugins(nuxt, virtual_nuxt__nuxt_2Fplugins_server_default);
		await nuxt.hooks.callHook("app:created", vueApp);
	} catch (error) {
		await nuxt.hooks.callHook("app:error", error);
		nuxt.payload.error ||= createError$1(error);
	}
	if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) throw new Error("skipping render");
	return vueApp;
};
var entry_default = ((ssrContext) => entry(ssrContext));
//#endregion
export { entry_default as default, NuxtLink as t };

//# sourceMappingURL=server.mjs.map