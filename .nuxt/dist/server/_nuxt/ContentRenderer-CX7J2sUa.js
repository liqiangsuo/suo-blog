import { i as __exportAll, n as vue_exports, t as server_renderer_exports } from "./server-renderer-CaOs55OH.js";
import { o as useRuntimeConfig } from "./nuxt-BhJpKRwS.js";
import { kebabCase, pascalCase } from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs";
import destr from "C:/codex_learn/codex_list/blog/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/parser/utils/html-tags-list.js
var html_tags_list_default = /* @__PURE__ */ new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"math",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rb",
	"rp",
	"rt",
	"rtc",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"slot",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"u",
	"ul",
	"var",
	"video",
	"wbr"
]);
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/schema.js
/**
* @import {Schema as SchemaType, Space} from 'property-information'
*/
/** @type {SchemaType} */
var Schema = class {
	/**
	* @param {SchemaType['property']} property
	*   Property.
	* @param {SchemaType['normal']} normal
	*   Normal.
	* @param {Space | undefined} [space]
	*   Space.
	* @returns
	*   Schema.
	*/
	constructor(property, normal, space) {
		this.normal = normal;
		this.property = property;
		if (space) this.space = space;
	}
};
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/merge.js
/**
* @import {Info, Space} from 'property-information'
*/
/**
* @param {ReadonlyArray<Schema>} definitions
*   Definitions.
* @param {Space | undefined} [space]
*   Space.
* @returns {Schema}
*   Schema.
*/
function merge(definitions, space) {
	/** @type {Record<string, Info>} */
	const property = {};
	/** @type {Record<string, string>} */
	const normal = {};
	for (const definition of definitions) {
		Object.assign(property, definition.property);
		Object.assign(normal, definition.normal);
	}
	return new Schema(property, normal, space);
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/normalize.js
/**
* Get the cleaned case insensitive form of an attribute or property.
*
* @param {string} value
*   An attribute-like or property-like name.
* @returns {string}
*   Value that can be used to look up the properly cased property on a
*   `Schema`.
*/
function normalize(value) {
	return value.toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/info.js
/**
* @import {Info as InfoType} from 'property-information'
*/
/** @type {InfoType} */
var Info = class {
	/**
	* @param {string} property
	*   Property.
	* @param {string} attribute
	*   Attribute.
	* @returns
	*   Info.
	*/
	constructor(property, attribute) {
		this.attribute = attribute;
		this.property = property;
	}
};
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/types.js
var types_exports = /* @__PURE__ */ __exportAll({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
	return 2 ** ++powers;
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/defined-info.js
/**
* @import {Space} from 'property-information'
*/
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info {
	/**
	* @constructor
	* @param {string} property
	*   Property.
	* @param {string} attribute
	*   Attribute.
	* @param {number | null | undefined} [mask]
	*   Mask.
	* @param {Space | undefined} [space]
	*   Space.
	* @returns
	*   Info.
	*/
	constructor(property, attribute, mask, space) {
		let index = -1;
		super(property, attribute);
		mark(this, "space", space);
		if (typeof mask === "number") while (++index < checks.length) {
			const check = checks[index];
			mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
		}
	}
};
DefinedInfo.prototype.defined = true;
/**
* @template {keyof DefinedInfo} Key
*   Key type.
* @param {DefinedInfo} values
*   Info.
* @param {Key} key
*   Key.
* @param {DefinedInfo[Key]} value
*   Value.
* @returns {undefined}
*   Nothing.
*/
function mark(values, key, value) {
	if (value) values[key] = value;
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/create.js
/**
* @import {Info, Space} from 'property-information'
*/
/**
* @typedef Definition
*   Definition of a schema.
* @property {Record<string, string> | undefined} [attributes]
*   Normalzed names to special attribute case.
* @property {ReadonlyArray<string> | undefined} [mustUseProperty]
*   Normalized names that must be set as properties.
* @property {Record<string, number | null>} properties
*   Property names to their types.
* @property {Space | undefined} [space]
*   Space.
* @property {Transform} transform
*   Transform a property name.
*/
/**
* @callback Transform
*   Transform.
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} property
*   Property.
* @returns {string}
*   Attribute.
*/
/**
* @param {Definition} definition
*   Definition.
* @returns {Schema}
*   Schema.
*/
function create(definition) {
	/** @type {Record<string, Info>} */
	const properties = {};
	/** @type {Record<string, string>} */
	const normals = {};
	for (const [property, value] of Object.entries(definition.properties)) {
		const info = new DefinedInfo(property, definition.transform(definition.attributes || {}, property), value, definition.space);
		if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) info.mustUseProperty = true;
		properties[property] = info;
		normals[normalize(property)] = property;
		normals[normalize(info.attribute)] = property;
	}
	return new Schema(properties, normals, definition.space);
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/aria.js
var aria = create({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number,
		ariaColIndex: number,
		ariaColSpan: number,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number,
		ariaRowIndex: number,
		ariaRowSpan: number,
		ariaSelected: booleanish,
		ariaSetSize: number,
		ariaSort: null,
		ariaValueMax: number,
		ariaValueMin: number,
		ariaValueNow: number,
		ariaValueText: null,
		role: null
	},
	transform(_, property) {
		return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/case-sensitive-transform.js
/**
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} attribute
*   Attribute.
* @returns {string}
*   Transformed attribute.
*/
function caseSensitiveTransform(attributes, attribute) {
	return attribute in attributes ? attributes[attribute] : attribute;
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/case-insensitive-transform.js
/**
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} property
*   Property.
* @returns {string}
*   Transformed property.
*/
function caseInsensitiveTransform(attributes, property) {
	return caseSensitiveTransform(attributes, property.toLowerCase());
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/html.js
var html$1 = create({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alpha: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		closedBy: null,
		colorSpace: null,
		cols: number,
		colSpan: number,
		command: null,
		commandFor: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number,
		hidden: overloadedBoolean,
		high: number,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number,
		manifest: null,
		max: null,
		maxLength: number,
		media: null,
		method: null,
		min: null,
		minLength: number,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number,
		rowSpan: number,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootCustomElementRegistry: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shadowRootSerializable: boolean,
		shape: null,
		size: number,
		sizes: null,
		slot: null,
		span: number,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number,
		step: null,
		style: null,
		tabIndex: number,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number,
		borderColor: null,
		bottomMargin: number,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number,
		leftMargin: number,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number,
		marginWidth: number,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		credentialless: boolean,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		exportParts: commaSeparated,
		part: spaceSeparated,
		prefix: null,
		property: null,
		results: number,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: caseInsensitiveTransform
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/svg.js
var svg$1 = create({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		maskType: "mask-type",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number,
		amplitude: number,
		arabicForm: null,
		ascent: number,
		attributeName: null,
		attributeType: null,
		azimuth: number,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number,
		by: null,
		calcMode: null,
		capHeight: number,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number,
		diffuseConstant: number,
		direction: null,
		display: null,
		dur: null,
		divisor: number,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number,
		horizOriginX: number,
		horizOriginY: number,
		id: null,
		ideographic: number,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number,
		k: number,
		k1: number,
		k2: number,
		k3: number,
		k4: number,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskType: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number,
		overlineThickness: number,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number,
		pointsAtY: number,
		pointsAtZ: number,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number,
		specularExponent: number,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number,
		strikethroughThickness: number,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number,
		strokeOpacity: number,
		strokeWidth: null,
		style: null,
		surfaceScale: number,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number,
		tableValues: null,
		target: null,
		targetX: number,
		targetY: number,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number,
		underlineThickness: number,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number,
		values: null,
		vAlphabetic: number,
		vMathematical: number,
		vectorEffect: null,
		vHanging: number,
		vIdeographic: number,
		version: null,
		vertAdvY: number,
		vertOriginX: number,
		vertOriginY: number,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: caseSensitiveTransform
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xlink.js
var xlink = create({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(_, property) {
		return "xlink:" + property.slice(5).toLowerCase();
	}
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xmlns.js
var xmlns = create({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: caseInsensitiveTransform
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xml.js
var xml = create({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(_, property) {
		return "xml:" + property.slice(3).toLowerCase();
	}
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/find.js
/**
* @import {Schema} from 'property-information'
*/
var cap = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
/**
* Look up info on a property.
*
* In most cases the given `schema` contains info on the property.
* All standard,
* most legacy,
* and some non-standard properties are supported.
* For these cases,
* the returned `Info` has hints about the value of the property.
*
* `name` can also be a valid data attribute or property,
* in which case an `Info` object with the correctly cased `attribute` and
* `property` is returned.
*
* `name` can be an unknown attribute,
* in which case an `Info` object with `attribute` and `property` set to the
* given name is returned.
* It is not recommended to provide unsupported legacy or recently specced
* properties.
*
*
* @param {Schema} schema
*   Schema;
*   either the `html` or `svg` export.
* @param {string} value
*   An attribute-like or property-like name;
*   it will be passed through `normalize` to hopefully find the correct info.
* @returns {Info}
*   Info.
*/
function find(schema, value) {
	const normal = normalize(value);
	let property = value;
	let Type = Info;
	if (normal in schema.normal) return schema.property[schema.normal[normal]];
	if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
		if (value.charAt(4) === "-") {
			const rest = value.slice(5).replace(dash, camelcase);
			property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
		} else {
			const rest = value.slice(4);
			if (!dash.test(rest)) {
				let dashes = rest.replace(cap, kebab);
				if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
				value = "data" + dashes;
			}
		}
		Type = DefinedInfo;
	}
	return new Type(property, value);
}
/**
* @param {string} $0
*   Value.
* @returns {string}
*   Kebab.
*/
function kebab($0) {
	return "-" + $0.toLowerCase();
}
/**
* @param {string} $0
*   Value.
* @returns {string}
*   Camel.
*/
function camelcase($0) {
	return $0.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/index.js
var html = merge([
	aria,
	html$1,
	xlink,
	xmlns,
	xml
], "html");
merge([
	aria,
	svg$1,
	xlink,
	xmlns,
	xml
], "svg");
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/utils/node.js
var TEXT_TAGS = [
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"li"
];
function isTag(vnode, tag) {
	if (vnode.type === tag) return true;
	if (typeof vnode.type === "object" && vnode.type.tag === tag) return true;
	if (vnode.tag === tag) return true;
	return false;
}
function isText(vnode) {
	return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
	if (Array.isArray(node.children) || typeof node.children === "string") return node.children;
	if (typeof node.children?.default === "function") return node.children.default();
	return [];
}
function nodeTextContent(node) {
	if (!node) return "";
	if (Array.isArray(node)) return node.map(nodeTextContent).join("");
	if (isText(node)) return node.value || node.children || "";
	const children = nodeChildren(node);
	if (Array.isArray(children)) return children.map(nodeTextContent).filter(Boolean).join("");
	return "";
}
function unwrap(vnode, tags = []) {
	if (Array.isArray(vnode)) return vnode.flatMap((node) => unwrap(node, tags));
	let result = vnode;
	if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
		result = nodeChildren(vnode) || vnode;
		if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) result = [result];
	}
	return result;
}
function _flatUnwrap(vnodes, tags = []) {
	vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
	if (!tags.length) return vnodes;
	return vnodes.flatMap((vnode) => _flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
function flatUnwrap(vnodes, tags = []) {
	if (typeof tags === "string") tags = tags.split(/[,\s]/).map((tag) => tag.trim()).filter(Boolean);
	if (!tags.length) return vnodes;
	return _flatUnwrap(vnodes, tags).reduce((acc, item) => {
		if (isText(item)) if (typeof acc[acc.length - 1] === "string") acc[acc.length - 1] += item.children;
		else acc.push(item.children);
		else acc.push(item);
		return acc;
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/utils/index.js
function pick(obj, keys) {
	return keys.reduce((acc, key) => {
		const value = get(obj, key);
		if (value !== void 0) acc[key] = value;
		return acc;
	}, {});
}
function get(obj, key) {
	return key.split(".").reduce((acc, k) => acc && acc[k], obj);
}
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue
var DEFAULT_SLOT = "default";
var rxOn = /^@|^v-on:/;
var rxBind = /^:|^v-bind:/;
var rxModel = /^v-model/;
var nativeInputs = [
	"select",
	"textarea",
	"input"
];
var specialParentTags = /* @__PURE__ */ new Set(["math", "svg"]);
var customElements = /* @__PURE__ */ new Set();
var proseComponentMap = Object.fromEntries([
	"p",
	"a",
	"blockquote",
	"code",
	"pre",
	"code",
	"em",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"hr",
	"img",
	"ul",
	"ol",
	"li",
	"strong",
	"table",
	"thead",
	"tbody",
	"td",
	"th",
	"tr",
	"script"
].map((t) => [t, `prose-${t}`]));
var dangerousTags = ["script", "base"];
var _sfc_main$1 = (0, vue_exports.defineComponent)({
	name: "MDCRenderer",
	props: {
		/**
		* Content to render
		*/
		body: {
			type: Object,
			required: true
		},
		/**
		* Document meta data
		*/
		data: {
			type: Object,
			default: () => ({})
		},
		/**
		* Class(es) to bind to the component
		*/
		class: {
			type: [String, Object],
			default: void 0
		},
		/**
		* Root tag to use for rendering
		*/
		tag: {
			type: [String, Boolean],
			default: void 0
		},
		/**
		* Whether or not to render Prose components instead of HTML tags
		*/
		prose: {
			type: Boolean,
			default: void 0
		},
		/**
		* The map of custom components to use for rendering.
		*/
		components: {
			type: Object,
			default: () => ({})
		},
		/**
		* Tags to unwrap separated by spaces
		* Example: 'ul li'
		*/
		unwrap: {
			type: [Boolean, String],
			default: false
		}
	},
	async setup(props) {
		const $nuxt = ((0, vue_exports.getCurrentInstance)()?.appContext?.app)?.$nuxt;
		const route = $nuxt?.$route || $nuxt?._route;
		const { mdc } = $nuxt?.$config?.public || {};
		const customElementTags = mdc?.components?.customElements || mdc?.components?.custom;
		if (customElementTags) customElementTags.forEach((tag) => customElements.add(tag));
		const tags = (0, vue_exports.computed)(() => ({
			...mdc?.components?.prose && props.prose !== false ? proseComponentMap : {},
			...mdc?.components?.map || {},
			...(0, vue_exports.toRaw)(props.data?.mdc?.components || {}),
			...props.components
		}));
		const contentKey = (0, vue_exports.computed)(() => {
			const components = (props.body?.children || []).map((n) => n.tag || n.type).filter((t) => !ignoreTag(t));
			return Array.from(new Set(components)).sort().join(".");
		});
		const runtimeData = (0, vue_exports.reactive)({ ...props.data });
		(0, vue_exports.watch)(() => props.data, (newData) => {
			Object.assign(runtimeData, newData);
		});
		await resolveContentComponents(props.body, { tags: tags.value });
		function updateRuntimeData(code, value) {
			const lastIndex = code.split(".").length - 1;
			return code.split(".").reduce((o, k, i) => {
				if (i == lastIndex && o) {
					o[k] = value;
					return o[k];
				}
				return typeof o === "object" ? o[k] : void 0;
			}, runtimeData);
		}
		return {
			tags,
			contentKey,
			route,
			runtimeData,
			updateRuntimeData
		};
	},
	render(ctx) {
		const { tags, tag, body, data, contentKey, route, unwrap, runtimeData, updateRuntimeData } = ctx;
		if (!body) return null;
		const meta = {
			...data,
			tags,
			$route: route,
			runtimeData,
			updateRuntimeData
		};
		const component = tag !== false ? resolveComponentInstance(tag || meta.component?.name || meta.component || "div") : void 0;
		return component ? (0, vue_exports.h)(component, {
			...meta.component?.props,
			class: ctx.class,
			...this.$attrs,
			key: contentKey
		}, { default: defaultSlotRenderer }) : defaultSlotRenderer?.();
		function defaultSlotRenderer() {
			const defaultSlot = _renderSlots(body, vue_exports.h, {
				documentMeta: meta,
				parentScope: meta,
				resolveComponent: resolveComponentInstance
			});
			if (!defaultSlot?.default) return null;
			if (unwrap) return flatUnwrap(defaultSlot.default(), typeof unwrap === "string" ? unwrap.split(" ") : ["*"]);
			return defaultSlot.default();
		}
	}
});
function _renderNode(node, h2, options, keyInParent) {
	const { documentMeta, parentScope, resolveComponent } = options;
	if (node.type === "text") return h2(vue_exports.Text, node.value);
	if (node.type === "comment") return h2(vue_exports.Comment, null, node.value);
	const originalTag = node.tag;
	const renderTag = findMappedTag(node, documentMeta.tags);
	if (node.tag === "binding") return renderBinding(node, h2, documentMeta, parentScope);
	const _resolveComponent = isUnresolvableTag(renderTag) ? (component2) => component2 : resolveComponent;
	if (dangerousTags.includes(pascalCase(renderTag).toLowerCase())) return h2("pre", { class: "mdc-renderer-dangerous-tag" }, "<" + renderTag + ">" + nodeTextContent(node) + "</" + renderTag + ">");
	const component = _resolveComponent(renderTag);
	if (typeof component === "object") component.tag = originalTag;
	const props = propsToData(node, documentMeta);
	if (keyInParent) props.key = keyInParent;
	return h2(component, props, _renderSlots(node, h2, {
		documentMeta,
		parentScope: {
			...parentScope,
			...props
		},
		resolveComponent: _resolveComponent
	}));
}
function _renderSlots(node, h2, options) {
	const { documentMeta, parentScope, resolveComponent } = options;
	const slotNodes = (node.children || []).reduce((data, node2) => {
		if (!isTemplate(node2)) {
			data[DEFAULT_SLOT].children.push(node2);
			return data;
		}
		const slotName = getSlotName(node2);
		data[slotName] = data[slotName] || {
			props: {},
			children: []
		};
		if (node2.type === "element") {
			data[slotName].props = node2.props;
			data[slotName].children.push(...node2.children || []);
		}
		return data;
	}, { [DEFAULT_SLOT]: {
		props: {},
		children: []
	} });
	return Object.entries(slotNodes).reduce((slots2, [name, { props, children: children2 }]) => {
		if (!children2.length) return slots2;
		slots2[name] = (data = {}) => {
			const scopedProps = pick(data, Object.keys(props || {}));
			let vNodes = children2.map((child, index) => {
				return _renderNode(child, h2, {
					documentMeta,
					parentScope: {
						...parentScope,
						...scopedProps
					},
					resolveComponent
				}, String(child.props?.key || index));
			});
			if (props?.unwrap) vNodes = flatUnwrap(vNodes, props.unwrap);
			return mergeTextNodes(vNodes);
		};
		return slots2;
	}, {});
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
	const data = {
		...documentMeta.runtimeData,
		...parentScope,
		$document: documentMeta,
		$doc: documentMeta
	};
	const value = (node.props?.value.trim().split(/\.|\[(\d+)\]/).filter(Boolean)).reduce((data2, key) => {
		if (data2 && key in data2) if (typeof data2[key] === "function") return data2[key]();
		else return data2[key];
	}, data);
	const defaultValue = node.props?.defaultValue;
	return h2(vue_exports.Text, value ?? defaultValue ?? "");
}
function propsToData(node, documentMeta) {
	const { tag = "", props = {} } = node;
	return Object.keys(props).reduce(function(data, key) {
		if (key === "__ignoreMap") return data;
		const value = props[key];
		if (rxModel.test(key)) return propsToDataRxModel(key, value, data, documentMeta, { native: nativeInputs.includes(tag) });
		if (key === "v-bind") return propsToDataVBind(key, value, data, documentMeta);
		if (rxOn.test(key)) return propsToDataRxOn(key, value, data, documentMeta);
		if (rxBind.test(key)) return propsToDataRxBind(key, value, data, documentMeta);
		const { attribute } = find(html, key);
		if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
			data[attribute] = value.join(" ");
			return data;
		}
		data[attribute] = value;
		return data;
	}, {});
}
function propsToDataRxModel(key, value, data, documentMeta, { native }) {
	const propName = key.match(/^v-model:([^=]+)/)?.[1] || "modelValue";
	const field = native ? "value" : propName;
	const event = native ? "onInput" : `onUpdate:${propName}`;
	data[field] = evalInContext(value, documentMeta.runtimeData);
	data[event] = (e) => {
		documentMeta.updateRuntimeData(value, native ? e.target?.value : e);
	};
	return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
	const val = evalInContext(value, documentMeta);
	data = Object.assign(data, val);
	return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
	key = key.replace(rxOn, "");
	data.on = data.on || {};
	data.on[key] = () => evalInContext(value, documentMeta);
	return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
	key = key.replace(rxBind, "");
	data[key] = evalInContext(value, documentMeta);
	return data;
}
var resolveComponentInstance = (component) => {
	if (typeof component === "string") {
		if (ignoreTag(component)) return component;
		const _component = (0, vue_exports.resolveComponent)(pascalCase(component), false);
		if (!component || _component?.name === "AsyncComponentWrapper") return _component;
		if (typeof _component === "string") return _component;
		if ("setup" in _component) return (0, vue_exports.defineAsyncComponent)(() => new Promise((resolve) => resolve(_component)));
		return _component;
	}
	return component;
};
function evalInContext(code, context) {
	const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
	return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
	let name = "";
	for (const propName of Object.keys(node.props || {})) {
		if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) continue;
		name = propName.split(/[:#]/, 2)[1];
		break;
	}
	return name || DEFAULT_SLOT;
}
function isTemplate(node) {
	return node.tag === "template";
}
function isUnresolvableTag(tag) {
	return specialParentTags.has(tag);
}
function mergeTextNodes(nodes) {
	const mergedNodes = [];
	for (const node of nodes) {
		const previousNode = mergedNodes[mergedNodes.length - 1];
		if (node.type === vue_exports.Text && previousNode?.type === vue_exports.Text) previousNode.children = previousNode.children + node.children;
		else mergedNodes.push(node);
	}
	return mergedNodes;
}
async function resolveContentComponents(body, meta) {
	if (!body) return;
	const components = Array.from(new Set(loadComponents(body, meta)));
	await Promise.all(components.map(async (c) => {
		if (c?.render || c?.ssrRender || c?.__ssrInlineRender) return;
		const resolvedComponent = resolveComponentInstance(c);
		if (resolvedComponent?.__asyncLoader && !resolvedComponent.__asyncResolved) await resolvedComponent.__asyncLoader();
	}));
	function loadComponents(node, documentMeta) {
		const tag = node.tag;
		if (node.type === "text" || tag === "binding" || node.type === "comment") return [];
		const renderTag = findMappedTag(node, documentMeta.tags);
		if (isUnresolvableTag(renderTag)) return [];
		const components2 = [];
		if (node.type !== "root" && !ignoreTag(renderTag)) components2.push(renderTag);
		for (const child of node.children || []) components2.push(...loadComponents(child, documentMeta));
		return components2;
	}
}
function findMappedTag(node, tags) {
	const tag = node.tag;
	if (!tag || typeof node.props?.__ignoreMap !== "undefined") return tag;
	return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
function ignoreTag(tag) {
	return (typeof tag === "string" ? customElements.has(tag) : false) || html_tags_list_default.has(tag);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-st_47ab540253be9c51e23a440077b6be9c/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var MDCRenderer_default = Object.assign(_sfc_main$1, { __name: "MDCRenderer" });
//#endregion
//#region node_modules/.pnpm/minimark@0.2.0/node_modules/minimark/dist/hast.mjs
function toHast(tree) {
	return {
		type: "root",
		children: tree.value.map(minimarkToHastNode)
	};
}
function minimarkToHastNode(input) {
	if (typeof input === "string") return {
		type: "text",
		value: input
	};
	const [tag, props, ...children] = input;
	return {
		type: "element",
		tag,
		props,
		children: children.map(minimarkToHastNode)
	};
}
//#endregion
//#region virtual:nuxt:.nuxt%2Fcontent%2Fcomponents.ts
var localComponentLoaders = {};
var globalComponents = [
	"ProseA",
	"ProseBlockquote",
	"ProseCode",
	"ProseEm",
	"ProseH1",
	"ProseH2",
	"ProseH3",
	"ProseH4",
	"ProseH5",
	"ProseH6",
	"ProseHr",
	"ProseImg",
	"ProseLi",
	"ProseOl",
	"ProseP",
	"ProsePre",
	"ProseScript",
	"ProseStrong",
	"ProseTable",
	"ProseTbody",
	"ProseTd",
	"ProseTh",
	"ProseThead",
	"ProseTr",
	"ProseUl"
];
var localComponents = [];
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.0_@libsq_135b77343452b8a9506f3bfa6f9984d5/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue
var _sfc_main = {
	__name: "ContentRenderer",
	__ssrInlineRender: true,
	props: {
		/**
		* Content to render
		*/
		value: {
			type: Object,
			required: true
		},
		/**
		* Render only the excerpt
		*/
		excerpt: {
			type: Boolean,
			default: false
		},
		/**
		* Root tag to use for rendering
		*/
		tag: {
			type: String,
			default: "div"
		},
		/**
		* The map of custom components to use for rendering.
		*/
		components: {
			type: Object,
			default: () => ({})
		},
		data: {
			type: Object,
			default: () => ({})
		},
		/**
		* Whether or not to render Prose components instead of HTML tags
		*/
		prose: {
			type: Boolean,
			default: void 0
		},
		/**
		* Root tag to use for rendering
		*/
		class: {
			type: [String, Object],
			default: void 0
		},
		/**
		* Tags to unwrap separated by spaces
		* Example: 'ul li'
		*/
		unwrap: {
			type: [Boolean, String],
			default: false
		}
	},
	setup(__props) {
		const renderFunctions = [
			"render",
			"ssrRender",
			"__ssrInlineRender"
		];
		const props = __props;
		const debug = import.meta.preview;
		const body = (0, vue_exports.computed)(() => {
			let body2 = props.value.body || props.value;
			if (props.excerpt && props.value.excerpt) body2 = props.value.excerpt;
			if (body2.type === "minimal" || body2.type === "minimark") return toHast({
				type: "minimark",
				value: body2.value
			});
			return body2;
		});
		const isEmpty = (0, vue_exports.computed)(() => !body.value?.children?.length);
		const data = (0, vue_exports.computed)(() => {
			const { body: body2, excerpt, ...data2 } = props.value;
			return {
				...data2,
				...props.data
			};
		});
		const proseComponentMap = Object.fromEntries([
			"p",
			"a",
			"blockquote",
			"code",
			"pre",
			"code",
			"em",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"hr",
			"img",
			"ul",
			"ol",
			"li",
			"strong",
			"table",
			"thead",
			"tbody",
			"td",
			"th",
			"tr",
			"script"
		].map((t) => [t, `prose-${t}`]));
		const { mdc } = useRuntimeConfig().public || {};
		const propsDataMDC = (0, vue_exports.computed)(() => props.data.mdc);
		const tags = (0, vue_exports.computed)(() => ({
			...mdc?.components?.prose && props.prose !== false ? proseComponentMap : {},
			...mdc?.components?.map || {},
			...(0, vue_exports.toRaw)(propsDataMDC.value?.components || {}),
			...props.components
		}));
		const componentsMap = (0, vue_exports.computed)(() => {
			return body.value ? resolveContentComponents(body.value, { tags: tags.value }) : {};
		});
		function resolveVueComponent(component) {
			let _component = component;
			if (typeof component === "string") {
				if (html_tags_list_default.has(component)) return component;
				if (globalComponents.includes(pascalCase(component))) _component = (0, vue_exports.resolveComponent)(component, false);
				else if (localComponents.includes(pascalCase(component))) {
					const loader = localComponentLoaders[pascalCase(component)];
					_component = loader ? (0, vue_exports.defineAsyncComponent)(loader) : void 0;
				}
				if (typeof _component === "string") return _component;
			}
			if (!_component) return _component;
			const componentObject = _component;
			if ("__asyncLoader" in componentObject) return componentObject;
			if ("setup" in componentObject) return (0, vue_exports.defineAsyncComponent)(() => Promise.resolve(componentObject));
			return componentObject;
		}
		function resolveContentComponents(body2, meta) {
			if (!body2) return;
			const components = Array.from(new Set(loadComponents(body2, meta)));
			const result = {};
			for (const [tag, component] of components) {
				if (result[tag]) continue;
				if (typeof component === "object" && renderFunctions.some((fn) => Object.hasOwnProperty.call(component, fn))) {
					result[tag] = component;
					continue;
				}
				result[tag] = resolveVueComponent(component);
			}
			return result;
		}
		function loadComponents(node, documentMeta) {
			const tag = node.tag;
			if (node.type === "text" || tag === "binding" || node.type === "comment") return [];
			const renderTag = findMappedTag(node, documentMeta.tags);
			const components2 = [];
			if (node.type !== "root" && !html_tags_list_default.has(renderTag)) components2.push([tag, renderTag]);
			for (const child of node.children || []) components2.push(...loadComponents(child, documentMeta));
			return components2;
		}
		function findMappedTag(node, tags2) {
			const tag = node.tag;
			if (!tag || typeof node.props?.__ignoreMap !== "undefined") return tag;
			return tags2[tag] || tags2[pascalCase(tag)] || tags2[kebabCase(node.tag)] || tag;
		}
		return (_ctx, _push, _parent, _attrs) => {
			if (!isEmpty.value) _push((0, server_renderer_exports.ssrRenderComponent)(MDCRenderer_default, (0, vue_exports.mergeProps)({
				body: body.value,
				data: data.value,
				class: props.class,
				tag: props.tag,
				prose: props.prose,
				unwrap: props.unwrap,
				components: componentsMap.value,
				"data-content-id": (0, vue_exports.unref)(debug) ? __props.value.id : void 0
			}, _attrs), null, _parent));
			else (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "empty", {
				body: body.value,
				data: data.value,
				dataContentId: (0, vue_exports.unref)(debug) ? __props.value.id : void 0
			}, null, _push, _parent);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@3.15.0_@libsq_135b77343452b8a9506f3bfa6f9984d5/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };

//# sourceMappingURL=ContentRenderer-CX7J2sUa.js.map