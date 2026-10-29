import{f as e,h as t,n,o as r,u as i}from"./types-BIdNkPo_.js";var a=class{constructor(e){this.value=e}valueOf(){return this.value}},o=class extends a{constructor(e=`???`){super(e)}toString(e){return`{${this.value}}`}},s=class extends a{constructor(e,t={}){super(e),this.opts=t}toString(e){if(e)try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){e.reportError(t)}return this.value.toString(10)}},c=class e extends a{static supportsValue(t){if(typeof t==`number`||t instanceof Date)return!0;if(t instanceof a)return e.supportsValue(t.valueOf());if(`Temporal`in globalThis){let e=globalThis.Temporal;if(t instanceof e.Instant||t instanceof e.PlainDateTime||t instanceof e.PlainDate||t instanceof e.PlainMonthDay||t instanceof e.PlainTime||t instanceof e.PlainYearMonth)return!0}return!1}constructor(t,n={}){t instanceof e?(n={...t.opts,...n},t=t.value):t instanceof a&&(t=t.valueOf()),typeof t==`object`&&`calendarId`in t&&n.calendar===void 0&&(n={...n,calendar:t.calendarId}),super(t),this.opts=n}[Symbol.toPrimitive](e){return e===`string`?this.toString():this.toNumber()}toNumber(){let e=this.value;if(typeof e==`number`)return e;if(e instanceof Date)return e.getTime();if(`epochMilliseconds`in e)return e.epochMilliseconds;if(`toZonedDateTime`in e)return e.toZonedDateTime(`UTC`).epochMilliseconds;throw TypeError(`Unwrapping a non-number value as a number`)}toString(e){if(e)try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){e.reportError(t)}return typeof this.value==`number`||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}},l=100,u=`⁨`,d=`⁩`;function f(e,t,n){return n===t||n instanceof s&&t instanceof s&&n.value===t.value||t instanceof s&&typeof n==`string`&&n===e.memoizeIntlObject(Intl.PluralRules,t.opts).select(t.value)}function p(e,t,n){return t[n]?S(e,t[n].value):(e.reportError(RangeError(`No default`)),new o)}function m(e,t){let n=[],r=Object.create(null);for(let i of t)i.type===`narg`?r[i.name]=h(e,i.value):n.push(h(e,i));return{positional:n,named:r}}function h(e,t){switch(t.type){case`str`:return t.value;case`num`:return new s(t.value,{minimumFractionDigits:t.precision});case`var`:return g(e,t);case`mesg`:return _(e,t);case`term`:return v(e,t);case`func`:return y(e,t);case`select`:return b(e,t);default:return new o}}function g(e,{name:t}){let n;if(e.params){if(Object.prototype.hasOwnProperty.call(e.params,t))n=e.params[t];else return new o(`$${t}`)}else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,t))n=e.args[t];else return e.reportError(ReferenceError(`Unknown variable: $${t}`)),new o(`$${t}`);if(n instanceof a)return n;switch(typeof n){case`string`:return n;case`number`:return new s(n);case`object`:if(c.supportsValue(n))return new c(n);default:return e.reportError(TypeError(`Variable type not supported: $${t}, ${typeof n}`)),new o(`$${t}`)}}function _(e,{name:t,attr:n}){let r=e.bundle._messages.get(t);if(!r)return e.reportError(ReferenceError(`Unknown message: ${t}`)),new o(t);if(n){let i=r.attributes[n];return i?S(e,i):(e.reportError(ReferenceError(`Unknown attribute: ${n}`)),new o(`${t}.${n}`))}return r.value?S(e,r.value):(e.reportError(ReferenceError(`No value: ${t}`)),new o(t))}function v(e,{name:t,attr:n,args:r}){let i=`-${t}`,a=e.bundle._terms.get(i);if(!a)return e.reportError(ReferenceError(`Unknown term: ${i}`)),new o(i);if(n){let t=a.attributes[n];if(t){e.params=m(e,r).named;let n=S(e,t);return e.params=null,n}return e.reportError(ReferenceError(`Unknown attribute: ${n}`)),new o(`${i}.${n}`)}e.params=m(e,r).named;let s=S(e,a.value);return e.params=null,s}function y(e,{name:t,args:n}){let r=e.bundle._functions[t];if(!r)return e.reportError(ReferenceError(`Unknown function: ${t}()`)),new o(`${t}()`);if(typeof r!=`function`)return e.reportError(TypeError(`Function ${t}() is not callable`)),new o(`${t}()`);try{let t=m(e,n);return r(t.positional,t.named)}catch(n){return e.reportError(n),new o(`${t}()`)}}function b(e,{selector:t,variants:n,star:r}){let i=h(e,t);if(i instanceof o)return p(e,n,r);for(let t of n)if(f(e,i,h(e,t.key)))return S(e,t.value);return p(e,n,r)}function x(e,t){if(e.dirty.has(t))return e.reportError(RangeError(`Cyclic reference`)),new o;e.dirty.add(t);let n=[],r=e.bundle._useIsolating&&t.length>1;for(let i of t){if(typeof i==`string`){n.push(e.bundle._transform(i));continue}if(e.placeables++,e.placeables>l)throw e.dirty.delete(t),RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${l}`);r&&n.push(u),n.push(h(e,i).toString(e)),r&&n.push(d)}return e.dirty.delete(t),n.join(``)}function S(e,t){return typeof t==`string`?e.bundle._transform(t):x(e,t)}var C=class{constructor(e,t,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=t,this.args=n}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,t){let n=this.bundle._intls.get(e);n||(n={},this.bundle._intls.set(e,n));let r=JSON.stringify(t);return n[r]||(n[r]=new e(this.bundle.locales,t)),n[r]}};function w(e,t){let n=Object.create(null);for(let[r,i]of Object.entries(e))t.includes(r)&&(n[r]=i.valueOf());return n}var T=[`unitDisplay`,`currencyDisplay`,`useGrouping`,`minimumIntegerDigits`,`minimumFractionDigits`,`maximumFractionDigits`,`minimumSignificantDigits`,`maximumSignificantDigits`];function ee(e,t){let n=e[0];if(n instanceof o)return new o(`NUMBER(${n.valueOf()})`);if(n instanceof s)return new s(n.valueOf(),{...n.opts,...w(t,T)});if(n instanceof c)return new s(n.toNumber(),{...w(t,T)});throw TypeError(`Invalid argument to NUMBER`)}var te=[`dateStyle`,`timeStyle`,`fractionalSecondDigits`,`dayPeriod`,`hour12`,`weekday`,`era`,`year`,`month`,`day`,`hour`,`minute`,`second`,`timeZoneName`];function ne(e,t){let n=e[0];if(n instanceof o)return new o(`DATETIME(${n.valueOf()})`);if(n instanceof c||n instanceof s)return new c(n,w(t,te));throw TypeError(`Invalid argument to DATETIME`)}var E=new Map;function re(e){let t=Array.isArray(e)?e.join(` `):e,n=E.get(t);return n===void 0&&(n=new Map,E.set(t,n)),n}var ie=class{constructor(e,{functions:t,useIsolating:n=!0,transform:r=e=>e}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:ee,DATETIME:ne,...t},this._useIsolating=n,this._transform=r,this._intls=re(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:t=!1}={}){let n=[];for(let r=0;r<e.body.length;r++){let i=e.body[r];if(i.id.startsWith(`-`)){if(t===!1&&this._terms.has(i.id)){n.push(Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){n.push(Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return n}formatPattern(e,t=null,n=null){if(typeof e==`string`)return this._transform(e);let r=new C(this,n,t);try{return x(r,e).toString(r)}catch(e){if(r.errors&&e instanceof Error)return r.errors.push(e),new o().toString(r);throw e}}},D=/^(-?[a-zA-Z][\w-]*) *= */gm,O=/\.([a-zA-Z][\w-]*) *= */y,ae=/\*?\[/y,k=/(-?[0-9]+(?:\.([0-9]+))?)/y,oe=/([a-zA-Z][\w-]*)/y,A=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,se=/^[A-Z][A-Z0-9_-]*$/,j=/([^{}\n\r]+)/y,ce=/([^\\"\n\r]*)/y,M=/\\([\\"])/y,N=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,le=/^\n+/,P=/ +$/,ue=/ *\r?\n/g,de=/( *)$/,fe=/{\s*/y,F=/\s*}/y,I=/\[\s*/y,L=/\s*] */y,R=/\s*\(\s*/y,z=/\s*->\s*/y,B=/\s*:\s*/y,V=/\s*,?\s*/y,pe=/\s+/y,H=class{constructor(e){this.body=[],D.lastIndex=0;let t=0;for(;;){let n=D.exec(e);if(n===null)break;t=D.lastIndex;try{this.body.push(s(n[1]))}catch(e){if(e instanceof SyntaxError)continue;throw e}}function n(n){return n.lastIndex=t,n.test(e)}function r(n,r){if(e[t]===n)return t++,!0;if(r)throw new r(`Expected ${n}`);return!1}function i(e,r){if(n(e))return t=e.lastIndex,!0;if(r)throw new r(`Expected ${e.toString()}`);return!1}function a(n){n.lastIndex=t;let r=n.exec(e);if(r===null)throw SyntaxError(`Expected ${n.toString()}`);return t=n.lastIndex,r}function o(e){return a(e)[1]}function s(e){let t=l(),n=c();if(t===null&&Object.keys(n).length===0)throw SyntaxError(`Expected message value or attributes`);return{id:e,value:t,attributes:n}}function c(){let e=Object.create(null);for(;n(O);){let t=o(O),n=l();if(n===null)throw SyntaxError(`Expected attribute value`);e[t]=n}return e}function l(){let r;if(n(j)&&(r=o(j)),e[t]===`{`||e[t]===`}`)return u(r?[r]:[],1/0);let i=x();return i?r?u([r,i],i.length):(i.value=S(i.value,le),u([i],i.length)):r?S(r,P):null}function u(r=[],i){for(;;){if(n(j)){r.push(o(j));continue}if(e[t]===`{`){r.push(d());continue}if(e[t]===`}`)throw SyntaxError(`Unbalanced closing brace`);let a=x();if(a){r.push(a),i=Math.min(i,a.length);continue}break}let a=r.length-1,s=r[a];typeof s==`string`&&(r[a]=S(s,P));let c=[];for(let e of r)e instanceof U&&(e=e.value.slice(0,e.value.length-i)),e&&c.push(e);return c}function d(){i(fe,SyntaxError);let e=f();if(i(F))return e;if(i(z)){let t=h();return i(F,SyntaxError),{type:`select`,selector:e,...t}}throw SyntaxError(`Unclosed placeable`)}function f(){if(e[t]===`{`)return d();if(n(A)){let[,e,t,n=null]=a(A);if(e===`$`)return{type:`var`,name:t};if(i(R)){let r=p();if(e===`-`)return{type:`term`,name:t,attr:n,args:r};if(se.test(t))return{type:`func`,name:t,args:r};throw SyntaxError(`Function names must be all upper-case`)}return e===`-`?{type:`term`,name:t,attr:n,args:[]}:{type:`mesg`,name:t,attr:n}}return _()}function p(){let n=[];for(;;){switch(e[t]){case`)`:return t++,n;case void 0:throw SyntaxError(`Unclosed argument list`)}n.push(m()),i(V)}}function m(){let e=f();return e.type===`mesg`&&i(B)?{type:`narg`,name:e.name,value:_()}:e}function h(){let e=[],t=0,i;for(;n(ae);){r(`*`)&&(i=t);let n=g(),a=l();if(a===null)throw SyntaxError(`Expected variant value`);e[t++]={key:n,value:a}}if(t===0)return null;if(i===void 0)throw SyntaxError(`Expected default variant`);return{variants:e,star:i}}function g(){i(I,SyntaxError);let e;return e=n(k)?v():{type:`str`,value:o(oe)},i(L,SyntaxError),e}function _(){if(n(k))return v();if(e[t]===`"`)return y();throw SyntaxError(`Invalid expression`)}function v(){let[,e,t=``]=a(k),n=t.length;return{type:`num`,value:parseFloat(e),precision:n}}function y(){r(`"`,SyntaxError);let n=``;for(;;){if(n+=o(ce),e[t]===`\\`){n+=b();continue}if(r(`"`))return{type:`str`,value:n};throw SyntaxError(`Unclosed string literal`)}}function b(){if(n(M))return o(M);if(n(N)){let[,e,t]=a(N),n=parseInt(e||t,16);return n<=55295||57344<=n?String.fromCodePoint(n):`�`}throw SyntaxError(`Unknown escape sequence`)}function x(){let n=t;switch(i(pe),e[t]){case`.`:case`[`:case`*`:case`}`:case void 0:return!1;case`{`:return C(e.slice(n,t))}return e[t-1]===` `&&C(e.slice(n,t))}function S(e,t){return e.replace(t,``)}function C(e){let t=e.replace(ue,`
`),n=de.exec(e)[1].length;return new U(t,n)}}},U=class{constructor(e,t){this.value=e,this.length=t}},me=RegExp(`^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$`,`i`),W=class{constructor(e){let t=me.exec(e.replace(/_/g,`-`));if(!t){this.isWellFormed=!1;return}let[,n,r,i,a]=t;n&&(this.language=n.toLowerCase()),r&&(this.script=r[0].toUpperCase()+r.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(e){return this.language===e.language&&this.script===e.script&&this.region===e.region&&this.variant===e.variant}matches(e,t=!1,n=!1){return(this.language===e.language||t&&this.language===void 0||n&&e.language===void 0)&&(this.script===e.script||t&&this.script===void 0||n&&e.script===void 0)&&(this.region===e.region||t&&this.region===void 0||n&&e.region===void 0)&&(this.variant===e.variant||t&&this.variant===void 0||n&&e.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(e=>e!==void 0).join(`-`)}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){let e=ge(this.toString().toLowerCase());return e?(this.language=e.language,this.script=e.script,this.region=e.region,this.variant=e.variant,!0):!1}},G={ar:`ar-arab-eg`,"az-arab":`az-arab-ir`,"az-ir":`az-arab-ir`,be:`be-cyrl-by`,da:`da-latn-dk`,el:`el-grek-gr`,en:`en-latn-us`,fa:`fa-arab-ir`,ja:`ja-jpan-jp`,ko:`ko-kore-kr`,pt:`pt-latn-br`,sr:`sr-cyrl-rs`,"sr-ru":`sr-latn-ru`,sv:`sv-latn-se`,ta:`ta-taml-in`,uk:`uk-cyrl-ua`,zh:`zh-hans-cn`,"zh-hant":`zh-hant-tw`,"zh-hk":`zh-hant-hk`,"zh-mo":`zh-hant-mo`,"zh-tw":`zh-hant-tw`,"zh-gb":`zh-hant-gb`,"zh-us":`zh-hant-us`},he=[`az`,`bg`,`cs`,`de`,`es`,`fi`,`fr`,`hu`,`it`,`lt`,`lv`,`nl`,`pl`,`ro`,`ru`];function ge(e){if(Object.prototype.hasOwnProperty.call(G,e))return new W(G[e]);let t=new W(e);return t.language&&he.includes(t.language)?(t.region=t.language.toUpperCase(),t):null}function _e(e,t,n){let r=new Set,i=new Map;for(let e of t)new W(e).isWellFormed&&i.set(e,new W(e));outer:for(let t of e){let e=t.toLowerCase(),a=new W(e);if(a.language!==void 0){for(let t of i.keys())if(e===t.toLowerCase()){if(r.add(t),i.delete(t),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}if(a.addLikelySubtags()){for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}a.clearVariants();for(let[e,t]of i.entries())if(t.matches(a,!0,!0)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}if(a.clearRegion(),a.addLikelySubtags()){for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}a.clearRegion();for(let[e,t]of i.entries())if(t.matches(a,!0,!0)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}}return Array.from(r)}function ve(e,t,{strategy:n=`filtering`,defaultLocale:r}={}){let i=_e(Array.from(e??[]).map(String),Array.from(t??[]).map(String),n);if(n===`lookup`){if(r===void 0)throw Error("defaultLocale cannot be undefined for strategy `lookup`");i.length===0&&i.push(r)}else r&&!i.includes(r)&&i.push(r);return i}function ye(e,t){return Array.isArray(t)?t.map(t=>K(e,t)):K(e,t)}function K(e,t){for(let n of e)if(n.hasMessage(t))return n;return null}var be=`app-title-assessment = Inductive Bible Study
app-title-chooser = Choose your Bible study language
app-title-reader = Inductive Bible Study
app-reader-heading = Bible reading
app-reader-header-note = Read and review at your own pace
app-assessment-privacy = New profiles start at study level 6
app-reader-privacy = Questions are selected for your current study level
app-chooser-heading = Choose your language
app-chooser-header-note = Select English, ไทย, or Deutsch to begin
app-chooser-privacy = Choose a language and starting Bible version. New profiles begin at level 6.

local-data-title = Data is stored on this device
local-data-body = Answers, notes and study progress are stored in this browser. If you set up a backup, settings and answers are encrypted with your passkey before they are sent to the server.
local-data-warning = Clearing this site's browser data permanently removes local data. Delete any encrypted backup separately in Settings.
privacy-link = Privacy
privacy-title = Privacy
privacy-local-data = Local data
privacy-local-data-intro = This application stores study data locally. If the user chooses to set up a backup, settings and answers are encrypted with a passkey before being stored on the server.
privacy-includes = This includes, for example:
privacy-answers = answers
privacy-notes = notes
privacy-study-progress = study progress
privacy-settings = settings
privacy-indexeddb = This data is stored using browser storage such as IndexedDB.
privacy-not-uploaded = Study data stays on the device unless the user chooses an encrypted backup. The server stores only the encrypted settings and answers and the passkey credential record.
privacy-cannot-access = The operator cannot read the encrypted backup. The same passkey is required to restore it.
privacy-delete-warning = Clearing this site's browser data may permanently delete local data. It does not delete a server backup; delete that separately in Settings.
privacy-offline-storage = Offline storage
privacy-offline-intro = The application uses browser storage, a service worker and browser caching to provide its functionality and allow the application to work offline.
privacy-offline-use = These technologies are used only for application functionality and local data storage.
privacy-no-tracking-storage = They are not used for advertising, profiling or cross-site tracking.
privacy-necessary-storage = Storage that is strictly necessary to provide functionality requested by the user does not require consent under §25(2)(2) TDDDG.
privacy-hosting = Hosting
privacy-hosting-intro = This website is delivered through services provided by:
privacy-united-states = United States
privacy-technical-info = When the website is accessed, Cloudflare processes technical information required to deliver and protect the website.
privacy-technical-info-list = This may include:
privacy-ip-address = IP address
privacy-date-time = date and time of requests
privacy-requested-resources = requested resources
privacy-browser-device = browser and device information
privacy-routing-network = routing and network information
privacy-other-technical = other technical request information
privacy-cloudflare-processing = Cloudflare processes this information in connection with delivering, securing and operating the website.
privacy-no-content-transmission = Plaintext answers and settings are not sent. If a user chooses backup, encrypted data and passkey credential requests pass through Cloudflare to the server.
privacy-international = Cloudflare may process data internationally, including in the United States. Cloudflare provides safeguards for international transfers through its Data Processing Addendum, including the EU-U.S. Data Privacy Framework where applicable and the EU Standard Contractual Clauses.
privacy-cloudflare-policy = Further information about Cloudflare's processing is available in
privacy-cloudflare-policy-link = Cloudflare's Privacy Policy
privacy-no-analytics = No analytics or advertising
privacy-no-analytics-intro = This website does not use:
privacy-advertising = advertising
privacy-advertising-trackers = advertising trackers
privacy-cross-site-tracking = cross-site tracking
privacy-third-party-analytics = third-party analytics
privacy-profiling = profiling based on application data
privacy-retention = Retention
privacy-retention-study = Encrypted settings and answers are retained on the server only when a user creates a backup, until the user deletes it in Settings. The operator cannot decrypt the backup.
privacy-retention-technical = Technical information processed by Cloudflare is retained according to Cloudflare's service configuration and applicable contractual and legal requirements.
privacy-retention-visitors = The operator does not maintain a separate database of visitors or study activity.
privacy-contact = Contact
privacy-contact-body = For contact relating to this website, use the registrant contact mechanism provided for this domain through RDAP/WHOIS.
privacy-data-protection-rights = Data protection rights
privacy-rights-intro = Where personal data is processed in connection with delivery of the website, applicable data-protection law may provide rights including access, rectification, deletion, restriction of processing and objection.
privacy-rights-local-data = The operator cannot access locally stored study data or decrypt a backup. Users can delete local data from browser storage and delete an encrypted server backup separately in Settings.
privacy-rights-complaint = Where applicable, users also have the right to lodge a complaint with a competent data-protection supervisory authority.

language-chooser-label = Language

assessment-step = Question { $step }
assessment-progress = { $step } of { $total }
assessment-select-answer = Choose one answer
assessment-complete-eyebrow = Assessment complete
assessment-complete-heading = You are ready to begin the lesson
assessment-complete-body = Your answers are ready
assessment-start = Start lesson
assessment-retry = Try again
assessment-save-error = Your assessment result could not be saved
assessment-submit-error-heading = The lesson could not be started

profile-start-error-heading = The lesson could not be started
profile-start-error-body = Your starting level could not be saved. Try again to continue.
profile-retry = Try again
profile-lookup-error-heading = The lesson could not be opened
profile-lookup-error-body = Your saved level could not be checked

reader-aria-label = Bible reading in chronological order
reader-chapter-aria-label = Bible chapter selection
reader-plan-title = Chronological reading plan
reader-intro = Read the Bible and review the questions selected for you
reader-version-label = Bible version
reader-loading = Loading reading text
reader-error-eyebrow = Reading could not be opened
reader-error-http = Reading could not be loaded (HTTP { $status })
reader-error-generic = Reading could not be loaded. Please try again
reader-retry = Try again
reader-day-eyebrow = Daily reading
reader-day-heading = Day { $day }
reader-title-day = Day { $day } - Word Questions
reader-title-chapter = { $reference } - Word Questions
reader-questions-heading = Questions for review
reader-question-meta = { $kind } · Verses { $start_verse }–{ $end_verse }
reader-question-meta-single = { $kind } · Verse { $verse }
reader-navigation-label = Change reading day
reader-previous-day = Previous day
reader-next-day = Next day
reader-day-trigger = Choose reading day
reader-day-dialog-label = Reading day
reader-day-option = Day { $day }
reader-chapter-navigation-label = Change Bible chapter
reader-chapter-heading = { $book } { $chapter }
reader-previous-chapter = Previous chapter
reader-next-chapter = Next chapter
reader-controls = Reader controls
reader-settings = Settings
reader-close = Close
reader-back-to-reading = Back to reading
reader-language-label = Bible language
reader-language-english = English
reader-language-thai = ไทย
reader-language-german = Deutsch
reader-chapter-trigger = Choose { $book }, chapter { $chapter }
reader-chapter-dialog-label = Book and chapter
reader-choose-book = Book
reader-choose-chapter = Chapter
reader-toolbar-print = Print questions
reader-toolbar-undo = Undo
reader-toolbar-reset = Reset questions
reader-toolbar-randomize = Randomize questions
reader-toolbar-randomize-easy = Prefer easy questions
reader-toolbar-randomize-hard = Prefer hard questions
reader-toolbar-remove-one-per-section = Remove one question from each section
reader-toolbar-remove-easiest-question = Remove the easiest question from each section
print-preview-aria-label = Print preview
print-preview-heading = Review your worksheet
print-preview-page = Page { $page }
print-preview-print = Print
print-preview-close = Close
print-preview-error = The worksheet could not be prepared. Please try again
print-preview-progress-preparing = Preparing your print preview…
print-preview-progress-loading = Loading fonts…
print-preview-progress-serializing = Preparing page { $page } of { $total }…
print-preview-progress-initializing = Starting the PDF engine…
print-preview-progress-creating = Creating page { $page } of { $total }…
print-preview-progress-merging = Combining the PDF pages…
print-preview-progress-finalizing = Finishing the PDF…
print-preview-progress-rendering = Rendering preview page { $page } of { $total }…
print-preview-cancel = Cancel
reader-mode-label = Reading mode
reader-mode-study = Study mode
reader-mode-review = Review mode
reader-mode-print = Print mode
study-bible-questions-aria-label = Bible questions
study-no-bible-questions = There are no Bible questions left

review-aria-label = Reviewed answers

study-aria-label = Study question
study-show-question = Show question
study-hide-question = Hide question
study-answer-label = My answer
study-question-meta = { $kind } · { $verse_range }
reference-answer = Example answer
study-answer-submit = Answer
study-too-easy = Too easy
study-too-hard = Too hard
study-skip = Skip
print-aria-label = Questions for printing
print-no-questions = No questions remain to print
print-randomize-section = Randomize questions in { $reference }
print-randomize-section-title = Randomize questions in this section
print-randomize-section-easy = Prefer easy questions in { $reference }
print-randomize-section-easy-title = Prefer easy questions in this section
print-randomize-section-hard = Prefer hard questions in { $reference }
print-randomize-section-hard-title = Prefer hard questions in this section
print-remove-question = Remove question
print-page-number = { $page } / { $total }
difficulty-easy = Easy
difficulty-medium = Medium
difficulty-hard = Hard

question-kind-observation = Observation
question-kind-interpretation = Interpretation
question-kind-application = Application
question-kind-interpretation-application = Interpretation and application
question-kind-print-observation = O
question-kind-print-interpretation = I
question-kind-print-application = A
question-kind-print-interpretation-application = I/A

settings-use-physical-bible = Use a physical Bible
settings-one-year-plan = One Year Plan
settings-chronological-study = Use chronological Bible study
settings-chapter-selection = Choose any chapter
settings-bible-access-link = Bible access link
settings-bible-access-link-loading = Creating link…
settings-bible-access-link-error = Could not create access link.
settings-copy-bible-access-link = Copy Bible access link
settings-bible-access-link-copied = Bible access link copied.
settings-bible-access-link-copy-error = Could not copy Bible access link.
settings-backup-title = Encrypted backup
settings-backup-create = Set up backup
settings-backup-save = Save backup
settings-backup-restore = Restore backup
settings-backup-delete = Delete server backup
settings-backup-restore-confirm = Restoring replaces the settings and answers currently stored on this device. Continue?
settings-backup-delete-confirm = Delete the encrypted backup and its passkey record from the server?
settings-backup-save-success = Encrypted backup saved.
settings-backup-delete-success = Encrypted backup deleted.
settings-backup-error = Passkey backup failed: { $reason }
settings-delete-all-data = Delete all data
settings-delete-all-data-confirm = Permanently delete all study data stored on this device? Your encrypted server backup will remain and must be deleted separately.
settings-delete-all-data-busy = Deleting data…
settings-delete-all-data-error = Could not delete all data on this device. Try again.
settings-show-answers = Show answers
settings-hide-rating-buttons = Hide too easy / too hard buttons
settings-dark-theme = Dark theme
settings-show-old-versions = Show old Bible versions
settings-direct-print = Brother HL-1210W
settings-old-versions = Old versions
settings-install-pwa-mobile = Add to home screen
settings-install-pwa-desktop = Open as a standalone app
pwa-install-heading = Use Word Questions as an app
pwa-install-install = Install
pwa-install-not-now = Not now
settings-decrease-level = Decrease focus
settings-increase-level = Increase focus
settings-focus = Focus: { $description }
settings-decrease-text-size = Decrease text size
settings-increase-text-size = Increase text size
settings-font-size-letter = A
settings-difficulty-description =
    { $level ->
        [1] identify explicit facts
        [2] connect nearby facts
        [3] recognize sequence or pattern
        [4] infer direct meaning
        [5] identify meaningful relationships
        [6] derive grounded response
        [7] follow structure and progression
        [8] identify central idea
        [9] identify purpose or emphasis
        [10] derive specific application
        [11] recognize correction or challenge
        [12] infer motives or orientation
        [13] synthesize the whole
        [14] derive transferable principles
       *[15] lead sustained practice
    }

metadata-book = Book
metadata-chapter = Chapter
metadata-reference = Reference
metadata-version = Version: { $version }
`,xe=`app-title-assessment = Bibel Fragen
app-title-chooser = Sprache für die Bibelarbeit wählen
app-title-reader = Bibel Fragen
app-reader-heading = Bibellesen
app-reader-header-note = Lies und wiederhole in deinem eigenen Tempo
app-assessment-privacy = Neue Profile beginnen auf Lernstufe 6
app-reader-privacy = Fragen werden passend zu deiner aktuellen Lernstufe ausgewählt
app-chooser-heading = Sprache wählen
app-chooser-header-note = Wähle English, ไทย oder Deutsch, um zu beginnen
app-chooser-privacy = Wähle eine Sprache und eine erste Bibelübersetzung. Neue Profile beginnen auf Stufe 6.

local-data-title = Daten werden auf diesem Gerät gespeichert
local-data-body = Antworten, Notizen und Lernfortschritt werden in diesem Browser gespeichert. Wenn du ein Backup einrichtest, werden Einstellungen und Antworten vor der Übertragung mit deinem Passkey verschlüsselt.
local-data-warning = Das Löschen der Browserdaten entfernt lokale Daten dauerhaft. Ein verschlüsseltes Backup musst du separat in den Einstellungen löschen.
privacy-link = Datenschutz
privacy-title = Datenschutz
privacy-local-data = Lokale Daten
privacy-local-data-intro = Diese Anwendung speichert Lerndaten lokal. Wenn der Nutzer ein Backup einrichtet, werden Einstellungen und Antworten vor der Speicherung auf dem Server mit einem Passkey verschlüsselt.
privacy-includes = Dazu gehören zum Beispiel:
privacy-answers = Antworten
privacy-notes = Notizen
privacy-study-progress = Lernfortschritt
privacy-settings = Einstellungen
privacy-indexeddb = Diese Daten werden mit Browser-Speicher wie IndexedDB gespeichert.
privacy-not-uploaded = Lerndaten bleiben auf dem Gerät, sofern der Nutzer kein verschlüsseltes Backup einrichtet. Der Server speichert nur verschlüsselte Einstellungen und Antworten sowie den Passkey-Datensatz.
privacy-cannot-access = Der Betreiber kann das verschlüsselte Backup nicht lesen. Zum Wiederherstellen ist derselbe Passkey erforderlich.
privacy-delete-warning = Das Löschen der Browserdaten kann lokale Daten dauerhaft entfernen. Ein Server-Backup wird dadurch nicht gelöscht; dieses muss separat in den Einstellungen entfernt werden.
privacy-offline-storage = Offline-Speicher
privacy-offline-intro = Die Anwendung verwendet Browser-Speicher, einen Service Worker und Browser-Caching, damit sie funktioniert und offline genutzt werden kann.
privacy-offline-use = Diese Technologien werden nur für die Anwendungsfunktion und die lokale Datenspeicherung verwendet.
privacy-no-tracking-storage = Sie werden nicht für Werbung, Profilbildung oder websiteübergreifendes Tracking verwendet.
privacy-necessary-storage = Speicher, der für eine vom Nutzer gewünschte Funktion unbedingt erforderlich ist, benötigt nach §25(2)(2) TDDDG keine Einwilligung.
privacy-hosting = Hosting
privacy-hosting-intro = Diese Website wird durch Dienste von folgendem Anbieter bereitgestellt:
privacy-united-states = Vereinigte Staaten
privacy-technical-info = Beim Zugriff auf die Website verarbeitet Cloudflare technische Informationen, die für die Bereitstellung und den Schutz der Website erforderlich sind.
privacy-technical-info-list = Dazu können gehören:
privacy-ip-address = IP-Adresse
privacy-date-time = Datum und Uhrzeit der Anfragen
privacy-requested-resources = angeforderte Ressourcen
privacy-browser-device = Browser- und Geräteinformationen
privacy-routing-network = Routing- und Netzwerkinformationen
privacy-other-technical = sonstige technische Anfrageinformationen
privacy-cloudflare-processing = Cloudflare verarbeitet diese Informationen im Zusammenhang mit der Bereitstellung, Absicherung und dem Betrieb der Website.
privacy-no-content-transmission = Antworten und Einstellungen werden nicht unverschlüsselt gesendet. Wenn ein Nutzer ein Backup einrichtet, laufen verschlüsselte Daten und Passkey-Anfragen über Cloudflare zum Server.
privacy-international = Cloudflare kann Daten international verarbeiten, auch in den Vereinigten Staaten. Cloudflare bietet Schutzmaßnahmen für internationale Übermittlungen durch sein Data Processing Addendum, einschließlich des EU-U.S. Data Privacy Frameworks, sofern anwendbar, sowie der EU-Standardvertragsklauseln.
privacy-cloudflare-policy = Weitere Informationen zur Verarbeitung durch Cloudflare findest du in der
privacy-cloudflare-policy-link = Datenschutzrichtlinie von Cloudflare
privacy-no-analytics = Keine Analyse oder Werbung
privacy-no-analytics-intro = Diese Website verwendet keine:
privacy-advertising = Werbung
privacy-advertising-trackers = Werbe-Tracker
privacy-cross-site-tracking = websiteübergreifendes Tracking
privacy-third-party-analytics = Analyse durch Dritte
privacy-profiling = Profilbildung anhand von Anwendungsdaten
privacy-retention = Aufbewahrung
privacy-retention-study = Verschlüsselte Einstellungen und Antworten werden nur nach Einrichtung eines Backups auf dem Server gespeichert und bleiben dort, bis der Nutzer sie in den Einstellungen löscht. Der Betreiber kann das Backup nicht entschlüsseln.
privacy-retention-technical = Von Cloudflare verarbeitete technische Informationen werden entsprechend der Dienstkonfiguration von Cloudflare sowie den anwendbaren vertraglichen und gesetzlichen Anforderungen aufbewahrt.
privacy-retention-visitors = Der Betreiber führt keine separate Datenbank über Besucher oder Lernaktivitäten.
privacy-contact = Kontakt
privacy-contact-body = Für Kontakt zu dieser Website nutze bitte die für diese Domain vorgesehene Kontaktmöglichkeit des Registranten über RDAP/WHOIS.
privacy-data-protection-rights = Datenschutzrechte
privacy-rights-intro = Wenn personenbezogene Daten im Zusammenhang mit der Bereitstellung der Website verarbeitet werden, können nach dem anwendbaren Datenschutzrecht Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch bestehen.
privacy-rights-local-data = Der Betreiber kann lokal gespeicherte Lerndaten nicht abrufen und ein Backup nicht entschlüsseln. Nutzer können lokale Daten im Browser-Speicher und ein verschlüsseltes Server-Backup separat in den Einstellungen löschen.
privacy-rights-complaint = Soweit anwendbar, haben Nutzer außerdem das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.

language-chooser-label = Sprache

assessment-step = Frage { $step }
assessment-progress = { $step } von { $total }
assessment-select-answer = Wähle eine Antwort
assessment-complete-eyebrow = Einstufung abgeschlossen
assessment-complete-heading = Du kannst mit der Lektion beginnen
assessment-complete-body = Deine Antworten sind bereit
assessment-start = Lektion beginnen
assessment-retry = Erneut versuchen
assessment-save-error = Dein Ergebnis konnte nicht gespeichert werden
assessment-submit-error-heading = Die Lektion konnte nicht gestartet werden

profile-start-error-heading = Die Lektion konnte nicht gestartet werden
profile-start-error-body = Deine Startstufe konnte nicht gespeichert werden. Versuche es erneut.
profile-retry = Erneut versuchen
profile-lookup-error-heading = Die Lektion konnte nicht geöffnet werden
profile-lookup-error-body = Deine gespeicherte Stufe konnte nicht geprüft werden

reader-aria-label = Bibellesen in chronologischer Reihenfolge
reader-chapter-aria-label = Bibellesen nach Kapitelauswahl
reader-plan-title = Chronologischer Leseplan
reader-intro = Lies die Bibel und wiederhole die für dich ausgewählten Fragen
reader-version-label = Bibelübersetzung
reader-loading = Lesetext wird geladen
reader-error-eyebrow = Lesung konnte nicht geöffnet werden
reader-error-http = Lesung konnte nicht geladen werden (HTTP { $status })
reader-error-generic = Lesung konnte nicht geladen werden. Bitte versuche es erneut
reader-retry = Erneut versuchen
reader-day-eyebrow = Tageslesung
reader-day-heading = Tag { $day }
reader-title-day = Tag { $day } - Wortfragen
reader-title-chapter = { $reference } - Wortfragen
reader-questions-heading = Fragen zur Wiederholung
reader-question-meta = { $kind } · Verse { $start_verse }–{ $end_verse }
reader-question-meta-single = { $kind } · Vers { $verse }
reader-navigation-label = Lesetag ändern
reader-previous-day = Vorheriger Tag
reader-next-day = Nächster Tag
reader-day-trigger = Lesetag auswählen
reader-day-dialog-label = Lesetag
reader-day-option = Tag { $day }
reader-chapter-navigation-label = Bibelkapitel wechseln
reader-chapter-heading = { $book } { $chapter }
reader-previous-chapter = Vorheriges Kapitel
reader-next-chapter = Nächstes Kapitel
reader-controls = Lesesteuerung
reader-settings = Einstellungen
reader-close = Schließen
reader-back-to-reading = Zurück zum Lesen
reader-language-label = Bibelsprache
reader-language-english = English
reader-language-thai = ไทย
reader-language-german = Deutsch
reader-chapter-trigger = { $book }, Kapitel { $chapter } auswählen
reader-chapter-dialog-label = Buch und Kapitel
reader-choose-book = Buch
reader-choose-chapter = Kapitel
reader-toolbar-print = Fragen drucken
reader-toolbar-undo = Rückgängig
reader-toolbar-reset = Fragen zurücksetzen
reader-toolbar-randomize = Fragen zufällig auswählen
reader-toolbar-randomize-easy = Leichte Fragen bevorzugen
reader-toolbar-randomize-hard = Schwierige Fragen bevorzugen
reader-toolbar-remove-one-per-section = Eine Frage aus jedem Abschnitt entfernen
reader-toolbar-remove-easiest-question = Die einfachste Frage pro Abschnitt entfernen
print-preview-aria-label = Druckvorschau
print-preview-heading = Arbeitsblatt prüfen
print-preview-page = Seite { $page }
print-preview-print = Drucken
print-preview-close = Schließen
print-preview-error = Das Arbeitsblatt konnte nicht vorbereitet werden. Bitte versuche es erneut
print-preview-progress-preparing = Druckvorschau wird vorbereitet …
print-preview-progress-loading = Schriftarten werden geladen …
print-preview-progress-serializing = Seite { $page } von { $total } wird vorbereitet …
print-preview-progress-initializing = PDF-System wird gestartet …
print-preview-progress-creating = PDF-Seite { $page } von { $total } wird erstellt …
print-preview-progress-merging = PDF-Seiten werden zusammengefügt …
print-preview-progress-finalizing = PDF-Datei wird fertiggestellt …
print-preview-progress-rendering = Vorschauseite { $page } von { $total } wird gerendert …
print-preview-cancel = Abbrechen
reader-mode-label = Lesemodus
reader-mode-study = Studienmodus
reader-mode-review = Wiederholungsmodus
reader-mode-print = Druckmodus
study-bible-questions-aria-label = Bibelfragen
study-no-bible-questions = Keine Bibelfragen mehr übrig

review-aria-label = Gespeicherte Antworten

study-aria-label = Studienfrage
study-show-question = Frage anzeigen
study-hide-question = Frage ausblenden
study-answer-label = Meine Antwort
study-question-meta = { $kind } · { $verse_range }
reference-answer = Beispielantwort
study-answer-submit = Antworten
study-too-easy = Zu leicht
study-too-hard = Zu schwer
study-skip = Überspringen
print-aria-label = Fragen zum Drucken
print-no-questions = Keine Fragen zum Drucken übrig
print-randomize-section = Fragen in { $reference } zufällig auswählen
print-randomize-section-title = Fragen in diesem Abschnitt zufällig auswählen
print-randomize-section-easy = Leichte Fragen in { $reference } bevorzugen
print-randomize-section-easy-title = Leichte Fragen in diesem Abschnitt bevorzugen
print-randomize-section-hard = Schwere Fragen in { $reference } bevorzugen
print-randomize-section-hard-title = Schwere Fragen in diesem Abschnitt bevorzugen
print-remove-question = Frage entfernen
print-page-number = Seite { $page } / { $total }
difficulty-easy = Leicht
difficulty-medium = Mittel
difficulty-hard = Schwer

question-kind-observation = Entdecken
question-kind-interpretation = Verstehen
question-kind-application = Anwenden
question-kind-interpretation-application = Verstehen und Anwenden
question-kind-print-observation = E
question-kind-print-interpretation = V
question-kind-print-application = A
question-kind-print-interpretation-application = V/A

settings-use-physical-bible = Gedruckte Bibel verwenden
settings-one-year-plan = Einjahresplan
settings-chronological-study = Chronologischen Leseplan verwenden
settings-chapter-selection = Beliebiges Kapitel wählen
settings-bible-access-link = Bibelzugangslink
settings-bible-access-link-loading = Link wird erstellt …
settings-bible-access-link-error = Zugangslink konnte nicht erstellt werden.
settings-copy-bible-access-link = Bibelzugangslink kopieren
settings-bible-access-link-copied = Bibelzugangslink kopiert.
settings-bible-access-link-copy-error = Bibelzugangslink konnte nicht kopiert werden.
settings-backup-title = Verschlüsseltes Backup
settings-backup-create = Backup einrichten
settings-backup-save = Backup speichern
settings-backup-restore = Backup wiederherstellen
settings-backup-delete = Server-Backup löschen
settings-backup-restore-confirm = Beim Wiederherstellen werden die aktuell auf diesem Gerät gespeicherten Einstellungen und Antworten ersetzt. Fortfahren?
settings-backup-delete-confirm = Das verschlüsselte Backup und den Passkey-Datensatz auf dem Server löschen?
settings-backup-save-success = Verschlüsseltes Backup gespeichert.
settings-backup-delete-success = Verschlüsseltes Backup gelöscht.
settings-backup-error = Passkey-Backup fehlgeschlagen: { $reason }
settings-delete-all-data = Alle Daten löschen
settings-delete-all-data-confirm = Alle Lerndaten auf diesem Gerät dauerhaft löschen? Dein verschlüsseltes Server-Backup bleibt erhalten und muss separat gelöscht werden.
settings-delete-all-data-busy = Daten werden gelöscht …
settings-delete-all-data-error = Die Daten auf diesem Gerät konnten nicht vollständig gelöscht werden. Versuche es erneut.
settings-show-answers = Antworten anzeigen
settings-hide-rating-buttons = „Zu leicht“-/„Zu schwer“-Buttons ausblenden
settings-dark-theme = Dunkles Design
settings-show-old-versions = Alte Bibelversionen anzeigen
settings-direct-print = Brother HL-1210W
settings-old-versions = Alte Versionen
settings-install-pwa-mobile = Zum Startbildschirm hinzufügen
settings-install-pwa-desktop = Als eigenständige App öffnen
pwa-install-heading = Bibel Fragen als App verwenden
pwa-install-install = Installieren
pwa-install-not-now = Nicht jetzt
settings-decrease-level = Fokus verringern
settings-increase-level = Fokus erhöhen
settings-focus = Fokus: { $description }
settings-decrease-text-size = Textgröße verkleinern
settings-increase-text-size = Textgröße vergrößern
settings-font-size-letter = A
settings-difficulty-description =
    { $level ->
        [1] Explizite Fakten erkennen
        [2] Naheliegende Fakten verbinden
        [3] Abfolge oder Muster erkennen
        [4] Direkte Bedeutung erschließen
        [5] Bedeutsame Beziehungen erkennen
        [6] Eine begründete Antwort ableiten
        [7] Struktur und Entwicklung verfolgen
        [8] Zentrale Aussage erkennen
        [9] Zweck oder Betonung erkennen
        [10] Konkrete Anwendung ableiten
        [11] Korrektur oder Herausforderung erkennen
        [12] Motive oder Ausrichtung erschließen
        [13] Das Ganze zusammenführen
        [14] Übertragbare Grundsätze ableiten
       *[15] Nachhaltige Praxis anleiten
    }

metadata-book = Buch
metadata-chapter = Kapitel
metadata-reference = Referenz
metadata-version = Übersetzung: { $version }
`,Se=`app-title-assessment = การศึกษาพระคัมภีร์แบบอุปนัย
app-title-chooser = เลือกภาษาสำหรับศึกษาพระคัมภีร์
app-title-reader = การศึกษาพระคัมภีร์แบบอุปนัย
app-reader-heading = อ่านพระคัมภีร์
app-reader-header-note = อ่านและทบทวนตามจังหวะของคุณ
app-assessment-privacy = โปรไฟล์ใหม่เริ่มต้นที่ระดับการศึกษา 6
app-reader-privacy = คำถามคัดเลือกตามระดับการศึกษาปัจจุบันของคุณ
app-chooser-heading = เลือกภาษา
app-chooser-header-note = เลือก English, ไทย หรือ Deutsch เพื่อเริ่มต้น
app-chooser-privacy = เลือกภาษาและฉบับพระคัมภีร์เริ่มต้น โปรไฟล์ใหม่จะเริ่มที่ระดับ 6

local-data-title = ข้อมูลถูกจัดเก็บไว้ในอุปกรณ์นี้
local-data-body = คำตอบ บันทึก และความคืบหน้าในการศึกษาจะถูกเก็บไว้ในเบราว์เซอร์นี้ หากตั้งค่าการสำรองข้อมูล การตั้งค่าและคำตอบจะถูกเข้ารหัสด้วยพาสคีย์ก่อนส่งไปยังเซิร์ฟเวอร์
local-data-warning = การล้างข้อมูลเว็บไซต์นี้จะลบข้อมูลในเครื่องอย่างถาวร หากมีข้อมูลสำรองที่เข้ารหัสไว้ ให้ลบแยกต่างหากในการตั้ง⁠ค่า
privacy-link = ความเป็นส่วนตัว
privacy-title = ความเป็นส่วนตัว
privacy-local-data = ข้อมูลในเครื่อง
privacy-local-data-intro = แอปพลิเคชันนี้จัดเก็บข้อมูลการศึกษาไว้ในเครื่อง หากผู้ใช้เลือกตั้งค่าการสำรองข้อมูล การตั้งค่าและคำตอบจะถูกเข้ารหัสด้วยพาสคีย์ก่อนจัดเก็บบนเซิร์ฟเวอร์
privacy-includes = ตัวอย่างข้อมูลที่จัดเก็บ ได้แก่:
privacy-answers = คำตอบ
privacy-notes = บันทึก
privacy-study-progress = ความคืบหน้าในการศึกษา
privacy-settings = การตั้งค่า
privacy-indexeddb = ข้อมูลนี้จัดเก็บด้วยพื้นที่จัดเก็บของเบราว์เซอร์ เช่น IndexedDB
privacy-not-uploaded = ข้อมูลการศึกษาจะอยู่ในอุปกรณ์ เว้นแต่ผู้ใช้เลือกสำรองข้อมูลแบบเข้ารหัส เซิร์ฟเวอร์จัดเก็บเฉพาะการตั้งค่าและคำตอบที่เข้ารหัสกับข้อมูลรับรองพาสคีย์
privacy-cannot-access = ผู้ดำเนินการไม่สามารถอ่านข้อมูลสำรองที่เข้ารหัสได้ ต้องใช้พาสคีย์เดิมเพื่อกู้คืน
privacy-delete-warning = การล้างข้อมูลเว็บไซต์นี้อาจลบข้อมูลในเครื่องอย่างถาวร แต่จะไม่ลบข้อมูลสำรองบนเซิร์ฟเวอร์ ซึ่งต้องลบแยกต่างหากในการตั้งค่า
privacy-offline-storage = พื้นที่จัดเก็บสำหรับใช้งานออฟไลน์
privacy-offline-intro = แอปพลิเคชันใช้พื้นที่จัดเก็บของเบราว์เซอร์ เซอร์วิสเวิร์กเกอร์ และแคชของเบราว์เซอร์ เพื่อให้ใช้งานได้และทำงานออฟไลน์
privacy-offline-use = เทคโนโลยีเหล่านี้ใช้เพื่อการทำงานของแอปพลิเคชันและการจัดเก็บข้อมูลในเครื่องเท่านั้น
privacy-no-tracking-storage = เทคโนโลยีเหล่านี้ไม่ได้ใช้เพื่อโฆษณา การจัดทำโปรไฟล์ หรือการติดตามข้ามเว็บไซต์
privacy-necessary-storage = พื้นที่จัดเก็บที่จำเป็นอย่างเคร่งครัดต่อการทำงานที่ผู้ใช้ร้องขอ ไม่ต้องได้รับความยินยอมตาม §25(2)(2) TDDDG
privacy-hosting = การโฮสต์
privacy-hosting-intro = เว็บไซต์นี้ส่งมอบผ่านบริการของ:
privacy-united-states = สหรัฐอเมริกา
privacy-technical-info = เมื่อเข้าชมเว็บไซต์ Cloudflare จะประมวลผลข้อมูลทางเทคนิคที่จำเป็นต่อการส่งมอบและปกป้องเว็บไซต์
privacy-technical-info-list = ข้อมูลนี้อาจรวมถึง:
privacy-ip-address = ที่อยู่ IP
privacy-date-time = วันที่และเวลาของคำขอ
privacy-requested-resources = ทรัพยากรที่ร้องขอ
privacy-browser-device = ข้อมูลเบราว์เซอร์และอุปกรณ์
privacy-routing-network = ข้อมูลการกำหนดเส้นทางและเครือข่าย
privacy-other-technical = ข้อมูลทางเทคนิคอื่น ๆ ของคำขอ
privacy-cloudflare-processing = Cloudflare ประมวลผลข้อมูลนี้เพื่อส่งมอบ รักษาความปลอดภัย และดำเนินงานเว็บไซต์
privacy-no-content-transmission = ไม่มีการส่งคำตอบและการตั้งค่าแบบอ่านข้อความได้ หากผู้ใช้เลือกสำรองข้อมูล ข้อมูลที่เข้ารหัสและคำขอพาสคีย์จะผ่าน Cloudflare ไปยังเซิร์ฟเวอร์
privacy-international = Cloudflare อาจประมวลผลข้อมูลในต่างประเทศ รวมถึงในสหรัฐอเมริกา โดยมีมาตรการคุ้มครองการโอนข้อมูลระหว่างประเทศตามภาคผนวกการประมวลผลข้อมูล รวมถึงกรอบ EU-U.S. Data Privacy Framework เมื่อมีผลบังคับใช้ และข้อสัญญามาตรฐานของสหภาพยุโรป
privacy-cloudflare-policy = ดูข้อมูลเพิ่มเติมเกี่ยวกับการประมวลผลของ Cloudflare ได้ที่
privacy-cloudflare-policy-link = นโยบายความเป็นส่วนตัวของ Cloudflare
privacy-no-analytics = ไม่มีการวิเคราะห์หรือโฆษณา
privacy-no-analytics-intro = เว็บไซต์นี้ไม่มีการใช้:
privacy-advertising = โฆษณา
privacy-advertising-trackers = ตัวติดตามโฆษณา
privacy-cross-site-tracking = การติดตามข้ามเว็บไซต์
privacy-third-party-analytics = การวิเคราะห์โดยบุคคลที่สาม
privacy-profiling = การจัดทำโปรไฟล์จากข้อมูลของแอปพลิเคชัน
privacy-retention = การเก็บรักษาข้อมูล
privacy-retention-study = เซิร์ฟเวอร์จะเก็บการตั้งค่าและคำตอบที่เข้ารหัสไว้เฉพาะเมื่อผู้ใช้ตั้งค่าการสำรองข้อมูล จนกว่าผู้ใช้จะลบในการตั้งค่า ผู้ดำเนินการไม่สามารถถอดรหัสข้อมูลสำรองได้
privacy-retention-technical = ข้อมูลทางเทคนิคที่ Cloudflare ประมวลผลจะถูกเก็บรักษาตามการตั้งค่าบริการของ Cloudflare และข้อกำหนดตามสัญญาและกฎหมายที่เกี่ยวข้อง
privacy-retention-visitors = ผู้ดำเนินการไม่มีฐานข้อมูลแยกต่างหากสำหรับผู้เข้าชมหรือกิจกรรมการศึกษา
privacy-contact = ติดต่อ
privacy-contact-body = หากต้องการติดต่อเกี่ยวกับเว็บไซต์นี้ ให้ใช้ช่องทางติดต่อผู้จดทะเบียนที่จัดไว้สำหรับโดเมนนี้ผ่าน RDAP/WHOIS
privacy-data-protection-rights = สิทธิในการคุ้มครองข้อมูล
privacy-rights-intro = ในกรณีที่มีการประมวลผลข้อมูลส่วนบุคคลเพื่อการส่งมอบเว็บไซต์ กฎหมายคุ้มครองข้อมูลที่เกี่ยวข้องอาจให้สิทธิ รวมถึงการเข้าถึง แก้ไข ลบ จำกัดการประมวลผล และคัดค้าน
privacy-rights-local-data = ผู้ดำเนินการไม่สามารถเข้าถึงข้อมูลการศึกษาในเครื่องหรือถอดรหัสข้อมูลสำรองได้ ผู้ใช้สามารถลบข้อมูลในเบราว์เซอร์และลบข้อมูลสำรองที่เข้ารหัสบนเซิร์ฟเวอร์แยกต่างหากในการตั้งค่า
privacy-rights-complaint = หากมีผลบังคับใช้ ผู้ใช้ยังมีสิทธิยื่นเรื่องร้องเรียนต่อหน่วยงานกำกับดูแลด้านการคุ้มครองข้อมูลที่มีอำนาจ

language-chooser-label = ภาษา

assessment-step = คำถามที่ { $step }
assessment-progress = { $step } จาก { $total }
assessment-select-answer = เลือกหนึ่งคำตอบ
assessment-complete-eyebrow = ทำแบบประเมินเสร็จแล้ว
assessment-complete-heading = พร้อมเริ่มบทเรียนแล้ว
assessment-complete-body = คำตอบของคุณพร้อมแล้ว
assessment-start = เริ่มบทเรียน
assessment-retry = ลองอีกครั้ง
assessment-save-error = ไม่สามารถบันทึกผลการประเมินได้
assessment-submit-error-heading = เริ่มบทเรียนไม่ได้

profile-start-error-heading = เริ่มบทเรียนไม่ได้
profile-start-error-body = บันทึกระดับเริ่มต้นของคุณไม่ได้ โปรดลองอีกครั้งเพื่อดำเนินการต่อ
profile-retry = ลองอีกครั้ง
profile-lookup-error-heading = เปิดบทเรียนไม่ได้
profile-lookup-error-body = ไม่สามารถตรวจสอบระดับของคุณได้

reader-aria-label = บทอ่านพระคัมภีร์ตามลำดับเหตุการณ์
reader-chapter-aria-label = การอ่านพระคัมภีร์ตามบทที่เลือก
reader-plan-title = แผนการอ่านตามลำดับเหตุการณ์
reader-intro = อ่านพระคัมภีร์และทบทวนคำถามที่เลือกไว้สำหรับคุณ
reader-version-label = ฉบับพระคัมภีร์
reader-loading = กำลังโหลดเนื้อหาการอ่าน
reader-error-eyebrow = เปิดบทอ่านไม่สำเร็จ
reader-error-http = ไม่สามารถโหลดบทอ่านได้ (HTTP { $status })
reader-error-generic = ไม่สามารถโหลดบทอ่านได้ โปรดลองอีกครั้ง
reader-retry = ลองอีกครั้ง
reader-day-eyebrow = บทอ่านประจำวัน
reader-day-heading = วันที่ { $day }
reader-title-day = วันที่ { $day } - คำถามพระคำ
reader-title-chapter = { $reference } - คำถามพระคำ
reader-questions-heading = คำถามสำหรับทบทวน
reader-question-meta = { $kind } · ข้อ { $start_verse }–{ $end_verse }
reader-question-meta-single = { $kind } · ข้อ { $verse }
reader-navigation-label = เปลี่ยนวันอ่าน
reader-previous-day = วันก่อนหน้า
reader-next-day = วันถัดไป
reader-day-trigger = เลือกวันที่อ่าน
reader-day-dialog-label = วันที่อ่าน
reader-day-option = วันที่ { $day }
reader-chapter-navigation-label = เปลี่ยนบทพระคัมภีร์
reader-chapter-heading = { $book } { $chapter }
reader-previous-chapter = บทก่อนหน้า
reader-next-chapter = บทถัดไป
reader-controls = ส่วนควบคุมบทอ่าน
reader-settings = การตั้งค่า
reader-close = ปิด
reader-back-to-reading = กลับไปบทอ่าน
reader-language-label = ภาษาพระคัมภีร์
reader-language-english = English
reader-language-thai = ไทย
reader-language-german = Deutsch
reader-chapter-trigger = เลือก { $book } บทที่ { $chapter }
reader-chapter-dialog-label = หนังสือและบท
reader-choose-book = หนังสือ
reader-choose-chapter = บท
reader-toolbar-print = พิมพ์คำถาม
reader-toolbar-undo = เลิกทำ
reader-toolbar-reset = เริ่มคำถามใหม่ทั้งหมด
reader-toolbar-randomize = สุ่มคำถาม
reader-toolbar-randomize-easy = เน้นคำถามง่าย
reader-toolbar-randomize-hard = เน้นคำถามยาก
reader-toolbar-remove-one-per-section = ลบคำถามออกหนึ่งข้อจากทุกส่วน
reader-toolbar-remove-easiest-question = ลบคำถามที่ง่ายที่สุดออกจากแต่ละส่วน
print-preview-aria-label = ตัวอย่างก่อนพิมพ์
print-preview-heading = ตรวจสอบใบงานของคุณ
print-preview-page = หน้า { $page }
print-preview-print = พิมพ์
print-preview-close = ปิด
print-preview-error = ไม่สามารถเตรียมใบงานได้ โปรดลองอีกครั้ง
print-preview-progress-preparing = กำลังเตรียมตัวอย่างก่อนพิมพ์…
print-preview-progress-loading = กำลังเตรียมแบบอักษร…
print-preview-progress-serializing = กำลังเตรียมหน้า { $page } จาก { $total }…
print-preview-progress-initializing = กำลังเริ่มระบบสร้าง PDF…
print-preview-progress-creating = กำลังสร้างหน้า { $page } จาก { $total }…
print-preview-progress-merging = กำลังรวมหน้า PDF…
print-preview-progress-finalizing = กำลังจัดเตรียมไฟล์ PDF…
print-preview-progress-rendering = กำลังแสดงตัวอย่างหน้า { $page } จาก { $total }…
print-preview-cancel = ยกเลิก
reader-mode-label = โหมดการอ่าน
reader-mode-study = โหมดศึกษา
reader-mode-review = โหมดทบทวน
reader-mode-print = โหมดพิมพ์
study-bible-questions-aria-label = คำถามพระคัมภีร์
study-no-bible-questions = ไม่มีคำถามพระคัมภีร์เหลืออยู่

review-aria-label = คำตอบสำหรับทบทวน

study-aria-label = คำถามสำหรับศึกษา
study-show-question = แสดงคำถาม
study-hide-question = ซ่อนคำถาม
study-answer-label = คำตอบของฉัน
study-question-meta = { $kind } · { $verse_range }
reference-answer = ตัวอย่างคำตอบ
study-answer-submit = ตอบ
study-too-easy = ง่ายเกินไป
study-too-hard = ยากเกินไป
study-skip = ข้าม
print-aria-label = คำถามสำหรับพิมพ์
print-no-questions = ไม่มีคำถามที่เหลือสำหรับพิมพ์
print-randomize-section = สุ่มคำถามใน { $reference }
print-randomize-section-title = สุ่มคำถามในส่วนนี้
print-randomize-section-easy = เน้นคำถามง่ายใน { $reference }
print-randomize-section-easy-title = เน้นคำถามง่ายในส่วนนี้
print-randomize-section-hard = เน้นคำถามยากใน { $reference }
print-randomize-section-hard-title = เน้นคำถามยากในส่วนนี้
print-remove-question = ลบคำถาม
print-page-number = หน้า { $page } / { $total }
difficulty-easy = ง่าย
difficulty-medium = ปานกลาง
difficulty-hard = ยาก

question-kind-observation = สังเกต
question-kind-interpretation = ตีความ
question-kind-application = ประยุกต์ใช้
question-kind-interpretation-application = ตีความและประยุกต์ใช้
question-kind-print-observation = ส
question-kind-print-interpretation = ต
question-kind-print-application = ป
question-kind-print-interpretation-application = ต/ป

settings-use-physical-bible = ใช้พระคัมภีร์ฉบับเล่ม
settings-one-year-plan = แผนอ่านหนึ่งปี
settings-chronological-study = ใช้แผนอ่านตามลำดับเวลา
settings-chapter-selection = เลือกบทใดก็ได้
settings-bible-access-link = ลิงก์เข้าถึงพระคัมภีร์
settings-bible-access-link-loading = กำลังสร้างลิงก์…
settings-bible-access-link-error = สร้างลิงก์เข้าถึงไม่สำเร็จ
settings-copy-bible-access-link = คัดลอกลิงก์เข้าถึงพระคัมภีร์
settings-bible-access-link-copied = คัดลอกลิงก์เข้าถึงพระคัมภีร์แล้ว
settings-bible-access-link-copy-error = คัดลอกลิงก์เข้าถึงพระคัมภีร์ไม่สำเร็จ
settings-backup-title = ข้อมูลสำรองที่เข้ารหัส
settings-backup-create = ตั้งค่าการสำรองข้อมูล
settings-backup-save = บันทึกข้อมูลสำรอง
settings-backup-restore = กู้คืนข้อมูลสำรอง
settings-backup-delete = ลบข้อมูลสำรองบนเซิร์ฟเวอร์
settings-backup-restore-confirm = การกู้คืนจะแทนที่การตั้งค่าและคำตอบที่เก็บอยู่ในอุปกรณ์นี้ ดำเนินการต่อหรือไม่?
settings-backup-delete-confirm = ลบข้อมูลสำรองที่เข้ารหัสและข้อมูลพาสคีย์ออกจากเซิร์ฟเวอร์หรือไม่?
settings-backup-save-success = บันทึกข้อมูลสำรองที่เข้ารหัสแล้ว
settings-backup-delete-success = ลบข้อมูลสำรองที่เข้ารหัสแล้ว
settings-backup-error = การสำรองข้อมูล Passkey ล้มเหลว: { $reason }
settings-delete-all-data = ลบข้อมูลทั้งหมด
settings-delete-all-data-confirm = ลบข้อมูลการศึกษาทั้งหมดที่จัดเก็บไว้ในอุปกรณ์นี้อย่างถาวรหรือไม่ ข้อมูลสำรองที่เข้ารหัสบนเซิร์ฟเวอร์จะยังคงอยู่และต้องลบแยกต่างหาก
settings-delete-all-data-busy = กำลังลบข้อมูล…
settings-delete-all-data-error = ลบข้อมูลทั้งหมดในอุปกรณ์นี้ไม่สำเร็จ โปรดลองอีกครั้ง
settings-show-answers = แสดงคำตอบ
settings-hide-rating-buttons = ซ่อนปุ่ม “ง่ายเกินไป” / “ยากเกินไป”
settings-dark-theme = ธีมมืด
settings-show-old-versions = แสดงพระคัมภีร์ฉบับเก่า
settings-direct-print = Brother HL-1210W
settings-old-versions = ฉบับเก่า
settings-install-pwa-mobile = เพิ่มไปยังหน้าจอหลัก
settings-install-pwa-desktop = เปิดเป็นแอปแยกต่างหาก
pwa-install-heading = ใช้แอปศึกษาพระคัมภีร์
pwa-install-install = ติดตั้ง
pwa-install-not-now = ไว้ก่อน
settings-decrease-level = ลดโฟกัส
settings-increase-level = เพิ่มโฟกัส
settings-focus = โฟกัส: { $description }
settings-decrease-text-size = ลดขนาดตัวอักษร
settings-increase-text-size = เพิ่มขนาดตัวอักษร
settings-font-size-letter = ก
settings-difficulty-description =
    { $level ->
        [1] ระบุข้อเท็จจริงที่มีอยู่ในข้อความ
        [2] เชื่อมโยงข้อเท็จจริงที่อยู่ใกล้กัน
        [3] มองเห็นลำดับหรือรูปแบบ
        [4] อนุมานความหมายโดยตรง
        [5] ระบุความสัมพันธ์ที่มีความหมาย
        [6] สรุปคำตอบที่มีหลักฐานรองรับ
        [7] ติดตามโครงสร้างและการดำเนินเรื่อง
        [8] ระบุใจความสำคัญ
        [9] ระบุจุดประสงค์หรือการเน้นย้ำ
        [10] สรุปการนำไปใช้ที่เฉพาะเจาะจง
        [11] มองเห็นคำตักเตือนหรือความท้าทาย
        [12] อนุมานแรงจูงใจหรือแนวทาง
        [13] สังเคราะห์ภาพรวมทั้งหมด
        [14] สรุปหลักการที่นำไปใช้กับเรื่องอื่นได้
       *[15] นำไปสู่การฝึกปฏิบัติอย่างต่อเนื่อง
    }

metadata-book = หนังสือ
metadata-chapter = บท
metadata-reference = ข้ออ้างอิง
metadata-version = ฉบับ: { $version }
`,q=[`en-US`,`th`,`de`],J=[`en-US`,`th`,`de`],Y=r(q),Ce=r(J),we=i({default_locale:Y,catalogs:n(i({locale:Y,source:e().min(1)}).strict().readonly()).length(q.length).superRefine((e,n)=>{for(let r of q)e.some(e=>e.locale===r)||n.addIssue({code:t.custom,message:`Missing ${r} catalog`})}).readonly()}).strict().readonly(),X=class extends Error{name=`CatalogPayloadError`;constructor(e){super(`Localization response is invalid`,e)}},Te=class extends Error{locale;errors;name=`CatalogParseError`;constructor(e,t){super(`Localization catalog ${e} could not be parsed`),this.locale=e,this.errors=t}},Z=class extends Error{id;name=`CatalogMessageError`;constructor(e,t){super(`Localization message ${e} could not be formatted`,t),this.id=e}},Ee=class{locale;bundles;constructor(e,t){this.locale=e,this.bundles=t}format(e,t){let n=ye(this.bundles,e),r=n?.getMessage(e);if(n===null||r===void 0||r.value===null)throw new Z(e);let i=[],a=n.formatPattern(r.value,t,i);if(i.length>0)throw new Z(e,{cause:i[0]});return a}},De=class{defaultLocale;bundles;constructor(e,t){this.defaultLocale=e,this.bundles=t}chooserLocale(e){let t=ve(e,J,{strategy:`lookup`,defaultLocale:`en-US`});return Ce.parse(t[0])}catalog(e){let t=this.bundles.get(e),n=this.bundles.get(`en-US`);if(t===void 0||n===void 0)throw new X;return new Ee(e,e===`en-US`?[t]:[t,n])}};async function Oe(){return Q()}function Q(){let e=we.safeParse({default_locale:`th`,catalogs:[{locale:`en-US`,source:be},{locale:`th`,source:Se},{locale:`de`,source:xe}]});if(!e.success)throw new X({cause:e.error});let t=new Map;for(let n of e.data.catalogs){let e=new ie(n.locale,{useIsolating:!1}),r=e.addResource(new H(n.source));if(r.length>0)throw new Te(n.locale,r);t.set(n.locale,e)}return new De(e.data.default_locale,t)}function ke(e,t){let n=t.find(t=>t.version===e)?.question_bank_language;return je(n)}function Ae(e,t){let n=e.split(`-`,1)[0],r=t.find(e=>e.question_bank_language===n&&e.reader_default&&!e.requires_bible_access)??t.find(e=>e.question_bank_language===n&&!e.requires_bible_access)??t.find(e=>!e.requires_bible_access);if(r===void 0)throw Error(`The public Bible version catalog is empty`);return r.version}function je(e){return q.find(t=>t.split(`-`,1)[0]===e)??`en-US`}function $(e){return e}function Me(e){switch(e){case`O`:return`question-kind-observation`;case`I`:return`question-kind-interpretation`;case`A`:return`question-kind-application`;case`I/A`:return`question-kind-interpretation-application`;default:return $(e)}}function Ne(e){switch(e){case`O`:return`question-kind-print-observation`;case`I`:return`question-kind-print-interpretation`;case`A`:return`question-kind-print-application`;case`I/A`:return`question-kind-print-interpretation-application`;default:return $(e)}}function Pe(e){return e<.34?`difficulty-easy`:e<.67?`difficulty-medium`:`difficulty-hard`}export{ke as a,Oe as i,Pe as n,Me as o,Ae as r,Ne as s,Q as t};