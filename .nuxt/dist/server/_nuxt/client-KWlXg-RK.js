import "./server-renderer-CaOs55OH.js";
import { i as tryUseNuxtApp } from "./nuxt-BhJpKRwS.js";
import { withoutTrailingSlash } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs";
import { getRequestHeaders } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs";
//#region virtual:nuxt:.nuxt%2Fcontent%2Fmanifest.ts
var checksums = { "content": "v3.5.0--arZIQyB1QSB9IXZulyNsHWJI384vyLV7EC_hN6M444E" };
var tables = {
	"content": "_content_content",
	"info": "_content_info"
};
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.0_@libsq_135b77343452b8a9506f3bfa6f9984d5/node_modules/@nuxt/content/dist/runtime/internal/api.js
async function fetchContent(event, collection, path, options) {
	const headers = event ? getRequestHeaders(event) : {};
	headers["accept-encoding"] = void 0;
	const url = `/__nuxt_content/${collection}/${path}`;
	const fetchOptions = {
		...options,
		headers: {
			...headers,
			...options.headers
		},
		query: {
			v: checksums[String(collection)],
			t: void 0
		}
	};
	return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchQuery(event, collection, sql) {
	return fetchContent(event, collection, "query", {
		headers: { "content-type": "application/json" },
		method: "POST",
		body: { sql }
	});
}
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.0_@libsq_135b77343452b8a9506f3bfa6f9984d5/node_modules/@nuxt/content/dist/runtime/internal/query.js
var buildGroup = (group, type) => {
	const conditions = group._conditions;
	return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
var collectionQueryGroup = (collection) => {
	const conditions = [];
	const query = {
		_conditions: conditions,
		where(field, operator, value) {
			let condition;
			switch (operator.toUpperCase()) {
				case "IN":
				case "NOT IN":
					if (Array.isArray(value)) {
						const values = value.map((val) => singleQuote(val)).join(", ");
						condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
					} else throw new TypeError(`Value for ${operator} must be an array`);
					break;
				case "BETWEEN":
				case "NOT BETWEEN":
					if (Array.isArray(value) && value.length === 2) condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
					else throw new Error(`Value for ${operator} must be an array with two elements`);
					break;
				case "IS NULL":
				case "IS NOT NULL":
					condition = `"${String(field)}" ${operator.toUpperCase()}`;
					break;
				case "LIKE":
				case "NOT LIKE":
					condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
					break;
				default: condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
			}
			conditions.push(`${condition}`);
			return query;
		},
		andWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup(collection));
			conditions.push(buildGroup(group, "AND"));
			return query;
		},
		orWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup(collection));
			conditions.push(buildGroup(group, "OR"));
			return query;
		}
	};
	return query;
};
var collectionQueryBuilder = (collection, fetch) => {
	const params = {
		conditions: [],
		selectedFields: [],
		offset: 0,
		limit: 0,
		orderBy: [],
		count: {
			field: "",
			distinct: false
		}
	};
	const query = {
		__params: params,
		andWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup(collection));
			params.conditions.push(buildGroup(group, "AND"));
			return query;
		},
		orWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup(collection));
			params.conditions.push(buildGroup(group, "OR"));
			return query;
		},
		path(path) {
			return query.where("path", "=", withoutTrailingSlash(path));
		},
		skip(skip) {
			params.offset = skip;
			return query;
		},
		where(field, operator, value) {
			query.andWhere((group) => group.where(String(field), operator, value));
			return query;
		},
		limit(limit) {
			params.limit = limit;
			return query;
		},
		select(...fields) {
			if (fields.length) params.selectedFields.push(...fields);
			return query;
		},
		order(field, direction) {
			params.orderBy.push(`"${String(field)}" ${direction}`);
			return query;
		},
		async all() {
			return fetch(collection, buildQuery()).then((res) => res || []);
		},
		async first() {
			return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
		},
		async count(field = "*", distinct = false) {
			return fetch(collection, buildQuery({ count: {
				field: String(field),
				distinct
			} })).then((m) => m[0].count);
		}
	};
	function buildQuery(opts = {}) {
		let query2 = "SELECT ";
		if (opts?.count) query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
		else {
			const fields = Array.from(new Set(params.selectedFields));
			query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
		}
		query2 += ` FROM ${tables[String(collection)]}`;
		if (params.conditions.length > 0) query2 += ` WHERE ${params.conditions.join(" AND ")}`;
		if (params.orderBy.length > 0) query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
		else query2 += ` ORDER BY stem ASC`;
		const limit = opts?.limit || params.limit;
		if (limit > 0) if (params.offset > 0) query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
		else query2 += ` LIMIT ${limit}`;
		return query2;
	}
	return query;
};
function singleQuote(value) {
	return `'${String(value).replace(/'/g, "''")}'`;
}
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.0_@libsq_135b77343452b8a9506f3bfa6f9984d5/node_modules/@nuxt/content/dist/runtime/client.js
var queryCollection = (collection) => {
	const event = tryUseNuxtApp()?.ssrContext?.event;
	return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
async function executeContentQuery(event, collection, sql) {
	return fetchQuery(event, String(collection), sql);
}
//#endregion
export { queryCollection as t };

//# sourceMappingURL=client-KWlXg-RK.js.map